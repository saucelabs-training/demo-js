const {config} = require('./wdio.shared.sauce.conf');
const buildName = `iOS Biometric login Appium ${config.appiumVersion}: ${new Date().getTime()}`;

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
//
// For configuring an Emulator please check
// https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
config.capabilities = [
    // iOS iPhone 13.0 FaceID
    {
        // The defaults you need to have in your config
        deviceName: 'iPhone Simulator',
        platformName: 'iOS',
        platformVersion: '13.0',
        orientation: 'PORTRAIT',
        // The path to the app
        app: 'storage:filename=sample-app-ios.zip',
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

    // iOS iPhone 13.2 FaceID
    {
        // The defaults you need to have in your config
        deviceName: 'iPhone Simulator',
        platformName: 'iOS',
        platformVersion: '13.2',
        orientation: 'PORTRAIT',
        // The path to the app
        app: 'storage:filename=sample-app-ios.zip',
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

    // iOS iPhone 13.4 FaceID
    {
        // The defaults you need to have in your config
        deviceName: 'iPhone Simulator',
        platformName: 'iOS',
        platformVersion: '13.4',
        orientation: 'PORTRAIT',
        // The path to the app
        app: 'storage:filename=sample-app-ios.zip',
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

    // iOS iPhone 14.0 FaceID
    {
        // The defaults you need to have in your config
        deviceName: 'iPhone Simulator',
        platformName: 'iOS',
        platformVersion: '14.0',
        orientation: 'PORTRAIT',
        // The path to the app
        app: 'storage:filename=sample-app-ios.zip',
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
