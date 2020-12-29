const {join} = require('path');
const {config} = require('./wdio.shared.local.appium.conf');

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        automationName: 'UiAutomator2',
        deviceName: 'Pixel_3_10.0',
        platformName: 'Android',
        platformVersion: '10.0',
        orientation: 'PORTRAIT',
        app: join(process.cwd(), './apps/Android.SauceLabs.Mobile.Sample.app.2.3.0.apk'),
        appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        noReset: true,
        newCommandTimeout: 240,
        maxInstances: 1,
        // Always default the language to a language you prefer so you know the app language is always as expected
        language: 'en',
        locale: 'en',
    },
];

exports.config = config;
