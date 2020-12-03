const {config} = require('./wdio.shared.sauce.conf');

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    deviceName: 'Samsung Galaxy S10',
    platformName: 'Android',
    orientation: 'PORTRAIT',
    automationName: 'UiAutomator2',
    // The path to the app that has been uploaded to the Sauce Storage,
    // see https://wiki.saucelabs.com/display/DOCS/Application+Storage for more information
    app: 'storage:filename=sample-app-android.apk',
    appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
    // Keep the device connected between tests so we don't need to wait for the cleaning process
    cacheId: 'jsy1v49pn10',
    // You can also provide the Appium version
    // we need to have at least 1.19.0 for the new Android Gesture functions
    appiumVersion: '1.19.0',
    newCommandTimeout: 240,
    // Always default the language to a language you prefer so you know the app language is always as expected
    language: 'en',
    locale: 'en',
    // Add a name to the test
    name: 'Appium Gestures',
  },
];

exports.config = config;
