# WebdriverIO Real Device Offline Mode
This folder contains a set up for WebdriverIO on how to test offline mode with Real Devices. The app under test will be
the Sauce Demo app. This is a Progressive Web App (PWA) and can still work without having an internet connection
(due to caching).

The [`wdio-sauce-service`](https://webdriver.io/docs/sauce-service.html) will take care of:
- connecting to the correct Data Center
- updating the tests with the correct status 

## Install dependencies
You can install all dependencies by running the following command

    npm install
    
This will install all needed dependencies that are listed in the `package.json`-file

> NOTE: Make sure you are in the folder `webdriverio/appium-web/examples/offline-testing` when you execute this command

## Run tests on Sauce Labs
You can run your tests on Sauce Labs US DC with this command

    npm run test.saucelabs.us

You can run your tests on Sauce Labs EU DC with this command

    npm run test.saucelabs.eu
