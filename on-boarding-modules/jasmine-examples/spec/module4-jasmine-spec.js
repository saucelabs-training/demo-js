let webdriver = require('selenium-webdriver'),
    username = process.env.SAUCE_USERNAME,
    accessKey = process.env.SAUCE_ACCESS_KEY,
    /* Change the baseURL to your application URL */
    baseUrl = "https://www.saucedemo.com",
    tags = ["sauceDemo", "module4", "node", "jasmine"],
    driver;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

describe('Instant Sauce Test Module 4', function() {
    beforeEach(function (done) {
        driver = new webdriver.Builder().withCapabilities({
            'browserName': 'chrome',
            'platform': 'Windows 10',
            'version': 'latest',
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
        }).usingServer("https://ondemand.saucelabs.com/wd/hub").build();

        driver.getSession().then(function (sessionid) {
            driver.sessionID = sessionid.id_;
        });
        done();
    });

    it('should-open-chrome', function (done) {
        driver.get(baseUrl);
        driver.getTitle().then(function (title) {
            expect(title).toBe('Swag Labs');
            done();
        });
    });

    afterEach(function () {
        driver.executeScript("sauce:job-result=" + (true ? "passed" : "failed"));
        driver.quit();
    });
});
