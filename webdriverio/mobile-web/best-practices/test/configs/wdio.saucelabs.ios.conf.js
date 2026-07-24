const { config } = require('./wdio.shared.sauce.mobile.conf');
const build = `Best Practices: iOS Safari Appium '${
  config.appiumVersion
}' build-${new Date().getTime()}`;

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
//
// For configuring a Simulator please check
// https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
config.capabilities = [
  {
    // All vendor specific, in this case Appium capabilities, should be
    // put in vendor prefixed options, see
    // https://www.w3.org/TR/webdriver1/#dfn-extension-capability
    // All Appium capabilities, see
    // http://appium.io/docs/en/writing-running-appium/caps/
    // should be prefixed with `appium:{capability-name}`
    'appium:platformVersion': '18.6',
    'appium:deviceName': 'iPhone Simulator',
    'appium:automationName': 'XCUITest',
    // For the W3C capabilities, please check
    // https://www.w3.org/TR/webdriver1/#capabilities
    browserName: 'safari',
    platformName: 'iOS',
    // All vendor specific, in this case Sauce specific capabilities, should be
    // put in vendor prefixed options, see
    // https://www.w3.org/TR/webdriver1/#dfn-extension-capability
    'sauce:options': {
      build: build,
      appiumVersion: '2.11.3',
    },
  },
];

exports.config = config;
