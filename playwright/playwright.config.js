// @ts-check
const { devices } = require('@playwright/test');

const isRunningInSauceLabs = process.env.SAUCE_VM;
const usesCurrents = process.env.USE_CURRENTS === 'true'

const currentsConfig = {
    recordKey: process.env.CURRENTS_RECORD_KEY,
    projectId: process.env.CURRENTS_PROJECT_ID,
    ciBuildId: `demo_${Date.now()}`
};

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
    testDir: './tests',
    /* Maximum time one test can run for. */
    timeout: 30 * 1000,
    expect: {
        /**
         * Maximum time expect() should wait for the condition to be met.
         * For example in `await expect(locator).toHaveText();`
         */
        timeout: 5000
    },
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
        actionTimeout: 0,
        /* Base URL to use in actions like `await page.goto('/')`. */
        // baseURL: 'http://localhost:3000',

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry',
        screenshot: 'on',
    },

    reporter: (() => {
        if (usesCurrents) {
            return [
                ['@currents/playwright', currentsConfig],
                ['list']
            ];
        } else if (isRunningInSauceLabs) {
            return [
                ['html', { open: 'never', outputFolder: '__assets__/html-report/', attachmentsBaseURL: './' }],
                ['list']
            ];
        } else {
            return [
                ['@saucelabs/playwright-reporter'],
                ['list']
            ];
        }
    })(),

    projects: [
        {
            name: 'Playwright Reporter',
            use: {...devices['Desktop Chrome'],
                // trace: "on",
                video: "on",
                screenshot: "on",
            },
        },
        {
            name: 'saucectl',
            use: {...devices['Desktop Chrome'],
                // trace: "on",
                video: "on",
                screenshot: "on",
            },
        },
        {
            name: 'grid',
            timeout: 120000,
            use: {
                ...devices['Desktop Chrome'],
                // trace: "on",
                video: "on",
                screenshot: "on",
            },
        },
        {
            name: 'currents',
            use: {
                // trace: "on",
                video: "on",
                screenshot: "on",
            },
        }
    ]
};

module.exports = config;
