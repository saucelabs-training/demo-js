let webdriver = require('selenium-webdriver'),
    username = process.env.SAUCE_USERNAME,
    accessKey = process.env.SAUCE_ACCESS_KEY,
    /* Change the baseURL to your application URL */
    baseUrl = "https://www.saucedemo.com",
    driver;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
describe('Instant Sauce Test Module 3', function() {
    /* Now we will add a beforeEach method using the Jasmine framework in order to
    set prerequisite tasks for each test case, in this case we're setting the driver capabilities.
     */
    beforeEach(function (done) {
        driver = new webdriver.Builder().withCapabilities({
            'browserName': 'chrome',
            'platformName': 'Windows 10',
            'browserVersion': 'latest',
            /* required for w3c protocol */
            'goog:chromeOptions' : { 'w3c' : true },
            'sauce:options': {
                'username': username,
                'accessKey': accessKey,
                'build': 'Onboarding Sample App - NodeJS + Jasmine',
                'name': '3-cross-browser'
            }
        }).usingServer("https://ondemand.saucelabs.com/wd/hub").build();

        driver.getSession().then(function (sessionid) {
            driver.sessionID = sessionid.id_;
            return sessionid;
        });
        done();
    });

    /* Here we add any post-requisite tasks, such as sending the test results to Sauce Labs.com*/
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