import config from './wdio.shared.sauce.conf';

const buildName = `Android Emulator Biometrics: ${new Date().getTime()}`;

// ==================
// Specify Test Files
// ==================
//
config.specs = ['./test/specs/biometrics.emusim.spec.ts'];

// ============
// Capabilities
// ============
//
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
// The capabilities for different Android versions are the same, only the platform version needs to be different.
// That's why we are going to walk through all versions
config.capabilities = ['7.1', '8.1', '9.0', '10.0', '11.0'].map((platformVersion) => ({
  // The defaults you need to have in your config
  platformName: 'Android',
  // For W3C the appium capabilities need to have an extension prefix
  // http://appium.io/docs/en/writing-running-appium/caps/
  // This is `appium:` for all Appium Capabilities which can be found here
  'appium:deviceName': 'Android GoogleAPI Emulator',
  'appium:platformVersion': platformVersion,
  'appium:orientation': 'PORTRAIT',
  'appium:automationName': 'UiAutomator2',
  // The name of the App in the Sauce Labs storage, for more info see
  // https://docs.saucelabs.com/mobile-apps/app-storage/
  'appium:app': 'storage:filename=Android.MyDemoAppRN.apk',
  'appium:appWaitActivity': 'com.saucelabs.mydemoapp.rn.MainActivity',
  'appium:newCommandTimeout': 240,
  // All specific Sauce Labs options need to go into this object
  'sauce:options': {
    // Group builds by build name
    build: buildName,
  }
}));

exports.config = config;
