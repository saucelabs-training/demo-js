import config from './wdio.shared.sauce.conf';

const buildName = `iOS RDC Biometrics: ${new Date().getTime()}`;

// ==================
// Specify Test Files
// ==================
//
config.specs = ['./test/specs/biometrics.rdc.spec.ts'];

// ============
// Capabilities
// ============
//
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    // The defaults you need to have in your config
    // @ts-ignore
    platformName: 'iOS',
    // We're using dynamic device allocation
    // See https://docs.saucelabs.com/mobile-apps/automated-testing/appium/real-devices/#dynamic-device-allocation
    deviceName: 'iPhone (11|12|13|X.*).*',
    automationName: 'XCUITest',
    // The name of the App in the Sauce Labs storage, for more info see
    // https://docs.saucelabs.com/mobile-apps/app-storage/
    app: 'storage:filename=iOS.MyDemoAppRN.ipa',
    newCommandTimeout: 240,
    // Sauce Labs specific options
    // NOTE: this is needed to tell Sauce Labs that the biometrics need to be mocked
    // @ts-ignore
    allowTouchIdEnroll: true,
    build: buildName,
  },
  {
    // The defaults you need to have in your config
    // @ts-ignore
    platformName: 'iOS',
    // We're using dynamic device allocation
    // See https://docs.saucelabs.com/mobile-apps/automated-testing/appium/real-devices/#dynamic-device-allocation
    deviceName: 'iPhone ([6-8]|SE).*',
    automationName: 'XCUITest',
    // The name of the App in the Sauce Labs storage, for more info see
    // https://docs.saucelabs.com/mobile-apps/app-storage/
    app: 'storage:filename=iOS.MyDemoAppRN.ipa',
    newCommandTimeout: 240,
    // Sauce Labs specific options
    // NOTE: this is needed to tell Sauce Labs that the biometrics need to be mocked
    // @ts-ignore
    allowTouchIdEnroll: true,
    build: buildName,
  }
];

exports.config = config;
