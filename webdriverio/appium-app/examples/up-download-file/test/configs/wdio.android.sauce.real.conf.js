const {config} = require('./wdio.shared.sauce.conf');
const testName = `Up/download image on/from real device: ${new Date().getTime()}`;

// ==================
// Specify Test Files
// ==================
config.specs= [
    './test/specs/real-devices/*.js'
];

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
        orientation: 'PORTRAIT',
        browserName: 'chrome',
        autoLaunch: false,
        automationName: 'UiAutomator2',
        // Only allow 1 instance of this device running in the cloud, this is because we only have private device
        // with this capability available
        maxInstances: 1,
        // Keep the device connected between tests so we don't need to wait for the cleaning process
        cacheId: 'jsy1v49pn0',
        newCommandTimeout: 240,
        // Always default the language to a language you prefer so you know the app language is always as expected
        language: 'en',
        locale: 'en',
        // Add a name to the test
        name: testName,
    },
];

exports.config = config;
