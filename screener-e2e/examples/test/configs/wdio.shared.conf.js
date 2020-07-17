exports.config = {
    // ====================
    // More information about the configuration is found here https://webdriver.io/docs/configurationfile.html
    // ====================
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 100,
    logLevel: 'debug',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    reporters: ['spec'],
    services: [],
    //Screener Configuration
    hostname: 'staging-hub.screener.io',
    port: 80,
    protocol: 'http',
    path: '/wd/hub'
};
