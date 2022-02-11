import config from './wdio.shared.sauce.conf';

const buildName = `iOS My Demo app: ${new Date().getTime()}`;

// ============
// Capabilities
// ============
//
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = ['12.4', '13.4', '14.5', '15.0'].map(
  (osVersion: string) => ({
    // The defaults you need to have in your config
    platformName: 'iOS',
    platformVersion: osVersion,
    deviceName: 'iPhone X Simulator',
    automationName: 'XCUITest',
    // The name of the App in the Sauce Labs storage, for more info see
    // https://docs.saucelabs.com/mobile-apps/app-storage/
    app: 'storage:filename=MyRNDemoApp.zip',
    // Read the reset strategies very well, they differ per platform, see
    // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
    noReset: true,
    shouldTerminateApp: true,
    build: buildName,
    newCommandTimeout: 240,
    appiumVersion: osVersion === '15.0' ? '1.22.0' : '1.21.0',
  }),
);

exports.config = config;
