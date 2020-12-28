# JavaScript Demonstration Scripts

[![CircleCI](https://circleci.com/gh/saucelabs-training/demo-js.svg?style=svg)](https://circleci.com/gh/saucelabs-training/demo-js)

This repository will hold multiple Node.js based automation frameworks and examples which will help you run tests with
Node.js based automation frameworks locally and or in Sauce Labs.

> **DISCLAIMER**\
> The code in these scripts is provided on an "AS-IS" basis without warranty of any kind, either express or implied,
> including without limitation any implied warranties of condition, uninterrupted use, merchantability, fitness for a
> particular purpose, or non-infringement.
> These scripts are provided for educational and demonstration purposes only, and should not be used in production.
> Issues regarding these scripts should be submitted through GitHub. These scripts are maintained by the Technical 
> Services team at Sauce Labs.\
> Please contact the [Sauce Labs Sales Team](https://saucelabs.com/contact) for support and information.

> Most of the Sauce Labs features will be explained with [WebdriverIO](https://webdriver.io/), the preferred Node.js 
framework when using Sauce Labs.

## Framework examples
- [WebdriverIO with Jasmine*](./webdriverio)
    - WebdriverIO with Appium for Native/Hybrid Apps
        - [Examples](./webdriverio/appium-app/examples)
            - [Native App Gestures](webdriverio/appium-app/examples/gestures)
            - [Using Biometric Login on Sauce Labs](webdriverio/appium-app/examples/biometric-login)
            - [Using Image Injection on Sauce Labs Real Devices](webdriverio/appium-app/examples/image-injection)
            - [Using Uploading and Downloading Files from Sauce Labs Emulators and Real Devices](webdriverio/appium-app/examples/up-download-file)
    - WebdriverIO with Appium for Mobile Web (Chrome/Safari)
        - [WebdriverIO Best Practices, including the use of Page Objects](webdriverio/appium-web/best-practices)
        - [Examples](./webdriverio/appium-web/examples)
            - [Real Device Allocation](./webdriverio/appium-web/examples/device-allocation)
            - [Sauce Labs Mobile Web and W3C](webdriverio/appium-web/examples/w3c)
    - WebdriverIO for Desktop Web (Selenium, but officially WebDriver)
        - [WebdriverIO Best Practices, including the use of Page Objects](webdriverio/webdriver/best-practices)
        - [Examples](webdriverio/webdriver/examples)
            - [WebdriverIO and extendedDebugging](webdriverio/webdriver/examples/extended-debugging)
            - [WebdriverIO and Sauce Connect](webdriverio/webdriver/examples/sc)
            - [WebdriverIO and Sauce Labs Headless](webdriverio/webdriver/examples/headless)
            - [WebdriverIO and Sauce Labs Front-End Performance](webdriverio/webdriver/examples/performance)
            - [WebdriverIO with Up and Downloading Files](webdriverio/webdriver/examples/up-download)
            - [WebdriverIO, Sauce Labs and W3C](webdriverio/webdriver/examples/w3c)
- **SauceCTL Testrunner Toolkit**
    - [Cypress](./testrunner-toolkit/cypress)
    - [Playwright with Jest](./testrunner-toolkit/playwright)
    - [Puppeteer with Jest](./testrunner-toolkit/puppeteer)
    - [TestCafe](./testrunner-toolkit/testcafe)
- [Screener Runner (THIS DEMO PROJECT IS DEPRECATED)](./screener-runner)
- [Visual E2E](./visual-e2e) (*in beta*)
- [NightWatch](./nightwatch)
    - NightWatch for Desktop Web (Selenium, but officially WebDriver)
        - [Examples](./nightwatch/webdriver/examples)
            - [NightWatch Desktop Web: Update Sauce Status](./nightwatch/webdriver/examples/update-sauce)
    - NightWatch for Mobile Web (Chrome/Safari)
        - [Examples](./nightwatch/appium-web/examples)
            - [Nightwatch Mobile Web: Update Sauce Status Real Devices](./nightwatch/appium-web/examples/update-sauce-real-devices)
- [Protractor with Jasmine](./protractor)
    - Protractor for Desktop Web (Selenium)
        - [Protractor "Best Practices"](./protractor/selenium/best-practices)
- [Puppeteer with Jest](./puppeteer)
- [TestCafe](./testcafe)
    - [TestCafe "Best Practices"](./testcafe/best-practices)

> \* The connection to Sauce Labs doesn't depend on using Mocha, Jasmine or CucumberJS. Please check the 
[frameworks](https://webdriver.io/docs/frameworks.html) page of WebdriverIO on how to implement a different framework then 
the used framework here in this repository.

## Prerequisites
In order to run these scripts you must complete the following prerequisite steps:

* Install [Git](./prerequisites.md#install-git)
* Install [Node/NPM](./prerequisites.md#install-and-nodejs-and-npm)
* (Optional) Install an [IDE](./prerequisites.md#install-an-ide)

>   #### Try Demo in Gitpod
>   Select the button below to try this demo in [Gitpod](https://www.gitpod.io/)
>
>  [![Open in Gitpod](https://github.com/saucelabs-training/demo-js/blob/master/open-in-gitpod.png)](https://gitpod.io/#https://github.com/saucelabs-training/demo-js)
>
>   After the gitpod session launches, navigate to the terminal and run the following commands to save your [Sauce Labs Credentials](https://app.saucelabs.com/user-settings) to gitpod as environment variables:
>   ```
>   eval $(gp env -e SAUCE_USERNAME=******)
>   eval $(gp env -e SAUCE_ACCESS_KEY=******)
>   ```
>   Click the following link if you're unsure how to [access your Sauce Labs credentials.](https://wiki.saucelabs.com/display/DOCS/Best+Practice%3A+Use+Environment+Variables+for+Authentication+Credentials)
>   Also, if you start a new terminal in gitpod, you have to run the following command to reset envrionment variables:
>   ```
>   eval $(gp env -e)
>   ```
>  
>   For more information consult the [gitpod documentation](https://www.gitpod.io/docs/47_environment_variables/)

### Run A Sample Test
1. Clone the Repository and set your [Sauce Labs Credentials](https://app.saucelabs.com/user-settings):

    ```
    git clone https://github.com/saucelabs-training/demo-js.git
    export SAUCE_USERNAME=********
    export SAUCE_ACCESS_KEY=*******
    ```
   
2. Please check all README.md files in each framework example to see what you need to do to get the tests running.
