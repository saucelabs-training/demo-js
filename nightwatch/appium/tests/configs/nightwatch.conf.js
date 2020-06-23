const {join} = require('path');
const build = `Nightwatch build-${process.env.DATE}`;

module.exports = {
    src_folders: [join(process.cwd(), 'tests/specs/')],
    page_objects_path: [join(process.cwd(), 'tests/page-objects/')],
    custom_commands_path: 'tests/custom-commands/',

    test_workers: {
        enabled: true,
        workers: 'auto',
    },

    test_settings: {
        default: {
            launch_url: 'https://www.saucedemo.com',
        },
        sauceLabs: {
            selenium_host: `${process.env.REGION === 'eu' ? 'appium' : 'us1-manual.app'}.testobject.com`,
            selenium_port: 80,
        },
        androidChrome: {
            extends: 'sauceLabs',
            desiredCapabilities: {
                browserName: 'chrome',
                platformName: 'Android',
                deviceName: 'Samsung Galaxy S[12789]?.*',
                automationName: 'UiAutomator2',
                phoneOnly: true,
                // The api key that has a reference to the app-project in the TO cloud
                testobject_api_key: process.env.SAUCE_RDC_EU_ACCESS_KEY_WEB,
                // The name of the test for in the cloud
                testobject_test_name: build,
                // Some default settings
                // You can find more info in the TO Appium Basic Setup section
                idleTimeout: 180,
                testobject_cache_device: true,
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
                deviceName: 'iPhone [1678X]?.*',
                automationName: 'XCUITEST',
                // The api key that has a reference to the app-project in the TO cloud
                testobject_api_key: process.env.SAUCE_RDC_EU_ACCESS_KEY_WEB,
                // The name of the test for in the cloud
                testobject_test_name: build,
                // Some default settings
                // You can find more info in the TO Appium Basic Setup section
                idleTimeout: 180,
                testobject_cache_device: true,
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
