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

describe('Instant Sauce Test Module 2', function() {
    this.timeout(40000);
    it('should-open-safari', function (done) {
        driver = new webdriver.Builder().withCapabilities({
            'browserName': 'safari',
            'platform': 'macOS 10.13',
            'version': '11.1',
            'username': username,
            'accessKey': accessKey,
            'build': 'Onboarding Sample App - NodeJS + Mocha',
            'name': '2-user-site',
            'tunnelIdentifier': 'demo-js-tunnel'
        }).usingServer("https://ondemand.saucelabs.com/wd/hub").build();

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