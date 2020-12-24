const {config} = require('./wdio.shared.sauce.mobile.conf');
const build = `Android Chrome WebdriverIO-V6 Appium ${config.appiumVersion} build-${new Date().getTime()}`;

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
//
// For configuring an Emulator please check
// https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
config.capabilities = [
    /**
     * Android Chrome
     */
    {
        build: build,
        browserName: 'Chrome',
        platformName: 'Android',
        platformVersion: '8.1',
        deviceName: 'Android GoogleAPI Emulator',
    },
    {
        build: build,
        browserName: 'Chrome',
        platformName: 'Android',
        platformVersion: '9.0',
        deviceName: 'Android GoogleAPI Emulator',
    },
    {
        build: build,
        browserName: 'Chrome',
        platformName: 'Android',
        platformVersion: '10.0',
        deviceName: 'Android GoogleAPI Emulator',
    },
    {
        build: build,
        browserName: 'Chrome',
        platformName: 'Android',
        platformVersion: '11.0',
        deviceName: 'Android GoogleAPI Emulator',
    }
];

if (config.appiumVersion !== undefined && config.appiumVersion !== 'default') {
    config.capabilities.forEach(capability => {
        capability.appiumVersion = config.appiumVersion;
    });
}

exports.config = config;
