const {join} = require('path');
const build = `Nightwatch Desktop Web build-${process.env.DATE}`;

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
            selenium_port: 443,
            username: process.env.SAUCE_USERNAME,
            access_key: process.env.SAUCE_ACCESS_KEY,
            desiredCapabilities: {
                build,
                screenResolution: '1600x1200',
                seleniumVersion: '3.141.59',
            },
        },
        // Sauce Labs capabilities
        sauceChrome: {
            extends: 'sauceLabs',
            desiredCapabilities: {
                browserName: 'chrome',
                platform: 'Windows 10',
                version: 'latest',
                'goog:chromeOptions': {
                    args: [
                        '--no-sandbox',
                        '--disable-infobars',
                        '--disable-features=SafeBrowsing,PasswordLeakToggleMove',
                    ],
                    prefs: {
                        'profile.password_manager_leak_detection': false,
                    },
                },
            },
        },
        sauceFirefox: {
            extends: 'sauceLabs',
            desiredCapabilities: {
                browserName: 'firefox',
                platform: 'Windows 10',
                version: 'latest',
            },
        },
        sauceEdge: {
            extends: 'sauceLabs',
            desiredCapabilities: {
                browserName: 'MicrosoftEdge',
                platform: 'Windows 10',
                version: 'latest',
            },
        },
    },
};
