let webdriver = require('selenium-webdriver'),
    assert = require('assert'),
    /* Use a run configuration and/or a bash profile to set your environment variables,
    for more information on how to do this, please visit:
    https://wiki.saucelabs.com/display/DOCS/Best+Practice%3A+Use+Environment+Variables+for+Authentication+Credentials
     */
    username = process.env.SAUCE_USERNAME,
    accessKey = process.env.SAUCE_ACCESS_KEY,

    /* Change the baseURL to your application URL */
    baseUrl = "https://www.saucedemo.com";

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

describe('Instant Sauce Test Module 2', function() {
    let driver;
    beforeEach(function (done) {
        driver = new webdriver.Builder().withCapabilities({
            'browserName': 'safari',
            'platformName': 'macOS 10.13',
            'browserVersion': 'latest',
            'sauce:options': {
                'username': username,
                'accessKey': accessKey,
                'build': 'Onboarding Sample App - NodeJS + Jasmine',
                'name': '2-user-site'
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

    it('should-open-safari', done => {
        driver.get(baseUrl);
        driver.getTitle().then(function (title) {
            expect(title.toString()).toBe('Swag Labs');
            done();
        });
    });

});