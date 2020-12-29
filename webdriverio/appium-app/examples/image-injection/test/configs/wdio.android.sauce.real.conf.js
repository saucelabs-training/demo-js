const {config} = require('./wdio.shared.sauce.conf');
const testName = 'Image injection Android';

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
// This will run the image-injection on Android 7,8,9,10,11 devices
config.capabilities = [7,8,9,10,11].map(platformVersion => (
  {
      platformName: 'Android',
      platformVersion: `${platformVersion}`,
      orientation: 'PORTRAIT',
      phoneOnly: true,
      automationName: 'UiAutomator2',
      // The path to the app
      app: 'storage:filename=sample-app-android.apk',
      appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
      // Keep the device connected between tests so we don't need to wait for the cleaning process
      cacheId: `jsy1v49pn9${platformVersion}`,
      newCommandTimeout: 240,
      // Always default the language to a language you prefer so you know the app language is always as expected
      language: 'en',
      locale: 'en',
      // Add a name to the test
      name: `${testName} ${platformVersion}`,
      // Enable image-injection on RDC
      sauceLabsImageInjectionEnabled: true,
      // Allow the camera permissions
      autoGrantPermissions:true,
  }
));


exports.config = config;
