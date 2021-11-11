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
        './test/specs/**/*.js'
    ],
    // ============
    // Capabilities
    // ============
    maxInstances: 100,
    // capabilities can be found in the `wdio.local.chrome.conf.js` or `wdio.saucelabs.conf.js`
    // ===================
    // Test Configurations
    // ===================
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

    // ========
    // Services
    // ========
    services: []
};
