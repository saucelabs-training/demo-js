# Sauce Labs On-Boarding JavaScript Examples

The following scripts provide quick examples to test your connection to Sauce Labs. Each script, titled `module<#>-<framework_name>`, represents a module from the "Getting Started" tab in the Sauce labs UI.

### Module List

* [Module 1: Running your first test](#module-1-running-your-first-test)
* [Module 2: Testing against your own application](#module-2-testing-against-your-own-application)
* [Module 3: Adding setup and teardown steps](#module-3-adding-setup-and-teardown-steps)
* [Module 4: Adjusting timeouts, delays, and build tags](#module-4-adjusting-timeouts-delays-and-build-tags)

<br />

### Module 1: Running your first test

Open the script `module1-<framework_name>`, and ensure you've exported (or hardcoded, but not recommended) your [Sauce Labs Account Credentials](https://wiki.saucelabs.com/display/DOCS/Best+Practice%3A+Use+Environment+Variables+for+Authentication+Credentials) in the following lines:

```
username = process.env.SAUCE_USERNAME,
accessKey = process.env.SAUCE_ACCESS_KEY,
```

Run the following command to run the test:

```
npm test module1-<framework_name>
```

<br />

### Module 2: Testing against your own application

Open the script `module2-<framework_name>`. Edit the following line with your own application URL:

```
baseUrl="https://www.saucedemo.com",
```

and also edit the following line with your web application's page title that appears in the browser tab.

```
assert.equal(title, 'Swag Labs');
```
Please take notice that if your application is not publicly available the test will fail to make a connection with Sauce Labs. Please read the following wiki page on how to [Setup Sauce Connect Proxy](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy) to ensure you're tests can run on Sauce Labs.

<br />

### Module 3: Adding `setup` and `teardown` Steps

Open the script `module3-<framework_name>`. Please notice how the script contains a `before` and `after` function.

###### Mocha Framework Examples
`before`:
```
beforeEach(async function () {
        driver = await new webdriver.Builder().withCapabilities({
        	...
        }).usingServer("https://ondemand.saucelabs.com/wd/hub").build();

        await driver.getSession().then(function (sessionid) {
            driver.sessionID = sessionid.id_;
        });
    });
```

`after`
```
afterEach(async function() {
        await driver.executeScript("sauce:job-result=" + (this.currentTest.state));
        await driver.quit();
    });
```

This follows an automated testing best practice; setting prerequisite and postrequisite tasks for each test suite. In this example, we move our setup tasks (setting test capability options) and our teardown tasks (closing the Sauce Labs session and returning the test result) into separate functions.

<br />

### Module 4: Adjusting timeouts, delays, and build tags

Open the script `module4-<framework_name>`. Please notice that the following lines contain some specific `driver` capabilities:

```
'maxDuration': 3600,
'idleTimeout': 1000,
'tags': tags
```

These test configuration options, allow you to control how long a session will wait for a new test command (`idleTimeout`), the maximum duration for the Sauce Labs VM lifecycle  (`maxDuration`), and the ability to filter test results by specific keywords (`tags`). 

Please read the following wiki page to learn more about [setting build tags](https://wiki.saucelabs.com/display/DOCSDEV/Best+Practice%3A+Use+Build+IDs%2C+Tags%2C+and+Names+to+Identify+Your+Tests) and [controlling build timeouts](https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options#TestConfigurationOptions-MaximumTestDuration).