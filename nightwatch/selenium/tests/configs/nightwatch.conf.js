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
            selenium_host: `ondemand.${process.env.REGION === 'eu' ? 'eu-central-1.' : ''}saucelabs.com`,
            selenium_port: 80,
            username: process.env.SAUCE_USERNAME,
            access_key: process.env.SAUCE_ACCESS_KEY,
            desiredCapabilities: {
                build,
                screenResolution: '1600x1200',
                seleniumVersion: '3.141.59',
            },
        },
        localChrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                alwaysMatch: {
                    'goog:chromeOptions': {
                        args: [
                            '--no-sandbox',
                            '--disable-infobars',
                            '--headless',
                        ],
                    },
                },
            },

            webdriver: {
                start_process: true,
                port: 9515,
                server_path: require('chromedriver').path,
            },
        },

        sauceChrome: {
            extends: 'sauceLabs',
            desiredCapabilities: {
                browserName: 'googlechrome',
                platform: 'Windows 10',
                version: 'latest',
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

        sauceIE: {
            extends: 'sauceLabs',
            desiredCapabilities: {
                browserName: 'internet explorer',
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
