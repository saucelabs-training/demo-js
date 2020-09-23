const {config} = require('./wdio.shared.sauce.conf');
const testName = `Android image injection real device Sauce UI: ${new Date().getTime()}`;

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
        // The path to the app
        app: 'storage:filename=Android.SauceLabs.Mobile.Sample.app.apk',
        appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        noReset: true,
        newCommandTimeout: 240,
        // Always default the language to a language you prefer so you know the app language is always as expected
        language: 'en',
        locale: 'en',
        // Add a name to the test
        name: testName,
        // Enable image-injection on RDC
        sauceLabsImageInjectionEnabled: true,
    },
];

exports.config = config;
