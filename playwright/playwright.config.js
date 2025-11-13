// @ts-check
const { devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

const isRunningInSauceLabs = process.env.SAUCE_VM;
const selectedProject = process.env.PLAYWRIGHT_PROJECT;

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
  /* Allow CI to run in parallel */
  workers: process.env.CI ? 6 : undefined,
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
    video: 'on'
  },

  /* Use Playwright reporter when not executing with saucectl or only Playwright */
  reporter:
    isRunningInSauceLabs
      ? [['html', { open: 'never', outputFolder: '__assets__/html-report/', attachmentsBaseURL: './'}]]
      : selectedProject === 'local'
        ? [['html', { open: 'always' }]]
        : [['@saucelabs/playwright-reporter', { mergeVideos: true, outputFile: 'sauce-report.json' }], ['list']],

  projects: [
    {
      name: 'Playwright Reporter',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'saucectl',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'grid',
      timeout: 120000,
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'local',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ]
};

module.exports = config;
