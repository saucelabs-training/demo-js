let webdriver = require('selenium-webdriver'),
    assert = require('assert'),
    username = process.env.SAUCE_USERNAME,
    accessKey = process.env.SAUCE_ACCESS_KEY,
    /* Change the baseURL to your application URL */
    baseUrl = "https://www.saucedemo.com",
    driver;


describe('Instant Sauce Test Module 3', function() {
    this.timeout(40000);
    /* Now we will add a beforeEach method using the Mocha framework in order to
    set prerequiste tasks for each test case, in this case we're setting the driver capabilities.
     */
    beforeEach(function (done) {
        driver = new webdriver.Builder().withCapabilities({
            'browserName': 'chrome',
            'platform': 'Windows 10',
            'version': 'latest',
            'username': username,
            'accessKey': accessKey,
            'build': 'Onboarding Sample App - NodeJS + Mocha',
            'name': '3-cross-browser'
        }).usingServer("https://@ondemand.saucelabs.com/wd/hub").build();

        driver.getSession().then(function (sessionid) {
            driver.sessionID = sessionid.id_;
        });
        done();
    });

    it('should-open-chrome ', function (done) {
        driver.get(baseUrl);
        driver.getTitle().then(function (title) {
            /* console.log("title is: " + title); */
            assert.equal(title, 'Swag Labs');
            done();
        });
    });

    /* Here we add any post-requisite tasks, such as sending the test results to Sauce Labs.com*/
    afterEach(function () {
        driver.executeScript("sauce:job-result=" + (this.currentTest.state));
        driver.quit();
    });
});
