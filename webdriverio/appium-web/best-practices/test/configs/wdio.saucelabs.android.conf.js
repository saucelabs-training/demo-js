const { config } = require('./wdio.shared.sauce.mobile.conf');
const build = `Best Practices: Android Chrome Appium '${
  config.appiumVersion
}' build-${new Date().getTime()}`;

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
//
// For configuring an Emulator please check
// https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
config.capabilities = ['8.1', '9.0', '10.0', '11.0', '12.0'].map(
  (androidVersion) => ({
    // All vendor specific, in this case Appium capabilities, should be
    // put in vendor prefixed options, see
    // https://www.w3.org/TR/webdriver1/#dfn-extension-capability
    // All Appium capabilities, see
    // http://appium.io/docs/en/writing-running-appium/caps/
    // should be prefixed with `appium:{capability-name}`
    'appium:platformVersion': androidVersion,
    'appium:deviceName': 'Android GoogleAPI Emulator',
    'appium:automationName': 'UiAutomator2',
    // For the W3C capabilities, please check
    // https://www.w3.org/TR/webdriver1/#capabilities
    browserName: 'Chrome',
    platformName: 'Android',
    // All vendor specific, in this case Sauce specific capabilities, should be
    // put in vendor prefixed options, see
    // https://www.w3.org/TR/webdriver1/#dfn-extension-capability
    'sauce:options': {
      build: build,
      // Older versions of Appium give issues with sending keys, see
      // https://github.com/appium/appium/issues/12059
      'appium:appiumVersion': '1.20.2',
    },
  })
);

exports.config = config;
