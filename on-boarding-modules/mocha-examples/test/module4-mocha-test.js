const promise = require('selenium-webdriver');
let expect = require('chai').expect;
let webdriver = require('selenium-webdriver');

promise.USE_PROMISE_MANAGER = false;

let username = process.env.SAUCE_USERNAME,
    accessKey = process.env.SAUCE_ACCESS_KEY,
    /* Change the baseURL to your application URL */
    baseUrl = "https://www.saucedemo.com",
    tags = ["sauceDemo", "on-boarding", "node", "mocha" ],
    driver;


describe('Instant Sauce Test Module 4', function() {
    this.timeout(40000);

    beforeEach(async function () {
        driver = await new webdriver.Builder().withCapabilities({
            'browserName': 'chrome',
            'platformName': 'Windows 10',
            'browserVersion': 'latest',
            'goog:chromeOptions' : { 'w3c' : true },
            'sauce:options': {
                'username': username,
                'accessKey': accessKey,
                'build': 'Onboarding Sample App - NodeJS + Mocha',
                'name': '4-best-practices',
                /* As a best practice, set important test metadata and execution options
                such as build info, tags for reporting, and timeout durations.
                */
                'maxDuration': 3600,
                'idleTimeout': 1000,
                'tags': tags
            }
        }).usingServer("https://ondemand.saucelabs.com/wd/hub").build();

        await driver.getSession().then(function (sessionid) {
            driver.sessionID = sessionid.id_;
        });
    });

    afterEach(async function() {
        await driver.executeScript("sauce:job-result=" + (this.currentTest.state));
        await driver.quit();
    });

    it('should open chrome ', async function() {
        await driver.get(baseUrl);
        const title = await driver.getTitle();
        console.log('Page Title is: ' + title);
        expect(title).equals('Swag Labs');
    });
});
