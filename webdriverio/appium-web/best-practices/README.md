# WebdriverIO Best Practices, including the use of Page Objects
This folder contains best practices for WebdriverIO, including the use of Page Objects.

## Install dependencies
You can install all dependencies by running the following command

    npm install

This will install all needed dependencies that are listed in the `package.json`-file

> NOTE: Make sure you are in the folder `webdriverio/appium-web/best-practices` when you execute this command

## Run Android and iOS tests on Sauce Labs
You can run your mobile web tests on Sauce Labs US DC with these commands

    npm run test.saucelabs.ios.us
    npm run test.saucelabs.android.us

You can run your mobile web tests on Sauce Labs EU DC with these commands

    npm run test.saucelabs.ios.us
    npm run test.saucelabs.android.us

### You can specify an Appium Version
The default Appium Version provided by Sauce Labs can be overridden as seen in the following commands

    npm run test.saucelabs.ios.us --appium_version=1.17.1
    npm run test.saucelabs.android.us --appium_version=1.15.0

It will spin up multiple [emulators](test/configs/wdio.saucelabs.android.conf.js) or 
[simulators](test/configs/wdio.saucelabs.ios.conf.js).
