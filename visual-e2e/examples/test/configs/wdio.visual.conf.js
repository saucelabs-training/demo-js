exports.config = {
    // ====================
    // More information about the configuration is found here https://webdriver.io/docs/configurationfile.html
    // ====================
    runner: 'local',
    specs: [
        './test/specs/**/visual.crossplatform*.js'
    ],
    maxInstances: 100,
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    reporters: ['spec'],
    services: [],

    //Screener Configuration
    hostname: 'hub.screener.io',
    port: 443,
    protocol: 'https',
    path: '/wd/hub',
    region: process.env.REGION || 'us',
    capabilities: ['1280x1024',
        '1920x1080',
        '375x812',
        '414x736',
        '360x740'].map(viewportSize => (
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
                viewportSize: `${viewportSize}`
            }
        }
    ))
};
