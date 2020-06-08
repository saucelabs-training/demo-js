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
        deviceName: 'Samsung_Galaxy_S10_ws',
        platformName: 'Android',
        orientation: 'PORTRAIT',
        browserName: 'chrome',
        autoLaunch: false,
        automationName: 'UiAutomator2',
        // Only allow 1 instance of this device running in the cloud, this is because we only have private device
        // with this capability available
        maxInstances: 1,
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        noReset: true,
        newCommandTimeout: 240,
        // Always default the language to a language you prefer so you know the app language is always as expected
        language: 'en',
        locale: 'en',
        // Add a name to the test
        name: testName,
    },
];

exports.config = config;
