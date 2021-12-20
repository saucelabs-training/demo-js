const SauceLabs = require("saucelabs").default;
const {config} = require('./wdio.shared.conf');
const {
  getSessionIdsFromFile,
  getPerformanceMetrics,
  writePerformanceMetricsToFile,
  writeToSessionIdsFile
} = require("../utils/utils");
const defaultBrowserSauceOptions = {
  build: `WebdriverIO Front-End Performance-${new Date().getTime()}`,
  screenResolution: '1600x1200',
  extendedDebugging: true,
  capturePerformance: true,
};

// =========================
// Sauce RDC specific config
// =========================
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;
// If you run your tests on Sauce Labs you can specify the region you want to run your tests
// in via the `region` property. Available short handles for regions are `us` (default) and `eu`.
// These regions are used for the Sauce Labs VM cloud and the Sauce Labs Real Device Cloud.
// If you don't provide the region, it defaults to `us`.
config.region = process.env.REGION || 'us';

// ============
// Capabilities
// ============
config.capabilities = [
  /**
   * Desktop browsers
   */
  {
    browserName: 'chrome',
    platformName: 'Windows 10',
    browserVersion: 'latest',
    'sauce:options': {
      ...defaultBrowserSauceOptions,
    },
  },
  {
    browserName: 'chrome',
    platformName: 'macOS 10.15',
    browserVersion: 'latest',
    'sauce:options': {
      ...defaultBrowserSauceOptions,
    },
  },
];

config.services = config.services.concat(['sauce']);

// =====
// Hooks
// =====

/**
 * How to download the Performance Metrics through an API:
 *
 * The performance data can be retrieved with an API based on the sessionID. This can only be done when the session
 * is finished on Sauce Labs and the Metrics is stored in the Databases of Sauce Labs.
 * The flow we need to take:
 *  1.  The sessionId is not available in the `onComplete` hook, see https://webdriver.io/docs/configurationfile/
 *      We need to store the sessionIds to a file and read the file when we're in the `onComplete`-hook.
 *      We need to create an empty file in the `onPrepare`-hook (will overwrite itself after each new WebdriverIO run
 *      which is started)
 *  2.  Store the sessionId(s) in the file from step 1, this will be done in the `beforeSuite`, but can be every
 *      hook in WebdriverIO that has access to the `sessionId`
 *  3.  When WebdriverIO is done with executing all tests and all sessions in Sauce Labs are closed we need to retrieve
 *      the data through the API. We need to be aware that it might take some time to store all data in the DBs so
 *      a retry needs to happen
 */
// 1. Create an empty file
config.onPrepare = () => {
  // Create the file, if exists, create an empty file for all sessions
  writeToSessionIdsFile();
};
// 2. Store all sessionIds in the sessionId-file
config.beforeSuite = async () => {
  // Add the sessionId to sessionIds file
  writeToSessionIdsFile(browser.sessionId);
};
// 3. Retrieve the performance metrics based on each `sessionId`
config.onComplete = async () => {
  /**
   * The Sauce Labs lib (https://github.com/saucelabs/node-saucelabs)
   * will automatically be installed when you use the `@wdio/sauce-service`
   * We use this lib to get the Performance data from Sauce Labs
   */
    // Instantiate the API
  const api = new SauceLabs({
      user: config.user,
      key: config.key,
      region: config.region,
    });

  // Now get the performance data for each sessionId and store it into a file
  for (let sessionId of getSessionIdsFromFile()) {
    if(sessionId) {
      const performanceData = await getPerformanceMetrics(api, sessionId);
      writePerformanceMetricsToFile(performanceData, sessionId);
    }
  }
};

exports.config = config;
