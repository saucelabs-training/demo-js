const {config} = require('./wdio.shared.sauce.conf');
const testName = `iOS image injection real device Legacy RDC: ${new Date().getTime()}`;

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
    // iOS 13
    {
        // Give a phone with iOS 13
        platformName: 'iOS',
        platformVersion: '13',
        phoneOnly: true,
        automationName: 'XCUITEST',
        // The api key that has a reference to the app-project in the TO cloud
        testobject_api_key: process.env.SAUCE_RDC_EU_ACCESS_KEY_IOS,
        // The name of the test for in the cloud
        testobject_test_name: testName,
        // Some default settings
        // You can find more info in the TO Appium Basic Setup section
        idleTimeout: 180,
        testobject_cache_device: true,
        noReset: true,
        orientation: 'PORTRAIT',
        newCommandTimeout: 180,
        // Always default the language to a language you prefer so you know the app language is always as expected
        language: 'en',
        locale: 'en',
        // Enable image-injection on RDC
        sauceLabsImageInjectionEnabled: true,
    },
    // iOS 12
    {
        // Give a phone with iOS 12
        platformName: 'iOS',
        platformVersion: '12',
        phoneOnly: true,
        automationName: 'XCUITEST',
        // The api key that has a reference to the app-project in the TO cloud
        testobject_api_key: process.env.SAUCE_RDC_EU_ACCESS_KEY_IOS,
        // The name of the test for in the cloud
        testobject_test_name: testName,
        // Some default settings
        // You can find more info in the TO Appium Basic Setup section
        idleTimeout: 180,
        testobject_cache_device: true,
        noReset: true,
        orientation: 'PORTRAIT',
        newCommandTimeout: 180,
        // Always default the language to a language you prefer so you know the app language is always as expected
        language: 'en',
        locale: 'en',
        // Enable image-injection on RDC
        sauceLabsImageInjectionEnabled: true,
    },
    // iOS 11
    {
        // Give a phone with iOS 11
        platformName: 'iOS',
        platformVersion: '11',
        phoneOnly: true,
        automationName: 'XCUITEST',
        // The api key that has a reference to the app-project in the TO cloud
        testobject_api_key: process.env.SAUCE_RDC_EU_ACCESS_KEY_IOS,
        // The name of the test for in the cloud
        testobject_test_name: testName,
        // Some default settings
        // You can find more info in the TO Appium Basic Setup section
        idleTimeout: 180,
        testobject_cache_device: true,
        noReset: true,
        orientation: 'PORTRAIT',
        newCommandTimeout: 180,
        // Always default the language to a language you prefer so you know the app language is always as expected
        language: 'en',
        locale: 'en',
        // Enable image-injection on RDC
        sauceLabsImageInjectionEnabled: true,
    },
];

exports.config = config;
