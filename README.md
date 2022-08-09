# JavaScript Demonstration Scripts

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
> framework when using Sauce Labs.

## Framework examples

- [WebdriverIO with Jasmine/Mocha/CucumberJS\*](webdriverio)
  - WebdriverIO with Appium for Native/Hybrid Apps
    - [WebdriverIO Best Practices, including Emulators/Simulators/Real Devices, W3C caps, Page Objects and lots of helpers](webdriverio/appium-web/best-practices)
    - [Examples](webdriverio/appium-app/examples)
      - [Simple Example](webdriverio/appium-app/examples/simple-example)
      - [Native App Gestures](webdriverio/appium-app/examples/gestures)
      - [Using Biometric Login on Sauce Labs](webdriverio/appium-app/examples/biometric-login)
      - [Using Image Injection on Sauce Labs Real Devices](webdriverio/appium-app/examples/image-injection)
      - [Using Uploading and Downloading Files from Sauce Labs Android Emulators, iOS Simulators and Android Real Devices](webdriverio/appium-app/examples/up-download-file)\
        [![WebdriverIO - Appium App - UpDownload files](https://github.com/saucelabs-training/demo-js/actions/workflows/wdio.appium.app.up.download.files.yml/badge.svg)](https://github.com/saucelabs-training/demo-js/actions/workflows/wdio.appium.app.up.download.files.yml)
  - WebdriverIO with Appium for Mobile Web (Chrome/Safari)
    - [WebdriverIO Best Practices, including the use of Page Objects](webdriverio/appium-web/best-practices)\
      ![WebdriverIO - Appium Web - Best Practices](https://github.com/saucelabs-training/demo-js/workflows/WebdriverIO%20-%20Appium%20Web%20-%20Best%20Practices/badge.svg)
    - [Examples](webdriverio/appium-web/examples)
      - [WebdriverIO - Appium Web - Real Device Offline Mode](webdriverio/appium-web/examples/offline-testing)
      - [WebdriverIO - Appium Web - Real Device Allocation](webdriverio/appium-web/examples/device-allocation)\
        ![WebdriverIO - Appium Web - Real Device Allocation](https://github.com/saucelabs-training/demo-js/workflows/WebdriverIO%20-%20Appium%20Web%20-%20Real%20Device%20Allocation/badge.svg)
      - [Sauce Labs Mobile Web and W3C](webdriverio/appium-web/examples/w3c)\
        ![WebdriverIO - Appium Web - W3C on EMUSIM](https://github.com/saucelabs-training/demo-js/workflows/WebdriverIO%20-%20Appium%20Web%20-%20W3C%20on%20EMUSIM/badge.svg)
  - WebdriverIO for Desktop Web (Selenium, but officially WebDriver)
    - [WebdriverIO Async Mode and TypeScript with Best Practices, including the use of Page Objects](webdriverio/webdriver/best-practices)\
      ![WebdriverIO - Webdriver - Best Practices](https://github.com/saucelabs-training/demo-js/workflows/WebdriverIO%20-%20Webdriver%20-%20Async%20Best%20Practices/badge.svg)
    - [Examples](webdriverio/webdriver/examples)
      - [WebdriverIO and Sync Mode with Best Practices](webdriverio/webdriver/examples/sync-mode)\
        ![WebdriverIO - Webdriver - Examples - Sync Mode](https://github.com/saucelabs-training/demo-js/workflows/WebdriverIO%20-%20Webdriver%20-%20Examples%20-%20Sync%20Mode/badge.svg)
      - [WebdriverIO and Chrome Extensions](webdriverio/webdriver/examples/chrome-extension)\
        ![WebdriverIO - Webdriver - Examples - Chrome Extension](https://github.com/saucelabs-training/demo-js/workflows/WebdriverIO%20-%20Webdriver%20-%20Examples%20-%20Chrome%20Extensions/badge.svg)
      - [WebdriverIO and CucumberJS](webdriverio/webdriver/examples/cucumberjs)\
        ![WebdriverIO - Webdriver - Examples - CucumberJS](https://github.com/saucelabs-training/demo-js/workflows/WebdriverIO%20-%20Webdriver%20-%20Examples%20-%20CucumberJS/badge.svg)
      - [WebdriverIO Visual E2E](webdriverio/webdriver/examples/visual-e2e/README.md)\
        [![VisualE2E](https://github.com/saucelabs-training/demo-js/actions/workflows/wdio.webdriver.examples.visuale2e.yml/badge.svg)](https://github.com/saucelabs-training/demo-js/actions/workflows/wdio.webdriver.examples.visuale2e.yml)
      - [WebdriverIO and extendedDebugging](webdriverio/webdriver/examples/extended-debugging)\
        ![WebdriverIO - Webdriver - Examples - Extended Debugging](https://github.com/saucelabs-training/demo-js/workflows/WebdriverIO%20-%20Webdriver%20-%20Examples%20-%20Extended%20Debugging/badge.svg)
      - [WebdriverIO and Sauce Connect](webdriverio/webdriver/examples/sc)\
        ![WebdriverIO - Webdriver - Examples - Sauce Connect](https://github.com/saucelabs-training/demo-js/workflows/WebdriverIO%20-%20Webdriver%20-%20Examples%20-%20Sauce%20Connect/badge.svg)
      - [WebdriverIO and Sauce Labs Headless](webdriverio/webdriver/examples/headless)\
        ![WebdriverIO - Webdriver - Examples - Headless](https://github.com/saucelabs-training/demo-js/workflows/WebdriverIO%20-%20Webdriver%20-%20Examples%20-%20Headless/badge.svg)
      - [WebdriverIO and Sauce Labs Front-End Performance](webdriverio/webdriver/examples/performance)\
        ![WebdriverIO - Webdriver - Examples - Front-End Performance](https://github.com/saucelabs-training/demo-js/workflows/WebdriverIO%20-%20Webdriver%20-%20Examples%20-%20Front-End%20Performance/badge.svg)
      - [WebdriverIO with Up and Downloading Files](webdriverio/webdriver/examples/up-download)\
        ![WebdriverIO - Webdriver - Examples - Up and Downloading Files](https://github.com/saucelabs-training/demo-js/workflows/WebdriverIO%20-%20Webdriver%20-%20Examples%20-%20UpDownload/badge.svg)
      - [WebdriverIO, Sauce Labs and W3C](webdriverio/webdriver/examples/w3c)\
        ![WebdriverIO - Webdriver - Examples - W3C](https://github.com/saucelabs-training/demo-js/workflows/WebdriverIO%20-%20Webdriver%20-%20Examples%20-%20W3C/badge.svg)
      - [WebdriverIO with Typescript](webdriverio/webdriver/examples/typescript)\
        ![WebdriverIO - Webdriver - Examples - TS](https://github.com/saucelabs-training/demo-js/workflows/WebdriverIO%20-%20Webdriver%20-%20Examples%20-%20TS/badge.svg)
      - [WebdriverIO with Deque Axe Accessibility](webdriverio/webdriver/examples/deque)
- **SauceCTL Testrunner Toolkit**
  - [Cypress examples](testrunner-toolkit/cypress)
    - [Cypress and a Default Test Set](testrunner-toolkit/cypress/README.md#example-1---minimal-configuration-for-all-tests)\
    ![Playwright with Jest](https://github.com/saucelabs-training/demo-js/workflows/SauceCTL%20-%20Cypress/badge.svg)
    - [Cypress and Cross Browser Testing on Sauce Labs](testrunner-toolkit/cypress/README.md#example-3---cross-browser-tests)
    - [Cypress and Cross Browser Testing browser versioning](testrunner-toolkit/cypress/README.md#example-4---cross-versions-tests)
    - [Cypress and Testing in Parallel](testrunner-toolkit/cypress/README.md#example-2---parallel-tests)
  - [Playwright with Jest](testrunner-toolkit/playwright)\
    ![Playwright with Jest](https://github.com/saucelabs-training/demo-js/workflows/SauceCTL%20-%20Playwright/badge.svg)
  - [Puppeteer with Jest](testrunner-toolkit/puppeteer)
  - [TestCafe](testrunner-toolkit/testcafe)\
    ![Playwright with Jest](https://github.com/saucelabs-training/demo-js/workflows/SauceCTL%20-%20TestCafe/badge.svg)
  - [Dependencies Examples](testrunner-toolkit/dependencies-example)
- [Screener Runner (DEPRECATED!! Move to Visual E2E)](screener-runner)
- [NightWatch](nightwatch)
  - NightWatch for Desktop Web (Selenium, but officially WebDriver)
    - [Examples](nightwatch/webdriver/examples)
      - [NightWatch Desktop Web: Update Sauce Status](nightwatch/webdriver/examples/update-sauce)
  - NightWatch for Mobile Web (Chrome/Safari)
    - [Examples](nightwatch/appium-web/examples)
      - [Nightwatch Mobile Web: Update Sauce Status Real Devices](nightwatch/appium-web/examples/update-sauce-real-devices)
- [Protractor with Jasmine](protractor)
  - Protractor for Desktop Web (Selenium)
    - [Protractor "Best Practices"](protractor/selenium/best-practices)
  - Protractor for Mobile Web (Appium)
    - [Examples](webdriverio/webdriver/examples)
      - [Real Devices and Sauce Labs](protractor/appium-web/examples/real-devices)
- [Puppeteer with Jest](puppeteer)

> \* The connection to Sauce Labs doesn't depend on using Mocha, Jasmine or CucumberJS. Please check the
> [frameworks](https://webdriver.io/docs/frameworks.html) page of WebdriverIO on how to implement a different framework then
> the used framework here in this repository.

## Prerequisites

In order to run these scripts you must complete the following prerequisite steps:

- Install [Git](prerequisites.md#install-git)
- Install [Node/NPM](prerequisites.md#install-and-nodejs-and-npm)
- (Optional) Install an [IDE](prerequisites.md#install-an-ide)

> #### Try Demo in Gitpod
>
> Select the button below to try this demo in [Gitpod](https://www.gitpod.io/)
>
> [![Open in Gitpod](https://github.com/saucelabs-training/demo-js/blob/master/open-in-gitpod.png)](https://gitpod.io/#https://github.com/saucelabs-training/demo-js)
>
> After the gitpod session launches, navigate to the terminal and run the following commands to save your [Sauce Labs Credentials](https://app.saucelabs.com/user-settings) to gitpod as environment variables:
>
> ```
> eval $(gp env -e SAUCE_USERNAME=******)
> eval $(gp env -e SAUCE_ACCESS_KEY=******)
> ```
>
> Click the following link if you're unsure how to [access your Sauce Labs credentials.](https://wiki.saucelabs.com/display/DOCS/Best+Practice%3A+Use+Environment+Variables+for+Authentication+Credentials)
> Also, if you start a new terminal in gitpod, you have to run the following command to reset envrionment variables:
>
> ```
> eval $(gp env -e)
> ```
>
> For more information consult the [gitpod documentation](https://www.gitpod.io/docs/47_environment_variables/)

### Run A Sample Test

1. Clone the Repository and set your [Sauce Labs Credentials](https://app.saucelabs.com/user-settings):

   ```
   git clone https://github.com/saucelabs-training/demo-js.git
   export SAUCE_USERNAME=********
   export SAUCE_ACCESS_KEY=*******
   ```

2. Please check all README.md files in each framework example to see what you need to do to get the tests running.
