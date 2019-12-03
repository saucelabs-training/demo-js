/* This code sample uses the headless feature of Sauce Labs, this feature is for invoiced customers only */
const promise = require('selenium-webdriver');
let expect = require('chai').expect;
let webdriver = require('selenium-webdriver');

/* promise manager for selenium-webdriver is going to be deprecated */
/* you must use async/await as an alternative */
promise.USE_PROMISE_MANAGER = false;

let username = process.env.SAUCE_USERNAME,
    accessKey = process.env.SAUCE_ACCESS_KEY,
    appURL = "https://www.saucedemo.com",
    tags = ["sauceDemo", "async", "node", "webdriverjs", "headless" ],
    driver;

describe ('headless chrome test', function() {
    this.timeout(40000);
    beforeEach(async function () {
        driver = await new webdriver.Builder().withCapabilities({
            'browserName': 'chrome',
            'platformName': 'linux',
            'browserVersion': 'latest',
            'goog:chromeOptions' : { 'w3c' : true },
            'sauce:options': {
                'username': username,
                'accessKey': accessKey,
                'seleniumVersion': '3.141.59',
                'build': 'Sample Headless Tests',
                'name': 'headless-chrome-test-js',
                'maxDuration': 3600,
                'idleTimeout': 1000,
                'tags': tags
            }}).usingServer("https://ondemand.us-east-1.saucelabs.com/wd/hub")
            .build();
        await driver.getSession().then(function (sessionid) {
            driver.sessionID = sessionid.id_;
        });
    });

    afterEach(async function() {
        await driver.executeScript("sauce:job-result=" + (this.currentTest.state));
        await driver.quit();
    });

    it('get-title-test', async function() {
        await driver.get(appURL);
        const title = await driver.getTitle();
        console.log('Page Title is: ' + title);
        expect(title).equals('Swag Labs');
    });
});