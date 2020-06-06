const {config} = require('./wdio.shared.sauce.conf');
const testName = `Add image to device: ${new Date().getTime()}`;

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
