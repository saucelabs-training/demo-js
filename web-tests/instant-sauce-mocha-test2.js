var webdriver = require('selenium-webdriver'),
    username = process.env.SAUCE_USERNAME,
    accessKey = process.env.SAUCE_ACCESS_KEY,

    /* Change the baseURL to your application URL */
    baseUrl = "https://www.saucedemo.com",
    driver;

describe('Instant Sauce Test Module 1', function() {
    this.timeout(40000);
    it('should-open-safari', function (done) {
        driver = new webdriver.Builder().withCapabilities({
            'browserName': 'safari',
            'platform': 'macOS 10.13',
            'version': '11.1',
            'username': username,
            'accessKey': accessKey,
            'name': this.test.title,
        }).usingServer("http://" + username + ":" + accessKey +
            "@ondemand.saucelabs.com:80/wd/hub").build();

        driver.get(baseUrl);
        driver.getTitle().then(function (title) {
            console.log("title is: " + title);
        });
        driver.quit();
        done();
    });
});