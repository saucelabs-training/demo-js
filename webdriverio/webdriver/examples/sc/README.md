# WebdriverIO and Sauce Connect
This folder contains a simple set up for WebdriverIO and Sauce Connect.

## Install dependencies
You can install all dependencies by running the following command

    npm install
    
This will install all needed dependencies that are listed in the `package.json`-file

> NOTE: Make sure you are in the folder `webdriverio/webdriver/examples/sc` when you execute this command

## WebdriverIO and Sauce Connect
There are 2 ways of using WebdriverIO together with Sauce Connect:

1. Use an already running tunnel
1. Let WebdriverIO automatically start a tunnel

### 1. Use an already running tunnel
See the [Sauce Labs Wiki](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy) for more information on how to use it.

### 2. Let WebdriverIO automatically start a tunnel
The `@wdio/sauce-service` can automatically start a tunnel for you if you provide the correct options for the service. 
For more information see [`@wdio/sauce-service`](https://webdriver.io/docs/sauce-service.html). Based on the `region` it will
automatically determine which Data Center will be used for spinning up a tunnel.

### Important information
It is not a best practice to let WebdriverIO spin up a tunnel. Reasons are:

- spinning up a tunnel will slow starting and tearing down your test-suite
- running multiple builds in parallel you spin up multiple tunnels and there is a limitation to the amount of tunnels you can spin up

We always advise you to use a High Availability tunnel, see [here](https://wiki.saucelabs.com/display/DOCS/High+Availability+Sauce+Connect+Proxy+Setup) for more information.

## Run tests on Sauce Labs
You can run your tests on Sauce Labs US DC with this command

    npm run test.saucelabs.us

You can run your tests on Sauce Labs EU DC with this command

    npm run test.saucelabs.eu
