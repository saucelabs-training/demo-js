import config from './wdio.shared.sauce.conf';

const buildName = `Android RDC Biometrics: ${new Date().getTime()}`;

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
    platformName: 'Android',
    // We're using dynamic device allocation
    // See https://docs.saucelabs.com/mobile-apps/automated-testing/appium/real-devices/#dynamic-device-allocation
    deviceName: 'Samsung Galaxy S(7|8|9|10|20|21).*',
    automationName: 'UIAutomator2',
    // The name of the App in the Sauce Labs storage, for more info see
    // https://docs.saucelabs.com/mobile-apps/app-storage/
    app: 'storage:filename=Android.MyDemoAppRN.apk',
    appWaitActivity: 'com.saucelabs.mydemoapp.rn.MainActivity',
    newCommandTimeout: 240,
    // Sauce Labs specific options
    // NOTE: this is needed to tell Sauce Labs that the biometrics need to be mocked
    // @ts-ignore
    allowTouchIdEnroll: true,
    // Select only phone devices
    // @ts-ignore
    phoneOnly: true,
    build: buildName,
  },
  {
    // The defaults you need to have in your config
    // @ts-ignore
    platformName: 'Android',
    // We're using dynamic device allocation
    // See https://docs.saucelabs.com/mobile-apps/automated-testing/appium/real-devices/#dynamic-device-allocation
    deviceName: 'Google Pixel.*',
    automationName: 'UIAutomator2',
    // The name of the App in the Sauce Labs storage, for more info see
    // https://docs.saucelabs.com/mobile-apps/app-storage/
    app: 'storage:filename=Android.MyDemoAppRN.apk',
    appWaitActivity: 'com.saucelabs.mydemoapp.rn.MainActivity',
    newCommandTimeout: 240,
    // Sauce Labs specific options
    // NOTE: this is needed to tell Sauce Labs that the biometrics need to be mocked
    // @ts-ignore
    allowTouchIdEnroll: true,
    // Select only phone devices
    // @ts-ignore
    phoneOnly: true,
    build: buildName,
  },
];

exports.config = config;
