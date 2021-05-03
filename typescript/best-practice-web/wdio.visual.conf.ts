const sauceOptions = {
    username: process.env.SAUCE_USERNAME,
    accesskey: process.env.SAUCE_ACCESS_KEY
};
const visualOptions = {
    apiKey: process.env.SCREENER_API_KEY,
    projectName: 'Sauce Demo',
    scrollAndStitchScreenshots: true
};

exports.config = {
    // ====================
    // More information about the configuration is found here https://webdriver.io/docs/configurationfile.html
    // ====================
    runner: 'local',
    specs: [
        './test/specs/**/visual*.ts'
    ],
    maxInstances: 100,
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 0,
    framework: 'jasmine',
    reporters: ['spec'],
    jasmineOpts: {
        defaultTimeoutInterval: 60000,
    },
    services: [],

    //Screener Configuration
    hostname: 'hub.screener.io',
    port: 443,
    protocol: 'https',
    path: '/wd/hub',
    region: process.env.REGION || 'us',
    capabilities: [
        {
            //Desktop A 28%: https://www.w3schools.com/browsers/browsers_display.asp
            browserName: 'chrome',
            platformName: 'windows 10',
            browserVersion: 'latest',
            'sauce:options': {
                ...sauceOptions,
            },
            'sauce:visual': {
                ...visualOptions,
                viewportSize: '1280x1024'
            }
        },
        {
            //Desktop B 20%: https://www.w3schools.com/browsers/browsers_display.asp
            browserName: 'chrome',
            platformName: 'windows 10',
            browserVersion: 'latest',
            'sauce:options': {
                ...sauceOptions,
            },
            'sauce:visual': {
                ...visualOptions,
                viewportSize: '1920x1080'
            }
        },
        {
            //iphone X
            browserName: 'safari',
            platformName: 'macOS 11.00',
            browserVersion: 'latest',
            'sauce:options': {
                ...sauceOptions,
            },
            'sauce:visual': {
                ...visualOptions,
                viewportSize: '375x812'
            }
        },
        {
            //iphone 6-8
            browserName: 'safari',
            platformName: 'macOS 11.00',
            browserVersion: 'latest',
            'sauce:options': {
                ...sauceOptions,
            },
            'sauce:visual': {
                ...visualOptions,
                viewportSize: '414x736'
            }
        },
        {
            //Galaxy S8+
            browserName: 'chrome',
            platformName: 'windows 10',
            browserVersion: 'latest',
            'sauce:options': {
                ...sauceOptions,
            },
            'sauce:visual': {
                ...visualOptions,
                viewportSize: '360x740'
            }
        }
    ]
};