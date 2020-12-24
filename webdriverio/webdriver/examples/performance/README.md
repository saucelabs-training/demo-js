# WebdriverIO and Sauce Front-End Performance
This folder contains a simple set up for WebdriverIO and the power of Sauce Front-End Performance.
More information can be found [here](https://wiki.saucelabs.com/display/DOCS/Getting+Started+with+Sauce+Front-End+Performance).

## Install dependencies
You can install all dependencies by running the following command

    npm install
    
This will install all needed dependencies that are listed in the `package.json`-file

> NOTE: Make sure you are in the folder `webdriverio/webdriver/examples/peformance` when you execute this command
## Important information
Please read the information about [Sauce Front-End Performance](https://wiki.saucelabs.com/display/DOCS/Sauce+Performance+Basics) before using it.

- The test examples as shown [here](./test/specs/front.end.performance.spec.js) will **only** work with Chrome

## Run tests on Sauce Labs
You can run your tests on Sauce Labs US DC with this command

    npm run test.saucelabs.us

You can run your tests on Sauce Labs EU DC with this command

    npm run test.saucelabs.eu
