const {config} = require('./wdio.shared.sauce.conf');
const testName = `Up/download image on/from real device: ${new Date().getTime()}`;

// ==================
// Specify Test Files
// ==================
config.specs= [
    './test/specs/real-devices/*.js'
];

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
        // This is a specific private device so I can control the state of it
        deviceName: process.env.REGION === 'eu' ? 'Samsung_Galaxy_S10_ws' : 'Google_Pixel_3_XL_ws_us',
        platformName: 'Android',
        // Don't load the default app
        autoLaunch: false,
        automationName: 'UiAutomator2',
        // The api key that has a reference to the app-project in the TO cloud
        testobject_api_key: process.env.SAUCE_RDC_EU_ACCESS_KEY_ANDROID,
        // The name of the test for in the cloud
        testobject_test_name: testName,
        // Only allow 1 instance of this device running in the cloud, this is because we only have private device
        // with this capability available
        maxInstances: 1,
        // Keep the device connected between tests so we don't need to wait for the cleaning process
        cacheId: 'jsy1v49pn0',
        // Some default settings
        // You can find more info in the TO Appium Basic Setup section
        idleTimeout: 180,
        orientation: 'PORTRAIT',
        newCommandTimeout: 180,
        // Always default the language to a language you prefer so you know the app language is always as expected
        language: 'en',
        locale: 'en',
    },
];

exports.config = config;
