const {config} = require('./wdio.shared.sauce.conf');

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
//
// For configuring an Emulator please check
// https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
config.capabilities = [
    {
        // The defaults you need to have in your config
        deviceName: 'Google Pixel 3 GoogleAPI Emulator',
        platformName: 'Android',
        platformVersion: '10.0',
        deviceOrientation: 'PORTRAIT',
        // You can provide the Appium Version, please check the platform configurator for all possible versions
        appiumVersion: '1.18.1',
        // The path to the app that has been uploaded to the Sauce Storage,
        // see https://wiki.saucelabs.com/display/DOCS/Application+Storage for more information
        app: 'storage:filename=sample-app-android.apk',
        appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        noReset: true,
        newCommandTimeout: 240,
        // Always default the language to a language you prefer so you know the app language is always as expected
        language: 'en',
        locale: 'en',
    },
];

exports.config = config;
