# JavaScript Demonstration Scripts

[![CircleCI](https://circleci.com/gh/saucelabs-training/demo-js.svg?style=svg)](https://circleci.com/gh/saucelabs-training/demo-js)

This repository will hold multiple NodeJS based automation frameworks and examples which will help you run tests with NodeJS based automation frameworks locally and or in Sauce Labs.

> **DISCLAIMER**\
> The code in these scripts is provided on an "AS-IS" basis without warranty of any kind, either express or implied, including without limitation any implied warranties of condition, uninterrupted use, merchantability, fitness for a particular purpose, or non-infringement.
> These scripts are provided for educational and demonstration purposes only, and should not be used in production. Issues regarding these scripts should be submitted through GitHub. These scripts are maintained by the Technical Services team at Sauce Labs.\
> Some examples in this repository, such as `appium-examples` and `headless-examples`, may require a different account tier beyond free trial. Please contact the [Sauce Labs Sales Team](https://saucelabs.com/contact) for support and information.

## Framework examples
- [WebdriverIO V6 with Jasmine](./webdriverio)
- [TestCafe](./testcafe)
- [NightWatch](./nightwatch)
- [Protractor with Jasmine](./protractor)
- [Puppeteer with Jest](./puppeteer)
- [Screener Runner](./screener-runner)
- [Visual E2E](./visual-e2e) (*in beta*)
- **SauceCTL Testrunner Toolkit**
    - [Cypress](./testrunner-toolkit/cypress)
    - [Playwright with Jest](./testrunner-toolkit/playwright)
    - [Puppeteer with Jest](./testrunner-toolkit/puppeteer)
    - [TestCafe](./testrunner-toolkit/testcafe)
    
- more to follow

The above mentioned frameworks include some best practices.

## Solution Outline
* [Tests that can help you quickly and easily get started with Sauce Labs](https://github.com/saucelabs-training/demo-js/blob/master/on-boarding-modules)
* [W3C examples using Sauce Labs](https://github.com/saucelabs-training/demo-js/tree/master/w3c-example)
* [Tests that use the Headless feature of Sauce Labs](https://github.com/saucelabs-training/demo-js/blob/master/headless-examples) (not included with basic tier or free trial customers)
* [Mobile Examples using Appium on Sauce Labs](https://github.com/saucelabs-training/demo-js/blob/master/appium-examples)
* [Using Biometric login on Sauce Labs](./biometric-login)
* [Using Image Injection on Sauce Labs Real Devices](./image-injection)
* [Up/Download files with Appium](./up-download-file/appium)

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
