const { config } = require('./wdio.shared.conf');
const build = `WebdriverIO RDC Device Allocation build-${new Date().getTime()}`;

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

// ===================================================================================
// Capabilities
// You can find more about constructing the capabilities for real device testing here
// https://docs.saucelabs.com/dev/test-configuration-options/
// ===================================================================================
config.capabilities = [
  /**
   * Capabilities to run on a specific device based on the deviceID
   */
  {
    browserName: 'safari',
    platformName: 'iOS',
    'appium:automationName': 'XCUITest',
    // When you have private devices in EU and US
    'appium:deviceName':
      process.env.REGION === 'eu' ? 'iPhone_XS_ws' : 'iPhone_SE_2020_POC142',
    'sauce:options': {
      // We are using Appium 2.0, so we need to set the appiumVersion
      appiumVersion: '2.0.0',
      name: 'Run on deviceID iOS',
      // Extra caps
      cacheId: '17506a5f122', // See the capabilities url as mentioned above
      build,
    },
    // WDIO capability. This is to validate the cacheId works
    maxInstances: 1,
  },
  {
    browserName: 'chrome',
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    // When you have private devices in EU and US
    'appium:deviceName':
      process.env.REGION === 'eu'
        ? 'Samsung_Galaxy_S10_ws'
        : 'Google_Pixel_3_XL_ws_us',
    'sauce:options': {
      // We are using Appium 2.0, so we need to set the appiumVersion
      appiumVersion: '2.0.0',
      name: 'Run on deviceID Android',
      // Extra caps
      cacheId: '58vi9zm82i', // See the capabilities url as mentioned above
      build,
    },
    // WDIO capability. This is to validate the cacheId works
    maxInstances: 1,
  },
  /**
   * Capabilities to run on a specific device based on its name
   */
  {
    browserName: 'safari',
    platformName: 'iOS',
    'appium:automationName': 'XCUITest',
    'appium: deviceName': 'iPhone XS',
    'sauce:options': {
      // We are using Appium 2.0, so we need to set the appiumVersion
      appiumVersion: '2.0.0',
      name: 'Run on device description for iOS',
      // Extra caps
      cacheId: 'e7s54tyw5g', // See the capabilities url as mentioned above
      build,
    },
    // WDIO capability. This is to validate the cacheId works
    maxInstances: 1,
  },
  {
    browserName: 'chrome',
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium: deviceName': 'Samsung Galaxy S10',
    'sauce:options': {
      // We are using Appium 2.0, so we need to set the appiumVersion
      appiumVersion: '2.0.0',
      name: 'Run on device description for Android',
      // Extra caps
      cacheId: 'tl5lps3go1', // See the capabilities url as mentioned above
      build,
    },
    // WDIO capability. This is to validate the cacheId works
    maxInstances: 1,
  },
  /**
   * Capabilities to run on a 'random' device based on a regular expression
   * This will give a device based on:
   * - matching regular expression
   * - direct availability
   */
  {
    browserName: 'safari',
    platformName: 'iOS',
    'appium:automationName': 'XCUITest',
    'appium: deviceName': 'iPhone [678]?.*',
    'sauce:options': {
      // We are using Appium 2.0, so we need to set the appiumVersion
      appiumVersion: '2.0.0',
      name: 'Run on deviceName regex iOS - iPhone [678]?.*',
      // Extra caps
      cacheId: 'vvqb5g7lr3', // See the capabilities url as mentioned above
      // Specs are not mentioned here so it will run all tests
      // from ./test/specs/
      build,
    },
    // WDIO capability. This is to validate the cacheId works
    maxInstances: 1,
  },
  {
    browserName: 'chrome',
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium: deviceName': 'Samsung Galaxy S?.*',
    'sauce:options': {
      // We are using Appium 2.0, so we need to set the appiumVersion
      appiumVersion: '2.0.0',
      name: 'Run on deviceName regex Android - Samsung Galaxy S?.*',
      // Extra caps
      cacheId: '4hn1znudgm', // See the capabilities url as mentioned above
      // Specs are not mentioned here so it will run all tests
      // from ./test/specs/
      build,
    },
    // WDIO capability. This is to validate the cacheId works
    maxInstances: 1,
  },
  /**
   * Capabilities to run on a major version of the OS
   */
  {
    browserName: 'safari',
    platformName: 'iOS',
    'appium:automationName': 'XCUITest',
    'appium: platformVersion': '13',
    'sauce:options': {
      // We are using Appium 2.0, so we need to set the appiumVersion
      appiumVersion: '2.0.0',
      name: 'Run on major iOS version - 13',
      // Extra caps
      cacheId: 'bq9jvoctq7', // See the capabilities url as mentioned above
      build,
    },
    // WDIO capability. This is to validate the cacheId works
    maxInstances: 1,
  },
  {
    browserName: 'chrome',
    platformName: 'Android',
    'appium: platformVersion': '7',
    'appium:automationName': 'UiAutomator2',
    'sauce:options': {
      // We are using Appium 2.0, so we need to set the appiumVersion
      appiumVersion: '2.0.0',
      name: 'Run on major Android version - 7',
      // Extra caps
      cacheId: 'cvtjmvawq8', // See the capabilities url as mentioned above
      build,
    },
    // WDIO capability. This is to validate the cacheId works
    maxInstances: 1,
  },
  /**
   * Capabilities to run on a minor version of the OS
   */
  {
    browserName: 'safari',
    platformName: 'iOS',
    'appium: platformVersion': '14.7',
    'appium:automationName': 'XCUITest',
    'sauce:options': {
      // We are using Appium 2.0, so we need to set the appiumVersion
      appiumVersion: '2.0.0',
      name: 'Run on minor iOS version - 14.7',
      // Extra caps
      cacheId: 'em1pf4ab20', // See the capabilities url as mentioned above
      build,
    },
    // WDIO capability. This is to validate the cacheId works
    maxInstances: 1,
  },
  {
    browserName: 'chrome',
    platformName: 'Android',
    'appium: platformVersion': '7.1',
    'appium:automationName': 'UiAutomator2',
    'sauce:options': {
      // We are using Appium 2.0, so we need to set the appiumVersion
      appiumVersion: '2.0.0',
      name: 'Run on minor Android version - 7.1',
      // Extra caps
      cacheId: 'cegc4zom7n', // See the capabilities url as mentioned above
      build,
    },
    // WDIO capability. This is to validate the cacheId works
    maxInstances: 1,
  },
  /**
   * Capabilities to run on a patch version of the OS
   */
  {
    browserName: 'safari',
    platformName: 'iOS',
    'appium: platformVersion': '14.7.1',
    'appium:automationName': 'XCUITest',
    'sauce:options': {
      // We are using Appium 2.0, so we need to set the appiumVersion
      appiumVersion: '2.0.0',
      name: 'Run on patch iOS version - 14.7.1',
      // Extra caps
      cacheId: 'dn7zr1irmc', // See the capabilities url as mentioned above
      build,
    },
    // WDIO capability. This is to validate the cacheId works
    maxInstances: 1,
  },
  {
    browserName: 'chrome',
    platformName: 'Android',
    'appium: platformVersion': '6.0.1',
    'appium:automationName': 'UiAutomator2',
    'sauce:options': {
      // We are using Appium 2.0, so we need to set the appiumVersion
      appiumVersion: '2.0.0',
      name: 'Run on patch Android version - 6.0.1',
      // Extra caps
      cacheId: 'itfdqgn5mp', // See the capabilities url as mentioned above
      build,
    },
    // WDIO capability. This is to validate the cacheId works
    maxInstances: 1,
  },
  /**
   * Capabilities to run on a phone only (works for iOS and Android the same)
   */
  {
    browserName: 'safari',
    platformName: 'iOS',
    'sauce:options': {
      name: 'Run iOS phone only',
      phoneOnly: true,
      // Extra caps
      cacheId: 'q96a2zipwp', // See the capabilities url as mentioned above
      build,
    },
    // WDIO capability. This is to validate the cacheId works
    maxInstances: 1,
  },
  /**
   * Capabilities to run on a tablet only (works for iOS and Android the same)
   */
  {
    browserName: 'chrome',
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'sauce:options': {
      // We are using Appium 2.0, so we need to set the appiumVersion
      appiumVersion: '2.0.0',
      name: 'Run Android tablet only',
      tabletOnly: true,
      // Extra caps
      cacheId: 'nn7g8kq8m8', // See the capabilities url as mentioned above
      build,
    },
    // WDIO capability. This is to validate the cacheId works
    maxInstances: 1,
  },
  /**
   * Capabilities to run on private devices only
   */
  {
    browserName: 'safari',
    platformName: 'iOS',
    'appium:automationName': 'XCUITest',
    'sauce:options': {
      // We are using Appium 2.0, so we need to set the appiumVersion
      appiumVersion: '2.0.0',
      name: 'Run iOS private devices only',
      privateDevicesOnly: true,
      // Extra caps
      cacheId: 'zr6g2phl4w', // See the capabilities url as mentioned above
      build,
    },
    // WDIO capability. This is to validate the cacheId works
    maxInstances: 1,
  },
  {
    browserName: 'chrome',
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'sauce:options': {
      // We are using Appium 2.0, so we need to set the appiumVersion
      appiumVersion: '2.0.0',
      name: 'Run Android private devices only',
      privateDevicesOnly: true,
      // Extra caps
      cacheId: 'edvxh39cnd', // See the capabilities url as mentioned above
      build,
    },
    // WDIO capability. This is to validate the cacheId works
    maxInstances: 1,
  },
];

config.services = config.services.concat('sauce');

exports.config = config;
