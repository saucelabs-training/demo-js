# WebdriverIO Sync Mode with Best Practices, including the use of Page Objects
This folder contains best practices for WebdriverIO in Sync Mode, including the use of Page Objects.

> **NOTE:** Synchronous Mode will be deprecated with Node.js v16. With an update to the underlying 
> [Chromium](https://chromium-review.googlesource.com/c/v8/v8/+/2537690) version it became technically impossible to 
> provide the same synchronous behavior. We recommend to start transition to asynchronous command execution. For more 
> information, see our [RFC](https://github.com/webdriverio/webdriverio/discussions/6702).

## Install dependencies
> **!!MAKE SURE YOU ARE ON NODEJS 14 OR LOWER!!**

You can install all dependencies by running the following command

    npm install

This will install all needed dependencies that are listed in the `package.json`-file

> NOTE: Make sure you are in the folder `webdriverio/webdriver/examples/sync-mode` when you execute this command

## Run tests locally
You can run the tests on your local machine, the only thing you need to have is Chrome. If you have it you can run this command

    npm run test.local

It will run all tests in *headless*-mode, meaning you will not see a browser starting, but the logs will look like this

<details>
    <summary>Click to expand and see the logs</summary>

```log
> npm run test.local

> webdriverio-best-practices@1.0.0 test.local /Users/Sauce/Git/sauce-training/demo-js/webdriverio/webdriver/examples/sync-mode
> wdio test/configs/wdio.local.chrome.conf.js


Execution of 8 workers started at 2021-09-24T12:04:56.570Z

[0-1] RUNNING in chrome - /test/specs/checkout.complete.spec.js
[0-4] RUNNING in chrome - /test/specs/login.spec.js
[0-0] RUNNING in chrome - /test/specs/cart.summary.spec.js
[0-3] RUNNING in chrome - /test/specs/checkout.summary.spec.js
[0-2] RUNNING in chrome - /test/specs/checkout.personal.info.spec.js
[0-6] RUNNING in chrome - /test/specs/swag.item.details.spec.js
[0-5] RUNNING in chrome - /test/specs/menu.spec.js
[0-7] RUNNING in chrome - /test/specs/swag.items.list.spec.js
[0-1] PASSED in chrome - /test/specs/checkout.complete.spec.js
[0-3] PASSED in chrome - /test/specs/checkout.summary.spec.js
[0-4] PASSED in chrome - /test/specs/login.spec.js
[0-2] PASSED in chrome - /test/specs/checkout.personal.info.spec.js
[0-0] PASSED in chrome - /test/specs/cart.summary.spec.js
[0-6] PASSED in chrome - /test/specs/swag.item.details.spec.js
[0-7] PASSED in chrome - /test/specs/swag.items.list.spec.js
[0-5] PASSED in chrome - /test/specs/menu.spec.js

"spec" Reporter:
------------------------------------------------------------------
[chrome 93.0.4577.82 mac os x #0-1] Running: chrome (v93.0.4577.82) on mac os x
[chrome 93.0.4577.82 mac os x #0-1] Session ID: 68e7edeec7c28b8ea6b8327d450d80bf
[chrome 93.0.4577.82 mac os x #0-1]
[chrome 93.0.4577.82 mac os x #0-1] » /test/specs/checkout.complete.spec.js
[chrome 93.0.4577.82 mac os x #0-1] Checkout - Complete
[chrome 93.0.4577.82 mac os x #0-1]    ✓ should be able to test loading of login page
[chrome 93.0.4577.82 mac os x #0-1]
[chrome 93.0.4577.82 mac os x #0-1] 1 passing (2.3s)
------------------------------------------------------------------
[chrome 93.0.4577.82 mac os x #0-3] Running: chrome (v93.0.4577.82) on mac os x
[chrome 93.0.4577.82 mac os x #0-3] Session ID: 915c6c2d45291f42c85bbbc16df947df
[chrome 93.0.4577.82 mac os x #0-3]
[chrome 93.0.4577.82 mac os x #0-3] » /test/specs/checkout.summary.spec.js
[chrome 93.0.4577.82 mac os x #0-3] Checkout - Summary
[chrome 93.0.4577.82 mac os x #0-3]    ✓ should validate that we can continue shopping
[chrome 93.0.4577.82 mac os x #0-3]    ✓ should validate that we can cancel checkout and go to the inventory page
[chrome 93.0.4577.82 mac os x #0-3]    ✓ should validate that we have 1 product in our checkout overview
[chrome 93.0.4577.82 mac os x #0-3]
[chrome 93.0.4577.82 mac os x #0-3] 3 passing (5.1s)
------------------------------------------------------------------
[chrome 93.0.4577.82 mac os x #0-4] Running: chrome (v93.0.4577.82) on mac os x
[chrome 93.0.4577.82 mac os x #0-4] Session ID: 7eb8b6b8ead749b72c273078a32d1708
[chrome 93.0.4577.82 mac os x #0-4]
[chrome 93.0.4577.82 mac os x #0-4] » /test/specs/login.spec.js
[chrome 93.0.4577.82 mac os x #0-4] LoginPage
[chrome 93.0.4577.82 mac os x #0-4]    ✓ should be able to test loading of login page
[chrome 93.0.4577.82 mac os x #0-4]    ✓ should be able to login with a standard user
[chrome 93.0.4577.82 mac os x #0-4]    ✓ should not be able to login with a locked user
[chrome 93.0.4577.82 mac os x #0-4]
[chrome 93.0.4577.82 mac os x #0-4] 3 passing (5s)
------------------------------------------------------------------
[chrome 93.0.4577.82 mac os x #0-2] Running: chrome (v93.0.4577.82) on mac os x
[chrome 93.0.4577.82 mac os x #0-2] Session ID: 430cd1149e5f0290e5e27ca5386a7807
[chrome 93.0.4577.82 mac os x #0-2]
[chrome 93.0.4577.82 mac os x #0-2] » /test/specs/checkout.personal.info.spec.js
[chrome 93.0.4577.82 mac os x #0-2] Checkout - Personal info
[chrome 93.0.4577.82 mac os x #0-2]    ✓ should validate we get an error if we don not provide all personal information
[chrome 93.0.4577.82 mac os x #0-2]    ✓ should validate that we can cancel the first checkout
[chrome 93.0.4577.82 mac os x #0-2]    ✓ should be able to continue the checkout
[chrome 93.0.4577.82 mac os x #0-2]
[chrome 93.0.4577.82 mac os x #0-2] 3 passing (6.4s)
------------------------------------------------------------------
[chrome 93.0.4577.82 mac os x #0-0] Running: chrome (v93.0.4577.82) on mac os x
[chrome 93.0.4577.82 mac os x #0-0] Session ID: 9f493927fa3a903571973ff998fb70a0
[chrome 93.0.4577.82 mac os x #0-0]
[chrome 93.0.4577.82 mac os x #0-0] » /test/specs/cart.summary.spec.js
[chrome 93.0.4577.82 mac os x #0-0] Cart Summary page
[chrome 93.0.4577.82 mac os x #0-0]    ✓ should validate that we can continue shopping
[chrome 93.0.4577.82 mac os x #0-0]    ✓ should validate that we can go from the cart to the checkout page
[chrome 93.0.4577.82 mac os x #0-0]    ✓ should validate that a product can be removed from the cart
[chrome 93.0.4577.82 mac os x #0-0]
[chrome 93.0.4577.82 mac os x #0-0] 3 passing (5.2s)
------------------------------------------------------------------
[chrome 93.0.4577.82 mac os x #0-6] Running: chrome (v93.0.4577.82) on mac os x
[chrome 93.0.4577.82 mac os x #0-6] Session ID: 0ab1b8707be83484a1de7c1a35e0d177
[chrome 93.0.4577.82 mac os x #0-6]
[chrome 93.0.4577.82 mac os x #0-6] » /test/specs/swag.item.details.spec.js
[chrome 93.0.4577.82 mac os x #0-6] Swag Item Details
[chrome 93.0.4577.82 mac os x #0-6]    ✓ should validate that we can go back from the details to the inventory page
[chrome 93.0.4577.82 mac os x #0-6]    ✓ should validate that a product can be added to a cart
[chrome 93.0.4577.82 mac os x #0-6]    ✓ should validate that a product can be removed from the cart
[chrome 93.0.4577.82 mac os x #0-6]
[chrome 93.0.4577.82 mac os x #0-6] 3 passing (7.1s)
------------------------------------------------------------------
[chrome 93.0.4577.82 mac os x #0-7] Running: chrome (v93.0.4577.82) on mac os x
[chrome 93.0.4577.82 mac os x #0-7] Session ID: 1350385560af2b7326894acccb49c06f
[chrome 93.0.4577.82 mac os x #0-7]
[chrome 93.0.4577.82 mac os x #0-7] » /test/specs/swag.items.list.spec.js
[chrome 93.0.4577.82 mac os x #0-7] Swag items list
[chrome 93.0.4577.82 mac os x #0-7]    ✓ should validate that all products are present
[chrome 93.0.4577.82 mac os x #0-7]    ✓ should validate that the details of a product can be opened
[chrome 93.0.4577.82 mac os x #0-7]    ✓ should validate that a product can be added to the cart
[chrome 93.0.4577.82 mac os x #0-7]    ✓ should validate that a product can be removed from the cart
[chrome 93.0.4577.82 mac os x #0-7]    ✓ should be able to open the cart summary page
[chrome 93.0.4577.82 mac os x #0-7]
[chrome 93.0.4577.82 mac os x #0-7] 5 passing (8.2s)
------------------------------------------------------------------
[chrome 93.0.4577.82 mac os x #0-5] Running: chrome (v93.0.4577.82) on mac os x
[chrome 93.0.4577.82 mac os x #0-5] Session ID: 72cbc2e17306db92528fd4e657e12977
[chrome 93.0.4577.82 mac os x #0-5]
[chrome 93.0.4577.82 mac os x #0-5] » /test/specs/menu.spec.js
[chrome 93.0.4577.82 mac os x #0-5] Menu
[chrome 93.0.4577.82 mac os x #0-5]    ✓ should be able to the swag items overview page
[chrome 93.0.4577.82 mac os x #0-5]    ✓ should be able to open the about page
[chrome 93.0.4577.82 mac os x #0-5]    ✓ should be able to log out
[chrome 93.0.4577.82 mac os x #0-5]    ✓ should be able to clear the cart
[chrome 93.0.4577.82 mac os x #0-5]
[chrome 93.0.4577.82 mac os x #0-5] 4 passing (16.5s)


Spec Files:      8 passed, 8 total (100% completed) in 00:00:26
```
</details>

## Run tests on Sauce Labs
You can run your tests on Sauce Labs US DC with this command

    npm run test.saucelabs.us

You can run your tests on Sauce Labs EU DC with this command

    npm run test.saucelabs.eu

It will spin up multiple browsers which you can find [here](test/configs/wdio.saucelabs.conf.js).

> **Note:** It could be that a spec file fails, due to a webdriver error or something else. This setup uses a single
> retry for every test. If a test fails the first time on Sauce Labs but succeeds the seconds time the suite is marked
> as passed in WebdriverIO, but because the initial test failed in Sauce Labs, the total build is marked as failed.\
> To prevent a build from failing in Sauce Labs when all tests, also after a retry, succeed, a special `after`-hook has
> been created to update the failing tests. Please take a look at the 
> [`wdio.saucelabs.conf.js`](./test/configs/wdio.saucelabs.conf.js) file for more information.

<details>
    <summary>Click to expand and see logs from running this on Sauce Labs</summary>

```log

> npm run test.saucelabs.eu

> webdriverio-best-practices@1.0.0 test.saucelabs.eu /Users/wimselles/Sauce/Git/sauce-training/demo-js/webdriverio/webdriver/examples/sync-mode
> REGION=eu wdio test/configs/wdio.saucelabs.conf.js


Execution of 72 workers started at 2021-09-24T13:03:19.783Z

[4-0] RUNNING in MicrosoftEdge - /test/specs/cart.summary.spec.js
[7-0] RUNNING in safari - /test/specs/cart.summary.spec.js
[2-0] RUNNING in internet explorer - /test/specs/cart.summary.spec.js
[0-0] RUNNING in googlechrome - /test/specs/cart.summary.spec.js
[5-1] RUNNING in safari - /test/specs/checkout.complete.spec.js
[4-1] RUNNING in MicrosoftEdge - /test/specs/checkout.complete.spec.js
[3-0] RUNNING in MicrosoftEdge - /test/specs/cart.summary.spec.js
[0-1] RUNNING in googlechrome - /test/specs/checkout.complete.spec.js
[8-0] RUNNING in safari - /test/specs/cart.summary.spec.js
[1-0] RUNNING in firefox - /test/specs/cart.summary.spec.js
[6-1] RUNNING in safari - /test/specs/checkout.complete.spec.js
[8-1] RUNNING in safari - /test/specs/checkout.complete.spec.js
[3-2] RUNNING in MicrosoftEdge - /test/specs/checkout.personal.info.spec.js
[3-1] RUNNING in MicrosoftEdge - /test/specs/checkout.complete.spec.js
[6-0] RUNNING in safari - /test/specs/cart.summary.spec.js
[0-2] RUNNING in googlechrome - /test/specs/checkout.personal.info.spec.js
[1-1] RUNNING in firefox - /test/specs/checkout.complete.spec.js
[1-2] RUNNING in firefox - /test/specs/checkout.personal.info.spec.js
[7-1] RUNNING in safari - /test/specs/checkout.complete.spec.js
[5-0] RUNNING in safari - /test/specs/cart.summary.spec.js
[2-1] RUNNING in internet explorer - /test/specs/checkout.complete.spec.js
[6-2] RUNNING in safari - /test/specs/checkout.personal.info.spec.js
[6-3] RUNNING in safari - /test/specs/checkout.summary.spec.js
[5-2] RUNNING in safari - /test/specs/checkout.personal.info.spec.js
[1-6] RUNNING in firefox - /test/specs/swag.item.details.spec.js
[5-3] RUNNING in safari - /test/specs/checkout.summary.spec.js
[2-2] RUNNING in internet explorer - /test/specs/checkout.personal.info.spec.js
[7-5] RUNNING in safari - /test/specs/menu.spec.js
[1-3] RUNNING in firefox - /test/specs/checkout.summary.spec.js
[3-4] RUNNING in MicrosoftEdge - /test/specs/login.spec.js
[0-3] RUNNING in googlechrome - /test/specs/checkout.summary.spec.js
[5-4] RUNNING in safari - /test/specs/login.spec.js
[3-3] RUNNING in MicrosoftEdge - /test/specs/checkout.summary.spec.js
[0-7] RUNNING in googlechrome - /test/specs/swag.items.list.spec.js
[0-5] RUNNING in googlechrome - /test/specs/menu.spec.js
[2-3] RUNNING in internet explorer - /test/specs/checkout.summary.spec.js
[4-3] RUNNING in MicrosoftEdge - /test/specs/checkout.summary.spec.js
[5-7] RUNNING in safari - /test/specs/swag.items.list.spec.js
[0-4] RUNNING in googlechrome - /test/specs/login.spec.js
[7-3] RUNNING in safari - /test/specs/checkout.summary.spec.js
[7-6] RUNNING in safari - /test/specs/swag.item.details.spec.js
[4-2] RUNNING in MicrosoftEdge - /test/specs/checkout.personal.info.spec.js
[7-2] RUNNING in safari - /test/specs/checkout.personal.info.spec.js
[8-3] RUNNING in safari - /test/specs/checkout.summary.spec.js
[8-2] RUNNING in safari - /test/specs/checkout.personal.info.spec.js
[5-5] RUNNING in safari - /test/specs/menu.spec.js
[4-5] RUNNING in MicrosoftEdge - /test/specs/menu.spec.js
[1-4] RUNNING in firefox - /test/specs/login.spec.js
[4-4] RUNNING in MicrosoftEdge - /test/specs/login.spec.js
[2-5] RUNNING in internet explorer - /test/specs/menu.spec.js
[1-7] RUNNING in firefox - /test/specs/swag.items.list.spec.js
[8-4] RUNNING in safari - /test/specs/login.spec.js
[6-5] RUNNING in safari - /test/specs/menu.spec.js
[7-4] RUNNING in safari - /test/specs/login.spec.js
[2-7] RUNNING in internet explorer - /test/specs/swag.items.list.spec.js
[3-6] RUNNING in MicrosoftEdge - /test/specs/swag.item.details.spec.js
[7-7] RUNNING in safari - /test/specs/swag.items.list.spec.js
[2-4] RUNNING in internet explorer - /test/specs/login.spec.js
[6-4] RUNNING in safari - /test/specs/login.spec.js
[3-5] RUNNING in MicrosoftEdge - /test/specs/menu.spec.js
[8-6] RUNNING in safari - /test/specs/swag.item.details.spec.js
[4-7] RUNNING in MicrosoftEdge - /test/specs/swag.items.list.spec.js
[1-5] RUNNING in firefox - /test/specs/menu.spec.js
[6-6] RUNNING in safari - /test/specs/swag.item.details.spec.js
[6-7] RUNNING in safari - /test/specs/swag.items.list.spec.js
[4-6] RUNNING in MicrosoftEdge - /test/specs/swag.item.details.spec.js
[2-6] RUNNING in internet explorer - /test/specs/swag.item.details.spec.js
[8-7] RUNNING in safari - /test/specs/swag.items.list.spec.js
[3-7] RUNNING in MicrosoftEdge - /test/specs/swag.items.list.spec.js
[8-5] RUNNING in safari - /test/specs/menu.spec.js
[5-6] RUNNING in safari - /test/specs/swag.item.details.spec.js
[0-6] RUNNING in googlechrome - /test/specs/swag.item.details.spec.js
[4-0] PASSED in MicrosoftEdge - /test/specs/cart.summary.spec.js
[5-1] PASSED in safari - /test/specs/checkout.complete.spec.js
[0-1] PASSED in googlechrome - /test/specs/checkout.complete.spec.js
[8-1] PASSED in safari - /test/specs/checkout.complete.spec.js
[4-1] PASSED in MicrosoftEdge - /test/specs/checkout.complete.spec.js
[6-1] PASSED in safari - /test/specs/checkout.complete.spec.js
[7-0] PASSED in safari - /test/specs/cart.summary.spec.js
[7-1] PASSED in safari - /test/specs/checkout.complete.spec.js
[2-1] PASSED in internet explorer - /test/specs/checkout.complete.spec.js
[2-0] PASSED in internet explorer - /test/specs/cart.summary.spec.js
[0-0] PASSED in googlechrome - /test/specs/cart.summary.spec.js
[8-0] PASSED in safari - /test/specs/cart.summary.spec.js
[0-3] PASSED in googlechrome - /test/specs/checkout.summary.spec.js
[0-2] PASSED in googlechrome - /test/specs/checkout.personal.info.spec.js
[6-3] PASSED in safari - /test/specs/checkout.summary.spec.js
[6-0] PASSED in safari - /test/specs/cart.summary.spec.js
[5-3] PASSED in safari - /test/specs/checkout.summary.spec.js
[5-0] PASSED in safari - /test/specs/cart.summary.spec.js
[8-3] PASSED in safari - /test/specs/checkout.summary.spec.js
[3-1] PASSED in MicrosoftEdge - /test/specs/checkout.complete.spec.js
[2-3] PASSED in internet explorer - /test/specs/checkout.summary.spec.js
[6-2] PASSED in safari - /test/specs/checkout.personal.info.spec.js
[4-3] PASSED in MicrosoftEdge - /test/specs/checkout.summary.spec.js
[5-4] PASSED in safari - /test/specs/login.spec.js
[7-3] PASSED in safari - /test/specs/checkout.summary.spec.js
[0-4] PASSED in googlechrome - /test/specs/login.spec.js
[5-2] PASSED in safari - /test/specs/checkout.personal.info.spec.js
[7-5] PASSED in safari - /test/specs/menu.spec.js
[4-2] PASSED in MicrosoftEdge - /test/specs/checkout.personal.info.spec.js
[7-6] PASSED in safari - /test/specs/swag.item.details.spec.js
[7-2] PASSED in safari - /test/specs/checkout.personal.info.spec.js
[1-1] PASSED in firefox - /test/specs/checkout.complete.spec.js
[8-4] PASSED in safari - /test/specs/login.spec.js
[8-2] PASSED in safari - /test/specs/checkout.personal.info.spec.js
[7-4] PASSED in safari - /test/specs/login.spec.js
[6-5] PASSED in safari - /test/specs/menu.spec.js
[4-4] PASSED in MicrosoftEdge - /test/specs/login.spec.js
[5-7] PASSED in safari - /test/specs/swag.items.list.spec.js
[5-5] PASSED in safari - /test/specs/menu.spec.js
[6-4] PASSED in safari - /test/specs/login.spec.js
[2-2] PASSED in internet explorer - /test/specs/checkout.personal.info.spec.js
[4-5] PASSED in MicrosoftEdge - /test/specs/menu.spec.js
[2-4] PASSED in internet explorer - /test/specs/login.spec.js
[7-7] PASSED in safari - /test/specs/swag.items.list.spec.js
[0-7] PASSED in googlechrome - /test/specs/swag.items.list.spec.js
[0-5] PASSED in googlechrome - /test/specs/menu.spec.js
[6-7] PASSED in safari - /test/specs/swag.items.list.spec.js
[2-6] PASSED in internet explorer - /test/specs/swag.item.details.spec.js
[0-6] PASSED in googlechrome - /test/specs/swag.item.details.spec.js
[4-7] PASSED in MicrosoftEdge - /test/specs/swag.items.list.spec.js
[1-2] PASSED in firefox - /test/specs/checkout.personal.info.spec.js
[8-6] PASSED in safari - /test/specs/swag.item.details.spec.js
[4-6] PASSED in MicrosoftEdge - /test/specs/swag.item.details.spec.js
[6-6] PASSED in safari - /test/specs/swag.item.details.spec.js
[3-3] PASSED in MicrosoftEdge - /test/specs/checkout.summary.spec.js
[1-3] PASSED in firefox - /test/specs/checkout.summary.spec.js
[5-6] PASSED in safari - /test/specs/swag.item.details.spec.js
[8-7] PASSED in safari - /test/specs/swag.items.list.spec.js
[2-5] PASSED in internet explorer - /test/specs/menu.spec.js
[8-5] PASSED in safari - /test/specs/menu.spec.js
[1-0] PASSED in firefox - /test/specs/cart.summary.spec.js
[3-2] PASSED in MicrosoftEdge - /test/specs/checkout.personal.info.spec.js
[3-0] PASSED in MicrosoftEdge - /test/specs/cart.summary.spec.js
[3-4] PASSED in MicrosoftEdge - /test/specs/login.spec.js
[3-5] PASSED in MicrosoftEdge - /test/specs/menu.spec.js
[1-4] PASSED in firefox - /test/specs/login.spec.js
[1-5] PASSED in firefox - /test/specs/menu.spec.js
[2-7] PASSED in internet explorer - /test/specs/swag.items.list.spec.js
[3-6] PASSED in MicrosoftEdge - /test/specs/swag.item.details.spec.js
[1-7] PASSED in firefox - /test/specs/swag.items.list.spec.js
[1-6] PASSED in firefox - /test/specs/swag.item.details.spec.js
[3-7] PASSED in MicrosoftEdge - /test/specs/swag.items.list.spec.js

 "spec" Reporter:
------------------------------------------------------------------
[msedge 93.0.961.38 windows #4-0] Running: msedge (v93.0.961.38) on windows
[msedge 93.0.961.38 windows #4-0] Session ID: ad5685df9e22419fbafd5ccbfb1e49a8
[msedge 93.0.961.38 windows #4-0]
[msedge 93.0.961.38 windows #4-0] » /test/specs/cart.summary.spec.js
[msedge 93.0.961.38 windows #4-0] Cart Summary page
[msedge 93.0.961.38 windows #4-0]    ✓ should validate that we can continue shopping
[msedge 93.0.961.38 windows #4-0]    ✓ should validate that we can go from the cart to the checkout page
[msedge 93.0.961.38 windows #4-0]    ✓ should validate that a product can be removed from the cart
[msedge 93.0.961.38 windows #4-0]
[msedge 93.0.961.38 windows #4-0] 3 passing (10.8s)
[msedge 93.0.961.38 windows #4-0]
[msedge 93.0.961.38 windows #4-0] Check out job at https://app.eu-central-1.saucelabs.com/tests/ad5685df9e22419fbafd5ccbfb1e49a8?auth=de4fd0cfa4332b0a89051cf44ee9ddee
------------------------------------------------------------------
[safari 13605.3.8 macOS #5-1] Running: safari (v13605.3.8) on macOS
[safari 13605.3.8 macOS #5-1] Session ID: da62ee8d6c1e45f9925afbf61296826d
[safari 13605.3.8 macOS #5-1]
[safari 13605.3.8 macOS #5-1] » /test/specs/checkout.complete.spec.js
[safari 13605.3.8 macOS #5-1] Checkout - Complete
[safari 13605.3.8 macOS #5-1]    ✓ should be able to test loading of login page
[safari 13605.3.8 macOS #5-1]
[safari 13605.3.8 macOS #5-1] 1 passing (2.5s)
[safari 13605.3.8 macOS #5-1]
[safari 13605.3.8 macOS #5-1] Check out job at https://app.eu-central-1.saucelabs.com/tests/da62ee8d6c1e45f9925afbf61296826d?auth=32ba5ed3691ea73ca5bb8e4a71c87bca
------------------------------------------------------------------
[chrome 94.0.4606.54 windows #0-1] Running: chrome (v94.0.4606.54) on windows
[chrome 94.0.4606.54 windows #0-1] Session ID: dff7c7cd606a4440b8ae4cbaa7c59089
[chrome 94.0.4606.54 windows #0-1]
[chrome 94.0.4606.54 windows #0-1] » /test/specs/checkout.complete.spec.js
[chrome 94.0.4606.54 windows #0-1] Checkout - Complete
[chrome 94.0.4606.54 windows #0-1]    ✓ should be able to test loading of login page
[chrome 94.0.4606.54 windows #0-1]
[chrome 94.0.4606.54 windows #0-1] 1 passing (2.6s)
[chrome 94.0.4606.54 windows #0-1]
[chrome 94.0.4606.54 windows #0-1] Check out job at https://app.eu-central-1.saucelabs.com/tests/dff7c7cd606a4440b8ae4cbaa7c59089?auth=807d096eb5c50124c7a9c1a6d5d98184
------------------------------------------------------------------
[Safari 14.1 macOS #8-1] Running: Safari (v14.1) on macOS
[Safari 14.1 macOS #8-1] Session ID: 459c2ccbd09f41a5b8a51dbbca6c7610
[Safari 14.1 macOS #8-1]
[Safari 14.1 macOS #8-1] » /test/specs/checkout.complete.spec.js
[Safari 14.1 macOS #8-1] Checkout - Complete
[Safari 14.1 macOS #8-1]    ✓ should be able to test loading of login page
[Safari 14.1 macOS #8-1]
[Safari 14.1 macOS #8-1] 1 passing (2.6s)
[Safari 14.1 macOS #8-1]
[Safari 14.1 macOS #8-1] Check out job at https://app.eu-central-1.saucelabs.com/tests/459c2ccbd09f41a5b8a51dbbca6c7610?auth=11f2658fb4933ba52a5c14ca820d7221
------------------------------------------------------------------
[msedge 93.0.961.38 windows #4-1] Running: msedge (v93.0.961.38) on windows
[msedge 93.0.961.38 windows #4-1] Session ID: 35ace24e7f174807a35346fc280c9ca3
[msedge 93.0.961.38 windows #4-1]
[msedge 93.0.961.38 windows #4-1] » /test/specs/checkout.complete.spec.js
[msedge 93.0.961.38 windows #4-1] Checkout - Complete
[msedge 93.0.961.38 windows #4-1]    ✓ should be able to test loading of login page
[msedge 93.0.961.38 windows #4-1]
[msedge 93.0.961.38 windows #4-1] 1 passing (3.7s)
[msedge 93.0.961.38 windows #4-1]
[msedge 93.0.961.38 windows #4-1] Check out job at https://app.eu-central-1.saucelabs.com/tests/35ace24e7f174807a35346fc280c9ca3?auth=0e3940f9360217b25cebabd3ebdb744d
------------------------------------------------------------------
[Safari 12.0 macOS #6-1] Running: Safari (v12.0) on macOS
[Safari 12.0 macOS #6-1] Session ID: 3a6d9b387ce74563aa582823375545a0
[Safari 12.0 macOS #6-1]
[Safari 12.0 macOS #6-1] » /test/specs/checkout.complete.spec.js
[Safari 12.0 macOS #6-1] Checkout - Complete
[Safari 12.0 macOS #6-1]    ✓ should be able to test loading of login page
[Safari 12.0 macOS #6-1]
[Safari 12.0 macOS #6-1] 1 passing (2.6s)
[Safari 12.0 macOS #6-1]
[Safari 12.0 macOS #6-1] Check out job at https://app.eu-central-1.saucelabs.com/tests/3a6d9b387ce74563aa582823375545a0?auth=7d29b5254f64ba866c958d818d0669ce
------------------------------------------------------------------
[Safari 13.1 macOS #7-0] Running: Safari (v13.1) on macOS
[Safari 13.1 macOS #7-0] Session ID: 8d60262fde1a4dd18eff23e3a292766c
[Safari 13.1 macOS #7-0]
[Safari 13.1 macOS #7-0] » /test/specs/cart.summary.spec.js
[Safari 13.1 macOS #7-0] Cart Summary page
[Safari 13.1 macOS #7-0]    ✓ should validate that we can continue shopping
[Safari 13.1 macOS #7-0]    ✓ should validate that we can go from the cart to the checkout page
[Safari 13.1 macOS #7-0]    ✓ should validate that a product can be removed from the cart
[Safari 13.1 macOS #7-0]
[Safari 13.1 macOS #7-0] 3 passing (8.3s)
[Safari 13.1 macOS #7-0]
[Safari 13.1 macOS #7-0] Check out job at https://app.eu-central-1.saucelabs.com/tests/8d60262fde1a4dd18eff23e3a292766c?auth=b8cb081c059dd6b34d5f1e3cf2c902b7
------------------------------------------------------------------
[Safari 13.1 macOS #7-1] Running: Safari (v13.1) on macOS
[Safari 13.1 macOS #7-1] Session ID: 30d6b8087ef54f0e8fd8c481c4cb60b1
[Safari 13.1 macOS #7-1]
[Safari 13.1 macOS #7-1] » /test/specs/checkout.complete.spec.js
[Safari 13.1 macOS #7-1] Checkout - Complete
[Safari 13.1 macOS #7-1]    ✓ should be able to test loading of login page
[Safari 13.1 macOS #7-1]
[Safari 13.1 macOS #7-1] 1 passing (2.4s)
[Safari 13.1 macOS #7-1]
[Safari 13.1 macOS #7-1] Check out job at https://app.eu-central-1.saucelabs.com/tests/30d6b8087ef54f0e8fd8c481c4cb60b1?auth=3516e1674e37fd172ee0306413f8bfaa
------------------------------------------------------------------
[internet explorer 11 windows #2-1] Running: internet explorer (v11) on windows
[internet explorer 11 windows #2-1] Session ID: a481c26ee07e42faa925c6ec4c9bae82
[internet explorer 11 windows #2-1]
[internet explorer 11 windows #2-1] » /test/specs/checkout.complete.spec.js
[internet explorer 11 windows #2-1] Checkout - Complete
[internet explorer 11 windows #2-1]    ✓ should be able to test loading of login page
[internet explorer 11 windows #2-1]
[internet explorer 11 windows #2-1] 1 passing (2.5s)
[internet explorer 11 windows #2-1]
[internet explorer 11 windows #2-1] Check out job at https://app.eu-central-1.saucelabs.com/tests/a481c26ee07e42faa925c6ec4c9bae82?auth=a6775577b93c6da1e330af8ffb21c2ad
------------------------------------------------------------------
[internet explorer 11 windows #2-0] Running: internet explorer (v11) on windows
[internet explorer 11 windows #2-0] Session ID: 9943dca8c71b4c318df063cf1c611208
[internet explorer 11 windows #2-0]
[internet explorer 11 windows #2-0] » /test/specs/cart.summary.spec.js
[internet explorer 11 windows #2-0] Cart Summary page
[internet explorer 11 windows #2-0]    ✓ should validate that we can continue shopping
[internet explorer 11 windows #2-0]    ✓ should validate that we can go from the cart to the checkout page
[internet explorer 11 windows #2-0]    ✓ should validate that a product can be removed from the cart
[internet explorer 11 windows #2-0]
[internet explorer 11 windows #2-0] 3 passing (10.6s)
[internet explorer 11 windows #2-0]
[internet explorer 11 windows #2-0] Check out job at https://app.eu-central-1.saucelabs.com/tests/9943dca8c71b4c318df063cf1c611208?auth=c92ffc7b305b5f722fb0857b591e6eb4
------------------------------------------------------------------
[chrome 94.0.4606.54 windows #0-0] Running: chrome (v94.0.4606.54) on windows
[chrome 94.0.4606.54 windows #0-0] Session ID: 2f145f79f7744010bfa0464214636d37
[chrome 94.0.4606.54 windows #0-0]
[chrome 94.0.4606.54 windows #0-0] » /test/specs/cart.summary.spec.js
[chrome 94.0.4606.54 windows #0-0] Cart Summary page
[chrome 94.0.4606.54 windows #0-0]    ✓ should validate that we can continue shopping
[chrome 94.0.4606.54 windows #0-0]    ✓ should validate that we can go from the cart to the checkout page
[chrome 94.0.4606.54 windows #0-0]    ✓ should validate that a product can be removed from the cart
[chrome 94.0.4606.54 windows #0-0]
[chrome 94.0.4606.54 windows #0-0] 3 passing (9.5s)
[chrome 94.0.4606.54 windows #0-0]
[chrome 94.0.4606.54 windows #0-0] Check out job at https://app.eu-central-1.saucelabs.com/tests/2f145f79f7744010bfa0464214636d37?auth=c5dc2ae6ddb6552f36e9af490f1ab1a2
------------------------------------------------------------------
[Safari 14.1 macOS #8-0] Running: Safari (v14.1) on macOS
[Safari 14.1 macOS #8-0] Session ID: 29b5c1b628124320a9f51bdd2bee15bf
[Safari 14.1 macOS #8-0]
[Safari 14.1 macOS #8-0] » /test/specs/cart.summary.spec.js
[Safari 14.1 macOS #8-0] Cart Summary page
[Safari 14.1 macOS #8-0]    ✓ should validate that we can continue shopping
[Safari 14.1 macOS #8-0]    ✓ should validate that we can go from the cart to the checkout page
[Safari 14.1 macOS #8-0]    ✓ should validate that a product can be removed from the cart
[Safari 14.1 macOS #8-0]
[Safari 14.1 macOS #8-0] 3 passing (8.1s)
[Safari 14.1 macOS #8-0]
[Safari 14.1 macOS #8-0] Check out job at https://app.eu-central-1.saucelabs.com/tests/29b5c1b628124320a9f51bdd2bee15bf?auth=174c506a8c1e14cb165d3ffd0c246388
------------------------------------------------------------------
[chrome 94.0.4606.54 windows #0-3] Running: chrome (v94.0.4606.54) on windows
[chrome 94.0.4606.54 windows #0-3] Session ID: 1caa59f692e34724ba25f416547b290e
[chrome 94.0.4606.54 windows #0-3]
[chrome 94.0.4606.54 windows #0-3] » /test/specs/checkout.summary.spec.js
[chrome 94.0.4606.54 windows #0-3] Checkout - Summary
[chrome 94.0.4606.54 windows #0-3]    ✓ should validate that we can continue shopping
[chrome 94.0.4606.54 windows #0-3]    ✓ should validate that we can cancel checkout and go to the inventory page
[chrome 94.0.4606.54 windows #0-3]    ✓ should validate that we have 1 product in our checkout overview
[chrome 94.0.4606.54 windows #0-3]
[chrome 94.0.4606.54 windows #0-3] 3 passing (5.6s)
[chrome 94.0.4606.54 windows #0-3]
[chrome 94.0.4606.54 windows #0-3] Check out job at https://app.eu-central-1.saucelabs.com/tests/1caa59f692e34724ba25f416547b290e?auth=a14d31476155fd198f2f42bff28aae0e
------------------------------------------------------------------
[chrome 94.0.4606.54 windows #0-2] Running: chrome (v94.0.4606.54) on windows
[chrome 94.0.4606.54 windows #0-2] Session ID: 30b9b4f5943948c286615e23ce76bb7b
[chrome 94.0.4606.54 windows #0-2]
[chrome 94.0.4606.54 windows #0-2] » /test/specs/checkout.personal.info.spec.js
[chrome 94.0.4606.54 windows #0-2] Checkout - Personal info
[chrome 94.0.4606.54 windows #0-2]    ✓ should validate we get an error if we don not provide all personal information
[chrome 94.0.4606.54 windows #0-2]    ✓ should validate that we can cancel the first checkout
[chrome 94.0.4606.54 windows #0-2]    ✓ should be able to continue the checkout
[chrome 94.0.4606.54 windows #0-2]
[chrome 94.0.4606.54 windows #0-2] 3 passing (8.5s)
[chrome 94.0.4606.54 windows #0-2]
[chrome 94.0.4606.54 windows #0-2] Check out job at https://app.eu-central-1.saucelabs.com/tests/30b9b4f5943948c286615e23ce76bb7b?auth=17bad58e3f1f69a44653c9e653c086bf
------------------------------------------------------------------
[Safari 12.0 macOS #6-3] Running: Safari (v12.0) on macOS
[Safari 12.0 macOS #6-3] Session ID: cecb9c35bfcc47cdabb36d6882647603
[Safari 12.0 macOS #6-3]
[Safari 12.0 macOS #6-3] » /test/specs/checkout.summary.spec.js
[Safari 12.0 macOS #6-3] Checkout - Summary
[Safari 12.0 macOS #6-3]    ✓ should validate that we can continue shopping
[Safari 12.0 macOS #6-3]    ✓ should validate that we can cancel checkout and go to the inventory page
[Safari 12.0 macOS #6-3]    ✓ should validate that we have 1 product in our checkout overview
[Safari 12.0 macOS #6-3]
[Safari 12.0 macOS #6-3] 3 passing (5.8s)
[Safari 12.0 macOS #6-3]
[Safari 12.0 macOS #6-3] Check out job at https://app.eu-central-1.saucelabs.com/tests/cecb9c35bfcc47cdabb36d6882647603?auth=fe6424754ab46dc316417266ae5ffaf6
------------------------------------------------------------------
[Safari 12.0 macOS #6-0] Running: Safari (v12.0) on macOS
[Safari 12.0 macOS #6-0] Session ID: 263b5714ef6346faa042491f30102567
[Safari 12.0 macOS #6-0]
[Safari 12.0 macOS #6-0] » /test/specs/cart.summary.spec.js
[Safari 12.0 macOS #6-0] Cart Summary page
[Safari 12.0 macOS #6-0]    ✓ should validate that we can continue shopping
[Safari 12.0 macOS #6-0]    ✓ should validate that we can go from the cart to the checkout page
[Safari 12.0 macOS #6-0]    ✓ should validate that a product can be removed from the cart
[Safari 12.0 macOS #6-0]
[Safari 12.0 macOS #6-0] 3 passing (7.9s)
[Safari 12.0 macOS #6-0]
[Safari 12.0 macOS #6-0] Check out job at https://app.eu-central-1.saucelabs.com/tests/263b5714ef6346faa042491f30102567?auth=b1f4957bf797337bb557bc6ac2704596
------------------------------------------------------------------
[safari 13605.3.8 macOS #5-3] Running: safari (v13605.3.8) on macOS
[safari 13605.3.8 macOS #5-3] Session ID: b5e4bcd70b414ad5b88363ffda29ebeb
[safari 13605.3.8 macOS #5-3]
[safari 13605.3.8 macOS #5-3] » /test/specs/checkout.summary.spec.js
[safari 13605.3.8 macOS #5-3] Checkout - Summary
[safari 13605.3.8 macOS #5-3]    ✓ should validate that we can continue shopping
[safari 13605.3.8 macOS #5-3]    ✓ should validate that we can cancel checkout and go to the inventory page
[safari 13605.3.8 macOS #5-3]    ✓ should validate that we have 1 product in our checkout overview
[safari 13605.3.8 macOS #5-3]
[safari 13605.3.8 macOS #5-3] 3 passing (5.7s)
[safari 13605.3.8 macOS #5-3]
[safari 13605.3.8 macOS #5-3] Check out job at https://app.eu-central-1.saucelabs.com/tests/b5e4bcd70b414ad5b88363ffda29ebeb?auth=bc2384e4bbd44191e158b4fd151e8615
------------------------------------------------------------------
[safari 13605.3.8 macOS #5-0] Running: safari (v13605.3.8) on macOS
[safari 13605.3.8 macOS #5-0] Session ID: 63061498823845759b742af66653f52f
[safari 13605.3.8 macOS #5-0]
[safari 13605.3.8 macOS #5-0] » /test/specs/cart.summary.spec.js
[safari 13605.3.8 macOS #5-0] Cart Summary page
[safari 13605.3.8 macOS #5-0]    ✓ should validate that we can continue shopping
[safari 13605.3.8 macOS #5-0]    ✓ should validate that we can go from the cart to the checkout page
[safari 13605.3.8 macOS #5-0]    ✓ should validate that a product can be removed from the cart
[safari 13605.3.8 macOS #5-0]
[safari 13605.3.8 macOS #5-0] 3 passing (7.6s)
[safari 13605.3.8 macOS #5-0]
[safari 13605.3.8 macOS #5-0] Check out job at https://app.eu-central-1.saucelabs.com/tests/63061498823845759b742af66653f52f?auth=7d1cf24b34dc39d8a0e7cae4baaad00d
------------------------------------------------------------------
[Safari 14.1 macOS #8-3] Running: Safari (v14.1) on macOS
[Safari 14.1 macOS #8-3] Session ID: 91163e7eaf924baab3ad2f8ec30642bf
[Safari 14.1 macOS #8-3]
[Safari 14.1 macOS #8-3] » /test/specs/checkout.summary.spec.js
[Safari 14.1 macOS #8-3] Checkout - Summary
[Safari 14.1 macOS #8-3]    ✓ should validate that we can continue shopping
[Safari 14.1 macOS #8-3]    ✓ should validate that we can cancel checkout and go to the inventory page
[Safari 14.1 macOS #8-3]    ✓ should validate that we have 1 product in our checkout overview
[Safari 14.1 macOS #8-3]
[Safari 14.1 macOS #8-3] 3 passing (5.6s)
[Safari 14.1 macOS #8-3]
[Safari 14.1 macOS #8-3] Check out job at https://app.eu-central-1.saucelabs.com/tests/91163e7eaf924baab3ad2f8ec30642bf?auth=de711010c5596396b11818e901639c09
------------------------------------------------------------------
[MicrosoftEdge 44.17763.1.0 windows #3-1] Running: MicrosoftEdge (v44.17763.1.0) on windows
[MicrosoftEdge 44.17763.1.0 windows #3-1] Session ID: 014979209d804ce6a8a6a9767ac77eea
[MicrosoftEdge 44.17763.1.0 windows #3-1]
[MicrosoftEdge 44.17763.1.0 windows #3-1] » /test/specs/checkout.complete.spec.js
[MicrosoftEdge 44.17763.1.0 windows #3-1] Checkout - Complete
[MicrosoftEdge 44.17763.1.0 windows #3-1]    ✓ should be able to test loading of login page
[MicrosoftEdge 44.17763.1.0 windows #3-1]
[MicrosoftEdge 44.17763.1.0 windows #3-1] 1 passing (3.3s)
[MicrosoftEdge 44.17763.1.0 windows #3-1]
[MicrosoftEdge 44.17763.1.0 windows #3-1] Check out job at https://app.eu-central-1.saucelabs.com/tests/014979209d804ce6a8a6a9767ac77eea?auth=e7e180c792bd262641a27a351e1762f7
------------------------------------------------------------------
[internet explorer 11 windows #2-3] Running: internet explorer (v11) on windows
[internet explorer 11 windows #2-3] Session ID: 30b07327c68d4046bebe5c82d7d5372d
[internet explorer 11 windows #2-3]
[internet explorer 11 windows #2-3] » /test/specs/checkout.summary.spec.js
[internet explorer 11 windows #2-3] Checkout - Summary
[internet explorer 11 windows #2-3]    ✓ should validate that we can continue shopping
[internet explorer 11 windows #2-3]    ✓ should validate that we can cancel checkout and go to the inventory page
[internet explorer 11 windows #2-3]    ✓ should validate that we have 1 product in our checkout overview
[internet explorer 11 windows #2-3]
[internet explorer 11 windows #2-3] 3 passing (8.3s)
[internet explorer 11 windows #2-3]
[internet explorer 11 windows #2-3] Check out job at https://app.eu-central-1.saucelabs.com/tests/30b07327c68d4046bebe5c82d7d5372d?auth=bdb57890dcc373fcdfba1429198fa8dd
------------------------------------------------------------------
[Safari 12.0 macOS #6-2] Running: Safari (v12.0) on macOS
[Safari 12.0 macOS #6-2] Session ID: 4edcf2d365a740ed98e098f3f5711cb2
[Safari 12.0 macOS #6-2]
[Safari 12.0 macOS #6-2] » /test/specs/checkout.personal.info.spec.js
[Safari 12.0 macOS #6-2] Checkout - Personal info
[Safari 12.0 macOS #6-2]    ✓ should validate we get an error if we don not provide all personal information
[Safari 12.0 macOS #6-2]    ✓ should validate that we can cancel the first checkout
[Safari 12.0 macOS #6-2]    ✓ should be able to continue the checkout
[Safari 12.0 macOS #6-2]
[Safari 12.0 macOS #6-2] 3 passing (10.2s)
[Safari 12.0 macOS #6-2]
[Safari 12.0 macOS #6-2] Check out job at https://app.eu-central-1.saucelabs.com/tests/4edcf2d365a740ed98e098f3f5711cb2?auth=5076527bd33cc1b94b55ae3b72e4bf48
------------------------------------------------------------------
[msedge 93.0.961.38 windows #4-3] Running: msedge (v93.0.961.38) on windows
[msedge 93.0.961.38 windows #4-3] Session ID: 17a1f6b321e042a5b38ab0426fd3a4f0
[msedge 93.0.961.38 windows #4-3]
[msedge 93.0.961.38 windows #4-3] » /test/specs/checkout.summary.spec.js
[msedge 93.0.961.38 windows #4-3] Checkout - Summary
[msedge 93.0.961.38 windows #4-3]    ✓ should validate that we can continue shopping
[msedge 93.0.961.38 windows #4-3]    ✓ should validate that we can cancel checkout and go to the inventory page
[msedge 93.0.961.38 windows #4-3]    ✓ should validate that we have 1 product in our checkout overview
[msedge 93.0.961.38 windows #4-3]
[msedge 93.0.961.38 windows #4-3] 3 passing (7.1s)
[msedge 93.0.961.38 windows #4-3]
[msedge 93.0.961.38 windows #4-3] Check out job at https://app.eu-central-1.saucelabs.com/tests/17a1f6b321e042a5b38ab0426fd3a4f0?auth=bbd60588a0e84f941b6dd62f8512b956
------------------------------------------------------------------
[safari 13605.3.8 macOS #5-4] Running: safari (v13605.3.8) on macOS
[safari 13605.3.8 macOS #5-4] Session ID: 2abb64ba9ca74104ba440479066e4cbf
[safari 13605.3.8 macOS #5-4]
[safari 13605.3.8 macOS #5-4] » /test/specs/login.spec.js
[safari 13605.3.8 macOS #5-4] LoginPage
[safari 13605.3.8 macOS #5-4]    ✓ should be able to test loading of login page
[safari 13605.3.8 macOS #5-4]    ✓ should be able to login with a standard user
[safari 13605.3.8 macOS #5-4]    ✓ should not be able to login with a locked user
[safari 13605.3.8 macOS #5-4]
[safari 13605.3.8 macOS #5-4] 3 passing (9s)
[safari 13605.3.8 macOS #5-4]
[safari 13605.3.8 macOS #5-4] Check out job at https://app.eu-central-1.saucelabs.com/tests/2abb64ba9ca74104ba440479066e4cbf?auth=baec2fe4a28eae21d37b187b3551a726
------------------------------------------------------------------
[Safari 13.1 macOS #7-3] Running: Safari (v13.1) on macOS
[Safari 13.1 macOS #7-3] Session ID: 4fc25ec6c3194ab4b40da750734c0805
[Safari 13.1 macOS #7-3]
[Safari 13.1 macOS #7-3] » /test/specs/checkout.summary.spec.js
[Safari 13.1 macOS #7-3] Checkout - Summary
[Safari 13.1 macOS #7-3]    ✓ should validate that we can continue shopping
[Safari 13.1 macOS #7-3]    ✓ should validate that we can cancel checkout and go to the inventory page
[Safari 13.1 macOS #7-3]    ✓ should validate that we have 1 product in our checkout overview
[Safari 13.1 macOS #7-3]
[Safari 13.1 macOS #7-3] 3 passing (5.4s)
[Safari 13.1 macOS #7-3]
[Safari 13.1 macOS #7-3] Check out job at https://app.eu-central-1.saucelabs.com/tests/4fc25ec6c3194ab4b40da750734c0805?auth=b7c5fce52e966212e1a18c1af499b753
------------------------------------------------------------------
[chrome 94.0.4606.54 windows #0-4] Running: chrome (v94.0.4606.54) on windows
[chrome 94.0.4606.54 windows #0-4] Session ID: c94c831e6a1346b3a845e38139cec752
[chrome 94.0.4606.54 windows #0-4]
[chrome 94.0.4606.54 windows #0-4] » /test/specs/login.spec.js
[chrome 94.0.4606.54 windows #0-4] LoginPage
[chrome 94.0.4606.54 windows #0-4]    ✓ should be able to test loading of login page
[chrome 94.0.4606.54 windows #0-4]    ✓ should be able to login with a standard user
[chrome 94.0.4606.54 windows #0-4]    ✓ should not be able to login with a locked user
[chrome 94.0.4606.54 windows #0-4]
[chrome 94.0.4606.54 windows #0-4] 3 passing (8.3s)
[chrome 94.0.4606.54 windows #0-4]
[chrome 94.0.4606.54 windows #0-4] Check out job at https://app.eu-central-1.saucelabs.com/tests/c94c831e6a1346b3a845e38139cec752?auth=5df2ce48f642911907fcf536c5f0a087
------------------------------------------------------------------
[safari 13605.3.8 macOS #5-2] Running: safari (v13605.3.8) on macOS
[safari 13605.3.8 macOS #5-2] Session ID: 47a0893d937243b9a6ad7c4c9fb87ecd
[safari 13605.3.8 macOS #5-2]
[safari 13605.3.8 macOS #5-2] » /test/specs/checkout.personal.info.spec.js
[safari 13605.3.8 macOS #5-2] Checkout - Personal info
[safari 13605.3.8 macOS #5-2]    ✓ should validate we get an error if we don not provide all personal information
[safari 13605.3.8 macOS #5-2]    ✓ should validate that we can cancel the first checkout
[safari 13605.3.8 macOS #5-2]    ✓ should be able to continue the checkout
[safari 13605.3.8 macOS #5-2]
[safari 13605.3.8 macOS #5-2] 3 passing (9.8s)
[safari 13605.3.8 macOS #5-2]
[safari 13605.3.8 macOS #5-2] Check out job at https://app.eu-central-1.saucelabs.com/tests/47a0893d937243b9a6ad7c4c9fb87ecd?auth=e4e4d278ca72c4e72daec7afb94632c7
------------------------------------------------------------------
[Safari 13.1 macOS #7-5] Running: Safari (v13.1) on macOS
[Safari 13.1 macOS #7-5] Session ID: d212a52200e24c3385dae7f508abc53a
[Safari 13.1 macOS #7-5]
[Safari 13.1 macOS #7-5] » /test/specs/menu.spec.js
[Safari 13.1 macOS #7-5] Menu
[Safari 13.1 macOS #7-5]    ✓ should be able to the swag items overview page
[Safari 13.1 macOS #7-5]    ✓ should be able to log out
[Safari 13.1 macOS #7-5]    ✓ should be able to clear the cart
[Safari 13.1 macOS #7-5]
[Safari 13.1 macOS #7-5] 3 passing (9.5s)
[Safari 13.1 macOS #7-5]
[Safari 13.1 macOS #7-5] Check out job at https://app.eu-central-1.saucelabs.com/tests/d212a52200e24c3385dae7f508abc53a?auth=23962929a9c7f458e1b5191e978ffe8e
------------------------------------------------------------------
[msedge 93.0.961.38 windows #4-2] Running: msedge (v93.0.961.38) on windows
[msedge 93.0.961.38 windows #4-2] Session ID: bca1413e9ff946d1b4828260014b62c4
[msedge 93.0.961.38 windows #4-2]
[msedge 93.0.961.38 windows #4-2] » /test/specs/checkout.personal.info.spec.js
[msedge 93.0.961.38 windows #4-2] Checkout - Personal info
[msedge 93.0.961.38 windows #4-2]    ✓ should validate we get an error if we don not provide all personal information
[msedge 93.0.961.38 windows #4-2]    ✓ should validate that we can cancel the first checkout
[msedge 93.0.961.38 windows #4-2]    ✓ should be able to continue the checkout
[msedge 93.0.961.38 windows #4-2]
[msedge 93.0.961.38 windows #4-2] 3 passing (8.4s)
[msedge 93.0.961.38 windows #4-2]
[msedge 93.0.961.38 windows #4-2] Check out job at https://app.eu-central-1.saucelabs.com/tests/bca1413e9ff946d1b4828260014b62c4?auth=f5b33b064f635d3ff94080574ecbc1b1
------------------------------------------------------------------
[Safari 13.1 macOS #7-6] Running: Safari (v13.1) on macOS
[Safari 13.1 macOS #7-6] Session ID: 47358a156f9b45d9893e9332e8e95979
[Safari 13.1 macOS #7-6]
[Safari 13.1 macOS #7-6] » /test/specs/swag.item.details.spec.js
[Safari 13.1 macOS #7-6] Swag Item Details
[Safari 13.1 macOS #7-6]    ✓ should validate that we can go back from the details to the inventory page
[Safari 13.1 macOS #7-6]    ✓ should validate that a product can be added to a cart
[Safari 13.1 macOS #7-6]    ✓ should validate that a product can be removed from the cart
[Safari 13.1 macOS #7-6]
[Safari 13.1 macOS #7-6] 3 passing (10s)
[Safari 13.1 macOS #7-6]
[Safari 13.1 macOS #7-6] Check out job at https://app.eu-central-1.saucelabs.com/tests/47358a156f9b45d9893e9332e8e95979?auth=0cff314f708999616049add07a6c6e24
------------------------------------------------------------------
[Safari 13.1 macOS #7-2] Running: Safari (v13.1) on macOS
[Safari 13.1 macOS #7-2] Session ID: 6be40fdf70a9446f80830d560562a7d5
[Safari 13.1 macOS #7-2]
[Safari 13.1 macOS #7-2] » /test/specs/checkout.personal.info.spec.js
[Safari 13.1 macOS #7-2] Checkout - Personal info
[Safari 13.1 macOS #7-2]    ✓ should validate we get an error if we don not provide all personal information
[Safari 13.1 macOS #7-2]    ✓ should validate that we can cancel the first checkout
[Safari 13.1 macOS #7-2]    ✓ should be able to continue the checkout
[Safari 13.1 macOS #7-2]
[Safari 13.1 macOS #7-2] 3 passing (10s)
[Safari 13.1 macOS #7-2]
[Safari 13.1 macOS #7-2] Check out job at https://app.eu-central-1.saucelabs.com/tests/6be40fdf70a9446f80830d560562a7d5?auth=dbe8c319be11e516970d565c9e74710f
------------------------------------------------------------------
[firefox 92.0 windows #1-1] Running: firefox (v92.0) on windows
[firefox 92.0 windows #1-1] Session ID: 651720671cf2401bb47334bdbbcd2e3a
[firefox 92.0 windows #1-1]
[firefox 92.0 windows #1-1] » /test/specs/checkout.complete.spec.js
[firefox 92.0 windows #1-1] Checkout - Complete
[firefox 92.0 windows #1-1]    ✓ should be able to test loading of login page
[firefox 92.0 windows #1-1]
[firefox 92.0 windows #1-1] 1 passing (4.1s)
[firefox 92.0 windows #1-1]
[firefox 92.0 windows #1-1] Check out job at https://app.eu-central-1.saucelabs.com/tests/651720671cf2401bb47334bdbbcd2e3a?auth=8e979cd9f35894d4b28fa6d62623e182
------------------------------------------------------------------
[Safari 14.1 macOS #8-4] Running: Safari (v14.1) on macOS
[Safari 14.1 macOS #8-4] Session ID: 176a89492d424efea349d9aa5c0cc25f
[Safari 14.1 macOS #8-4]
[Safari 14.1 macOS #8-4] » /test/specs/login.spec.js
[Safari 14.1 macOS #8-4] LoginPage
[Safari 14.1 macOS #8-4]    ✓ should be able to test loading of login page
[Safari 14.1 macOS #8-4]    ✓ should be able to login with a standard user
[Safari 14.1 macOS #8-4]    ✓ should not be able to login with a locked user
[Safari 14.1 macOS #8-4]
[Safari 14.1 macOS #8-4] 3 passing (10s)
[Safari 14.1 macOS #8-4]
[Safari 14.1 macOS #8-4] Check out job at https://app.eu-central-1.saucelabs.com/tests/176a89492d424efea349d9aa5c0cc25f?auth=3e163542e19e60dd240d0d4128623991
------------------------------------------------------------------
[Safari 14.1 macOS #8-2] Running: Safari (v14.1) on macOS
[Safari 14.1 macOS #8-2] Session ID: aceb78e2bf8b4d7c8304f699dd52727f
[Safari 14.1 macOS #8-2]
[Safari 14.1 macOS #8-2] » /test/specs/checkout.personal.info.spec.js
[Safari 14.1 macOS #8-2] Checkout - Personal info
[Safari 14.1 macOS #8-2]    ✓ should validate we get an error if we don not provide all personal information
[Safari 14.1 macOS #8-2]    ✓ should validate that we can cancel the first checkout
[Safari 14.1 macOS #8-2]    ✓ should be able to continue the checkout
[Safari 14.1 macOS #8-2]
[Safari 14.1 macOS #8-2] 3 passing (9.7s)
[Safari 14.1 macOS #8-2]
[Safari 14.1 macOS #8-2] Check out job at https://app.eu-central-1.saucelabs.com/tests/aceb78e2bf8b4d7c8304f699dd52727f?auth=c8602908581bcb9f0d8a62cd657f04bf
------------------------------------------------------------------
[Safari 13.1 macOS #7-4] Running: Safari (v13.1) on macOS
[Safari 13.1 macOS #7-4] Session ID: c8dfed8660484c979e618bd99b7e249f
[Safari 13.1 macOS #7-4]
[Safari 13.1 macOS #7-4] » /test/specs/login.spec.js
[Safari 13.1 macOS #7-4] LoginPage
[Safari 13.1 macOS #7-4]    ✓ should be able to test loading of login page
[Safari 13.1 macOS #7-4]    ✓ should be able to login with a standard user
[Safari 13.1 macOS #7-4]    ✓ should not be able to login with a locked user
[Safari 13.1 macOS #7-4]
[Safari 13.1 macOS #7-4] 3 passing (9.7s)
[Safari 13.1 macOS #7-4]
[Safari 13.1 macOS #7-4] Check out job at https://app.eu-central-1.saucelabs.com/tests/c8dfed8660484c979e618bd99b7e249f?auth=77c46ec54c15a0903a7d9b94792741f9
------------------------------------------------------------------
[Safari 12.0 macOS #6-5] Running: Safari (v12.0) on macOS
[Safari 12.0 macOS #6-5] Session ID: 2e3b157f1fbc43d8b4256f50f01bad7f
[Safari 12.0 macOS #6-5]
[Safari 12.0 macOS #6-5] » /test/specs/menu.spec.js
[Safari 12.0 macOS #6-5] Menu
[Safari 12.0 macOS #6-5]    ✓ should be able to the swag items overview page
[Safari 12.0 macOS #6-5]    ✓ should be able to log out
[Safari 12.0 macOS #6-5]    ✓ should be able to clear the cart
[Safari 12.0 macOS #6-5]
[Safari 12.0 macOS #6-5] 3 passing (9.6s)
[Safari 12.0 macOS #6-5]
[Safari 12.0 macOS #6-5] Check out job at https://app.eu-central-1.saucelabs.com/tests/2e3b157f1fbc43d8b4256f50f01bad7f?auth=b18d47ce3b461f8cbd20f06efd27ee85
------------------------------------------------------------------
[msedge 93.0.961.38 windows #4-4] Running: msedge (v93.0.961.38) on windows
[msedge 93.0.961.38 windows #4-4] Session ID: 53afa2d041b24eeb83d26e4532c10c2e
[msedge 93.0.961.38 windows #4-4]
[msedge 93.0.961.38 windows #4-4] » /test/specs/login.spec.js
[msedge 93.0.961.38 windows #4-4] LoginPage
[msedge 93.0.961.38 windows #4-4]    ✓ should be able to test loading of login page
[msedge 93.0.961.38 windows #4-4]    ✓ should be able to login with a standard user
[msedge 93.0.961.38 windows #4-4]    ✓ should not be able to login with a locked user
[msedge 93.0.961.38 windows #4-4]
[msedge 93.0.961.38 windows #4-4] 3 passing (8.1s)
[msedge 93.0.961.38 windows #4-4]
[msedge 93.0.961.38 windows #4-4] Check out job at https://app.eu-central-1.saucelabs.com/tests/53afa2d041b24eeb83d26e4532c10c2e?auth=dc9efa1397a21e47bdf18d3eb76dc8d8
------------------------------------------------------------------
[safari 13605.3.8 macOS #5-7] Running: safari (v13605.3.8) on macOS
[safari 13605.3.8 macOS #5-7] Session ID: 75daffc749db4902893485bbd36249da
[safari 13605.3.8 macOS #5-7]
[safari 13605.3.8 macOS #5-7] » /test/specs/swag.items.list.spec.js
[safari 13605.3.8 macOS #5-7] Swag items list
[safari 13605.3.8 macOS #5-7]    ✓ should validate that all products are present
[safari 13605.3.8 macOS #5-7]    ✓ should validate that the details of a product can be opened
[safari 13605.3.8 macOS #5-7]    ✓ should validate that a product can be added to the cart
[safari 13605.3.8 macOS #5-7]    ✓ should validate that a product can be removed from the cart
[safari 13605.3.8 macOS #5-7]    ✓ should be able to open the cart summary page
[safari 13605.3.8 macOS #5-7]
[safari 13605.3.8 macOS #5-7] 5 passing (12.2s)
[safari 13605.3.8 macOS #5-7]
[safari 13605.3.8 macOS #5-7] Check out job at https://app.eu-central-1.saucelabs.com/tests/75daffc749db4902893485bbd36249da?auth=27e77fc86493d61586aacc1c6d74f505
------------------------------------------------------------------
[safari 13605.3.8 macOS #5-5] Running: safari (v13605.3.8) on macOS
[safari 13605.3.8 macOS #5-5] Session ID: 7cc224bc3cab4386a4ec959cf8ec8962
[safari 13605.3.8 macOS #5-5]
[safari 13605.3.8 macOS #5-5] » /test/specs/menu.spec.js
[safari 13605.3.8 macOS #5-5] Menu
[safari 13605.3.8 macOS #5-5]    ✓ should be able to the swag items overview page
[safari 13605.3.8 macOS #5-5]    ✓ should be able to log out
[safari 13605.3.8 macOS #5-5]    ✓ should be able to clear the cart
[safari 13605.3.8 macOS #5-5]
[safari 13605.3.8 macOS #5-5] 3 passing (10.5s)
[safari 13605.3.8 macOS #5-5]
[safari 13605.3.8 macOS #5-5] Check out job at https://app.eu-central-1.saucelabs.com/tests/7cc224bc3cab4386a4ec959cf8ec8962?auth=f07f18684178f411de92e7a6fa0ff6e8
------------------------------------------------------------------
[Safari 12.0 macOS #6-4] Running: Safari (v12.0) on macOS
[Safari 12.0 macOS #6-4] Session ID: 29ae28a2ebc74fc5b7b5fdd4375acab5
[Safari 12.0 macOS #6-4]
[Safari 12.0 macOS #6-4] » /test/specs/login.spec.js
[Safari 12.0 macOS #6-4] LoginPage
[Safari 12.0 macOS #6-4]    ✓ should be able to test loading of login page
[Safari 12.0 macOS #6-4]    ✓ should be able to login with a standard user
[Safari 12.0 macOS #6-4]    ✓ should not be able to login with a locked user
[Safari 12.0 macOS #6-4]
[Safari 12.0 macOS #6-4] 3 passing (9.1s)
[Safari 12.0 macOS #6-4]
[Safari 12.0 macOS #6-4] Check out job at https://app.eu-central-1.saucelabs.com/tests/29ae28a2ebc74fc5b7b5fdd4375acab5?auth=27f78985df6441edf66bec479eadfde0
------------------------------------------------------------------
[internet explorer 11 windows #2-2] Running: internet explorer (v11) on windows
[internet explorer 11 windows #2-2] Session ID: 52e0e8816d464a3f8b21d299899266d0
[internet explorer 11 windows #2-2]
[internet explorer 11 windows #2-2] » /test/specs/checkout.personal.info.spec.js
[internet explorer 11 windows #2-2] Checkout - Personal info
[internet explorer 11 windows #2-2]    ✓ should validate we get an error if we don not provide all personal information
[internet explorer 11 windows #2-2]    ✓ should validate that we can cancel the first checkout
[internet explorer 11 windows #2-2]    ✓ should be able to continue the checkout
[internet explorer 11 windows #2-2]
[internet explorer 11 windows #2-2] 3 passing (14.1s)
[internet explorer 11 windows #2-2]
[internet explorer 11 windows #2-2] Check out job at https://app.eu-central-1.saucelabs.com/tests/52e0e8816d464a3f8b21d299899266d0?auth=e79d656f4e2bd537e4e392c2a35f6bf2
------------------------------------------------------------------
[msedge 93.0.961.38 windows #4-5] Running: msedge (v93.0.961.38) on windows
[msedge 93.0.961.38 windows #4-5] Session ID: e8152244b60c4ad4a88455eeab0a0a87
[msedge 93.0.961.38 windows #4-5]
[msedge 93.0.961.38 windows #4-5] » /test/specs/menu.spec.js
[msedge 93.0.961.38 windows #4-5] Menu
[msedge 93.0.961.38 windows #4-5]    ✓ should be able to the swag items overview page
[msedge 93.0.961.38 windows #4-5]    ✓ should be able to log out
[msedge 93.0.961.38 windows #4-5]    ✓ should be able to clear the cart
[msedge 93.0.961.38 windows #4-5]
[msedge 93.0.961.38 windows #4-5] 3 passing (10.2s)
[msedge 93.0.961.38 windows #4-5]
[msedge 93.0.961.38 windows #4-5] Check out job at https://app.eu-central-1.saucelabs.com/tests/e8152244b60c4ad4a88455eeab0a0a87?auth=0b14bef1b78bc8867524957135229c77
------------------------------------------------------------------
[internet explorer 11 windows #2-4] Running: internet explorer (v11) on windows
[internet explorer 11 windows #2-4] Session ID: e306406a2a40493bb32b627ccbd132e7
[internet explorer 11 windows #2-4]
[internet explorer 11 windows #2-4] » /test/specs/login.spec.js
[internet explorer 11 windows #2-4] LoginPage
[internet explorer 11 windows #2-4]    ✓ should be able to test loading of login page
[internet explorer 11 windows #2-4]    ✓ should be able to login with a standard user
[internet explorer 11 windows #2-4]    ✓ should not be able to login with a locked user
[internet explorer 11 windows #2-4]
[internet explorer 11 windows #2-4] 3 passing (11.1s)
[internet explorer 11 windows #2-4]
[internet explorer 11 windows #2-4] Check out job at https://app.eu-central-1.saucelabs.com/tests/e306406a2a40493bb32b627ccbd132e7?auth=b979c5eedbf07ccbe619d1808a0ece76
------------------------------------------------------------------
[Safari 13.1 macOS #7-7] Running: Safari (v13.1) on macOS
[Safari 13.1 macOS #7-7] Session ID: 351a4823313b47858f169c28e98c224e
[Safari 13.1 macOS #7-7]
[Safari 13.1 macOS #7-7] » /test/specs/swag.items.list.spec.js
[Safari 13.1 macOS #7-7] Swag items list
[Safari 13.1 macOS #7-7]    ✓ should validate that all products are present
[Safari 13.1 macOS #7-7]    ✓ should validate that the details of a product can be opened
[Safari 13.1 macOS #7-7]    ✓ should validate that a product can be added to the cart
[Safari 13.1 macOS #7-7]    ✓ should validate that a product can be removed from the cart
[Safari 13.1 macOS #7-7]    ✓ should be able to open the cart summary page
[Safari 13.1 macOS #7-7]
[Safari 13.1 macOS #7-7] 5 passing (11.8s)
[Safari 13.1 macOS #7-7]
[Safari 13.1 macOS #7-7] Check out job at https://app.eu-central-1.saucelabs.com/tests/351a4823313b47858f169c28e98c224e?auth=6e216c273d3852c36896c12514584fca
------------------------------------------------------------------
[chrome 94.0.4606.54 windows #0-7] Running: chrome (v94.0.4606.54) on windows
[chrome 94.0.4606.54 windows #0-7] Session ID: c33321f371e84ec5943ea6d787274482
[chrome 94.0.4606.54 windows #0-7]
[chrome 94.0.4606.54 windows #0-7] » /test/specs/swag.items.list.spec.js
[chrome 94.0.4606.54 windows #0-7] Swag items list
[chrome 94.0.4606.54 windows #0-7]    ✓ should validate that all products are present
[chrome 94.0.4606.54 windows #0-7]    ✓ should validate that the details of a product can be opened
[chrome 94.0.4606.54 windows #0-7]    ✓ should validate that a product can be added to the cart
[chrome 94.0.4606.54 windows #0-7]    ✓ should validate that a product can be removed from the cart
[chrome 94.0.4606.54 windows #0-7]    ✓ should be able to open the cart summary page
[chrome 94.0.4606.54 windows #0-7]
[chrome 94.0.4606.54 windows #0-7] 5 passing (14.5s)
[chrome 94.0.4606.54 windows #0-7]
[chrome 94.0.4606.54 windows #0-7] Check out job at https://app.eu-central-1.saucelabs.com/tests/c33321f371e84ec5943ea6d787274482?auth=ff89a997714f566c691539fbe07c816d
------------------------------------------------------------------
[chrome 94.0.4606.54 windows #0-5] Running: chrome (v94.0.4606.54) on windows
[chrome 94.0.4606.54 windows #0-5] Session ID: 034c8fd8448543cfb802698da3432d08
[chrome 94.0.4606.54 windows #0-5]
[chrome 94.0.4606.54 windows #0-5] » /test/specs/menu.spec.js
[chrome 94.0.4606.54 windows #0-5] Menu
[chrome 94.0.4606.54 windows #0-5]    ✓ should be able to the swag items overview page
[chrome 94.0.4606.54 windows #0-5]    ✓ should be able to log out
[chrome 94.0.4606.54 windows #0-5]    ✓ should be able to clear the cart
[chrome 94.0.4606.54 windows #0-5]
[chrome 94.0.4606.54 windows #0-5] 3 passing (13.9s)
[chrome 94.0.4606.54 windows #0-5]
[chrome 94.0.4606.54 windows #0-5] Check out job at https://app.eu-central-1.saucelabs.com/tests/034c8fd8448543cfb802698da3432d08?auth=87aa1208b8707aae8472af3e27bda442
------------------------------------------------------------------
[Safari 12.0 macOS #6-7] Running: Safari (v12.0) on macOS
[Safari 12.0 macOS #6-7] Session ID: 6f746721ac494965bfb3d914c56dec3c
[Safari 12.0 macOS #6-7]
[Safari 12.0 macOS #6-7] » /test/specs/swag.items.list.spec.js
[Safari 12.0 macOS #6-7] Swag items list
[Safari 12.0 macOS #6-7]    ✓ should validate that all products are present
[Safari 12.0 macOS #6-7]    ✓ should validate that the details of a product can be opened
[Safari 12.0 macOS #6-7]    ✓ should validate that a product can be added to the cart
[Safari 12.0 macOS #6-7]    ✓ should validate that a product can be removed from the cart
[Safari 12.0 macOS #6-7]    ✓ should be able to open the cart summary page
[Safari 12.0 macOS #6-7]
[Safari 12.0 macOS #6-7] 5 passing (12s)
[Safari 12.0 macOS #6-7]
[Safari 12.0 macOS #6-7] Check out job at https://app.eu-central-1.saucelabs.com/tests/6f746721ac494965bfb3d914c56dec3c?auth=55a591fd9278abee1311ac0c72ba6004
------------------------------------------------------------------
[internet explorer 11 windows #2-6] Running: internet explorer (v11) on windows
[internet explorer 11 windows #2-6] Session ID: 76d811be40f84179809411dc7f64efd9
[internet explorer 11 windows #2-6]
[internet explorer 11 windows #2-6] » /test/specs/swag.item.details.spec.js
[internet explorer 11 windows #2-6] Swag Item Details
[internet explorer 11 windows #2-6]    ✓ should validate that we can go back from the details to the inventory page
[internet explorer 11 windows #2-6]    ✓ should validate that a product can be added to a cart
[internet explorer 11 windows #2-6]    ✓ should validate that a product can be removed from the cart
[internet explorer 11 windows #2-6]
[internet explorer 11 windows #2-6] 3 passing (14.7s)
[internet explorer 11 windows #2-6]
[internet explorer 11 windows #2-6] Check out job at https://app.eu-central-1.saucelabs.com/tests/76d811be40f84179809411dc7f64efd9?auth=4c3dbe2e75bd10d984f21ae9d1b371f7
------------------------------------------------------------------
[chrome 94.0.4606.54 windows #0-6] Running: chrome (v94.0.4606.54) on windows
[chrome 94.0.4606.54 windows #0-6] Session ID: 3e6c12304a4248b7a2c5b7ec41a2c744
[chrome 94.0.4606.54 windows #0-6]
[chrome 94.0.4606.54 windows #0-6] » /test/specs/swag.item.details.spec.js
[chrome 94.0.4606.54 windows #0-6] Swag Item Details
[chrome 94.0.4606.54 windows #0-6]    ✓ should validate that we can go back from the details to the inventory page
[chrome 94.0.4606.54 windows #0-6]    ✓ should validate that a product can be added to a cart
[chrome 94.0.4606.54 windows #0-6]    ✓ should validate that a product can be removed from the cart
[chrome 94.0.4606.54 windows #0-6]
[chrome 94.0.4606.54 windows #0-6] 3 passing (9.7s)
[chrome 94.0.4606.54 windows #0-6]
[chrome 94.0.4606.54 windows #0-6] Check out job at https://app.eu-central-1.saucelabs.com/tests/3e6c12304a4248b7a2c5b7ec41a2c744?auth=660893de41a76ce9daffff1943c44d5f
------------------------------------------------------------------
[msedge 93.0.961.38 windows #4-7] Running: msedge (v93.0.961.38) on windows
[msedge 93.0.961.38 windows #4-7] Session ID: 9a8dd7f9bc3e41bdbf5a209228598042
[msedge 93.0.961.38 windows #4-7]
[msedge 93.0.961.38 windows #4-7] » /test/specs/swag.items.list.spec.js
[msedge 93.0.961.38 windows #4-7] Swag items list
[msedge 93.0.961.38 windows #4-7]    ✓ should validate that all products are present
[msedge 93.0.961.38 windows #4-7]    ✓ should validate that the details of a product can be opened
[msedge 93.0.961.38 windows #4-7]    ✓ should validate that a product can be added to the cart
[msedge 93.0.961.38 windows #4-7]    ✓ should validate that a product can be removed from the cart
[msedge 93.0.961.38 windows #4-7]    ✓ should be able to open the cart summary page
[msedge 93.0.961.38 windows #4-7]
[msedge 93.0.961.38 windows #4-7] 5 passing (14s)
[msedge 93.0.961.38 windows #4-7]
[msedge 93.0.961.38 windows #4-7] Check out job at https://app.eu-central-1.saucelabs.com/tests/9a8dd7f9bc3e41bdbf5a209228598042?auth=68218c7ee874a75f819cd22fb432cd24
------------------------------------------------------------------
[firefox 92.0 windows #1-2] Running: firefox (v92.0) on windows
[firefox 92.0 windows #1-2] Session ID: 319826d3498f4b11b8b425eab180daba
[firefox 92.0 windows #1-2]
[firefox 92.0 windows #1-2] » /test/specs/checkout.personal.info.spec.js
[firefox 92.0 windows #1-2] Checkout - Personal info
[firefox 92.0 windows #1-2]    ✓ should validate we get an error if we don not provide all personal information
[firefox 92.0 windows #1-2]    ✓ should validate that we can cancel the first checkout
[firefox 92.0 windows #1-2]    ✓ should be able to continue the checkout
[firefox 92.0 windows #1-2]
[firefox 92.0 windows #1-2] 3 passing (11s)
[firefox 92.0 windows #1-2]
[firefox 92.0 windows #1-2] Check out job at https://app.eu-central-1.saucelabs.com/tests/319826d3498f4b11b8b425eab180daba?auth=7764a630e23155dc44e6aded92b0e3b9
------------------------------------------------------------------
[Safari 14.1 macOS #8-6] Running: Safari (v14.1) on macOS
[Safari 14.1 macOS #8-6] Session ID: 558610e457ae494aa1629db9009a720f
[Safari 14.1 macOS #8-6]
[Safari 14.1 macOS #8-6] » /test/specs/swag.item.details.spec.js
[Safari 14.1 macOS #8-6] Swag Item Details
[Safari 14.1 macOS #8-6]    ✓ should validate that we can go back from the details to the inventory page
[Safari 14.1 macOS #8-6]    ✓ should validate that a product can be added to a cart
[Safari 14.1 macOS #8-6]    ✓ should validate that a product can be removed from the cart
[Safari 14.1 macOS #8-6]
[Safari 14.1 macOS #8-6] 3 passing (9.4s)
[Safari 14.1 macOS #8-6]
[Safari 14.1 macOS #8-6] Check out job at https://app.eu-central-1.saucelabs.com/tests/558610e457ae494aa1629db9009a720f?auth=e39e54d9742dbcc7ec35db5e0626946d
------------------------------------------------------------------
[msedge 93.0.961.38 windows #4-6] Running: msedge (v93.0.961.38) on windows
[msedge 93.0.961.38 windows #4-6] Session ID: 13639b3908aa4d90a6067532a73ad60c
[msedge 93.0.961.38 windows #4-6]
[msedge 93.0.961.38 windows #4-6] » /test/specs/swag.item.details.spec.js
[msedge 93.0.961.38 windows #4-6] Swag Item Details
[msedge 93.0.961.38 windows #4-6]    ✓ should validate that we can go back from the details to the inventory page
[msedge 93.0.961.38 windows #4-6]    ✓ should validate that a product can be added to a cart
[msedge 93.0.961.38 windows #4-6]    ✓ should validate that a product can be removed from the cart
[msedge 93.0.961.38 windows #4-6]
[msedge 93.0.961.38 windows #4-6] 3 passing (9.4s)
[msedge 93.0.961.38 windows #4-6]
[msedge 93.0.961.38 windows #4-6] Check out job at https://app.eu-central-1.saucelabs.com/tests/13639b3908aa4d90a6067532a73ad60c?auth=68ce69d8f7f469aa9bf695d84b9fd632
------------------------------------------------------------------
[Safari 12.0 macOS #6-6] Running: Safari (v12.0) on macOS
[Safari 12.0 macOS #6-6] Session ID: 4ad43fe8b5964b3bbee576883087d0ae
[Safari 12.0 macOS #6-6]
[Safari 12.0 macOS #6-6] » /test/specs/swag.item.details.spec.js
[Safari 12.0 macOS #6-6] Swag Item Details
[Safari 12.0 macOS #6-6]    ✓ should validate that we can go back from the details to the inventory page
[Safari 12.0 macOS #6-6]    ✓ should validate that a product can be added to a cart
[Safari 12.0 macOS #6-6]    ✓ should validate that a product can be removed from the cart
[Safari 12.0 macOS #6-6]
[Safari 12.0 macOS #6-6] 3 passing (9.9s)
[Safari 12.0 macOS #6-6]
[Safari 12.0 macOS #6-6] Check out job at https://app.eu-central-1.saucelabs.com/tests/4ad43fe8b5964b3bbee576883087d0ae?auth=27b5f747824865d7b171f497c19d4df7
------------------------------------------------------------------
[MicrosoftEdge 44.17763.1.0 windows #3-3] Running: MicrosoftEdge (v44.17763.1.0) on windows
[MicrosoftEdge 44.17763.1.0 windows #3-3] Session ID: 9af47f4c7ee7435fb9e3cb72ba71a771
[MicrosoftEdge 44.17763.1.0 windows #3-3]
[MicrosoftEdge 44.17763.1.0 windows #3-3] » /test/specs/checkout.summary.spec.js
[MicrosoftEdge 44.17763.1.0 windows #3-3] Checkout - Summary
[MicrosoftEdge 44.17763.1.0 windows #3-3]    ✓ should validate that we can continue shopping
[MicrosoftEdge 44.17763.1.0 windows #3-3]    ✓ should validate that we can cancel checkout and go to the inventory page
[MicrosoftEdge 44.17763.1.0 windows #3-3]    ✓ should validate that we have 1 product in our checkout overview
[MicrosoftEdge 44.17763.1.0 windows #3-3]
[MicrosoftEdge 44.17763.1.0 windows #3-3] 3 passing (10.5s)
[MicrosoftEdge 44.17763.1.0 windows #3-3]
[MicrosoftEdge 44.17763.1.0 windows #3-3] Check out job at https://app.eu-central-1.saucelabs.com/tests/9af47f4c7ee7435fb9e3cb72ba71a771?auth=8fbc10545808fd66588ad1f6637c5108
------------------------------------------------------------------
[firefox 92.0 windows #1-3] Running: firefox (v92.0) on windows
[firefox 92.0 windows #1-3] Session ID: fa5c336d13b44b9eb569967b7f7e074d
[firefox 92.0 windows #1-3]
[firefox 92.0 windows #1-3] » /test/specs/checkout.summary.spec.js
[firefox 92.0 windows #1-3] Checkout - Summary
[firefox 92.0 windows #1-3]    ✓ should validate that we can continue shopping
[firefox 92.0 windows #1-3]    ✓ should validate that we can cancel checkout and go to the inventory page
[firefox 92.0 windows #1-3]    ✓ should validate that we have 1 product in our checkout overview
[firefox 92.0 windows #1-3]
[firefox 92.0 windows #1-3] 3 passing (11s)
[firefox 92.0 windows #1-3]
[firefox 92.0 windows #1-3] Check out job at https://app.eu-central-1.saucelabs.com/tests/fa5c336d13b44b9eb569967b7f7e074d?auth=a56f331ec5f064c5077fac98ddfc1dbf
------------------------------------------------------------------
[safari 13605.3.8 macOS #5-6] Running: safari (v13605.3.8) on macOS
[safari 13605.3.8 macOS #5-6] Session ID: 3989f1f55bad49aea925c6c31e1f0eb0
[safari 13605.3.8 macOS #5-6]
[safari 13605.3.8 macOS #5-6] » /test/specs/swag.item.details.spec.js
[safari 13605.3.8 macOS #5-6] Swag Item Details
[safari 13605.3.8 macOS #5-6]    ✓ should validate that we can go back from the details to the inventory page
[safari 13605.3.8 macOS #5-6]    ✓ should validate that a product can be added to a cart
[safari 13605.3.8 macOS #5-6]    ✓ should validate that a product can be removed from the cart
[safari 13605.3.8 macOS #5-6]
[safari 13605.3.8 macOS #5-6] 3 passing (10.3s)
[safari 13605.3.8 macOS #5-6]
[safari 13605.3.8 macOS #5-6] Check out job at https://app.eu-central-1.saucelabs.com/tests/3989f1f55bad49aea925c6c31e1f0eb0?auth=a2d7da945ef53f0fe80f948c9b87f81e
------------------------------------------------------------------
[Safari 14.1 macOS #8-7] Running: Safari (v14.1) on macOS
[Safari 14.1 macOS #8-7] Session ID: 74b7d4df40424bb4909189e650a126b9
[Safari 14.1 macOS #8-7]
[Safari 14.1 macOS #8-7] » /test/specs/swag.items.list.spec.js
[Safari 14.1 macOS #8-7] Swag items list
[Safari 14.1 macOS #8-7]    ✓ should validate that all products are present
[Safari 14.1 macOS #8-7]    ✓ should validate that the details of a product can be opened
[Safari 14.1 macOS #8-7]    ✓ should validate that a product can be added to the cart
[Safari 14.1 macOS #8-7]    ✓ should validate that a product can be removed from the cart
[Safari 14.1 macOS #8-7]    ✓ should be able to open the cart summary page
[Safari 14.1 macOS #8-7]
[Safari 14.1 macOS #8-7] 5 passing (12.1s)
[Safari 14.1 macOS #8-7]
[Safari 14.1 macOS #8-7] Check out job at https://app.eu-central-1.saucelabs.com/tests/74b7d4df40424bb4909189e650a126b9?auth=407629c868515aa6d0840fbb742e8bb3
------------------------------------------------------------------
[internet explorer 11 windows #2-5] Running: internet explorer (v11) on windows
[internet explorer 11 windows #2-5] Session ID: 5630d9d995a144c58e6aec612fc53da8
[internet explorer 11 windows #2-5]
[internet explorer 11 windows #2-5] » /test/specs/menu.spec.js
[internet explorer 11 windows #2-5] Menu
[internet explorer 11 windows #2-5]    ✓ should be able to the swag items overview page
[internet explorer 11 windows #2-5]    ✓ should be able to log out
[internet explorer 11 windows #2-5]    ✓ should be able to clear the cart
[internet explorer 11 windows #2-5]
[internet explorer 11 windows #2-5] 3 passing (14.3s)
[internet explorer 11 windows #2-5]
[internet explorer 11 windows #2-5] Check out job at https://app.eu-central-1.saucelabs.com/tests/5630d9d995a144c58e6aec612fc53da8?auth=0f9022d679f6dc0319d5ef578c8b61ad
------------------------------------------------------------------
[Safari 14.1 macOS #8-5] Running: Safari (v14.1) on macOS
[Safari 14.1 macOS #8-5] Session ID: 4c6c583623e04e02ae8cf094b70430d7
[Safari 14.1 macOS #8-5]
[Safari 14.1 macOS #8-5] » /test/specs/menu.spec.js
[Safari 14.1 macOS #8-5] Menu
[Safari 14.1 macOS #8-5]    ✓ should be able to the swag items overview page
[Safari 14.1 macOS #8-5]    ✓ should be able to log out
[Safari 14.1 macOS #8-5]    ✓ should be able to clear the cart
[Safari 14.1 macOS #8-5]
[Safari 14.1 macOS #8-5] 3 passing (10.1s)
[Safari 14.1 macOS #8-5]
[Safari 14.1 macOS #8-5] Check out job at https://app.eu-central-1.saucelabs.com/tests/4c6c583623e04e02ae8cf094b70430d7?auth=fde58b12128abe4fef7826e9fefb54c3
------------------------------------------------------------------
[firefox 92.0 windows #1-0] Running: firefox (v92.0) on windows
[firefox 92.0 windows #1-0] Session ID: 0d39dd8fc70f4df681af9be16d4c6f33
[firefox 92.0 windows #1-0]
[firefox 92.0 windows #1-0] » /test/specs/cart.summary.spec.js
[firefox 92.0 windows #1-0] Cart Summary page
[firefox 92.0 windows #1-0]    ✓ should validate that we can continue shopping
[firefox 92.0 windows #1-0]    ✓ should validate that we can go from the cart to the checkout page
[firefox 92.0 windows #1-0]    ✓ should validate that a product can be removed from the cart
[firefox 92.0 windows #1-0]
[firefox 92.0 windows #1-0] 3 passing (13.5s)
[firefox 92.0 windows #1-0]
[firefox 92.0 windows #1-0] Check out job at https://app.eu-central-1.saucelabs.com/tests/0d39dd8fc70f4df681af9be16d4c6f33?auth=b437c12f8bf4181878ee7b73ce46a717
------------------------------------------------------------------
[MicrosoftEdge 44.17763.1.0 windows #3-2] Running: MicrosoftEdge (v44.17763.1.0) on windows
[MicrosoftEdge 44.17763.1.0 windows #3-2] Session ID: 9cdd256432cc4ccfa25b81e3ecba0fc0
[MicrosoftEdge 44.17763.1.0 windows #3-2]
[MicrosoftEdge 44.17763.1.0 windows #3-2] » /test/specs/checkout.personal.info.spec.js
[MicrosoftEdge 44.17763.1.0 windows #3-2] Checkout - Personal info
[MicrosoftEdge 44.17763.1.0 windows #3-2]    ✓ should validate we get an error if we don not provide all personal information
[MicrosoftEdge 44.17763.1.0 windows #3-2]    ✓ should validate that we can cancel the first checkout
[MicrosoftEdge 44.17763.1.0 windows #3-2]    ✓ should be able to continue the checkout
[MicrosoftEdge 44.17763.1.0 windows #3-2]
[MicrosoftEdge 44.17763.1.0 windows #3-2] 3 passing (16.8s)
[MicrosoftEdge 44.17763.1.0 windows #3-2]
[MicrosoftEdge 44.17763.1.0 windows #3-2] Check out job at https://app.eu-central-1.saucelabs.com/tests/9cdd256432cc4ccfa25b81e3ecba0fc0?auth=abb1fe5b160ecdd7c588d13e27ba1ee9
------------------------------------------------------------------
[MicrosoftEdge 44.17763.1.0 windows #3-0] Running: MicrosoftEdge (v44.17763.1.0) on windows
[MicrosoftEdge 44.17763.1.0 windows #3-0] Session ID: 10d1fc9e44074f41bdce3f939e7d54c6
[MicrosoftEdge 44.17763.1.0 windows #3-0]
[MicrosoftEdge 44.17763.1.0 windows #3-0] » /test/specs/cart.summary.spec.js
[MicrosoftEdge 44.17763.1.0 windows #3-0] Cart Summary page
[MicrosoftEdge 44.17763.1.0 windows #3-0]    ✓ should validate that we can continue shopping
[MicrosoftEdge 44.17763.1.0 windows #3-0]    ✓ should validate that we can go from the cart to the checkout page
[MicrosoftEdge 44.17763.1.0 windows #3-0]    ✓ should validate that a product can be removed from the cart
[MicrosoftEdge 44.17763.1.0 windows #3-0]
[MicrosoftEdge 44.17763.1.0 windows #3-0] 3 passing (15s)
[MicrosoftEdge 44.17763.1.0 windows #3-0]
[MicrosoftEdge 44.17763.1.0 windows #3-0] Check out job at https://app.eu-central-1.saucelabs.com/tests/10d1fc9e44074f41bdce3f939e7d54c6?auth=ccdbf29d65699c57719a8fd123a29dab
------------------------------------------------------------------
[MicrosoftEdge 44.17763.1.0 windows #3-4] Running: MicrosoftEdge (v44.17763.1.0) on windows
[MicrosoftEdge 44.17763.1.0 windows #3-4] Session ID: b728f276a4da48b196dd656ed3d8b126
[MicrosoftEdge 44.17763.1.0 windows #3-4]
[MicrosoftEdge 44.17763.1.0 windows #3-4] » /test/specs/login.spec.js
[MicrosoftEdge 44.17763.1.0 windows #3-4] LoginPage
[MicrosoftEdge 44.17763.1.0 windows #3-4]    ✓ should be able to test loading of login page
[MicrosoftEdge 44.17763.1.0 windows #3-4]    ✓ should be able to login with a standard user
[MicrosoftEdge 44.17763.1.0 windows #3-4]    ✓ should not be able to login with a locked user
[MicrosoftEdge 44.17763.1.0 windows #3-4]
[MicrosoftEdge 44.17763.1.0 windows #3-4] 3 passing (15.9s)
[MicrosoftEdge 44.17763.1.0 windows #3-4]
[MicrosoftEdge 44.17763.1.0 windows #3-4] Check out job at https://app.eu-central-1.saucelabs.com/tests/b728f276a4da48b196dd656ed3d8b126?auth=2ae880284b5967adcde0e2a115d11de4
------------------------------------------------------------------
[MicrosoftEdge 44.17763.1.0 windows #3-5] Running: MicrosoftEdge (v44.17763.1.0) on windows
[MicrosoftEdge 44.17763.1.0 windows #3-5] Session ID: c949898d7506482ea5a40d0a5e3bc647
[MicrosoftEdge 44.17763.1.0 windows #3-5]
[MicrosoftEdge 44.17763.1.0 windows #3-5] » /test/specs/menu.spec.js
[MicrosoftEdge 44.17763.1.0 windows #3-5] Menu
[MicrosoftEdge 44.17763.1.0 windows #3-5]    ✓ should be able to the swag items overview page
[MicrosoftEdge 44.17763.1.0 windows #3-5]    ✓ should be able to log out
[MicrosoftEdge 44.17763.1.0 windows #3-5]    ✓ should be able to clear the cart
[MicrosoftEdge 44.17763.1.0 windows #3-5]
[MicrosoftEdge 44.17763.1.0 windows #3-5] 3 passing (15.6s)
[MicrosoftEdge 44.17763.1.0 windows #3-5]
[MicrosoftEdge 44.17763.1.0 windows #3-5] Check out job at https://app.eu-central-1.saucelabs.com/tests/c949898d7506482ea5a40d0a5e3bc647?auth=08bd044d96734315c3d23c67b3fd22c2
------------------------------------------------------------------
[firefox 92.0 windows #1-4] Running: firefox (v92.0) on windows
[firefox 92.0 windows #1-4] Session ID: f91219ce77f149f1b004a34759fcdb57
[firefox 92.0 windows #1-4]
[firefox 92.0 windows #1-4] » /test/specs/login.spec.js
[firefox 92.0 windows #1-4] LoginPage
[firefox 92.0 windows #1-4]    ✓ should be able to test loading of login page
[firefox 92.0 windows #1-4]    ✓ should be able to login with a standard user
[firefox 92.0 windows #1-4]    ✓ should not be able to login with a locked user
[firefox 92.0 windows #1-4]
[firefox 92.0 windows #1-4] 3 passing (12.5s)
[firefox 92.0 windows #1-4]
[firefox 92.0 windows #1-4] Check out job at https://app.eu-central-1.saucelabs.com/tests/f91219ce77f149f1b004a34759fcdb57?auth=7e5c598cb1431310dda0e10a0285b3cc
------------------------------------------------------------------
[firefox 92.0 windows #1-5] Running: firefox (v92.0) on windows
[firefox 92.0 windows #1-5] Session ID: bdfa98fac0d144aa8fdfda8d3b420692
[firefox 92.0 windows #1-5]
[firefox 92.0 windows #1-5] » /test/specs/menu.spec.js
[firefox 92.0 windows #1-5] Menu
[firefox 92.0 windows #1-5]    ✓ should be able to the swag items overview page
[firefox 92.0 windows #1-5]    ✓ should be able to log out
[firefox 92.0 windows #1-5]    ✓ should be able to clear the cart
[firefox 92.0 windows #1-5]
[firefox 92.0 windows #1-5] 3 passing (14.2s)
[firefox 92.0 windows #1-5]
[firefox 92.0 windows #1-5] Check out job at https://app.eu-central-1.saucelabs.com/tests/bdfa98fac0d144aa8fdfda8d3b420692?auth=fd9f002393d64ab6588a597234e8a463
------------------------------------------------------------------
[internet explorer 11 windows #2-7] Running: internet explorer (v11) on windows
[internet explorer 11 windows #2-7] Session ID: a3e331a7fecc44d398ff214903733808
[internet explorer 11 windows #2-7]
[internet explorer 11 windows #2-7] » /test/specs/swag.items.list.spec.js
[internet explorer 11 windows #2-7] Swag items list
[internet explorer 11 windows #2-7]    ✓ should validate that all products are present
[internet explorer 11 windows #2-7]    ✓ should validate that the details of a product can be opened
[internet explorer 11 windows #2-7]    ✓ should validate that a product can be added to the cart
[internet explorer 11 windows #2-7]    ✓ should validate that a product can be removed from the cart
[internet explorer 11 windows #2-7]    ✓ should be able to open the cart summary page
[internet explorer 11 windows #2-7]
[internet explorer 11 windows #2-7] 5 passing (16.6s)
[internet explorer 11 windows #2-7]
[internet explorer 11 windows #2-7] Check out job at https://app.eu-central-1.saucelabs.com/tests/a3e331a7fecc44d398ff214903733808?auth=83c63c502491947217ea964a5787b0b4
------------------------------------------------------------------
[MicrosoftEdge 44.17763.1.0 windows #3-6] Running: MicrosoftEdge (v44.17763.1.0) on windows
[MicrosoftEdge 44.17763.1.0 windows #3-6] Session ID: 71d6feb5cfa7421eaccaa2f26c935690
[MicrosoftEdge 44.17763.1.0 windows #3-6]
[MicrosoftEdge 44.17763.1.0 windows #3-6] » /test/specs/swag.item.details.spec.js
[MicrosoftEdge 44.17763.1.0 windows #3-6] Swag Item Details
[MicrosoftEdge 44.17763.1.0 windows #3-6]    ✓ should validate that we can go back from the details to the inventory page
[MicrosoftEdge 44.17763.1.0 windows #3-6]    ✓ should validate that a product can be added to a cart
[MicrosoftEdge 44.17763.1.0 windows #3-6]    ✓ should validate that a product can be removed from the cart
[MicrosoftEdge 44.17763.1.0 windows #3-6]
[MicrosoftEdge 44.17763.1.0 windows #3-6] 3 passing (19.9s)
[MicrosoftEdge 44.17763.1.0 windows #3-6]
[MicrosoftEdge 44.17763.1.0 windows #3-6] Check out job at https://app.eu-central-1.saucelabs.com/tests/71d6feb5cfa7421eaccaa2f26c935690?auth=b9295fbccdbfe717a0928addfdd37972
------------------------------------------------------------------
[firefox 92.0 windows #1-7] Running: firefox (v92.0) on windows
[firefox 92.0 windows #1-7] Session ID: f795633a763c49a19a6c8b7041865b31
[firefox 92.0 windows #1-7]
[firefox 92.0 windows #1-7] » /test/specs/swag.items.list.spec.js
[firefox 92.0 windows #1-7] Swag items list
[firefox 92.0 windows #1-7]    ✓ should validate that all products are present
[firefox 92.0 windows #1-7]    ✓ should validate that the details of a product can be opened
[firefox 92.0 windows #1-7]    ✓ should validate that a product can be added to the cart
[firefox 92.0 windows #1-7]    ✓ should validate that a product can be removed from the cart
[firefox 92.0 windows #1-7]    ✓ should be able to open the cart summary page
[firefox 92.0 windows #1-7]
[firefox 92.0 windows #1-7] 5 passing (20s)
[firefox 92.0 windows #1-7]
[firefox 92.0 windows #1-7] Check out job at https://app.eu-central-1.saucelabs.com/tests/f795633a763c49a19a6c8b7041865b31?auth=2c011692b3b653da38a2770f53fc7d2e
------------------------------------------------------------------
[firefox 92.0 windows #1-6] Running: firefox (v92.0) on windows
[firefox 92.0 windows #1-6] Session ID: ad298abdbf9943e3b27cb8c9cd051fd4
[firefox 92.0 windows #1-6]
[firefox 92.0 windows #1-6] » /test/specs/swag.item.details.spec.js
[firefox 92.0 windows #1-6] Swag Item Details
[firefox 92.0 windows #1-6]    ✓ should validate that we can go back from the details to the inventory page
[firefox 92.0 windows #1-6]    ✓ should validate that a product can be added to a cart
[firefox 92.0 windows #1-6]    ✓ should validate that a product can be removed from the cart
[firefox 92.0 windows #1-6]
[firefox 92.0 windows #1-6] 3 passing (19.9s)
[firefox 92.0 windows #1-6]
[firefox 92.0 windows #1-6] Check out job at https://app.eu-central-1.saucelabs.com/tests/ad298abdbf9943e3b27cb8c9cd051fd4?auth=59aa9c13f90801f8d4571ab9c6b53bfc
------------------------------------------------------------------
[MicrosoftEdge 44.17763.1.0 windows #3-7] Running: MicrosoftEdge (v44.17763.1.0) on windows
[MicrosoftEdge 44.17763.1.0 windows #3-7] Session ID: f043a71a2e9b4c7f8f2d21cdb5beb1f1
[MicrosoftEdge 44.17763.1.0 windows #3-7]
[MicrosoftEdge 44.17763.1.0 windows #3-7] » /test/specs/swag.items.list.spec.js
[MicrosoftEdge 44.17763.1.0 windows #3-7] Swag items list
[MicrosoftEdge 44.17763.1.0 windows #3-7]    ✓ should validate that all products are present
[MicrosoftEdge 44.17763.1.0 windows #3-7]    ✓ should validate that the details of a product can be opened
[MicrosoftEdge 44.17763.1.0 windows #3-7]    ✓ should validate that a product can be added to the cart
[MicrosoftEdge 44.17763.1.0 windows #3-7]    ✓ should validate that a product can be removed from the cart
[MicrosoftEdge 44.17763.1.0 windows #3-7]    ✓ should be able to open the cart summary page
[MicrosoftEdge 44.17763.1.0 windows #3-7]
[MicrosoftEdge 44.17763.1.0 windows #3-7] 5 passing (23.6s)
[MicrosoftEdge 44.17763.1.0 windows #3-7]
[MicrosoftEdge 44.17763.1.0 windows #3-7] Check out job at https://app.eu-central-1.saucelabs.com/tests/f043a71a2e9b4c7f8f2d21cdb5beb1f1?auth=5eddca33be86eefa87de9c0e95e64c43


Spec Files:      72 passed, 72 total (100% completed) in 00:01:19 
```

</details>
