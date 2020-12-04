const {config} = require('./wdio.shared.conf');
const build = `Android Chrome WebdriverIO-V6 build-${new Date().getTime()}`
const appiumVersion = process.env.npm_config_appium_version

// =========================
// Sauce Simulator specific config
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
     * Android Chrome
     */
    {
        name: "Android 8.1 Web Test",
        build: build,
        browserName: 'Chrome',
        platformName: 'Android',
        platformVersion: '8.1',
        deviceName: 'Android GoogleAPI Emulator',
    },
    {
        name: "Android 9.0 Web Test",
        build: build,
        browserName: 'Chrome',
        platformName: 'Android',
        platformVersion: '9.0',
        deviceName: 'Android GoogleAPI Emulator',
    },
    {
        name: "Android 10 Web Test",
        build: build,
        browserName: 'Chrome',
        platformName: 'Android',
        platformVersion: '10.0',
        deviceName: 'Android GoogleAPI Emulator',
    },
    {
        name: "Android 11 Web Test",
        build: build,
        browserName: 'Chrome',
        platformName: 'Android',
        platformVersion: '11.0',
        deviceName: 'Android GoogleAPI Emulator',
    }

];

if (appiumVersion !== undefined) {
    config.capabilities.forEach(capability => {
        capability.name += ` - Appium Version ${appiumVersion}`
        capability.appiumVersion = appiumVersion
    });
}

config.services = config.services.concat('sauce');

exports.config = config;
