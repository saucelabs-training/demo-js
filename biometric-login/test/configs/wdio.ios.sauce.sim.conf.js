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
    // iOS 13.2 FaceID
    {
        // The defaults you need to have in your config
        deviceName: 'iPhone X Simulator',
        platformName: 'iOS',
        platformVersion: '13.2',
        orientation: 'PORTRAIT',
        // The path to the app
        app: 'sauce-storage:sample-app-ios-sim.zip',
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

    // iOS 12.4 FaceID
    {
        // The defaults you need to have in your config
        deviceName: 'iPhone X Simulator',
        platformName: 'iOS',
        platformVersion: '12.4',
        orientation: 'PORTRAIT',
        // The path to the app
        app: 'sauce-storage:sample-app-ios-sim.zip',
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
    // iOS 13.2 TouchID
    {
        // The defaults you need to have in your config
        deviceName: 'iPhone 8 Simulator',
        platformName: 'iOS',
        platformVersion: '13.2',
        orientation: 'PORTRAIT',
        // The path to the app
        app: 'sauce-storage:sample-app-ios-sim.zip',
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

    // iOS 12.4 TouchID
    {
        // The defaults you need to have in your config
        deviceName: 'iPhone 8 Simulator',
        platformName: 'iOS',
        platformVersion: '12.4',
        orientation: 'PORTRAIT',
        // The path to the app
        app: 'sauce-storage:sample-app-ios-sim.zip',
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

exports.config = config;
