const {config} = require('./wdio.shared.conf');
const defaultBrowserSauceOptions = {
    build: `WebdriverIO-V6 build-${new Date().getTime()}`,
    screenResolution: '1600x1200',
    seleniumVersion: '3.141.59',
};
const chromeOptions = {
    'goog:chromeOptions': {
        'w3c': true,
    },
};

// =========================
// Sauce RDC specific config
// =========================
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;
// If you run your tests on Sauce Labs you can specify the region you want to run your tests
// in via the `region` property. Available short handles for regions are `us` (default) and `eu`.
// These regions are used for the Sauce Labs VM cloud and the Sauce Labs Real Device Cloud.
// If you don't provide the region, it defaults to `us`.
config.region = process.env.REGION || 'us';

// ============
// Capabilities
// ============
config.capabilities = [
    /**
     * Desktop browsers
     */
    {
        browserName: 'googlechrome',
        platformName: 'Windows 10',
        browserVersion: 'latest',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
        },
        ...chromeOptions,
    },
    {
        browserName: 'firefox',
        platformName: 'Windows 10',
        browserVersion: 'latest',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
        },
    },
    {
        browserName: 'internet explorer',
        platformName: 'Windows 8.1',
        browserVersion: 'latest',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
            iedriverVersion: '3.141.59',
        },
    },
    {
        browserName: 'MicrosoftEdge',
        platformName: 'Windows 10',
        browserVersion: '18.17763',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
        },
    },
    {
        browserName: 'MicrosoftEdge',
        platformName: 'Windows 10',
        browserVersion: 'latest',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
        },
    },
    // Safari 11 is not W3C compliant,
    // see https://developer.apple.com/documentation/webkit/macos_webdriver_commands_for_safari_11_1_and_earlier
    {
        browserName: 'safari',
        platform: 'macOS 10.13',
        version: '11.1',
        ...defaultBrowserSauceOptions,
    },
    // // @TODO: There are issues with Safari 13
    // {
    //     browserName: 'safari',
    //     platformName: 'macOS 10.13',
    //     browserVersion: '13.0',
    //     'sauce:options': {
    //         ...defaultBrowserSauceOptions,
    //     },
    // },
    {
        browserName: 'safari',
        platformName: 'macOS 10.14',
        browserVersion: 'latest',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
        },
    }
];

config.services = config.services.concat('sauce');

exports.config = config;
