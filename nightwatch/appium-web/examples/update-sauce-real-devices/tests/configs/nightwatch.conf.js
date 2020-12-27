const {join} = require('path');
const build = `Nightwatch Appium Web build-${process.env.DATE}`;

// More information about the configuration file can be found here
// https://nightwatchjs.org/gettingstarted/configuration/
module.exports = {
    src_folders: [join(process.cwd(), 'tests/specs/')],
    page_objects_path: [join(process.cwd(), 'tests/page-objects/')],
    // See `/tests/custom-commands/customSauceLabsEnd.js` for the logic
    custom_commands_path: 'tests/custom-commands/',

    test_workers: {
        enabled: true,
        workers: 'auto',
    },

    test_settings: {
        default: {
            launch_url: 'https://www.saucedemo.com',
        },
        // Our Sauce Labs object
        sauceLabs: {
            selenium_host: `ondemand.${process.env.REGION === 'eu' ? 'eu-central-1' : 'us-west-1'}.saucelabs.com`,
            selenium_port: 80,
            username: process.env.SAUCE_USERNAME,
            access_key: process.env.SAUCE_ACCESS_KEY,
        },
        // Sauce Labs capabilities
        androidChrome: {
            extends: 'sauceLabs',
            desiredCapabilities: {
                browserName: 'chrome',
                platformName: 'Android',
                deviceName: 'Samsung Galaxy S[12789]?.*',
                automationName: 'UiAutomator2',
                phoneOnly: true,
                build,
                // Some default settings
                // You can find more info in the TO Appium Basic Setup section
                idleTimeout: 180,
                cacheId: '1234klq1',
                noReset: true,
                orientation: 'PORTRAIT',
                newCommandTimeout: 180,
                // Always default the language to a language you prefer so you know the app language is always as expected
                language: 'en',
                locale: 'en',
                autoAcceptAlerts: true,
            },
        },
        iosSafari: {
            extends: 'sauceLabs',
            desiredCapabilities: {
                browserName: 'safari',
                platformName: 'iOS',
                deviceName: 'iPhone [12678X]?.*',
                automationName: 'XCUITEST',
                build,
                // Some default settings
                // You can find more info in the TO Appium Basic Setup section
                idleTimeout: 180,
                cacheId: '1234klq2',
                noReset: true,
                orientation: 'PORTRAIT',
                newCommandTimeout: 180,
                // Always default the language to a language you prefer so you know the app language is always as expected
                language: 'en',
                locale: 'en',
            },
        },
    },
};
