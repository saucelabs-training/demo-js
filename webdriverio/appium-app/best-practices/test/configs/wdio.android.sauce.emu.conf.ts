import config from './wdio.shared.sauce.conf';

const buildName = `Android Emulator Native App Best Practices build-${new Date().getTime()}`;

// ===================================================================================
// Capabilities
// You can find more about constructing the capabilities for Android emulator testing
// here https://saucelabs.com/platform/platform-configurator#/
//
// All test configuration options and W3C compliant options can be found here
// https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options
//
// To read more about W3C and Sauce Labs please check
// https://docs.saucelabs.com/mobile-apps/automated-testing/appium/real-devices/#using-the-w3c-webdriver-specification
// ===================================================================================
// This piece of code will run the tests on all Android versions as mentioned
// in this array.
config.capabilities = ['9.0', '10.0', '11', '12'].map((osVersion: string) => ({
  // For the W3C capabilities, please check
  // https://www.w3.org/TR/webdriver1/#capabilities
  platformName: 'Android',
  // All vendor specific, in this case Appium capabilities, should be
  // put in vendor prefixed options, see
  // https://www.w3.org/TR/webdriver1/#dfn-extension-capability
  // All Appium capabilities, see
  // http://appium.io/docs/en/writing-running-appium/caps/
  // should be prefixed with `appium:{capability-name}`
  'appium:platformVersion': osVersion,
  'appium:deviceName': 'Android GoogleAPI Emulator',
  'appium:automationName': 'UIAutomator2',
  // The name of the App in the Sauce Labs storage, for more info see
  // https://docs.saucelabs.com/mobile-apps/app-storage/
  'appium:app': 'storage:filename=Android.MyDemoAppRN.apk',
  'appium:appWaitActivity': 'com.saucelabs.mydemoapp.rn.MainActivity',
  'appium:newCommandTimeout': 240,
  // This doesn't seem to work with Appium 1.20.2 on the SL cloud =(
  // This will adjust the Appium server in such a way that it will return all
  // non visible elements so we can assert against it.
  // @ts-ignore
  // 'appium:allowInvisibleElements': true,
  // All vendor specific, in this case Sauce specific capabilities, should be
  // put in vendor prefixed options, see
  // https://www.w3.org/TR/webdriver1/#dfn-extension-capability
  'sauce:options': {
    build: buildName,
    // Android 12 needs `1.22.1`, the max for the other Android versions
    // is currently `1.20.2`
    appiumVersion: osVersion === '12' ? '1.22.1' : '1.20.2',
  },
}));

// =============================================
// Max instances of the same device in the cloud
// =============================================
config.maxInstances = 25;

/**
 * Workaround for the `'appium:allowInvisibleElements': true,` cap.
 * The setting can also be set during execution
 */
config.before = async () => {
  await driver.updateSettings({ allowInvisibleElements: true });
};

exports.config = config;
