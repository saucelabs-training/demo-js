# WebdriverIO, Sauce Labs Mobile Web and W3C on Emulators/Simulators
This folder contains an example on how to run WebdriverIO tests in the Sauce Labs Emulator/Simulator cloud with W3C 
capabilities.

> **NOTE:** Sauce Labs Real Device cloud is currently not W3C compliant, only the Sauce Labs Emulators and Simulators
> are. All examples in this repository are focussed on those Emulators and Simulators.

## W3C capabilities
More information about the W3C capabilities and Sauce Labs can be found
[here](https://wiki.saucelabs.com/display/DOCS/W3C+Capabilities+Support). An example configuration on how to use this
with WebdriverIO can be found in this [test/configs/wdio.saucelabs.conf.js](./test/configs/wdio.saucelabs.conf.js)-file.

All Appium capabilities, see [this link](http://appium.io/docs/en/writing-running-appium/caps/)should be prefixed with 
`appium:{capability-name}`

## Install dependencies
You can install all dependencies by running the following command

    npm install

This will install all needed dependencies that are listed in the `package.json`-file

> NOTE: Make sure you are in the folder `webdriverio/webdriver/examples/w3c` when you execute this command

## Run tests on Sauce Labs
You can run your tests on Sauce Labs US DC with this command

    npm run test.saucelabs.us

You can run your tests on Sauce Labs EU DC with this command

    npm run test.saucelabs.eu
