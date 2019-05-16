let webdriver = require('selenium-webdriver'),
    assert = require('assert'),
    /* Use a run configuration and/or a bash profile to set your environment variables,
    for more information on how to do this, please visit:
    https://wiki.saucelabs.com/display/DOCS/Best+Practice%3A+Use+Environment+Variables+for+Authentication+Credentials
     */
    username = process.env.SAUCE_USERNAME,
    accessKey = process.env.SAUCE_ACCESS_KEY,

    /* Change the baseURL to your application URL */
    baseUrl = "https://www.saucedemo.com",
    driver;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

describe('Instant Sauce Test Module 2', function() {
    it('should-open-safari', function (done) {
        driver = new webdriver.Builder().withCapabilities({
            'browserName': 'safari',
            'platform': 'macOS 10.13',
            'version': '11.1',
            'username': username,
            'accessKey': accessKey,
            'build': 'Onboarding Sample App - NodeJS + Jasmine',
            'name': '2-user-site',
            'tunnelIdentifier': 'demo-js-tunnel'
        }).usingServer("https://ondemand.saucelabs.com/wd/hub").build();

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