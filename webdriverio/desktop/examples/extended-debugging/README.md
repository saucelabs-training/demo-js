# WebdriverIO and extendedDebugging
This folder contains a simple set up for WebdriverIO and the power of `extendedDebugging`.
More information about `extendedDebugging` can be found [here](https://wiki.saucelabs.com/pages/viewpage.action?pageId=70072943).

Below you will find an example where the Sauce Demo app images are replaced with images from Friends \
![Intercept example](./assets/intercept.gif "Intercept example")

## Install dependencies
You can install all dependencies by running the following command

    npm install
    
This will install all needed dependencies that are listed in the `package.json`-file

> NOTE: Make sure you are in the folder `webdriverio/webdriver/examples/extended-debugging` when you execute this command
## Important information
Please read the information about [`extendedDebugging`](https://wiki.saucelabs.com/pages/viewpage.action?pageId=70072943) before using it.

- JavaScript Console Logs and HAR Files will only be generated for Chrome and Firefox
- The test examples as shown [here](./test/specs/extended.debugging.spec.js) will **only** work with Chrome

## Run tests on Sauce Labs
You can run your tests on Sauce Labs US DC with this command

    npm run test.saucelabs.us

You can run your tests on Sauce Labs EU DC with this command

    npm run test.saucelabs.eu
