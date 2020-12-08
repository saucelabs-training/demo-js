const {config} = require('./wdio.shared.sauce.conf');
const testName = 'Image injection iOS';

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
// This will run the image-injection on iOS 11,12,13 and 14 devices
config.capabilities = [11,12,13,14].map(platformVersion =>(
  {
      platformName: 'iOS',
      platformVersion: `${platformVersion}`,
      orientation: 'PORTRAIT',
      automationName: 'XCUITEST',
      phoneOnly: true,
      // The path to the app
      app: 'storage:filename=sample-app-ios.ipa',
      // Keep the device connected between tests so we don't need to wait for the cleaning process
      cacheId: `jsy1v49pn10${platformVersion}`,
      newCommandTimeout: 240,
      // Always default the language to a language you prefer so you know the app language is always as expected
      language: 'en',
      locale: 'en',
      // Add a name to the test
      name: `${testName} ${platformVersion}`,
      // Enable image-injection on RDC
      sauceLabsImageInjectionEnabled: true,
  }
));

exports.config = config;
