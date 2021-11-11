exports.config = {
    // ====================
    // More information about the configuration is found here https://webdriver.io/docs/configurationfile.html
    // ====================
    runner: 'local',
    specs: [
        './test/specs/simple.spec.js'
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
    // ====================
    // Add Sauce Connect
    // ====================
    // services: [
    //     ['sauce', {
    //         sauceConnect: true
    //     }]
    // ],
    //Screener Configuration
    hostname: 'hub.screener.io',
    port: 443,
    protocol: 'https',
    path: '/wd/hub',
    capabilities: [
        {
            browserName: 'chrome',
            platformName: 'macOS 10.15',
            browserVersion: 'latest',
            'sauce:options': {
                username: process.env.SAUCE_USERNAME,
                accesskey: process.env.SAUCE_ACCESS_KEY
            },
            'sauce:visual': {
                apiKey: process.env.SCREENER_API_KEY,
                projectName: 'demo-js',
                viewportSize: `1920x1080`,
                failOnNewStates: false
            }
        }
    ],

    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    }
};
