import config from './wdio.shared.sauce.conf';

const buildName = `iOS Native App Best Practices build-${new Date().getTime()}`;
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
    // For the W3C capabilities, please check
    // https://www.w3.org/TR/webdriver1/#capabilities
    // The defaults you need to have in your config
    platformName: 'iOS',
    // All vendor specific, in this case Appium capabilities, should be
    // put in vendor prefixed options, see
    // https://www.w3.org/TR/webdriver1/#dfn-extension-capability
    // All Appium capabilities, see
    // http://appium.io/docs/en/writing-running-appium/caps/
    // should be prefixed with `appium:{capability-name}`
    'appium:platformVersion': getRandomOsVersion(osVersions),
    // We're using dynamic device allocation
    // See https://docs.saucelabs.com/mobile-apps/automated-testing/appium/real-devices/#dynamic-device-allocation
    'appium:deviceName': 'iPhone .*',
    'appium:automationName': 'XCUITest',
    // The name of the App in the Sauce Labs storage, for more info see
    // https://docs.saucelabs.com/mobile-apps/app-storage/
    'appium:app': 'storage:filename=MyRNDemoApp.ipa',
    'appium:noReset': true,
    // There is an issue with noReset: true and driver.reset(). This cap fixes that
    'appium:shouldTerminateApp': true,
    'appium:newCommandTimeout': 240,
    // All vendor specific, in this case Sauce specific capabilities, should be
    // put in vendor prefixed options, see
    // https://www.w3.org/TR/webdriver1/#dfn-extension-capability
    'sauce:options': {
      build: buildName,
      // We don't want touchID or image injection to be enabled for now
      allowTouchIdEnroll: false,
      // @ts-ignore
      sauceLabsImageInjectionEnabled: false,
    },
  },
];

// =============================================
// Max instances of the same device in the cloud
// =============================================
config.maxInstances = 10;

exports.config = config;
