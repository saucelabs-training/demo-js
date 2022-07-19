const { config } = require('./wdio.shared.sauce.conf');
const testName = 'Image injection Android';

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
// This will run the image-injection on Android 7,8,9,10,11, 12 devices
config.capabilities = [12].map((platformVersion) => ({
  platformName: 'Android',
  'appium:platformVersion': `${platformVersion}`,
  'appium:orientation': 'PORTRAIT',
  'appium:automationName': 'UiAutomator2',
  // The path to the app
  'appium:app': 'storage:filename=Android.MyDemoAppRN.apk',
  'appium:appWaitActivity': 'com.saucelabs.mydemoapp.rn.MainActivity',
  'appium:newCommandTimeout': 240,
  // Always default the language to a language you prefer so you know the app language is always as expected
  'appium:language': 'en',
  'appium:locale': 'en',
  'sauce:options': {
    phoneOnly: true,
    // Keep the device connected between tests so we don't need to wait for the cleaning process
    cacheId: `jsy1v49pn9${platformVersion}`,
    // Add a build and a name to the test
    build: testName,
    name: `${testName} ${platformVersion}`,
    // Enable image-injection on RDC
    sauceLabsImageInjectionEnabled: true,
    // Allow the camera permissions
    autoGrantPermissions: true,
  },
}));

exports.config = config;
