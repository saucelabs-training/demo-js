const {config} = require('./wdio.shared.sauce.conf');
const testName = `iOS Biometric login real device Sauce UI: ${new Date().getTime()}`;

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // Just give an iPhone with FaceID
        deviceName: 'iPhone XS',
        platformName: 'iOS',
        orientation: 'PORTRAIT',
        // The path to the app
        app: 'storage:filename=sample-app-ios.ipa',
        // Keep the device connected between tests so we don't need to wait for the cleaning process
        cacheId: 'jsy1v49pn10',
        newCommandTimeout: 240,
        // Always default the language to a language you prefer so you know the app language is always as expected
        language: 'en',
        locale: 'en',
        // Add a name to the test
        name: testName,
        // Enable touchID on RDC
        allowTouchIdEnroll: true,
    },
];

exports.config = config;
