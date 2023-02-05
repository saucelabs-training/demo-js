const { config } = require('./wdio.shared.conf');
const build = `WebdriverIO RDC offline test build-${new Date().getTime()}`;

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
// https://wiki.saucelabs.com/display/DOCS/Appium+Capabilities+for+Real+Device+Testing
// ===================================================================================
config.capabilities = [
  /**
   * Capabilities to run on a specific device based on the deviceID
   */
  {
    name: 'PWA offline test iOS',
    browserName: 'safari',
    // When you have private devices in EU and US
    deviceName:
      process.env.REGION === 'eu' ? 'iPhone_XS_ws' : 'iPhone_SE_2020_POC142',
    platformName: 'iOS',
    // Extra caps
    cacheId: '17506a5f122', // See the capabilities url as mentioned above
    build,
  },
  {
    name: 'PWA offline test Android',
    browserName: 'chrome',
    // When you have private devices in EU and US
    deviceName:
      process.env.REGION === 'eu'
        ? 'Samsung_Galaxy_S10_ws'
        : 'Google_Pixel_3_XL_ws_us',
    platformName: 'Android',
    // Extra caps
    cacheId: '58vi9zm82i', // See the capabilities url as mentioned above
    build,
  },
];

config.services = config.services.concat('sauce');

exports.config = config;
