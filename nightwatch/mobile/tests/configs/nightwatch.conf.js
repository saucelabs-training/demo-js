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
            selenium: {
                host: `ondemand.${process.env.REGION === 'eu' ? 'eu-central-1' : 'us-west-1'}.saucelabs.com`,
                port: 443,
            },
            desiredCapabilities: {
                'sauce:options': {
                    userName: process.env.SAUCE_USERNAME,
                    accessKey: process.env.SAUCE_ACCESS_KEY,
                    build: build,
                },
            },
            webdriver: {
                timeout_options: {
                    timeout: 90000,
                    retry_attempts: 3
                },
                start_process: false
            }
        },
        // Sauce Labs capabilities
        androidChrome: {
            extends: 'sauceLabs',
            desiredCapabilities: {
                browserName: 'chrome',
                platformName: 'Android',
                'appium:options': {
                    deviceName: 'Samsung Galaxy S[12789]?.*',
                    automationName: 'UiAutomator2',
                    newCommandTimeout: 180,
                    language: 'en',
                    locale: 'en',
                    autoAcceptAlerts: true,
                },
            },
        },
        iosSafari: {
            extends: 'sauceLabs',
            desiredCapabilities: {
                browserName: 'safari',
                platformName: 'iOS',
                'safari:deviceUDID': process.env.RDC_DEVICE_ID || '00008030-00024C2C3453402E',
                'appium:options': {
                    browserName: 'safari',
                    deviceName: 'iPhone .*',
                    automationName: 'XCUITest',
                    newCommandTimeout: 180,
                    language: 'en',
                    locale: 'en',
                },
            },
        },
    },
};
