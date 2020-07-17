exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    hostname: 'staging-hub.screener.io',
    port: 80,
    protocol: 'http',
    path: '/wd/hub',
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        'sauce:options': {
            username: config.user,
            accesskey: config.accessKey
        },
        'sauce:visual': {
            apiKey: process.env.SCREENER_API_KEY,
            projectName: 'demo-js',
            viewportSize: '1280x1024'
        }
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 30000,
    connectionRetryCount: 2,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 30000
    },
}
