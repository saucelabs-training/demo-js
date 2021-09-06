# WebdriverIO, Sauce Labs Desktop and Chrome extensions
This folder contains an example on how to run WebdriverIO tests in the Sauce Labs Desktop Web cloud Chrome Extensions.

## Chrome Extensions
Chrome extensions can automatically be installed by Chrome when you initially start the browser. Please check:
- the [`wdio.saucelabs.conf.ts`](./test/configs/wdio.saucelabs.conf.ts)-file for the steps to take to configure the browser
- the [`chrome.extension.spec.ts`](./test/specs/chrome.extension.spec.ts)-file for all steps for the test execution

This example uses the [Adblock Plus - free ad blocker](https://chrome.google.com/webstore/detail/adblock-plus-free-ad-bloc/cfhdojbkjhnklbpkdaibdccddilifddb) 
extension as an example.

## Install dependencies
You can install all dependencies by running the following command

    npm install

This will install all needed dependencies that are listed in the `package.json`-file

> NOTE: Make sure you are in the folder `webdriverio/webdriver/examples/chrome-extension` when you execute this command

## Run tests on Sauce Labs
> **NOTE:** The test, which can be found [here](./test/specs/chrome.extension.spec.ts), has extra logs which are executed
> with `browser.execute('sauce:context={string}');` to make debugging extra clear.

You can run your tests on Sauce Labs EU DC with this command

    npm run test.saucelabs.eu

You can run your tests on Sauce Labs US DC with this command

    npm run test.saucelabs.us
