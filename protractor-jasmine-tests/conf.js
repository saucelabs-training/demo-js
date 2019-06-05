const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
exports.config = {
    /*sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,*/
    sauceRegion: 'us',
    seleniumAddress: 'https://ondemand.saucelabs.com/wd/hub',
    specs: ['specs/*spec.js'],

    multiCapabilities: [{
        browserName: 'chrome',
        version: 'latest',
        platform: 'Windows 10',
        name: 'chrome-protractor-test',
        build: 'Sample Protractor Tests',
        username: process.env.SAUCE_USERNAME,
        accessKey: process.env.SAUCE_ACCESS_KEY,
        shardTestFiles: true,
        maxInstances: 25
    },{
        browserName: 'firefox',
        version: 'latest',
        platform: 'Windows 10',
        name: 'firefox-protractor-test',
        build: 'Sample Protractor Tests',
        username: process.env.SAUCE_USERNAME,
        accessKey: process.env.SAUCE_ACCESS_KEY,
        shardTestFiles: true,
        maxInstances: 25
    }],

    /**
     * The below version should work for the upcoming Selenium 4 release and w3c protocol,
     * although currently the protractor webdriver manager can't resolve 'sauce:options'
     --------------------------------------------------------------------------------

     browserName: 'chrome',
     browserVersion: 'latest',
     platformVersion: 'Windows 10',
     'sauce:options': {
            username: process.env.SAUCE_USERNAME,
            accessKey: process.env.SAUCE_ACCESS_KEY,
            name: 'chrome-protractor-test',
            build: 'Sample Protractor Tests',
            seleniumVersion: '3.141.59'
        },*/

    baseUrl: 'https://www.saucedemo.com',

    onPrepare: async () => {
        await browser.waitForAngularEnabled(false);
        const caps = await browser.getCapabilities();
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true,
            }
        }));
    },

    framework: 'jasmine',
    SELENIUM_PROMISE_MANAGER: false,

    onComplete: async () => {
        let printSessionId = async (jobName) => {
            let session = await browser.getSession();
            console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
            };
        printSessionId("Insert Job Name Here");
        //await browser.executeScript("sauce:job-result=" + (SpecReporter.valueOf().result());
    },
};