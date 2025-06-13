const {config} = require('./wdio.shared.conf');

// =====================
// Sauce specific config
// =====================
// See https://webdriver.io/docs/sauce-service.html for more information
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;
config.region = process.env.REGION || 'us';

// ===================================================================================
// Capabilities
// You can find more about constructing the capabilities for real device testing here
// https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
//
// All test configuration options and W3C compliant options can be found here
// https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options
//
// To read more about W3C and Sauce Labs please check
// https://wiki.saucelabs.com/display/DOCS/W3C+Capabilities+Support
// ===================================================================================
config.capabilities = [
  {
    // For the W3C capabilities, please check
    // https://www.w3.org/TR/webdriver1/#capabilities
    browserName: 'chrome',
    platformName: 'Windows 10',
    browserVersion: 'latest',
    // All vendor specific, in this case Sauce specific capabilities, should be
    // put in vendor prefixed options, see
    // https://www.w3.org/TR/webdriver1/#dfn-extension-capability
    'sauce:options': {
      build: `Sauce Labs W3C Desktop build-${new Date().getTime()}`,
      screenResolution: '1440x900'
    },
  },
];

config.services = config.services.concat('sauce');

exports.config = config;
