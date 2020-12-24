const {config} = require('./wdio.shared.sauce.mobile.conf');
const build = `iOS Safari WebdriverIO-V6 Appium ${config.appiumVersion} build-${new Date().getTime()}`;

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
     * iOS Safari
     */
    {
        build: build,
        browserName: 'safari',
        platformName: 'iOS',
        platformVersion: '12.0',
        deviceName: 'iPhone Simulator',
    },
    {
        build: build,
        browserName: 'safari',
        platformName: 'iOS',
        platformVersion: '13.4',
        deviceName: 'iPhone Simulator',
    },
    {
        build: build,
        browserName: 'safari',
        platformName: 'iOS',
        platformVersion: '14.0',
        deviceName: 'iPhone Simulator',
    },
];

if (config.appiumVersion !== undefined && config.appiumVersion !== 'default') {
    config.capabilities.forEach(capability => {
        capability.appiumVersion = config.appiumVersion;
    });
}

exports.config = config;
