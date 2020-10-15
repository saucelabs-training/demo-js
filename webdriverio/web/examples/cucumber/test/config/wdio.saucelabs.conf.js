const {config} = require('./wdio.shared.conf');
const defaultBrowserSauceOptions = {
    build: `Cucumber Build-${new Date().getTime()}`,
    seleniumVersion: '3.141.59',
};
const chromeOptions = {
    'goog:chromeOptions': {
        'w3c': true,
    },
};

config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;
config.region = process.env.REGION || 'us';

config.capabilities = [
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
        browserName: 'googlechrome',
        platformName: 'Windows 10',
        browserVersion: 'latest-1',
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
        browserName: 'firefox',
        platformName: 'Windows 10',
        browserVersion: 'latest-1',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
        },
    },
];

exports.config = config;
