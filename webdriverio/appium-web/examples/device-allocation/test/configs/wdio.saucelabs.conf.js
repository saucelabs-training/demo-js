const {config} = require('./wdio.shared.conf');
const build= `WebdriverIO RDC UP build-${new Date().getTime()}`;

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

// ===================================================================================
// Capabilities
// You can find more about constructing the capabilities for real device testing here
// https://wiki.saucelabs.com/display/DOCS/Appium+Capabilities+for+Real+Device+Testing
// ===================================================================================
config.capabilities = [
    /**
     * Capabilities to run on a specific device based on the deviceID
     */
    {
        name: 'Run on deviceID iOS',
        browserName: 'safari',
        // When you have private devices in EU and US
        deviceName: process.env.REGION === 'eu' ? 'iPhone_XS_ws' : 'iPhone_SE_POC119',
        platformName: 'iOS',
        // Extra caps
        cacheId: '17506a5f122', // See the capabilities url as mentioned above
       build
    },
    {
        name: "Run on deviceID Android",
        browserName: 'chrome',
        // When you have private devices in EU and US
        deviceName: process.env.REGION === 'eu' ? 'Samsung_Galaxy_S10_ws' : 'Google_Pixel_3_XL_ws_us',
        platformName: 'Android',
        // Extra caps
        cacheId: '58vi9zm82i', // See the capabilities url as mentioned above
       build
    },
    /**
     * Capabilities to run on a specific device based on its name
     */
    {
        name: 'Run on device description for iOS',
        browserName: 'safari',
        deviceName: 'iPhone XS',
        platformName: 'iOS',
        // Extra caps
        cacheId: 'e7s54tyw5g', // See the capabilities url as mentioned above
       build
    },
    {
        name: "Run on device description for Android",
        browserName: 'chrome',
        deviceName: 'Samsung Galaxy S10',
        platformName: 'Android',
        // Extra caps
        cacheId: 'tl5lps3go1', // See the capabilities url as mentioned above
       build
    },
    /**
     * Capabilities to run on a 'random' device based on a regular expression
     * This will give a device based on:
     * - matching regular expression
     * - direct availability
     */
    {
        name: 'Run on deviceName regex iOS - iPhone [678]?.*',
        browserName: 'safari',
        deviceName: 'iPhone [678]?.*',
        platformName: 'iOS',
        // Extra caps
        cacheId: 'vvqb5g7lr3', // See the capabilities url as mentioned above
        // Specs are not mentioned here so it will run all tests
        // from ./test/specs/
        build
    },
    {
        name: "Run on deviceName regex Android - Samsung Galaxy S?.*",
        browserName: 'chrome',
        deviceName: 'Samsung Galaxy S?.*',
        platformName: 'Android',
        // Extra caps
        cacheId: '4hn1znudgm', // See the capabilities url as mentioned above
        // Specs are not mentioned here so it will run all tests
        // from ./test/specs/
        build
    },
    /**
     * Capabilities to run on a major version of the OS
     */
    {
        name: 'Run on major iOS version - 13',
        browserName: 'safari',
        platformName: 'iOS',
        platformVersion: '13',
        // Extra caps
        cacheId: 'bq9jvoctq7', // See the capabilities url as mentioned above
       build
    },
    {
        name: 'Run on major Android version - 7',
        browserName: 'chrome',
        platformName: 'Android',
        platformVersion: '7',
        // Extra caps
        cacheId: 'cvtjmvawq8', // See the capabilities url as mentioned above
       build
    },
    /**
     * Capabilities to run on a minor version of the OS
     */
    {
        name: 'Run on minor iOS version - 12.1',
        browserName: 'safari',
        platformName: 'iOS',
        platformVersion: '12.1',
        // Extra caps
        cacheId: 'em1pf4ab20', // See the capabilities url as mentioned above
       build
    },
    {
        name: 'Run on minor Android version - 7.1',
        browserName: 'chrome',
        platformName: 'Android',
        platformVersion: '7.1',
        // Extra caps
        cacheId: 'cegc4zom7n', // See the capabilities url as mentioned above
       build
    },
    /**
     * Capabilities to run on a patch version of the OS
     */
    {
        name: 'Run on patch iOS version - 12.4.1',
        browserName: 'safari',
        platformName: 'iOS',
        platformVersion: '12.4.1',
        // Extra caps
        cacheId: 'dn7zr1irmc', // See the capabilities url as mentioned above
       build
    },
    {
        name: 'Run on patch Android version - 7.1.2',
        browserName: 'chrome',
        platformName: 'Android',
        platformVersion: '7.1.2',
        // Extra caps
        cacheId: 'itfdqgn5mp', // See the capabilities url as mentioned above
       build
    },
    /**
     * Capabilities to run on a phone only (works for iOS and Android the same)
     */
    {
        name: 'Run iOS phone only',
        browserName: 'safari',
        platformName: 'iOS',
        phoneOnly: true,
        // Extra caps
        cacheId: 'q96a2zipwp', // See the capabilities url as mentioned above
       build
    },
    /**
     * Capabilities to run on a tablet only (works for iOS and Android the same)
     */
    {
        name: 'Run Android tablet only',
        browserName: 'chrome',
        platformName: 'Android',
        tabletOnly: true,
        // Extra caps
        cacheId: 'nn7g8kq8m8', // See the capabilities url as mentioned above
       build
    },
    /**
     * Capabilities to run on private devices only
     */
    {
        name: 'Run iOS private devices only',
        browserName: 'safari',
        platformName: 'iOS',
        privateDevicesOnly: true,
        // Extra caps
        cacheId: 'zr6g2phl4w', // See the capabilities url as mentioned above
        build
    },
    {
        name: 'Run Android private devices only',
        browserName: 'chrome',
        platformName: 'Android',
        privateDevicesOnly: true,
        // Extra caps
        cacheId: 'edvxh39cnd', // See the capabilities url as mentioned above
       build
    },
];

config.services = config.services.concat('sauce');

exports.config = config;
