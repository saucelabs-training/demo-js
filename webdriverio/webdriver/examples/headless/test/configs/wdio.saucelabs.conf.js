const {config} = require('./wdio.shared.conf');
const build = `Sauce Labs Headless Desktop build-${ new Date().getTime() }`;

// =====================
// Sauce specific config
// =====================
// See https://webdriver.io/docs/sauce-service.html for more information
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;
config.headless = true;

// ===================================================================================
// Capabilities
// You can find more about constructing the capabilities for real device testing here
// https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
// ===================================================================================
config.capabilities = [
    {
        browserName: 'chrome',
        platformName: 'linux',
        browserVersion: 'latest',
        'sauce:options': {
            build,
        },
    },
    {
        browserName: 'chrome',
        platformName: 'linux',
        browserVersion: 'latest-1',
        'sauce:options': {
            build,
        },
    },
    {
        browserName: 'chrome',
        platformName: 'linux',
        browserVersion: 'latest-2',
        'sauce:options': {
            build,
        },
    },
    {
        browserName: 'firefox',
        platformName: 'linux',
        browserVersion: 'latest',
        'sauce:options': {
            build,
        },
    },
    {
        browserName: 'firefox',
        platformName: 'linux',
        browserVersion: 'latest-1',
        'sauce:options': {
            build,
        },
    },
    {
        browserName: 'firefox',
        platformName: 'linux',
        browserVersion: 'latest-2',
        'sauce:options': {
            build,
        },
    },
];

config.services = config.services.concat('sauce');

exports.config = config;
