let webdriver = require('selenium-webdriver'),
    /* Change the username and accessKey to your Saucelabs.com credentials */
    username = "SAUCE_USERNAME",
    accessKey = "SAUCE_ACCESS_KEY",
    /* Base URL sets the target test application */
    baseUrl = "https://www.saucedemo.com",
    /* driver instantiates via callback */
    driver = new webdriver.Builder().withCapabilities({
        'browserName': 'safari',
        'platformName': 'macOS 10.13',
        'browserVersion': '11.1',
        /* Pass Sauce User Name and Access Key */
        'sauce:options': {
            'username': username,
            'accessKey': accessKey,
            'build': 'Onboarding Sample App - NodeJS',
            'name': '1-first-test',
            'public': 'public'
        }
    }).usingServer("https://@ondemand.saucelabs.com:443/wd/hub").build();

/* The driver navigates to the target application, stored in this variable baseUrl*/
driver.get(baseUrl);

/* The driver grabs the title of the web page and displays it in your console */
driver.getTitle().then(function (title) {
    if (title === 'Swag Labs'){
        /* This sends a "pass" job status to Sauce Labs.com */
        driver.executeScript("sauce:job-result=" + ("passed"));
        console.log("Test Passed!")
    } else {
        /* This sends a "fail" job status to Sauce Labs.com */
        driver.executeScript("sauce:job-result=" + ("failed"));
        console.log("This error was most likely caused because you didn't enter your Sauce Labs 'username' and 'accessKey'")
    }
});

/* This tears down the current WebDriver session and ends the test method*/
driver.quit();