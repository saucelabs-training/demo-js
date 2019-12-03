let webdriver = require('selenium-webdriver'),
    /* Change the username and accessKey to your Saucelabs.com credentials
     username = "SAUCE_USERNAME",
     accessKey = "SAUCE_ACCESS_KEY",*/
    username = process.env.SAUCE_USERNAME,
    accessKey = process.env.SAUCE_ACCESS_KEY,
    /* Base URL sets the target test application */
    baseUrl = "https://www.saucedemo.com",
    /* driver instantiates via callback */
    driver;

/* There is latency when testing on Sauce Labs cloud, it's recommended to increase the default timeout */
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

/* The describe() function is a way to group your tests together and set test suite parameters like timeouts */
/* The `x` in front of the describe() function indicates this test suite will be skipped. */
/* Enter your Sauce Labs credentials and then remove the `x` to run this test suite */

xdescribe('Instant Sauce Test Module 1', function() {
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
                'build': 'Onboarding Sample App - NodeJS + Jasmine',
                'name': '1-first-test'
            }
        }).usingServer("https://@ondemand.saucelabs.com/wd/hub").build();
        /* The driver navigates to the target application, stored in this variable baseUrl*/
        driver.get(baseUrl);
        /* The driver grabs the title of the web page and displays it in your console */
        driver.getTitle().then(function (title) {
            console.log("title is: " + title);
            /* Jasmine uses the `expect` method to assert whether or not the test passed */
            expect(title).toBe('Swag Labs');
        });

        /* This sends the results to Sauce Labs.com. */
        driver.executeScript("sauce:job-result=" + (true ? "passed" : "failed"));

        /* This tears down the current WebDriver session and ends the test method*/
        driver.quit();
        done();
    });
});