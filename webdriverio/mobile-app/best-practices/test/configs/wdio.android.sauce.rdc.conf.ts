import config from './wdio.shared.sauce.conf';

const buildName = `Android Native App Best Practices build-${new Date().getTime()}`;

// ===================================================================================
// Capabilities
// You can find more about constructing the capabilities for Android real devices
// testing here https://saucelabs.com/platform/platform-configurator#/
//
// All test configuration options and W3C compliant options can be found here
// https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options
//
// To read more about W3C and Sauce Labs please check
// https://docs.saucelabs.com/mobile-apps/automated-testing/appium/real-devices/#using-the-w3c-webdriver-specification
// ===================================================================================
config.capabilities = [
  {
    // For the W3C capabilities, please check
    // https://www.w3.org/TR/webdriver1/#capabilities
    platformName: 'Android',
    // All vendor specific, in this case Appium capabilities, should be
    // put in vendor prefixed options, see
    // https://www.w3.org/TR/webdriver1/#dfn-extension-capability
    // All Appium capabilities, see
    // http://appium.io/docs/en/writing-running-appium/caps/
    // should be prefixed with `appium:{capability-name}`
    // We're using dynamic device allocation
    // See https://docs.saucelabs.com/mobile-apps/automated-testing/appium/real-devices/#dynamic-device-allocation
    'appium:deviceName': '(Samsung Galaxy S.*)|(Google Pixel.*)',
    'appium:automationName': 'UIAutomator2',
    // The name of the App in the Sauce Labs storage, for more info see
    // https://docs.saucelabs.com/mobile-apps/app-storage/
    'appium:app': 'storage:filename=Android.MyDemoAppRN.apk',
    'appium:appWaitActivity': 'com.saucelabs.mydemoapp.rn.MainActivity',
    'appium:newCommandTimeout': 240,
    // This will adjust the Appium server in such a way that it will return all
    // non visible elements so we can assert against it.
    // @ts-ignore
    'appium:allowInvisibleElements': true,
    // All vendor specific, in this case Sauce specific capabilities, should be
    // put in vendor prefixed options, see
    // https://www.w3.org/TR/webdriver1/#dfn-extension-capability
    'sauce:options': {
      build: buildName,
      // Select only phone devices
      // @ts-ignore
      phoneOnly: true,
      resigningEnabled: true,
      allowTouchIdEnroll: true,
      sauceLabsImageInjectionEnabled: true,
    },
  },
];

// =============================================
// Max instances of the same device in the cloud
// =============================================
config.maxInstances = 10;

exports.config = config;
