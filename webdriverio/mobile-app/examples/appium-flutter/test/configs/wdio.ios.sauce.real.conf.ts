import config from './wdio.shared.sauce.conf';

// ============
// Capabilities
// ============
//
// For the W3C capabilities, please check
// https://www.w3.org/TR/webdriver1/#capabilities
// All vendor specific, in this case Appium capabilities, should be
// put in vendor prefixed options, see
// https://www.w3.org/TR/webdriver1/#dfn-extension-capability
// All Appium capabilities, see
// http://appium.io/docs/en/writing-running-appium/caps/,
// should be prefixed with `appium:{capability-name}`
// Please check the Sauce Labs Test Configuration Options for more information
// https://docs.saucelabs.com/dev/test-configuration-options/#mobile-appium-capabilities
//
config.capabilities = [
  {
    platformName: 'iOS',
    'appium:deviceName': 'iPhone 14.*',
    'appium:deviceOrientation': 'PORTRAIT',
    // This is needed to tell Appium to use the Flutter driver
    'appium:automationName': 'Flutter',
    'appium:retryBackoffTime': 500,
    'appium:app': 'storage:filename=flutter-counter-debug.ipa',
    'appium:newCommandTimeout': 240,
    'sauce:options': {
      // @ts-ignore
      // Flutter 3 apps can only be automated with Appium 2
      appiumVersion: '2.0.0',
      name: 'Appium 2 - Flutter - iOS',
    },
    'appium:autoAcceptAlerts': true,
  },
];

exports.config = config;
