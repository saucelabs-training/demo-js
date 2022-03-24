# WebdriverIO and Sauce Deque Axe Accessibility

This folder contains a simple set up for WebdriverIO and Deque axe accessibility scan More information can be
found [here](https://docs.saucelabs.com/basics/integrations/deque/).

## Install dependencies

You can install all dependencies by running the following command

    npm install

This will install all needed dependencies that are listed in the `package.json`-file

> NOTE: Make sure you are in the folder `webdriverio/webdriver/examples/deque` when you execute this command

## Important information

Please read the information about [Sauce Deque axe Integration](https://docs.saucelabs.com/basics/integrations/deque/)
before using it.

- The axe configuration is defined [here](./test/configs/wdio.shared.conf.ts)
- The test have to be split into their own suites otherwise the accessibility results will all be aggregated
- You can find the test examples [here](./test/specs/)

## Run tests on Sauce Labs

You can run your tests on Sauce Labs US DC with this command

    npm run test.saucelabs.us

You can run your tests on Sauce Labs EU DC with this command

    npm run test.saucelabs.eu
