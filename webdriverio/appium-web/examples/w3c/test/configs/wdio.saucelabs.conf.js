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
  /**
   * Android
   */
  {
    // All vendor specific, in this case Appium capabilities, should be
    // put in vendor prefixed options, see
    // https://www.w3.org/TR/webdriver1/#dfn-extension-capability
    // All Appium capabilities, see
    // http://appium.io/docs/en/writing-running-appium/caps/
    // should be prefixed with `appium:{capability-name}`
    'appium:deviceName': 'Google Pixel 3 GoogleAPI Emulator',
    'appium:platformVersion': '10.0',
    // For the W3C capabilities, please check
    // https://www.w3.org/TR/webdriver1/#capabilities
    browserName: 'chrome',
    platformName: 'Android',
    // All vendor specific, in this case Sauce specific capabilities, should be
    // put in vendor prefixed options, see
    // https://www.w3.org/TR/webdriver1/#dfn-extension-capability
    'sauce:options': {
      build: `Sauce Labs W3C Mobile Web build-${new Date().getTime()}`,
      appiumVersion: '1.18.1'
    },
  },
  /**
   * iOS
   */
  {
    // All vendor specific, in this case Appium capabilities, should be
    // put in vendor prefixed options, see
    // https://www.w3.org/TR/webdriver1/#dfn-extension-capability
    // All Appium capabilities, see
    // http://appium.io/docs/en/writing-running-appium/caps/
    // should be prefixed with `appium:{capability-name}`
    'appium:deviceName': 'iPhone 11 Simulator',
    'appium:platformVersion': '14.0',
    // For the W3C capabilities, please check
    // https://www.w3.org/TR/webdriver1/#capabilities
    browserName: 'safari',
    platformName: 'iOS',
    // All vendor specific, in this case Sauce specific capabilities, should be
    // put in vendor prefixed options, see
    // https://www.w3.org/TR/webdriver1/#dfn-extension-capability
    'sauce:options': {
      build: `Sauce Labs W3C Mobile Web build-${new Date().getTime()}`,
      appiumVersion: '1.19.1'
    },
  },
];

config.services = config.services.concat('sauce');

exports.config = config;
