const promise = require('selenium-webdriver');
let expect = require('chai').expect;
let webdriver = require('selenium-webdriver');

promise.USE_PROMISE_MANAGER = false;
/* Use a run configuration and/or a bash profile to set your environment variables, */
/* for more information on how to do this, please visit:
https://wiki.saucelabs.com/display/DOCS/Best+Practice%3A+Use+Environment+Variables+for+Authentication+Credentials
*/
let username = process.env.SAUCE_USERNAME,
    accessKey = process.env.SAUCE_ACCESS_KEY,
    /* Change the baseURL to your application URL */
    baseUrl = "https://www.saucedemo.com",
    driver;

describe('Instant Sauce Test Module 2', function() {
    this.timeout(40000);
    beforeEach(async function () {
        driver = await new webdriver.Builder().withCapabilities({
            'browserName': 'safari',
            'platformName': 'macOS 10.13',
            'browserVersion': 'latest',
            'sauce:options': {
                'username': username,
                'accessKey': accessKey,
                'build': 'Onboarding Sample App - NodeJS + Mocha',
                'name': '2-user-site'
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

    it('should-open-safari ', async function() {
        await driver.get(baseUrl);
        const title = await driver.getTitle();
        console.log('Page Title is: ' + title);
        expect(title).equals('Swag Labs');
    });
});