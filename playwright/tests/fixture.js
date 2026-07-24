const { test: base, chromium, firefox, webkit, request } = require('@playwright/test');
const path = require('path');
const BROWSER_TYPES = { chromium, firefox, webkit };
// Maps Playwright's engine name (testInfo project's `defaultBrowserType`, set by
// spreading a `devices[...]` preset into `use`) to what the native endpoint expects.
const NATIVE_BROWSER_NAMES = { chromium: 'chrome', firefox: 'firefox', webkit: 'webkit' };
const { version: PLAYWRIGHT_INSTALLED_VERSION } = require('@playwright/test/package.json');
// The native session endpoint only accepts a major.minor version (e.g. "1.61"), not the full semver.
const PLAYWRIGHT_VERSION = PLAYWRIGHT_INSTALLED_VERSION.split('.').slice(0, 2).join('.');

const SAUCE_USERNAME = process.env.SAUCE_USERNAME;
const SAUCE_ACCESS_KEY = process.env.SAUCE_ACCESS_KEY;
const SAUCE_REGION = process.env.SAUCE_REGION || 'us-west-1';
const SAUCE_URL = `https://ondemand.${SAUCE_REGION}.saucelabs.com/wd/hub/`;
const SAUCE_NATIVE_URL = `https://ondemand.${SAUCE_REGION}.saucelabs.com`;
const SAUCE_API_URL = `https://api.${SAUCE_REGION}.saucelabs.com`;
const SAUCE_BUILD_NAME = process.env.SAUCE_BUILD_NAME || 'Local Playwright Grid' + Date.now();

// Mirrors Playwright's own fullyParallel behavior for Sauce Labs sessions:
// - fullyParallel: false -> Playwright keeps a spec file's tests on one worker,
//   in order, so we group them into a single Sauce Labs session per spec file.
// - fullyParallel: true -> Playwright scatters tests across workers, so
//   grouping isn't safe; every test gets its own session instead.
const test = base.extend({
    sauceSession: [async ({}, use) => {
        const holder = { instance: null };
        await use(holder);
        if (holder.instance) {
            await closeSession(holder.instance);
        }
    }, { scope: 'worker' }],

    page: async ({ sauceSession, defaultBrowserType, channel, page }, use, testInfo) => {
        const projectName = testInfo.project.name;
        if (projectName !== 'grid' && projectName !== 'native') {
            await use(page);
            return;
        }

        const fullyParallel = testInfo.project.fullyParallel ?? testInfo.config.fullyParallel;
        const groupBySpec = !fullyParallel;

        if (groupBySpec && sauceSession.instance && sauceSession.instance.file !== testInfo.file) {
            await closeSession(sauceSession.instance);
            sauceSession.instance = null;
        }

        if (!sauceSession.instance) {
            const sessionName = groupBySpec ? path.basename(testInfo.file) : testInfo.title;
            sauceSession.instance = projectName === 'grid'
                ? await openRemoteSession(sessionName, defaultBrowserType, channel)
                : await openNativeSession(sessionName, defaultBrowserType);
            sauceSession.instance.file = testInfo.file;
            sauceSession.instance.statuses = [];
        }

        const { browser, type } = sauceSession.instance;
        const contextOptions = type === 'grid' ? { deviceScaleFactor: undefined, viewport: null } : {};
        const context = await browser.newContext(contextOptions);
        const remotePage = await context.newPage();

        await use(remotePage);

        sauceSession.instance.statuses.push(testInfo.status);
        await context.close();

        if (!groupBySpec) {
            await closeSession(sauceSession.instance);
            sauceSession.instance = null;
        }
    },
}, { timeout: 60000 });

async function getRemoteSessionPayload(testName, browserName) {
    return {
        capabilities: {
            alwaysMatch: {
                platformName: 'macOS 13',
                browserName,
                'sauce:options': {
                    username: SAUCE_USERNAME,
                    accessKey: SAUCE_ACCESS_KEY,
                    devTools: true,
                    _tptCommanderVersion: 'stable',
                    name: testName,
                    build: SAUCE_BUILD_NAME,
                }
            }
        }
    };
}

async function createRemoteSession(requestContext, testName, browserName) {
    const payload = await getRemoteSessionPayload(testName, browserName);
    const response = await requestContext.post(`${SAUCE_URL}session`, {
        data: payload
    });
    const sessionData = await response.json();
    return {
        sessionId: sessionData.value.sessionId,
        cdpEndpoint: sessionData.value.capabilities['se:cdp']
    };
}

// The grid endpoint only ever exposes a Chrome DevTools Protocol connection
// (`se:cdp`), so it can only drive Chromium-family browsers - Chrome or Edge,
// picked via the `channel` option, never Firefox or Safari/WebKit.
function getGridBrowserName(defaultBrowserType, channel) {
    if (defaultBrowserType !== 'chromium') {
        throw new Error(`The grid endpoint only supports Chromium-family browsers (Chrome, Edge). 
        Got defaultBrowserType "${defaultBrowserType}" - use the native endpoint for Firefox or Safari.`);
    }
    return channel === 'msedge' ? 'MicrosoftEdge' : 'Chrome';
}

async function openRemoteSession(testName, defaultBrowserType, channel) {
    const browserName = getGridBrowserName(defaultBrowserType, channel);

    const requestContext = await request.newContext({ baseURL: SAUCE_URL });
    const { sessionId, cdpEndpoint } = await createRemoteSession(requestContext, testName, browserName);
    await requestContext.dispose();

    // Sauce's grid endpoint always exposes a Chrome DevTools Protocol endpoint,
    // regardless of the underlying (Chromium-family) browser requested.
    const browser = await chromium.connectOverCDP(cdpEndpoint);
    return { type: 'grid', sessionId, browser };
}

function getNativeSessionPayload(testName, browserName) {
    return {
        browserName,
        platformName: 'Linux',
        playwrightVersion: PLAYWRIGHT_VERSION,
        'sauce:options': {
            name: testName,
            build: SAUCE_BUILD_NAME,
        },
    };
}

async function createNativeSession(requestContext, testName, browserName) {
    const payload = getNativeSessionPayload(testName, browserName);

    // The endpoint 303-redirects while the VM spins up; follow until we get a 200.
    let response = await requestContext.post('/playwright/session', {
        data: payload,
        maxRedirects: 0,
    });
    while (response.status() === 303) {
        response = await requestContext.get(response.headers()['location'], { maxRedirects: 0 });
    }

    const body = await response.json();
    const value = body.value || body;
    return { sessionId: value.sessionId, wsEndpoint: value.wsEndpoint };
}

async function openNativeSession(testName, defaultBrowserType) {
    const browserType = BROWSER_TYPES[defaultBrowserType];
    const browserName = NATIVE_BROWSER_NAMES[defaultBrowserType];
    if (!browserType || !browserName) {
        throw new Error(`Unsupported defaultBrowserType "${defaultBrowserType}" for native sessions. Use one of: ${Object.keys(BROWSER_TYPES).join(', ')}.`);
    }

    const requestContext = await request.newContext({
        baseURL: SAUCE_NATIVE_URL,
        httpCredentials: { username: SAUCE_USERNAME, password: SAUCE_ACCESS_KEY },
    });

    const { sessionId, wsEndpoint } = await createNativeSession(requestContext, testName, browserName);
    await requestContext.dispose();

    const browser = await browserType.connect(`${wsEndpoint}?browser=${defaultBrowserType}`);
    return { type: 'native', sessionId, browser };
}

async function closeSession(session) {
    const { type, sessionId, browser, statuses } = session;
    const passed = statuses.length > 0 && statuses.every((status) => status === 'passed');

    await browser.close();

    await updateJobStatus(sessionId, passed);

    if (type === 'grid') {
        const requestContext = await request.newContext();
        await requestContext.delete(`${SAUCE_URL}session/${sessionId}`);
        await requestContext.dispose();
    }

    console.log(`SauceOnDemandSessionID=${sessionId}`);
    console.log(`Job Link: https://app.saucelabs.com/tests/${sessionId}`);
}

async function updateJobStatus(sessionId, passed) {
    const url = `${SAUCE_API_URL}/rest/v1/${SAUCE_USERNAME}/jobs/${sessionId}`;
    const auth = Buffer.from(`${SAUCE_USERNAME}:${SAUCE_ACCESS_KEY}`).toString('base64');

    const requestContext = await request.newContext();
    await requestContext.put(url, {
        headers: {
            'Authorization': `Basic ${auth}`,
            'Content-Type': 'application/json'
        },
        data: {
            passed
        }
    });
    await requestContext.dispose();
}

module.exports = { test };
