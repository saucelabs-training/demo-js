const {config} = require('./wdio.shared.sauce.conf');
const buildName = `Android Biometric login Appium ${config.appiumVersion}: ${new Date().getTime()}`;

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
//
// For configuring an Emulator please check
// https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
config.capabilities = [
    // Android 11
    {
        // The defaults you need to have in your config
        deviceName: 'Google Pixel 3 GoogleAPI Emulator',
        platformName: 'Android',
        platformVersion: '11.0',
        orientation: 'PORTRAIT',
        // The path to the app
        app: 'storage:filename=sample-app-android.apk',
        appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        noReset: true,
        newCommandTimeout: 240,
        // Always default the language to a language you prefer so you know the app language is always as expected
        language: 'en',
        locale: 'en',
        // Group builds by build name
        build: buildName,
    },

    // Android 10
    {
        // The defaults you need to have in your config
        deviceName: 'Google Pixel 3 GoogleAPI Emulator',
        platformName: 'Android',
        platformVersion: '10.0',
        orientation: 'PORTRAIT',
        // The path to the app
        app: 'storage:filename=sample-app-android.apk',
        appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        noReset: true,
        newCommandTimeout: 240,
        // Always default the language to a language you prefer so you know the app language is always as expected
        language: 'en',
        locale: 'en',
        // Group builds by build name
        build: buildName,
    },

    // Android 9
    {
        // The defaults you need to have in your config
        deviceName: 'Google Pixel 3 GoogleAPI Emulator',
        platformName: 'Android',
        platformVersion: '9.0',
        orientation: 'PORTRAIT',
        // The path to the app
        app: 'storage:filename=sample-app-android.apk',
        appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        noReset: true,
        newCommandTimeout: 240,
        // Always default the language to a language you prefer so you know the app language is always as expected
        language: 'en',
        locale: 'en',
        // Group builds by build name
        build: buildName,
    },

    // Android 8.1
    {
        // The defaults you need to have in your config
        deviceName: 'Google Pixel GoogleAPI Emulator',
        platformName: 'Android',
        platformVersion: '8.1',
        orientation: 'PORTRAIT',
        // The path to the app
        app: 'storage:filename=sample-app-android.apk',
        appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        noReset: true,
        newCommandTimeout: 240,
        // Always default the language to a language you prefer so you know the app language is always as expected
        language: 'en',
        locale: 'en',
        // Group builds by build name
        build: buildName,
    },

    // Android 7.1
    {
        // The defaults you need to have in your config
        deviceName: 'Google Pixel GoogleAPI Emulator',
        platformName: 'Android',
        platformVersion: '7.1',
        orientation: 'PORTRAIT',
        // The path to the app
        app: 'storage:filename=sample-app-android.apk',
        appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        noReset: true,
        newCommandTimeout: 240,
        // Always default the language to a language you prefer so you know the app language is always as expected
        language: 'en',
        locale: 'en',
        // Group builds by build name
        build: buildName,
    },
];

if (config.appiumVersion !== undefined && config.appiumVersion !== 'default') {
    config.capabilities.forEach(capability => {
        capability.appiumVersion = config.appiumVersion;
    });
}

exports.config = config;
