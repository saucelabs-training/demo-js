const { test: base, chromium, request } = require('@playwright/test');

const SAUCE_USERNAME = process.env.SAUCE_USERNAME;
const SAUCE_ACCESS_KEY = process.env.SAUCE_ACCESS_KEY;
const SAUCE_URL = 'https://ondemand.us-west-1.saucelabs.com/wd/hub/';
const SAUCE_BUILD_NAME = process.env.SAUCE_BUILD_NAME || 'Local Playwright Grid' + Date.now();
const START_TIME = Date.now();

const test = base.extend({
    page: async ({page}, use, testInfo) => {
        if (testInfo.project.name === 'grid') {
            const remotePage = await remoteSetup(testInfo.title);
            await use(remotePage);
            await remoteTeardown(remotePage, testInfo.status);
        } else {
            await use(page);
        }
    },
}, { timeout: 60000 });

async function getSessionPayload(testName) {
    return {
        capabilities: {
            alwaysMatch: {
                platformName: 'macOS 13',
                browserName: 'Chrome',
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

async function createSession(requestContext, testName) {
    const payload = await getSessionPayload(testName);
    const response = await requestContext.post(`${SAUCE_URL}session`, {
        data: payload
    });
    const sessionData = await response.json();
    return {
        sessionId: sessionData.value.sessionId,
        cdpEndpoint: sessionData.value.capabilities['se:cdp']
    };
}

async function remoteSetup(testName) {
    const requestContext = await request.newContext({ baseURL: SAUCE_URL });
    const { sessionId, cdpEndpoint } = await createSession(requestContext, testName);
    process.env.SAUCE_SESSION_ID = sessionId;

    const browserInstance = await chromium.connectOverCDP(cdpEndpoint);
    const context = await browserInstance.newContext();

    return await context.newPage();
}

async function remoteTeardown(page, status) {
    const context = page.context();
    const browser = context.browser();
    const sessionId = process.env.SAUCE_SESSION_ID;

    await page.close();
    await browser.close();

    await updateJobStatus(sessionId, status);

    const requestContext = await request.newContext();
    await requestContext.delete(`${SAUCE_URL}session/${sessionId}`);

    console.log(`SauceOnDemandSessionID=${sessionId}`);
    console.log(`Job Link: https://app.saucelabs.com/tests/${sessionId}`);
}

async function updateJobStatus(sessionId, status) {
    const url = `https://api.us-west-1.saucelabs.com/rest/v1/${SAUCE_USERNAME}/jobs/${sessionId}`;
    const auth = Buffer.from(`${SAUCE_USERNAME}:${SAUCE_ACCESS_KEY}`).toString('base64');

    const requestContext = await request.newContext();
    await requestContext.put(url, {
        headers: {
            'Authorization': `Basic ${auth}`,
            'Content-Type': 'application/json'
        },
        data: {
            passed: status === 'passed'
        }
    });
    await requestContext.dispose();
}

module.exports = { test };
