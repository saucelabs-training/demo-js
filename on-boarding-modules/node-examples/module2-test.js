let webdriver = require('selenium-webdriver'),
    /* Use a run configuration and/or a bash profile to set your environment variables,
    for more information on how to do this, please visit:
    https://wiki.saucelabs.com/display/DOCS/Best+Practice%3A+Use+Environment+Variables+for+Authentication+Credentials
     */
    username = process.env.SAUCE_USERNAME,
    accessKey = process.env.SAUCE_ACCESS_KEY,

    /* Change the baseURL to your application URL */
    baseUrl = "https://www.saucedemo.com",
    driver = new webdriver.Builder().withCapabilities({
        'browserName': 'safari',
        'platformName': 'macOS 10.13',
        'browserVersion': '11.1',
        /* Pass Sauce User Name and Access Key */
        'sauce:options': {
            'username': username,
            'accessKey': accessKey,
            'build': 'Onboarding Sample App - NodeJS',
            'name': '2-user-site',
            'public': 'public'
        }
    }).usingServer("https://ondemand.saucelabs.com:443/wd/hub").build();
driver.get(baseUrl);

driver.getTitle().then(function (title) {
    if (title === 'Swag Labs'){
        driver.executeScript("sauce:job-result=" + ("passed"));
        console.log("Test Passed!")

    } else {
        driver.executeScript("sauce:job-result=" + ("failed"));
        console.log("This error was most likely caused because you didn't enter your Sauce Labs 'username' and 'accessKey'")

    }
});
driver.quit();