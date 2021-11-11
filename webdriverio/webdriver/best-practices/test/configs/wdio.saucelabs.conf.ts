import {config} from './wdio.shared.conf';
import {SauceRegions} from '@wdio/types/build/Options';
import SauceLabs, {Job} from 'saucelabs';

const defaultBrowserSauceOptions = {
  build: `WebdriverIO Async Best Practices: Sauce Labs Desktop Web build-${new Date().getTime()}`,
  screenResolution: '1600x1200'
};

// =====================
// Sauce specific config
// =====================
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;
// If you run your tests on Sauce Labs you can specify the region you want to run your tests
// in via the `region` property. Available short handles for regions are `us` (default) and `eu`.
// These regions are used for the Sauce Labs VM cloud and the Sauce Labs Real Device Cloud.
// If you don't provide the region, it defaults to `us`.
config.region = (process.env.REGION || 'us') as SauceRegions;

// ============
// Capabilities
// ============
config.capabilities = [
  /**
   * Desktop browsers
   */
  {
    browserName: 'googlechrome',
    platformName: 'Windows 10',
    browserVersion: 'latest',
    'sauce:options': {
      ...defaultBrowserSauceOptions,
    },
  },
  {
    browserName: 'firefox',
    platformName: 'Windows 10',
    browserVersion: 'latest',
    'sauce:options': {
      ...defaultBrowserSauceOptions,
    },
  },
  {
    browserName: 'internet explorer',
    platformName: 'Windows 8.1',
    browserVersion: 'latest',
    'sauce:options': {
      ...defaultBrowserSauceOptions,
    },
  },
  {
    browserName: 'MicrosoftEdge',
    platformName: 'Windows 10',
    browserVersion: '18.17763',
    'sauce:options': {
      ...defaultBrowserSauceOptions,
    },
  },
  {
    browserName: 'MicrosoftEdge',
    platformName: 'Windows 10',
    browserVersion: 'latest',
    'sauce:options': {
      ...defaultBrowserSauceOptions,
    },
  },
  // Safari 11 is not W3C compliant,
  // see https://developer.apple.com/documentation/webkit/macos_webdriver_commands_for_safari_11_1_and_earlier
  {
    browserName: 'safari',
    platform: 'macOS 10.13',
    version: '11.1',
    ...defaultBrowserSauceOptions,
  },
  // Safari 12
  {
    browserName: 'safari',
    platformName: 'macOS 10.14',
    browserVersion: 'latest',
    'sauce:options': {
      ...defaultBrowserSauceOptions,
    },
  },
  // Safari 13
  {
    browserName: 'safari',
    platformName: 'macOS 10.15',
    browserVersion: 'latest',
    'sauce:options': {
      ...defaultBrowserSauceOptions,
    },
  },
  // Safari 14
  {
    browserName: 'safari',
    platformName: 'macOS 11',
    browserVersion: 'latest',
    'sauce:options': {
      ...defaultBrowserSauceOptions,
    },
  },
];

// ========
// Services
// ========
config.services = config.services.concat(['sauce', 'shared-store']);
// =====
// Hooks
// =====

// Retry a spec once if it fails, this could be a WebdriverIO or Driver error
config.specFileRetries = 1;

// If a test fails the first time and succeeds the second them, then our build would still be marked as failed.
// That's why we've implemented an after-hook that will
// - check after each spec file if the test failed (result === 1)
// - store it in a global scope
// - check if the test has been executed for the second time (the retry) and if so, it will check if the status is
//   passed (result === 0), then it will update the the previous failed status to passed and change the name
config.after = async (result, capabilities, specs) => {
  type RetriedSpecsType = {
    sessionId: string;
    specFileNamePath: string;
  }[];
  // Get the spec name path
  const specFileNamePath = specs[0];
  const RETRIED_SPECS_KEY = 'retriedSpecs';

  // If the retriedSpecs array was not already created, then create it
  if (!browser.sharedStore.get(RETRIED_SPECS_KEY)) {
    browser.sharedStore.set(RETRIED_SPECS_KEY, [])
  }

  // The test failed and should be retried
  // Store the retry spec on the global scope
  if ('specFileRetries' in browser.config && browser.config.specFileRetries > 0 && result === 1) {
    const retriedSpecs = browser.sharedStore.get(RETRIED_SPECS_KEY) as RetriedSpecsType;
    retriedSpecs.push({
      sessionId: browser.sessionId,
      specFileNamePath,
    })
    browser.sharedStore.set(RETRIED_SPECS_KEY, retriedSpecs)
  }

  // When the test succeeds
  if (result === 0) {
    // Find the test that failed before
    const matchingSession = (browser.sharedStore.get(RETRIED_SPECS_KEY) as RetriedSpecsType).find(
      retriedSpec => retriedSpec.specFileNamePath === specFileNamePath
    );
    // If there is a matching session
    if (matchingSession) {
      // Then update the test in Sauce Labs with the API
      const api = new SauceLabs({
        user: browser.config.user,
        key: browser.config.key,
        region: browser.config.region,
      });
      // We need to get the name of the job to be able to pre and post fix it
      const jobData = await api.getJob(process.env.SAUCE_USERNAME, matchingSession.sessionId);

      // Only update the job name and status if it hasn't been updated previously
      // The change that this will happen is very small, but this is a fail save
      if (jobData.name && !jobData.name.includes('Succeeded after retry')) {
        // Pre and post fix the job name
        const body = {
          name: `❌ - ${jobData.name} - Succeeded after retry`,
          passed: true,
        } as Job;
        // Now update the job
        await api.updateJob(
          process.env.SAUCE_USERNAME,
          matchingSession.sessionId,
          body
        );
      }
    }
  }
};

exports.config = config;
