const {config} = require('./wdio.shared.sauce.conf');
const testName = `Android image injection real device Legacy RDC: ${new Date().getTime()}`;

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
    // Android 10
    {
        // Give a phone with Android 10
        platformName: 'Android',
        platformVersion: '10',
        automationName: 'UiAutomator2',
        phoneOnly: true,
        // The api key that has a reference to the app-project in the TO cloud
        testobject_api_key: process.env.SAUCE_RDC_EU_ACCESS_KEY_ANDROID,
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
        autoAcceptAlerts: true,
        // Enable image-injection on RDC
        sauceLabsImageInjectionEnabled: true,
    },
    // Android 9
    {
        // Give a phone with Android 9
        platformName: 'Android',
        platformVersion: '9',
        automationName: 'UiAutomator2',
        phoneOnly: true,
        // The api key that has a reference to the app-project in the TO cloud
        testobject_api_key: process.env.SAUCE_RDC_EU_ACCESS_KEY_ANDROID,
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
        autoAcceptAlerts: true,
        // Enable image-injection on RDC
        sauceLabsImageInjectionEnabled: true,
    },
    // Android 8
    {
        // Give a phone with Android 8
        platformName: 'Android',
        platformVersion: '8',
        automationName: 'UiAutomator2',
        phoneOnly: true,
        // The api key that has a reference to the app-project in the TO cloud
        testobject_api_key: process.env.SAUCE_RDC_EU_ACCESS_KEY_ANDROID,
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
        autoAcceptAlerts: true,
        // Enable image-injection on RDC
        sauceLabsImageInjectionEnabled: true,
    },
    // Android 7
    {
        // Give a phone with Android 7
        platformName: 'Android',
        platformVersion: '7',
        automationName: 'UiAutomator2',
        phoneOnly: true,
        // The api key that has a reference to the app-project in the TO cloud
        testobject_api_key: process.env.SAUCE_RDC_EU_ACCESS_KEY_ANDROID,
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
        autoAcceptAlerts: true,
        // Enable image-injection on RDC
        sauceLabsImageInjectionEnabled: true,
    },
];

exports.config = config;
