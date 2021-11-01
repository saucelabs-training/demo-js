const {config} = require('./wdio.shared.local.appium.conf');

// ==================
// Specify Test Files
// ==================
config.specs= [
    './test/specs/emu-sim/upload.image.ios.simulator.spec.js',
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'iOS',
        browserName: 'safari',
        automationName: 'XCUITest',
        deviceName: 'iPhone 13',
        platformVersion: '15.0',
        orientation: 'PORTRAIT',
        newCommandTimeout: 240,
        // Always default the language to a language you prefer so you know the app language is always as expected
        language: 'en',
        locale: 'en',
        // For WDIO not to run more than 1 instance
        maxInstances: 1,
    },
];

exports.config = config;
