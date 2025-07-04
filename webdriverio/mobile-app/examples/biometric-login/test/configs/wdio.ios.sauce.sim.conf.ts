import config from './wdio.shared.sauce.conf';

const buildName = `iOS Simulators Biometrics: ${new Date().getTime()}`;

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
config.capabilities = [
  // This one has TouchID
  {
    // The defaults you need to have in your config
    // @ts-ignore
    platformName: 'iOS',
    // For W3C the appium capabilities need to have an extension prefix
    // http://appium.io/docs/en/writing-running-appium/caps/
    // This is `appium:` for all Appium Capabilities which can be found here
    'appium:deviceName': 'iPhone 8 Plus Simulator',
    'appium:platformVersion': '14.5',
    'appium:orientation': 'PORTRAIT',
    'appium:automationName': 'XCUITest',
    // The name of the App in the Sauce Labs storage, for more info see
    // https://docs.saucelabs.com/mobile-apps/app-storage/
    'appium:app': 'storage:filename=iOS.MyDemoAppRN.zip',
    'appium:newCommandTimeout': 240,
    // All specific Sauce Labs options need to go into this object
    'sauce:options': {
      // Group builds by build name
      build: buildName,
    },
  },
  // This one has FaceID
  {
    // The defaults you need to have in your config
    // @ts-ignore
    platformName: 'iOS',
    // For W3C the appium capabilities need to have an extension prefix
    // http://appium.io/docs/en/writing-running-appium/caps/
    // This is `appium:` for all Appium Capabilities which can be found here
    'appium:deviceName': 'iPhone 12 Simulator',
    'appium:platformVersion': '14.5',
    'appium:orientation': 'PORTRAIT',
    'appium:automationName': 'XCUITest',
    // The name of the App in the Sauce Labs storage, for more info see
    // https://docs.saucelabs.com/mobile-apps/app-storage/
    'appium:app': 'storage:filename=iOS.MyDemoAppRN.zip',
    'appium:newCommandTimeout': 240,
    // All specific Sauce Labs options need to go into this object
    'sauce:options': {
      // Group builds by build name
      build: buildName,
    },
  },
];

exports.config = config;
