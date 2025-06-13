const { config } = require('./wdio.shared.sauce.conf');
const testName = 'Image injection iOS';

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
// This will run the image-injection on iOS 11,12,13,14 and 15 devices
config.capabilities = [11, 12, 13, 14, 15].map((platformVersion) => ({
  platformName: 'iOS',
  'appium:platformVersion': `${platformVersion}`,
  'appium:orientation': 'PORTRAIT',
  'appium:automationName': 'XCUITEST',
  // The path to the app
  'appium:app': 'storage:filename=MyRNDemoApp.ipa',
  'appium:newCommandTimeout': 240,
  // Always default the language to a language you prefer so you know the app language is always as expected
  'appium:language': 'en',
  'appium:locale': 'en',
  'sauce:options': {
    phoneOnly: true,
    // Keep the device connected between tests so we don't need to wait for the cleaning process
    cacheId: `jsy1v49pn10${platformVersion}`,
    // Add a name to the test
    name: `${testName} ${platformVersion}`,
    // Enable image-injection on RDC
    sauceLabsImageInjectionEnabled: true,
    shouldTerminateApp: true,
  },
}));

exports.config = config;
