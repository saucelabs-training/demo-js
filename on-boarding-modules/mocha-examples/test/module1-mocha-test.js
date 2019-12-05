let webdriver = require('selenium-webdriver'),
    chai = require('chai'),
    assert = chai.assert,
    /* Change the username and accessKey to your Saucelabs.com credentials
    username = "SAUCE_USERNAME",
    accessKey = "SAUCE_ACCESS_KEY",*/
    username = process.env.SAUCE_USERNAME,
    accessKey = process.env.SAUCE_ACCESS_KEY,
    /* Base URL sets the target test application */
    baseUrl = "https://www.saucedemo.com",
    /* driver instantiates via callback */
    driver;

/* The describe() function is a way to group your tests together and set test suite parameters like timeouts */
/* The `x` in front of the describe() function indicates this test suite will be skipped. */
/* Enter your Sauce Labs credentials and then remove the `x` to run this test suite */

xdescribe('Instant Sauce Test Module 1', function() {
    /* There is latency when testing on Sauce Labs cloud, it's recommended to increase the default Timeout from 2000ms */
    this.timeout(40000);
    /* it represents an actual test, the parameters are the title of the test case */
    it('should-open-safari', function (done) {
        /* Instantiate a WebDriver and set browser capabilities */
        driver = new webdriver.Builder().withCapabilities({
            'browserName': 'safari',
            'platformName': 'macOS 10.13',
            'browserVersion': '11.1',
            /* Pass Sauce User Name and Access Key */
            'sauce:options': {
                'username': username,
                'accessKey': accessKey,
                'build': 'Onboarding Sample App - NodeJS + Mocha',
                'name': '1-first-test'
            }
        }).usingServer("https://ondemand.saucelabs.com:443/wd/hub").build();
        /* The driver navigates to the target application, stored in this variable baseUrl*/
        driver.get(baseUrl);
        /* The driver grabs the title of the web page and displays it in your console */
        driver.getTitle().then(function (title) {
            /* console.log("title is: " + title); */
            assert.equal(title, 'Swag Labs');
        });

        /* This sends the results to Sauce Labs.com. */
        /* `currentTest.state` is a part of the runner.js script in the Mocha library. */
        /* Documentation here: https://mochajs.org/api/runner.js.html  */
        driver.executeScript("sauce:job-result=" + (this.currentTest.state));

        /* This tears down the current WebDriver session and ends the test method*/
        driver.quit();
        done();
    });
});