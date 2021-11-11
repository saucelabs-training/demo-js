/**
 * This file holds all the shared config options
 * The rest of the files will extend options
 * More information about the config can be found
 * here https://webdriver.io/docs/configurationfile.html
 */
exports.config = {
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './test/specs/login.spec.js',
        './test/specs/swag.items.list.spec.js',
    ],
    // ============
    // Capabilities
    // ============
    maxInstances: 2,
    // capabilities can be found in the `wdio.local.chrome.conf.js` or `wdio.sauce.conf.js`
    // ===================
    // Test Configurations
    // ===================
    // Retry a spec once if it fails, this could be a WebdriverIO or Driver error
    specFileRetries: 1,
    logLevel: 'silent',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'jasmine',
    reporters: ['spec'],
    jasmineOpts: {
        defaultTimeoutInterval: 60000,
    },
    services: []
};
