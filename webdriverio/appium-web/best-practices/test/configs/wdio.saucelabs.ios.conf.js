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
config.capabilities = ['13.4', '14.5', '15.4', '16.1'].map((iOSVersion) => ({
  // All vendor specific, in this case Appium capabilities, should be
  // put in vendor prefixed options, see
  // https://www.w3.org/TR/webdriver1/#dfn-extension-capability
  // All Appium capabilities, see
  // http://appium.io/docs/en/writing-running-appium/caps/
  // should be prefixed with `appium:{capability-name}`
  'appium:platformVersion': iOSVersion,
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
    ...(Math.floor(+iOSVersion) >= 16 && { appiumVersion: '2.0.0' }),
  },
}));

exports.config = config;
