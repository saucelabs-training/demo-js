/**
 * This file holds all the shared config options
 * The rest of the files will extend options
 * More information about the config can be found
 * here https://webdriver.io/docs/configurationfile.html
 */
export const config: WebdriverIO.Config = {
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './test/specs/**/*.ts'
    ],
    // ============
    // Capabilities
    // ============
    maxInstances: 100,
    // capabilities can be found in the `wdio.local.chrome.conf.ts` or `wdio.saucelabs.conf.ts`
    capabilities: [],
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'silent',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60 * 1000,
    },

    // ========
    // Services
    // ========
    services: []
};
