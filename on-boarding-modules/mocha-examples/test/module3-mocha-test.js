const promise = require('selenium-webdriver');
let expect = require('chai').expect;
let webdriver = require('selenium-webdriver');

promise.USE_PROMISE_MANAGER = false;
/* Use a run configuration and/or a bash profile to set your environment variables,
for more information on how to do this, please visit:
https://wiki.saucelabs.com/display/DOCS/Best+Practice%3A+Use+Environment+Variables+for+Authentication+Credentials
 */
let username = process.env.SAUCE_USERNAME,
    accessKey = process.env.SAUCE_ACCESS_KEY,
    /* Change the baseURL to your application URL */
    baseUrl = "https://www.saucedemo.com",
    driver;


describe('Instant Sauce Test Module 3', function() {
    this.timeout(40000);
    /* Now we will add a beforeEach method using the Mocha framework in order to
    set prerequiste tasks for each test case, in this case we're setting the driver capabilities.
     */
    beforeEach(async function () {
        driver = await new webdriver.Builder().withCapabilities({
            'browserName': 'chrome',
            'platformName': 'Windows 10',
            'browserVersion': 'latest',
            /* required for w3c protocol */
            'goog:chromeOptions' : { 'w3c' : true },
            'sauce:options': {
                'username': username,
                'accessKey': accessKey,
                'build': 'Onboarding Sample App - NodeJS + Mocha',
                'name': '3-cross-browser'
            }
        }).usingServer("https://ondemand.saucelabs.com/wd/hub").build();

        await driver.getSession().then(function (sessionid) {
            driver.sessionID = sessionid.id_;
        });
    });

    /* Here we add any post-requisite tasks, such as sending the test results to Sauce Labs.com*/
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
