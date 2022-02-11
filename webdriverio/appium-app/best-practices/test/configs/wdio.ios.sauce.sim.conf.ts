import config from './wdio.shared.sauce.conf';

const buildName = `iOS Simulator Native App Best Practices build-${new Date().getTime()}`;

// ===================================================================================
// Capabilities
// You can find more about constructing the capabilities for iOS simulator testing here
// https://saucelabs.com/platform/platform-configurator#/
//
// All test configuration options and W3C compliant options can be found here
// https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options
//
// To read more about W3C and Sauce Labs please check
// https://docs.saucelabs.com/mobile-apps/automated-testing/appium/real-devices/#using-the-w3c-webdriver-specification
// ===================================================================================
// This piece of code will run the tests on all iOS versions as mentioned
// in this array.
config.capabilities = ['12.4', '13.4', '14.5', '15.0'].map(
  (osVersion: string) => ({
    // For the W3C capabilities, please check
    // https://www.w3.org/TR/webdriver1/#capabilities
    platformName: 'iOS',
    // All vendor specific, in this case Appium capabilities, should be
    // put in vendor prefixed options, see
    // https://www.w3.org/TR/webdriver1/#dfn-extension-capability
    // All Appium capabilities, see
    // http://appium.io/docs/en/writing-running-appium/caps/
    // should be prefixed with `appium:{capability-name}`
    'appium:platformVersion': osVersion,
    'appium:deviceName': 'iPhone X Simulator',
    'appium:automationName': 'XCUITest',
    // The name of the App in the Sauce Labs storage, for more info see
    // https://docs.saucelabs.com/mobile-apps/app-storage/
    'appium:app': 'storage:filename=MyRNDemoApp.zip',
    // Read the reset strategies very well, they differ per platform, see
    // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
    'appium:noReset': true,
    // There is an issue with noReset: true and driver.reset(). This cap fixes that
    'appium:shouldTerminateApp': true,
    'appium:newCommandTimeout': 240,
    // All vendor specific, in this case Sauce specific capabilities, should be
    // put in vendor prefixed options, see
    // https://www.w3.org/TR/webdriver1/#dfn-extension-capability
    'sauce:options': {
      build: buildName,
      // iOS 15 needs Appium `1.22.0` or higher
      appiumVersion: osVersion === '15.0' ? '1.22.0' : '1.21.0',
    },
  })
);

// =============================================
// Max instances of the same device in the cloud
// =============================================
config.maxInstances = 25;

exports.config = config;
