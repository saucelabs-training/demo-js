import config from './wdio.shared.sauce.conf';

const buildName = `iOS App Best Practices build-${new Date().getTime()}`;
const osVersions = ['13', '14'];
const getRandomOsVersion = (versions: string[]): string =>
  versions[Math.floor(Math.random() * versions.length)];

// ============
// Capabilities
// ============
//
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    // The defaults you need to have in your config
    platformName: 'iOS',
    // If we, for example, want to exclude iOS 15 together with dynamic allocation
    // we can do it like this
    platformVersion: getRandomOsVersion(osVersions),
    // We're using dynamic device allocation
    // See https://docs.saucelabs.com/mobile-apps/automated-testing/appium/real-devices/#dynamic-device-allocation
    deviceName: 'iPhone .*',
    automationName: 'XCUITest',
    // The name of the App in the Sauce Labs storage, for more info see
    // https://docs.saucelabs.com/mobile-apps/app-storage/
    app: 'storage:filename=MyRNDemoApp.ipa',
    noReset: true,
    // @ts-ignore
    // There is an issue with noReset: true and driver.reset(). This cap fixes that
    shouldTerminateApp: true,
    build: buildName,
    newCommandTimeout: 240,
    // We don't want touchID or image injection to be enabled for now
    allowTouchIdEnroll: false,
    sauceLabsImageInjectionEnabled: false,
  },
];

exports.config = config;
