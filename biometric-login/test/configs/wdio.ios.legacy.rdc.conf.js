const { config } = require('./wdio.shared.sauce.conf');
const testName = `iOS Biometric login real device Legacy RDC: ${new Date().getTime()}`;

// =================
// Service Providers
// =================
// These are not needed and need to be removed, else the test will fail. We want to re-use properties
delete config.user;
delete config.key;

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    // Just give an iPhone with FaceID
    deviceName: 'iPhone X*',
    // The api key that has a reference to the app-project in the TO cloud
    testobject_api_key: process.env.SAUCE_RDC_EU_ACCESS_KEY_IOS,
    // The name of the test for in the cloud
    testobject_test_name: testName,
    // Some default settings
    // You can find more info in the TO Appium Basic Setup section
    platformName: 'iOS',
    idleTimeout: 180,
    // Keep the device connected between tests so we don't need to wait for the cleaning process
    cacheId: 'jsy1v49pn10',
    orientation: 'PORTRAIT',
    newCommandTimeout: 180,
    // Always default the language to a language you prefer so you know the app language is always as expected
    language: 'en',
    locale: 'en',
    autoAcceptAlerts:true,
    // Enable touchID on RDC
    allowTouchIdEnroll: true,
  },
  {
    // Just give an iPhone with TouchId
    deviceName: 'iPhone [678].*',
    // The api key that has a reference to the app-project in the TO cloud
    testobject_api_key: process.env.SAUCE_RDC_EU_ACCESS_KEY_IOS,
    // The name of the test for in the cloud
    testobject_test_name: testName,
    // Some default settings
    // You can find more info in the TO Appium Basic Setup section
    platformName: 'iOS',
    idleTimeout: 180,
    testobject_cache_device: true,
    noReset: true,
    orientation: 'PORTRAIT',
    newCommandTimeout: 180,
    // Always default the language to a language you prefer so you know the app language is always as expected
    language: 'en',
    locale: 'en',
    autoAcceptAlerts:true,
    // Enable touchID on RDC
    allowTouchIdEnroll: true,
  },
];

exports.config = config;
