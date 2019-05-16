let webdriver = require('selenium-webdriver'),
    assert = require('assert'),
    username = process.env.SAUCE_USERNAME,
    accessKey = process.env.SAUCE_ACCESS_KEY,
    /* Change the baseURL to your application URL */
    baseUrl = "https://www.saucedemo.com",
    tags = ["sauceDemo", "module4", "node", "mocha"],
    driver;


describe('Instant Sauce Test Module 4', function() {
    this.timeout(40000);
    beforeEach(function (done) {
        driver = new webdriver.Builder().withCapabilities({
            'browserName': 'chrome',
            'platform': 'Windows 10',
            'version': 'latest',
            'username': username,
            'accessKey': accessKey,
            'build': 'Onboarding Sample App - NodeJS + Mocha',
            'name': '4-best-practices',
            'tunnelIdentifier': 'demo-js-tunnel',
            /* As a best practice, set important test metadata and execution options
            such as build info, tags for reporting, and timeout durations.
             */
            'maxDuration': 3600,
            'idleTimeout': 1000,
            'tags': tags,
        }).usingServer("https://ondemand.saucelabs.com/wd/hub").build();

        driver.getSession().then(function (sessionid) {
            driver.sessionID = sessionid.id_;
        });
        done();
    });

    it('should-open-chrome', function (done) {
        driver.get(baseUrl);
        driver.getTitle().then(function (title) {
            /* console.log("title is: " + title); */
            assert.equal(title, 'Swag Labs');
            done();
        });
    });

    afterEach(function () {
        driver.executeScript("sauce:job-result=" + (this.currentTest.state));
        driver.quit();
    });
});
