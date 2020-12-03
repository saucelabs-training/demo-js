const {config} = require('./wdio.shared.sauce.conf');
const buildName = `iOS Biometric login: ${new Date().getTime()}`;

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
        appiumVersion: '1.19.1',
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
        name: 'iOS 13.0 iPhone Appium 1.19.1 FaceID App',
    },

    // iOS iPhone 13.2 FaceID
    {
        // The defaults you need to have in your config
        deviceName: 'iPhone Simulator',
        platformName: 'iOS',
        appiumVersion: '1.19.1',
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
        name: 'iOS 13.2 iPhone Appium 1.19.1 FaceID App',
    },

    // iOS iPhone 13.4 FaceID
    {
        // The defaults you need to have in your config
        deviceName: 'iPhone Simulator',
        platformName: 'iOS',
        appiumVersion: '1.19.1',
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
        name: 'iOS 13.4 iPhone Appium 1.19.1 FaceID App',
    },

    // iOS iPhone 14.0 FaceID
    {
        // The defaults you need to have in your config
        deviceName: 'iPhone Simulator',
        platformName: 'iOS',
        appiumVersion: '1.19.1',
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
        name: 'iOS 14.0 iPhone Appium 1.19.1 FaceID App',
    },

    // iOS iPad 13.0 FaceID
    {
        // The defaults you need to have in your config
        deviceName: 'iPad Simulator',
        platformName: 'iOS',
        appiumVersion: '1.19.1',
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
        name: 'iOS 13.0 iPad Appium 1.19.1 FaceID App',
    },

    // iOS iPad 13.2 FaceID
    {
        // The defaults you need to have in your config
        deviceName: 'iPad Simulator',
        platformName: 'iOS',
        appiumVersion: '1.19.1',
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
        name: 'iOS 13.2 iPad Appium 1.19.1 FaceID App',
    },

    // iOS iPad 13.4 FaceID
    {
        // The defaults you need to have in your config
        deviceName: 'iPad Simulator',
        platformName: 'iOS',
        appiumVersion: '1.19.1',
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
        name: 'iOS 13.4 iPad Appium 1.19.1 FaceID App',
    },

    // iOS iPad 14.0 FaceID
    {
        // The defaults you need to have in your config
        deviceName: 'iPad Simulator',
        platformName: 'iOS',
        appiumVersion: '1.19.1',
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
        name: 'iOS 14.0 iPad Appium 1.19.1 FaceID App',
    },

];

exports.config = config;
