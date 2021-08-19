

exports.config = {
    // ====================
    // More information about the configuration is found here https://webdriver.io/docs/configurationfile.html
    // ====================
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 100,
    logLevel: 'warn',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com/',
    waitforTimeout: 30000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    reporters: ['spec'],
    services: [],
    //Screener Configuration
    hostname: 'hub.screener.io',
    port: 443,
    protocol: 'https',
    path: '/wd/hub',

    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
