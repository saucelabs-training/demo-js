let webdriver = require('selenium-webdriver'),
    username = process.env.SAUCE_USERNAME,
    accessKey = process.env.SAUCE_ACCESS_KEY,
    /* Change the baseURL to your application URL */
    baseUrl = "https://www.saucedemo.com",
    tags = ["sauceDemo", "module4", "node", "jasmine"],
    driver;

describe('Instant Sauce Test Module 4', function() {

    beforeEach('beforeMethod', done => {
        jasmine.DEFAULT_TIMEOUT = 10000;
        driver = new webdriver.Builder().withCapabilities({
            'browserName': 'chrome',
            'platformName': 'Windows 10',
            'browserVersion': 'latest',
            'goog:chromeOptions' : { 'w3c' : true },
            'sauce:options': {
                'username': username,
                'accessKey': accessKey,
                'build': 'Onboarding Sample App - NodeJS + Jasmine',
                'name': '4-best-practices',
                /* As a best practice, set important test metadata and execution options
                such as build info, tags for reporting, and timeout durations.
                */
                'maxDuration': 3600,
                'idleTimeout': 1000,
                'tags': tags
            }
        }).usingServer("https://ondemand.saucelabs.com/wd/hub").build();

        driver.getSession().then(function (sessionid) {
            driver.sessionID = sessionid.id_;
        });
        done();
    });

    afterEach(function () {
        driver.executeScript("sauce:job-result=" + (true ? "passed" : "failed"));
        return driver.quit();
    });

    it('should-open-chrome', done => {
        driver.get(baseUrl);
        driver.getTitle().then(function (title) {
            expect(title.toString()).toBe('Swag Labs');
            done();
        });
    });
});
