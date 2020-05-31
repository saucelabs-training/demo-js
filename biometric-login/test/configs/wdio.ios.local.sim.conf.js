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
        deviceName: 'iPhone 11',
        platformName: 'iOS',
        platformVersion: '13.5',
        orientation: 'PORTRAIT',
        // The path to the app
        app: join(process.cwd(), './apps/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.3.0.zip'),
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
