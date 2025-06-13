# WebdriverIO, Sauce Labs Desktop Web and W3C
This folder contains an example on how to run WebdriverIO tests in the Sauce Labs Desktop Web cloud with W3C 
capabilities.

## W3C capabilities
More information about the W3C capabilities and Sauce Labs can be found
[here](https://wiki.saucelabs.com/display/DOCS/W3C+Capabilities+Support). An example configuration on how to use this
with WebdriverIO can be found in this [test/configs/wdio.saucelabs.conf.js](./test/configs/wdio.saucelabs.conf.js)-file.

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
