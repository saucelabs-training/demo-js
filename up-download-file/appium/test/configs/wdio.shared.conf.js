/**
 * More information about the WebdriverIO config can be found here:
 * https://webdriver.io/docs/configurationfile.html
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
    // The specific capabilities can be found in the separate files
    maxInstances: 10,

    // ===================
    // Test Configurations
    // ===================
    logLevel: 'silent',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 45000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    // Empty for now, will be filled with the separate configs
    services: [],
    framework: 'jasmine',
    reporters: ['spec'],
    jasmineNodeOpts: {
        helpers: [require.resolve('@babel/register')],
        defaultTimeoutInterval: 90000,
    },
}
