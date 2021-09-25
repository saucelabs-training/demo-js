# WebdriverIO Async Mode and TypeScript with Best Practices, including the use of Page Objects
This folder contains best practices for WebdriverIO in Async Mode with TypeScript, including the use of Page Objects.

## Install dependencies
You can install all dependencies by running the following command

    npm install

This will install all needed dependencies that are listed in the `package.json`-file

> NOTE: Make sure you are in the folder `webdriverio/webdriver/best-practices` when you execute this command

## Run tests locally
You can run the tests on your local machine, the only thing you need to have is Chrome. If you have it you can run this command

    npm run test.local

It will run all tests in *headless*-mode, meaning you will not see a browser starting, but the logs will look like this

<details>
    <summary>Click to expand and see the logs</summary>

```log
> npm run test.local

> webdriverio-best-practices@1.0.0 test.local /Users/Sauce/Git/sauce-training/demo-js/webdriverio/webdriver/best-practices
> wdio test/configs/wdio.local.chrome.conf.ts


Execution of 8 workers started at 2021-09-24T16:26:15.504Z

[0-1] RUNNING in chrome - /test/specs/checkout.complete.spec.ts
[0-0] RUNNING in chrome - /test/specs/cart.summary.spec.ts
[0-3] RUNNING in chrome - /test/specs/checkout.summary.spec.ts
[0-6] RUNNING in chrome - /test/specs/swag.item.details.spec.ts
[0-2] RUNNING in chrome - /test/specs/checkout.personal.info.spec.ts
[0-4] RUNNING in chrome - /test/specs/login.spec.ts
[0-5] RUNNING in chrome - /test/specs/menu.spec.ts
[0-7] RUNNING in chrome - /test/specs/swag.items.list.spec.ts
[0-1] PASSED in chrome - /test/specs/checkout.complete.spec.ts
[0-3] PASSED in chrome - /test/specs/checkout.summary.spec.ts
[0-4] PASSED in chrome - /test/specs/login.spec.ts
[0-0] PASSED in chrome - /test/specs/cart.summary.spec.ts
[0-6] PASSED in chrome - /test/specs/swag.item.details.spec.ts
[0-2] PASSED in chrome - /test/specs/checkout.personal.info.spec.ts
[0-7] PASSED in chrome - /test/specs/swag.items.list.spec.ts
[0-5] PASSED in chrome - /test/specs/menu.spec.ts

 "spec" Reporter:
------------------------------------------------------------------
[chrome 93.0.4577.82 mac os x #0-1] Running: chrome (v93.0.4577.82) on mac os x
[chrome 93.0.4577.82 mac os x #0-1] Session ID: d71c9e26f4a0b8e774c2102e66b870c0
[chrome 93.0.4577.82 mac os x #0-1]
[chrome 93.0.4577.82 mac os x #0-1] » /test/specs/checkout.complete.spec.ts
[chrome 93.0.4577.82 mac os x #0-1] Checkout - Complete
[chrome 93.0.4577.82 mac os x #0-1]    ✓ should be able to test loading of login page
[chrome 93.0.4577.82 mac os x #0-1]
[chrome 93.0.4577.82 mac os x #0-1] 1 passing (2.3s)
------------------------------------------------------------------
[chrome 93.0.4577.82 mac os x #0-3] Running: chrome (v93.0.4577.82) on mac os x
[chrome 93.0.4577.82 mac os x #0-3] Session ID: 56e4f57e5cc76be632edeac47a6c023b
[chrome 93.0.4577.82 mac os x #0-3]
[chrome 93.0.4577.82 mac os x #0-3] » /test/specs/checkout.summary.spec.ts
[chrome 93.0.4577.82 mac os x #0-3] Checkout - Summary
[chrome 93.0.4577.82 mac os x #0-3]    ✓ should validate that we can continue shopping
[chrome 93.0.4577.82 mac os x #0-3]    ✓ should validate that we can cancel checkout and go to the inventory page
[chrome 93.0.4577.82 mac os x #0-3]    ✓ should validate that we have 1 product in our checkout overview
[chrome 93.0.4577.82 mac os x #0-3]
[chrome 93.0.4577.82 mac os x #0-3] 3 passing (3.3s)
------------------------------------------------------------------
[chrome 93.0.4577.82 mac os x #0-4] Running: chrome (v93.0.4577.82) on mac os x
[chrome 93.0.4577.82 mac os x #0-4] Session ID: 110cdaf53bef06fd2a3b7431edb70113
[chrome 93.0.4577.82 mac os x #0-4]
[chrome 93.0.4577.82 mac os x #0-4] » /test/specs/login.spec.ts
[chrome 93.0.4577.82 mac os x #0-4] LoginPage
[chrome 93.0.4577.82 mac os x #0-4]    ✓ should be able to test loading of login page
[chrome 93.0.4577.82 mac os x #0-4]    ✓ should be able to login with a standard user
[chrome 93.0.4577.82 mac os x #0-4]    ✓ should not be able to login with a locked user
[chrome 93.0.4577.82 mac os x #0-4]
[chrome 93.0.4577.82 mac os x #0-4] 3 passing (4.3s)
------------------------------------------------------------------
[chrome 93.0.4577.82 mac os x #0-0] Running: chrome (v93.0.4577.82) on mac os x
[chrome 93.0.4577.82 mac os x #0-0] Session ID: 469b09605663cbf73be665082db92fdb
[chrome 93.0.4577.82 mac os x #0-0]
[chrome 93.0.4577.82 mac os x #0-0] » /test/specs/cart.summary.spec.ts
[chrome 93.0.4577.82 mac os x #0-0] Cart Summary page
[chrome 93.0.4577.82 mac os x #0-0]    ✓ should validate that we can continue shopping
[chrome 93.0.4577.82 mac os x #0-0]    ✓ should validate that we can go from the cart to the checkout page
[chrome 93.0.4577.82 mac os x #0-0]    ✓ should validate that a product can be removed from the cart
[chrome 93.0.4577.82 mac os x #0-0]
[chrome 93.0.4577.82 mac os x #0-0] 3 passing (4.5s)
------------------------------------------------------------------
[chrome 93.0.4577.82 mac os x #0-6] Running: chrome (v93.0.4577.82) on mac os x
[chrome 93.0.4577.82 mac os x #0-6] Session ID: 77673d87694c814ff0d138dbc512fb9d
[chrome 93.0.4577.82 mac os x #0-6]
[chrome 93.0.4577.82 mac os x #0-6] » /test/specs/swag.item.details.spec.ts
[chrome 93.0.4577.82 mac os x #0-6] Swag Item Details
[chrome 93.0.4577.82 mac os x #0-6]    ✓ should validate that we can go back from the details to the inventory page
[chrome 93.0.4577.82 mac os x #0-6]    ✓ should validate that a product can be added to a cart
[chrome 93.0.4577.82 mac os x #0-6]    ✓ should validate that a product can be removed from the cart
[chrome 93.0.4577.82 mac os x #0-6]
[chrome 93.0.4577.82 mac os x #0-6] 3 passing (5.9s)
------------------------------------------------------------------
[chrome 93.0.4577.82 mac os x #0-2] Running: chrome (v93.0.4577.82) on mac os x
[chrome 93.0.4577.82 mac os x #0-2] Session ID: adf4772358c80991757dd9b5aaa3c785
[chrome 93.0.4577.82 mac os x #0-2]
[chrome 93.0.4577.82 mac os x #0-2] » /test/specs/checkout.personal.info.spec.ts
[chrome 93.0.4577.82 mac os x #0-2] Checkout - Personal info
[chrome 93.0.4577.82 mac os x #0-2]    ✓ should validate we get an error if we don not provide all personal information
[chrome 93.0.4577.82 mac os x #0-2]    ✓ should validate that we can cancel the first checkout
[chrome 93.0.4577.82 mac os x #0-2]    ✓ should be able to continue the checkout
[chrome 93.0.4577.82 mac os x #0-2]
[chrome 93.0.4577.82 mac os x #0-2] 3 passing (1.6s)
------------------------------------------------------------------
[chrome 93.0.4577.82 mac os x #0-7] Running: chrome (v93.0.4577.82) on mac os x
[chrome 93.0.4577.82 mac os x #0-7] Session ID: 0bc25027d23b982ef67c0eff5d85244d
[chrome 93.0.4577.82 mac os x #0-7]
[chrome 93.0.4577.82 mac os x #0-7] » /test/specs/swag.items.list.spec.ts
[chrome 93.0.4577.82 mac os x #0-7] Swag items list
[chrome 93.0.4577.82 mac os x #0-7]    ✓ should validate that all products are present
[chrome 93.0.4577.82 mac os x #0-7]    ✓ should validate that the details of a product can be opened
[chrome 93.0.4577.82 mac os x #0-7]    ✓ should validate that a product can be added to the cart
[chrome 93.0.4577.82 mac os x #0-7]    ✓ should validate that a product can be removed from the cart
[chrome 93.0.4577.82 mac os x #0-7]    ✓ should be able to open the cart summary page
[chrome 93.0.4577.82 mac os x #0-7]
[chrome 93.0.4577.82 mac os x #0-7] 5 passing (6.4s)
------------------------------------------------------------------
[chrome 93.0.4577.82 mac os x #0-5] Running: chrome (v93.0.4577.82) on mac os x
[chrome 93.0.4577.82 mac os x #0-5] Session ID: 1020372ff8d1db01f82485ddd246cc3a
[chrome 93.0.4577.82 mac os x #0-5]
[chrome 93.0.4577.82 mac os x #0-5] » /test/specs/menu.spec.ts
[chrome 93.0.4577.82 mac os x #0-5] Menu
[chrome 93.0.4577.82 mac os x #0-5]    ✓ should be able to the swag items overview page
[chrome 93.0.4577.82 mac os x #0-5]    ✓ should be able to open the about page
[chrome 93.0.4577.82 mac os x #0-5]    ✓ should be able to log out
[chrome 93.0.4577.82 mac os x #0-5]    ✓ should be able to clear the cart
[chrome 93.0.4577.82 mac os x #0-5]
[chrome 93.0.4577.82 mac os x #0-5] 4 passing (8.4s)


Spec Files:      8 passed, 8 total (100% completed) in 00:00:19 
```
</details>

## Run tests on Sauce Labs
You can run your tests on Sauce Labs US DC with this command

    npm run test.saucelabs.us

You can run your tests on Sauce Labs EU DC with this command

    npm run test.saucelabs.eu

It will spin up multiple browsers which you can find [here](test/configs/wdio.saucelabs.conf.ts).

> **Note:** It could be that a spec file fails, due to a webdriver error or something else. This setup uses a single
> retry for every test. If a test fails the first time on Sauce Labs but succeeds the seconds time the suite is marked
> as passed in WebdriverIO, but because the initial test failed in Sauce Labs, the total build is marked as failed.\
> To prevent a build from failing in Sauce Labs when all tests, also after a retry, succeed, a special `after`-hook has
> been created to update the failing tests. Please take a look at the
> [`wdio.saucelabs.conf.js`](./test/configs/wdio.saucelabs.conf.ts) file for more information.

<details>
    <summary>Click to expand and see logs from running this on Sauce Labs</summary>

```log
> npm run test.saucelabs.eu

> webdriverio-best-practices@1.0.0 test.saucelabs.eu /Users/Sauce/Git/sauce-training/demo-js/webdriverio/webdriver/best-practices
> REGION=eu wdio test/configs/wdio.saucelabs.conf.ts


Execution of 72 workers started at 2021-09-25T05:44:09.876Z

[0-0] RUNNING in googlechrome - /test/specs/cart.summary.spec.ts
[6-0] RUNNING in safari - /test/specs/cart.summary.spec.ts
[4-1] RUNNING in MicrosoftEdge - /test/specs/checkout.complete.spec.ts
[8-2] RUNNING in safari - /test/specs/checkout.personal.info.spec.ts
[3-3] RUNNING in MicrosoftEdge - /test/specs/checkout.summary.spec.ts
[7-0] RUNNING in safari - /test/specs/cart.summary.spec.ts
[1-1] RUNNING in firefox - /test/specs/checkout.complete.spec.ts
[2-0] RUNNING in internet explorer - /test/specs/cart.summary.spec.ts
[4-0] RUNNING in MicrosoftEdge - /test/specs/cart.summary.spec.ts
[5-1] RUNNING in safari - /test/specs/checkout.complete.spec.ts
[3-1] RUNNING in MicrosoftEdge - /test/specs/checkout.complete.spec.ts
[3-0] RUNNING in MicrosoftEdge - /test/specs/cart.summary.spec.ts
[4-4] RUNNING in MicrosoftEdge - /test/specs/login.spec.ts
[1-0] RUNNING in firefox - /test/specs/cart.summary.spec.ts
[8-1] RUNNING in safari - /test/specs/checkout.complete.spec.ts
[6-1] RUNNING in safari - /test/specs/checkout.complete.spec.ts
[4-3] RUNNING in MicrosoftEdge - /test/specs/checkout.summary.spec.ts
[7-1] RUNNING in safari - /test/specs/checkout.complete.spec.ts
[1-2] RUNNING in firefox - /test/specs/checkout.personal.info.spec.ts
[8-4] RUNNING in safari - /test/specs/login.spec.ts
[5-0] RUNNING in safari - /test/specs/cart.summary.spec.ts
[0-1] RUNNING in googlechrome - /test/specs/checkout.complete.spec.ts
[5-4] RUNNING in safari - /test/specs/login.spec.ts
[5-2] RUNNING in safari - /test/specs/checkout.personal.info.spec.ts
[4-2] RUNNING in MicrosoftEdge - /test/specs/checkout.personal.info.spec.ts
[2-5] RUNNING in internet explorer - /test/specs/menu.spec.ts
[0-2] RUNNING in googlechrome - /test/specs/checkout.personal.info.spec.ts
[0-3] RUNNING in googlechrome - /test/specs/checkout.summary.spec.ts
[2-3] RUNNING in internet explorer - /test/specs/checkout.summary.spec.ts
[3-4] RUNNING in MicrosoftEdge - /test/specs/login.spec.ts
[8-0] RUNNING in safari - /test/specs/cart.summary.spec.ts
[2-1] RUNNING in internet explorer - /test/specs/checkout.complete.spec.ts
[3-2] RUNNING in MicrosoftEdge - /test/specs/checkout.personal.info.spec.ts
[7-2] RUNNING in safari - /test/specs/checkout.personal.info.spec.ts
[0-4] RUNNING in googlechrome - /test/specs/login.spec.ts
[6-6] RUNNING in safari - /test/specs/swag.item.details.spec.ts
[6-2] RUNNING in safari - /test/specs/checkout.personal.info.spec.ts
[2-2] RUNNING in internet explorer - /test/specs/checkout.personal.info.spec.ts
[7-4] RUNNING in safari - /test/specs/login.spec.ts
[2-4] RUNNING in internet explorer - /test/specs/login.spec.ts
[7-3] RUNNING in safari - /test/specs/checkout.summary.spec.ts
[5-5] RUNNING in safari - /test/specs/menu.spec.ts
[1-3] RUNNING in firefox - /test/specs/checkout.summary.spec.ts
[1-4] RUNNING in firefox - /test/specs/login.spec.ts
[0-6] RUNNING in googlechrome - /test/specs/swag.item.details.spec.ts
[4-5] RUNNING in MicrosoftEdge - /test/specs/menu.spec.ts
[5-3] RUNNING in safari - /test/specs/checkout.summary.spec.ts
[1-5] RUNNING in firefox - /test/specs/menu.spec.ts
[8-6] RUNNING in safari - /test/specs/swag.item.details.spec.ts
[3-6] RUNNING in MicrosoftEdge - /test/specs/swag.item.details.spec.ts
[8-3] RUNNING in safari - /test/specs/checkout.summary.spec.ts
[6-4] RUNNING in safari - /test/specs/login.spec.ts
[3-5] RUNNING in MicrosoftEdge - /test/specs/menu.spec.ts
[6-3] RUNNING in safari - /test/specs/checkout.summary.spec.ts
[7-6] RUNNING in safari - /test/specs/swag.item.details.spec.ts
[1-6] RUNNING in firefox - /test/specs/swag.item.details.spec.ts
[0-5] RUNNING in googlechrome - /test/specs/menu.spec.ts
[2-6] RUNNING in internet explorer - /test/specs/swag.item.details.spec.ts
[8-5] RUNNING in safari - /test/specs/menu.spec.ts
[4-6] RUNNING in MicrosoftEdge - /test/specs/swag.item.details.spec.ts
[8-7] RUNNING in safari - /test/specs/swag.items.list.spec.ts
[3-7] RUNNING in MicrosoftEdge - /test/specs/swag.items.list.spec.ts
[6-7] RUNNING in safari - /test/specs/swag.items.list.spec.ts
[6-5] RUNNING in safari - /test/specs/menu.spec.ts
[0-7] RUNNING in googlechrome - /test/specs/swag.items.list.spec.ts
[5-6] RUNNING in safari - /test/specs/swag.item.details.spec.ts
[1-7] RUNNING in firefox - /test/specs/swag.items.list.spec.ts
[7-5] RUNNING in safari - /test/specs/menu.spec.ts
[2-7] RUNNING in internet explorer - /test/specs/swag.items.list.spec.ts
[7-7] RUNNING in safari - /test/specs/swag.items.list.spec.ts
[5-7] RUNNING in safari - /test/specs/swag.items.list.spec.ts
[4-7] RUNNING in MicrosoftEdge - /test/specs/swag.items.list.spec.ts
[0-0] PASSED in googlechrome - /test/specs/cart.summary.spec.ts
[4-1] PASSED in MicrosoftEdge - /test/specs/checkout.complete.spec.ts
[6-1] PASSED in safari - /test/specs/checkout.complete.spec.ts
[8-1] PASSED in safari - /test/specs/checkout.complete.spec.ts
[7-1] PASSED in safari - /test/specs/checkout.complete.spec.ts
[5-1] PASSED in safari - /test/specs/checkout.complete.spec.ts
[0-1] PASSED in googlechrome - /test/specs/checkout.complete.spec.ts
[6-0] PASSED in safari - /test/specs/cart.summary.spec.ts
[2-1] PASSED in internet explorer - /test/specs/checkout.complete.spec.ts
[4-0] PASSED in MicrosoftEdge - /test/specs/cart.summary.spec.ts
[0-3] PASSED in googlechrome - /test/specs/checkout.summary.spec.ts
[4-4] PASSED in MicrosoftEdge - /test/specs/login.spec.ts
[7-0] PASSED in safari - /test/specs/cart.summary.spec.ts
[0-4] PASSED in googlechrome - /test/specs/login.spec.ts
[4-2] PASSED in MicrosoftEdge - /test/specs/checkout.personal.info.spec.ts
[0-2] PASSED in googlechrome - /test/specs/checkout.personal.info.spec.ts
[8-2] PASSED in safari - /test/specs/checkout.personal.info.spec.ts
[4-3] PASSED in MicrosoftEdge - /test/specs/checkout.summary.spec.ts
[7-3] PASSED in safari - /test/specs/checkout.summary.spec.ts
[2-3] PASSED in internet explorer - /test/specs/checkout.summary.spec.ts
[2-0] PASSED in internet explorer - /test/specs/cart.summary.spec.ts
[5-4] PASSED in safari - /test/specs/login.spec.ts
[5-0] PASSED in safari - /test/specs/cart.summary.spec.ts
[1-1] PASSED in firefox - /test/specs/checkout.complete.spec.ts
[8-4] PASSED in safari - /test/specs/login.spec.ts
[6-3] PASSED in safari - /test/specs/checkout.summary.spec.ts
[8-0] PASSED in safari - /test/specs/cart.summary.spec.ts
[8-3] PASSED in safari - /test/specs/checkout.summary.spec.ts
[5-2] PASSED in safari - /test/specs/checkout.personal.info.spec.ts
[7-4] PASSED in safari - /test/specs/login.spec.ts
[0-5] PASSED in googlechrome - /test/specs/menu.spec.ts
[7-2] PASSED in safari - /test/specs/checkout.personal.info.spec.ts
[2-4] PASSED in internet explorer - /test/specs/login.spec.ts
[3-1] PASSED in MicrosoftEdge - /test/specs/checkout.complete.spec.ts
[5-3] PASSED in safari - /test/specs/checkout.summary.spec.ts
[8-6] PASSED in safari - /test/specs/swag.item.details.spec.ts
[6-6] PASSED in safari - /test/specs/swag.item.details.spec.ts
[6-4] PASSED in safari - /test/specs/login.spec.ts
[6-2] PASSED in safari - /test/specs/checkout.personal.info.spec.ts
[2-5] PASSED in internet explorer - /test/specs/menu.spec.ts
[7-5] PASSED in safari - /test/specs/menu.spec.ts
[0-6] PASSED in googlechrome - /test/specs/swag.item.details.spec.ts
[5-5] PASSED in safari - /test/specs/menu.spec.ts
[7-6] PASSED in safari - /test/specs/swag.item.details.spec.ts
[2-2] PASSED in internet explorer - /test/specs/checkout.personal.info.spec.ts
[3-3] PASSED in MicrosoftEdge - /test/specs/checkout.summary.spec.ts
[6-7] PASSED in safari - /test/specs/swag.items.list.spec.ts
[4-5] PASSED in MicrosoftEdge - /test/specs/menu.spec.ts
[6-5] PASSED in safari - /test/specs/menu.spec.ts
[0-7] PASSED in googlechrome - /test/specs/swag.items.list.spec.ts
[1-3] PASSED in firefox - /test/specs/checkout.summary.spec.ts
[5-6] PASSED in safari - /test/specs/swag.item.details.spec.ts
[4-6] PASSED in MicrosoftEdge - /test/specs/swag.item.details.spec.ts
[1-4] PASSED in firefox - /test/specs/login.spec.ts
[2-6] PASSED in internet explorer - /test/specs/swag.item.details.spec.ts
[3-0] PASSED in MicrosoftEdge - /test/specs/cart.summary.spec.ts
[1-0] PASSED in firefox - /test/specs/cart.summary.spec.ts
[1-2] PASSED in firefox - /test/specs/checkout.personal.info.spec.ts
[3-4] PASSED in MicrosoftEdge - /test/specs/login.spec.ts
[3-2] PASSED in MicrosoftEdge - /test/specs/checkout.personal.info.spec.ts
[1-5] PASSED in firefox - /test/specs/menu.spec.ts
[3-5] PASSED in MicrosoftEdge - /test/specs/menu.spec.ts
[1-6] PASSED in firefox - /test/specs/swag.item.details.spec.ts
[3-6] PASSED in MicrosoftEdge - /test/specs/swag.item.details.spec.ts
[4-7] PASSED in MicrosoftEdge - /test/specs/swag.items.list.spec.ts
[1-7] PASSED in firefox - /test/specs/swag.items.list.spec.ts
[7-7] PASSED in safari - /test/specs/swag.items.list.spec.ts
[2-7] PASSED in internet explorer - /test/specs/swag.items.list.spec.ts
[5-7] PASSED in safari - /test/specs/swag.items.list.spec.ts
[3-7] PASSED in MicrosoftEdge - /test/specs/swag.items.list.spec.ts
[8-5] PASSED in safari - /test/specs/menu.spec.ts
[8-7] PASSED in safari - /test/specs/swag.items.list.spec.ts

 "spec" Reporter:
------------------------------------------------------------------
[chrome 94.0.4606.54 windows #0-0] Running: chrome (v94.0.4606.54) on windows
[chrome 94.0.4606.54 windows #0-0] Session ID: e787fce2aba54bd589e66426f0d02e52
[chrome 94.0.4606.54 windows #0-0]
[chrome 94.0.4606.54 windows #0-0] » /test/specs/cart.summary.spec.ts
[chrome 94.0.4606.54 windows #0-0] Cart Summary page
[chrome 94.0.4606.54 windows #0-0]    ✓ should validate that we can continue shopping
[chrome 94.0.4606.54 windows #0-0]    ✓ should validate that we can go from the cart to the checkout page
[chrome 94.0.4606.54 windows #0-0]    ✓ should validate that a product can be removed from the cart
[chrome 94.0.4606.54 windows #0-0]
[chrome 94.0.4606.54 windows #0-0] 3 passing (7.9s)
[chrome 94.0.4606.54 windows #0-0]
[chrome 94.0.4606.54 windows #0-0] Check out job at https://app.eu-central-1.saucelabs.com/tests/e787fce2aba54bd589e66426f0d02e52?auth=23aeda943856ebcc5fe792d9c309d5ae
------------------------------------------------------------------
[msedge 93.0.961.38 windows #4-1] Running: msedge (v93.0.961.38) on windows
[msedge 93.0.961.38 windows #4-1] Session ID: 86c7ed001c784d548e72b8cd35f87662
[msedge 93.0.961.38 windows #4-1]
[msedge 93.0.961.38 windows #4-1] » /test/specs/checkout.complete.spec.ts
[msedge 93.0.961.38 windows #4-1] Checkout - Complete
[msedge 93.0.961.38 windows #4-1]    ✓ should be able to test loading of login page
[msedge 93.0.961.38 windows #4-1]
[msedge 93.0.961.38 windows #4-1] 1 passing (2.6s)
[msedge 93.0.961.38 windows #4-1]
[msedge 93.0.961.38 windows #4-1] Check out job at https://app.eu-central-1.saucelabs.com/tests/86c7ed001c784d548e72b8cd35f87662?auth=c35816052eb83d16312cfe667c18cdf2
------------------------------------------------------------------
[Safari 12.0 macOS #6-1] Running: Safari (v12.0) on macOS
[Safari 12.0 macOS #6-1] Session ID: 30172a2410414d82985f989714672229
[Safari 12.0 macOS #6-1]
[Safari 12.0 macOS #6-1] » /test/specs/checkout.complete.spec.ts
[Safari 12.0 macOS #6-1] Checkout - Complete
[Safari 12.0 macOS #6-1]    ✓ should be able to test loading of login page
[Safari 12.0 macOS #6-1]
[Safari 12.0 macOS #6-1] 1 passing (2.2s)
[Safari 12.0 macOS #6-1]
[Safari 12.0 macOS #6-1] Check out job at https://app.eu-central-1.saucelabs.com/tests/30172a2410414d82985f989714672229?auth=0bce6d9705bab055bdbe5960d3e7c58c
------------------------------------------------------------------
[Safari 14.1 macOS #8-1] Running: Safari (v14.1) on macOS
[Safari 14.1 macOS #8-1] Session ID: 16cf7ce40b59489d9f33a25635d6b71d
[Safari 14.1 macOS #8-1]
[Safari 14.1 macOS #8-1] » /test/specs/checkout.complete.spec.ts
[Safari 14.1 macOS #8-1] Checkout - Complete
[Safari 14.1 macOS #8-1]    ✓ should be able to test loading of login page
[Safari 14.1 macOS #8-1]
[Safari 14.1 macOS #8-1] 1 passing (2.4s)
[Safari 14.1 macOS #8-1]
[Safari 14.1 macOS #8-1] Check out job at https://app.eu-central-1.saucelabs.com/tests/16cf7ce40b59489d9f33a25635d6b71d?auth=4cebb996a0afbdbde61a103a23425b89
------------------------------------------------------------------
[Safari 13.1 macOS #7-1] Running: Safari (v13.1) on macOS
[Safari 13.1 macOS #7-1] Session ID: 8e3bb3c65aea46998499a4f8550f9f5e
[Safari 13.1 macOS #7-1]
[Safari 13.1 macOS #7-1] » /test/specs/checkout.complete.spec.ts
[Safari 13.1 macOS #7-1] Checkout - Complete
[Safari 13.1 macOS #7-1]    ✓ should be able to test loading of login page
[Safari 13.1 macOS #7-1]
[Safari 13.1 macOS #7-1] 1 passing (2.1s)
[Safari 13.1 macOS #7-1]
[Safari 13.1 macOS #7-1] Check out job at https://app.eu-central-1.saucelabs.com/tests/8e3bb3c65aea46998499a4f8550f9f5e?auth=38a5b2222a23906d2e40117eaa9d28d9
------------------------------------------------------------------
[safari 13605.3.8 macOS #5-1] Running: safari (v13605.3.8) on macOS
[safari 13605.3.8 macOS #5-1] Session ID: 8e66808dab6b498084dae1ce061ee15c
[safari 13605.3.8 macOS #5-1]
[safari 13605.3.8 macOS #5-1] » /test/specs/checkout.complete.spec.ts
[safari 13605.3.8 macOS #5-1] Checkout - Complete
[safari 13605.3.8 macOS #5-1]    ✓ should be able to test loading of login page
[safari 13605.3.8 macOS #5-1]
[safari 13605.3.8 macOS #5-1] 1 passing (3.1s)
[safari 13605.3.8 macOS #5-1]
[safari 13605.3.8 macOS #5-1] Check out job at https://app.eu-central-1.saucelabs.com/tests/8e66808dab6b498084dae1ce061ee15c?auth=d728be284e9dd3141b8055ac30bc9fde
------------------------------------------------------------------
[chrome 94.0.4606.54 windows #0-1] Running: chrome (v94.0.4606.54) on windows
[chrome 94.0.4606.54 windows #0-1] Session ID: 361e420267e4454e99d337a013905f15
[chrome 94.0.4606.54 windows #0-1]
[chrome 94.0.4606.54 windows #0-1] » /test/specs/checkout.complete.spec.ts
[chrome 94.0.4606.54 windows #0-1] Checkout - Complete
[chrome 94.0.4606.54 windows #0-1]    ✓ should be able to test loading of login page
[chrome 94.0.4606.54 windows #0-1]
[chrome 94.0.4606.54 windows #0-1] 1 passing (2.6s)
[chrome 94.0.4606.54 windows #0-1]
[chrome 94.0.4606.54 windows #0-1] Check out job at https://app.eu-central-1.saucelabs.com/tests/361e420267e4454e99d337a013905f15?auth=d5158f7635cfa130f5887e0147e35075
------------------------------------------------------------------
[Safari 12.0 macOS #6-0] Running: Safari (v12.0) on macOS
[Safari 12.0 macOS #6-0] Session ID: c866045da8a44f5fa5dfc4231e109ffe
[Safari 12.0 macOS #6-0]
[Safari 12.0 macOS #6-0] » /test/specs/cart.summary.spec.ts
[Safari 12.0 macOS #6-0] Cart Summary page
[Safari 12.0 macOS #6-0]    ✓ should validate that we can continue shopping
[Safari 12.0 macOS #6-0]    ✓ should validate that we can go from the cart to the checkout page
[Safari 12.0 macOS #6-0]    ✓ should validate that a product can be removed from the cart
[Safari 12.0 macOS #6-0]
[Safari 12.0 macOS #6-0] 3 passing (7.4s)
[Safari 12.0 macOS #6-0]
[Safari 12.0 macOS #6-0] Check out job at https://app.eu-central-1.saucelabs.com/tests/c866045da8a44f5fa5dfc4231e109ffe?auth=2275ef9f2172b31ee046cbf6b8ca839c
------------------------------------------------------------------
[internet explorer 11 windows #2-1] Running: internet explorer (v11) on windows
[internet explorer 11 windows #2-1] Session ID: 38a7048779eb477aa92c63300e86a378
[internet explorer 11 windows #2-1]
[internet explorer 11 windows #2-1] » /test/specs/checkout.complete.spec.ts
[internet explorer 11 windows #2-1] Checkout - Complete
[internet explorer 11 windows #2-1]    ✓ should be able to test loading of login page
[internet explorer 11 windows #2-1]
[internet explorer 11 windows #2-1] 1 passing (2.3s)
[internet explorer 11 windows #2-1]
[internet explorer 11 windows #2-1] Check out job at https://app.eu-central-1.saucelabs.com/tests/38a7048779eb477aa92c63300e86a378?auth=47e674b403d8a324bb5875639904d44b
------------------------------------------------------------------
[msedge 93.0.961.38 windows #4-0] Running: msedge (v93.0.961.38) on windows
[msedge 93.0.961.38 windows #4-0] Session ID: 0abe2217987f4528a5a9666376dc9e35
[msedge 93.0.961.38 windows #4-0]
[msedge 93.0.961.38 windows #4-0] » /test/specs/cart.summary.spec.ts
[msedge 93.0.961.38 windows #4-0] Cart Summary page
[msedge 93.0.961.38 windows #4-0]    ✓ should validate that we can continue shopping
[msedge 93.0.961.38 windows #4-0]    ✓ should validate that we can go from the cart to the checkout page
[msedge 93.0.961.38 windows #4-0]    ✓ should validate that a product can be removed from the cart
[msedge 93.0.961.38 windows #4-0]
[msedge 93.0.961.38 windows #4-0] 3 passing (7.6s)
[msedge 93.0.961.38 windows #4-0]
[msedge 93.0.961.38 windows #4-0] Check out job at https://app.eu-central-1.saucelabs.com/tests/0abe2217987f4528a5a9666376dc9e35?auth=125a9270a51569858ce015ce577deccd
------------------------------------------------------------------
[chrome 94.0.4606.54 windows #0-3] Running: chrome (v94.0.4606.54) on windows
[chrome 94.0.4606.54 windows #0-3] Session ID: b33e16780a4449f9b46a9b08570eae9a
[chrome 94.0.4606.54 windows #0-3]
[chrome 94.0.4606.54 windows #0-3] » /test/specs/checkout.summary.spec.ts
[chrome 94.0.4606.54 windows #0-3] Checkout - Summary
[chrome 94.0.4606.54 windows #0-3]    ✓ should validate that we can continue shopping
[chrome 94.0.4606.54 windows #0-3]    ✓ should validate that we can cancel checkout and go to the inventory page
[chrome 94.0.4606.54 windows #0-3]    ✓ should validate that we have 1 product in our checkout overview
[chrome 94.0.4606.54 windows #0-3]
[chrome 94.0.4606.54 windows #0-3] 3 passing (6.4s)
[chrome 94.0.4606.54 windows #0-3]
[chrome 94.0.4606.54 windows #0-3] Check out job at https://app.eu-central-1.saucelabs.com/tests/b33e16780a4449f9b46a9b08570eae9a?auth=3773af995068e1a5d51fb3615a8f602f
------------------------------------------------------------------
[msedge 93.0.961.38 windows #4-4] Running: msedge (v93.0.961.38) on windows
[msedge 93.0.961.38 windows #4-4] Session ID: 707c53f467d6450f843e13c1e9ff224f
[msedge 93.0.961.38 windows #4-4]
[msedge 93.0.961.38 windows #4-4] » /test/specs/login.spec.ts
[msedge 93.0.961.38 windows #4-4] LoginPage
[msedge 93.0.961.38 windows #4-4]    ✓ should be able to test loading of login page
[msedge 93.0.961.38 windows #4-4]    ✓ should be able to login with a standard user
[msedge 93.0.961.38 windows #4-4]    ✓ should not be able to login with a locked user
[msedge 93.0.961.38 windows #4-4]
[msedge 93.0.961.38 windows #4-4] 3 passing (6.6s)
[msedge 93.0.961.38 windows #4-4]
[msedge 93.0.961.38 windows #4-4] Check out job at https://app.eu-central-1.saucelabs.com/tests/707c53f467d6450f843e13c1e9ff224f?auth=d3394d054cb82a9eda9d40043bc84d5b
------------------------------------------------------------------
[Safari 13.1 macOS #7-0] Running: Safari (v13.1) on macOS
[Safari 13.1 macOS #7-0] Session ID: 0e80c008723d4a49af5768e2ac1c97b5
[Safari 13.1 macOS #7-0]
[Safari 13.1 macOS #7-0] » /test/specs/cart.summary.spec.ts
[Safari 13.1 macOS #7-0] Cart Summary page
[Safari 13.1 macOS #7-0]    ✓ should validate that we can continue shopping
[Safari 13.1 macOS #7-0]    ✓ should validate that we can go from the cart to the checkout page
[Safari 13.1 macOS #7-0]    ✓ should validate that a product can be removed from the cart
[Safari 13.1 macOS #7-0]
[Safari 13.1 macOS #7-0] 3 passing (7.6s)
[Safari 13.1 macOS #7-0]
[Safari 13.1 macOS #7-0] Check out job at https://app.eu-central-1.saucelabs.com/tests/0e80c008723d4a49af5768e2ac1c97b5?auth=50bced3cad5260061e4a9de84483a7de
------------------------------------------------------------------
[chrome 94.0.4606.54 windows #0-4] Running: chrome (v94.0.4606.54) on windows
[chrome 94.0.4606.54 windows #0-4] Session ID: 48c2c070192a47239c8d085aea129fad
[chrome 94.0.4606.54 windows #0-4]
[chrome 94.0.4606.54 windows #0-4] » /test/specs/login.spec.ts
[chrome 94.0.4606.54 windows #0-4] LoginPage
[chrome 94.0.4606.54 windows #0-4]    ✓ should be able to test loading of login page
[chrome 94.0.4606.54 windows #0-4]    ✓ should be able to login with a standard user
[chrome 94.0.4606.54 windows #0-4]    ✓ should not be able to login with a locked user
[chrome 94.0.4606.54 windows #0-4]
[chrome 94.0.4606.54 windows #0-4] 3 passing (6.1s)
[chrome 94.0.4606.54 windows #0-4]
[chrome 94.0.4606.54 windows #0-4] Check out job at https://app.eu-central-1.saucelabs.com/tests/48c2c070192a47239c8d085aea129fad?auth=4bc6e6420ffcbe80f667bbd0c2cca1da
------------------------------------------------------------------
[msedge 93.0.961.38 windows #4-2] Running: msedge (v93.0.961.38) on windows
[msedge 93.0.961.38 windows #4-2] Session ID: 9e39c05fceef46228c89befccddbd430
[msedge 93.0.961.38 windows #4-2]
[msedge 93.0.961.38 windows #4-2] » /test/specs/checkout.personal.info.spec.ts
[msedge 93.0.961.38 windows #4-2] Checkout - Personal info
[msedge 93.0.961.38 windows #4-2]    ✓ should validate we get an error if we don not provide all personal information
[msedge 93.0.961.38 windows #4-2]    ✓ should validate that we can cancel the first checkout
[msedge 93.0.961.38 windows #4-2]    ✓ should be able to continue the checkout
[msedge 93.0.961.38 windows #4-2]
[msedge 93.0.961.38 windows #4-2] 3 passing (6.9s)
[msedge 93.0.961.38 windows #4-2]
[msedge 93.0.961.38 windows #4-2] Check out job at https://app.eu-central-1.saucelabs.com/tests/9e39c05fceef46228c89befccddbd430?auth=6a8ed0aea56b6d8d5df7759bfe7b11b4
------------------------------------------------------------------
[chrome 94.0.4606.54 windows #0-2] Running: chrome (v94.0.4606.54) on windows
[chrome 94.0.4606.54 windows #0-2] Session ID: 0a88de77ad0b48d6b8b95d9aa1fffc96
[chrome 94.0.4606.54 windows #0-2]
[chrome 94.0.4606.54 windows #0-2] » /test/specs/checkout.personal.info.spec.ts
[chrome 94.0.4606.54 windows #0-2] Checkout - Personal info
[chrome 94.0.4606.54 windows #0-2]    ✓ should validate we get an error if we don not provide all personal information
[chrome 94.0.4606.54 windows #0-2]    ✓ should validate that we can cancel the first checkout
[chrome 94.0.4606.54 windows #0-2]    ✓ should be able to continue the checkout
[chrome 94.0.4606.54 windows #0-2]
[chrome 94.0.4606.54 windows #0-2] 3 passing (8s)
[chrome 94.0.4606.54 windows #0-2]
[chrome 94.0.4606.54 windows #0-2] Check out job at https://app.eu-central-1.saucelabs.com/tests/0a88de77ad0b48d6b8b95d9aa1fffc96?auth=46a610fffb680553352a3b250e48db56
------------------------------------------------------------------
[Safari 14.1 macOS #8-2] Running: Safari (v14.1) on macOS
[Safari 14.1 macOS #8-2] Session ID: bd46cbf0b8244766a93a4dedd1e17e0b
[Safari 14.1 macOS #8-2]
[Safari 14.1 macOS #8-2] » /test/specs/checkout.personal.info.spec.ts
[Safari 14.1 macOS #8-2] Checkout - Personal info
[Safari 14.1 macOS #8-2]    ✓ should validate we get an error if we don not provide all personal information
[Safari 14.1 macOS #8-2]    ✓ should validate that we can cancel the first checkout
[Safari 14.1 macOS #8-2]    ✓ should be able to continue the checkout
[Safari 14.1 macOS #8-2]
[Safari 14.1 macOS #8-2] 3 passing (10s)
[Safari 14.1 macOS #8-2]
[Safari 14.1 macOS #8-2] Check out job at https://app.eu-central-1.saucelabs.com/tests/bd46cbf0b8244766a93a4dedd1e17e0b?auth=069f0c8a4a268032e038fc4413a10f3f
------------------------------------------------------------------
[msedge 93.0.961.38 windows #4-3] Running: msedge (v93.0.961.38) on windows
[msedge 93.0.961.38 windows #4-3] Session ID: 58b3e966f4174af197133e74baa267d5
[msedge 93.0.961.38 windows #4-3]
[msedge 93.0.961.38 windows #4-3] » /test/specs/checkout.summary.spec.ts
[msedge 93.0.961.38 windows #4-3] Checkout - Summary
[msedge 93.0.961.38 windows #4-3]    ✓ should validate that we can continue shopping
[msedge 93.0.961.38 windows #4-3]    ✓ should validate that we can cancel checkout and go to the inventory page
[msedge 93.0.961.38 windows #4-3]    ✓ should validate that we have 1 product in our checkout overview
[msedge 93.0.961.38 windows #4-3]
[msedge 93.0.961.38 windows #4-3] 3 passing (6.6s)
[msedge 93.0.961.38 windows #4-3]
[msedge 93.0.961.38 windows #4-3] Check out job at https://app.eu-central-1.saucelabs.com/tests/58b3e966f4174af197133e74baa267d5?auth=b8de84839084b191e55ae64f76bec5e1
------------------------------------------------------------------
[Safari 13.1 macOS #7-3] Running: Safari (v13.1) on macOS
[Safari 13.1 macOS #7-3] Session ID: 2d93313433b749a59eb2693065659cd3
[Safari 13.1 macOS #7-3]
[Safari 13.1 macOS #7-3] » /test/specs/checkout.summary.spec.ts
[Safari 13.1 macOS #7-3] Checkout - Summary
[Safari 13.1 macOS #7-3]    ✓ should validate that we can continue shopping
[Safari 13.1 macOS #7-3]    ✓ should validate that we can cancel checkout and go to the inventory page
[Safari 13.1 macOS #7-3]    ✓ should validate that we have 1 product in our checkout overview
[Safari 13.1 macOS #7-3]
[Safari 13.1 macOS #7-3] 3 passing (5.2s)
[Safari 13.1 macOS #7-3]
[Safari 13.1 macOS #7-3] Check out job at https://app.eu-central-1.saucelabs.com/tests/2d93313433b749a59eb2693065659cd3?auth=ec6248ac76699a2360968d2112469986
------------------------------------------------------------------
[internet explorer 11 windows #2-3] Running: internet explorer (v11) on windows
[internet explorer 11 windows #2-3] Session ID: 88d5f6c2903448a5aa41c9de0b8884b2
[internet explorer 11 windows #2-3]
[internet explorer 11 windows #2-3] » /test/specs/checkout.summary.spec.ts
[internet explorer 11 windows #2-3] Checkout - Summary
[internet explorer 11 windows #2-3]    ✓ should validate that we can continue shopping
[internet explorer 11 windows #2-3]    ✓ should validate that we can cancel checkout and go to the inventory page
[internet explorer 11 windows #2-3]    ✓ should validate that we have 1 product in our checkout overview
[internet explorer 11 windows #2-3]
[internet explorer 11 windows #2-3] 3 passing (7.1s)
[internet explorer 11 windows #2-3]
[internet explorer 11 windows #2-3] Check out job at https://app.eu-central-1.saucelabs.com/tests/88d5f6c2903448a5aa41c9de0b8884b2?auth=87c99579aba9141eac93db19710ba4bc
------------------------------------------------------------------
[internet explorer 11 windows #2-0] Running: internet explorer (v11) on windows
[internet explorer 11 windows #2-0] Session ID: d2eea518057d4b3ba9c47851e94245db
[internet explorer 11 windows #2-0]
[internet explorer 11 windows #2-0] » /test/specs/cart.summary.spec.ts
[internet explorer 11 windows #2-0] Cart Summary page
[internet explorer 11 windows #2-0]    ✓ should validate that we can continue shopping
[internet explorer 11 windows #2-0]    ✓ should validate that we can go from the cart to the checkout page
[internet explorer 11 windows #2-0]    ✓ should validate that a product can be removed from the cart
[internet explorer 11 windows #2-0]
[internet explorer 11 windows #2-0] 3 passing (10.1s)
[internet explorer 11 windows #2-0]
[internet explorer 11 windows #2-0] Check out job at https://app.eu-central-1.saucelabs.com/tests/d2eea518057d4b3ba9c47851e94245db?auth=41417a6c2607d2df1eef71c57648d9eb
------------------------------------------------------------------
[safari 13605.3.8 macOS #5-4] Running: safari (v13605.3.8) on macOS
[safari 13605.3.8 macOS #5-4] Session ID: a2446014455a45e0854692dce2420413
[safari 13605.3.8 macOS #5-4]
[safari 13605.3.8 macOS #5-4] » /test/specs/login.spec.ts
[safari 13605.3.8 macOS #5-4] LoginPage
[safari 13605.3.8 macOS #5-4]    ✓ should be able to test loading of login page
[safari 13605.3.8 macOS #5-4]    ✓ should be able to login with a standard user
[safari 13605.3.8 macOS #5-4]    ✓ should not be able to login with a locked user
[safari 13605.3.8 macOS #5-4]
[safari 13605.3.8 macOS #5-4] 3 passing (7.6s)
[safari 13605.3.8 macOS #5-4]
[safari 13605.3.8 macOS #5-4] Check out job at https://app.eu-central-1.saucelabs.com/tests/a2446014455a45e0854692dce2420413?auth=787c105075156e7ceb0c16e4d04331e9
------------------------------------------------------------------
[safari 13605.3.8 macOS #5-0] Running: safari (v13605.3.8) on macOS
[safari 13605.3.8 macOS #5-0] Session ID: ca63960a9880428ca00c3ef5ae1dadc2
[safari 13605.3.8 macOS #5-0]
[safari 13605.3.8 macOS #5-0] » /test/specs/cart.summary.spec.ts
[safari 13605.3.8 macOS #5-0] Cart Summary page
[safari 13605.3.8 macOS #5-0]    ✓ should validate that we can continue shopping
[safari 13605.3.8 macOS #5-0]    ✓ should validate that we can go from the cart to the checkout page
[safari 13605.3.8 macOS #5-0]    ✓ should validate that a product can be removed from the cart
[safari 13605.3.8 macOS #5-0]
[safari 13605.3.8 macOS #5-0] 3 passing (7.3s)
[safari 13605.3.8 macOS #5-0]
[safari 13605.3.8 macOS #5-0] Check out job at https://app.eu-central-1.saucelabs.com/tests/ca63960a9880428ca00c3ef5ae1dadc2?auth=e3f2b2f4f94bdb8e7ffccc918ee3bc47
------------------------------------------------------------------
[firefox 92.0 windows #1-1] Running: firefox (v92.0) on windows
[firefox 92.0 windows #1-1] Session ID: 331f45a592c4432887daf6a99a604e46
[firefox 92.0 windows #1-1]
[firefox 92.0 windows #1-1] » /test/specs/checkout.complete.spec.ts
[firefox 92.0 windows #1-1] Checkout - Complete
[firefox 92.0 windows #1-1]    ✓ should be able to test loading of login page
[firefox 92.0 windows #1-1]
[firefox 92.0 windows #1-1] 1 passing (3.1s)
[firefox 92.0 windows #1-1]
[firefox 92.0 windows #1-1] Check out job at https://app.eu-central-1.saucelabs.com/tests/331f45a592c4432887daf6a99a604e46?auth=1ca47f0424adfc2fc2bbe82dab2c111b
------------------------------------------------------------------
[Safari 14.1 macOS #8-4] Running: Safari (v14.1) on macOS
[Safari 14.1 macOS #8-4] Session ID: 74659fb00113432f80e791d2bed01971
[Safari 14.1 macOS #8-4]
[Safari 14.1 macOS #8-4] » /test/specs/login.spec.ts
[Safari 14.1 macOS #8-4] LoginPage
[Safari 14.1 macOS #8-4]    ✓ should be able to test loading of login page
[Safari 14.1 macOS #8-4]    ✓ should be able to login with a standard user
[Safari 14.1 macOS #8-4]    ✓ should not be able to login with a locked user
[Safari 14.1 macOS #8-4]
[Safari 14.1 macOS #8-4] 3 passing (9.1s)
[Safari 14.1 macOS #8-4]
[Safari 14.1 macOS #8-4] Check out job at https://app.eu-central-1.saucelabs.com/tests/74659fb00113432f80e791d2bed01971?auth=56e0b637ccd1b6ad269501fa7b8d2ce6
------------------------------------------------------------------
[Safari 12.0 macOS #6-3] Running: Safari (v12.0) on macOS
[Safari 12.0 macOS #6-3] Session ID: 2645b5f36b28472393b926fbfc691374
[Safari 12.0 macOS #6-3]
[Safari 12.0 macOS #6-3] » /test/specs/checkout.summary.spec.ts
[Safari 12.0 macOS #6-3] Checkout - Summary
[Safari 12.0 macOS #6-3]    ✓ should validate that we can continue shopping
[Safari 12.0 macOS #6-3]    ✓ should validate that we can cancel checkout and go to the inventory page
[Safari 12.0 macOS #6-3]    ✓ should validate that we have 1 product in our checkout overview
[Safari 12.0 macOS #6-3]
[Safari 12.0 macOS #6-3] 3 passing (5.6s)
[Safari 12.0 macOS #6-3]
[Safari 12.0 macOS #6-3] Check out job at https://app.eu-central-1.saucelabs.com/tests/2645b5f36b28472393b926fbfc691374?auth=bc47dbf51a7fbd33d361a58ce60405db
------------------------------------------------------------------
[Safari 14.1 macOS #8-0] Running: Safari (v14.1) on macOS
[Safari 14.1 macOS #8-0] Session ID: 7dd63ed1b97c42e995eae7dcbfe7335a
[Safari 14.1 macOS #8-0]
[Safari 14.1 macOS #8-0] » /test/specs/cart.summary.spec.ts
[Safari 14.1 macOS #8-0] Cart Summary page
[Safari 14.1 macOS #8-0]    ✓ should validate that we can continue shopping
[Safari 14.1 macOS #8-0]    ✓ should validate that we can go from the cart to the checkout page
[Safari 14.1 macOS #8-0]    ✓ should validate that a product can be removed from the cart
[Safari 14.1 macOS #8-0]
[Safari 14.1 macOS #8-0] 3 passing (8.2s)
[Safari 14.1 macOS #8-0]
[Safari 14.1 macOS #8-0] Check out job at https://app.eu-central-1.saucelabs.com/tests/7dd63ed1b97c42e995eae7dcbfe7335a?auth=ebb4d28f82b2b21b7172efc495547b5c
------------------------------------------------------------------
[Safari 14.1 macOS #8-3] Running: Safari (v14.1) on macOS
[Safari 14.1 macOS #8-3] Session ID: 3ae8229591cc4200bbfac35100e5c2a2
[Safari 14.1 macOS #8-3]
[Safari 14.1 macOS #8-3] » /test/specs/checkout.summary.spec.ts
[Safari 14.1 macOS #8-3] Checkout - Summary
[Safari 14.1 macOS #8-3]    ✓ should validate that we can continue shopping
[Safari 14.1 macOS #8-3]    ✓ should validate that we can cancel checkout and go to the inventory page
[Safari 14.1 macOS #8-3]    ✓ should validate that we have 1 product in our checkout overview
[Safari 14.1 macOS #8-3]
[Safari 14.1 macOS #8-3] 3 passing (6.2s)
[Safari 14.1 macOS #8-3]
[Safari 14.1 macOS #8-3] Check out job at https://app.eu-central-1.saucelabs.com/tests/3ae8229591cc4200bbfac35100e5c2a2?auth=ef2b56aa64d658392481568e395fefb9
------------------------------------------------------------------
[safari 13605.3.8 macOS #5-2] Running: safari (v13605.3.8) on macOS
[safari 13605.3.8 macOS #5-2] Session ID: 71b7bf35a5fb4b73bbea098f0852fd2b
[safari 13605.3.8 macOS #5-2]
[safari 13605.3.8 macOS #5-2] » /test/specs/checkout.personal.info.spec.ts
[safari 13605.3.8 macOS #5-2] Checkout - Personal info
[safari 13605.3.8 macOS #5-2]    ✓ should validate we get an error if we don not provide all personal information
[safari 13605.3.8 macOS #5-2]    ✓ should validate that we can cancel the first checkout
[safari 13605.3.8 macOS #5-2]    ✓ should be able to continue the checkout
[safari 13605.3.8 macOS #5-2]
[safari 13605.3.8 macOS #5-2] 3 passing (8.9s)
[safari 13605.3.8 macOS #5-2]
[safari 13605.3.8 macOS #5-2] Check out job at https://app.eu-central-1.saucelabs.com/tests/71b7bf35a5fb4b73bbea098f0852fd2b?auth=94a89b70a026b0451c66da908390d7b0
------------------------------------------------------------------
[Safari 13.1 macOS #7-4] Running: Safari (v13.1) on macOS
[Safari 13.1 macOS #7-4] Session ID: 5c19fb1d12354b71b27d82a3a6f926d3
[Safari 13.1 macOS #7-4]
[Safari 13.1 macOS #7-4] » /test/specs/login.spec.ts
[Safari 13.1 macOS #7-4] LoginPage
[Safari 13.1 macOS #7-4]    ✓ should be able to test loading of login page
[Safari 13.1 macOS #7-4]    ✓ should be able to login with a standard user
[Safari 13.1 macOS #7-4]    ✓ should not be able to login with a locked user
[Safari 13.1 macOS #7-4]
[Safari 13.1 macOS #7-4] 3 passing (8.6s)
[Safari 13.1 macOS #7-4]
[Safari 13.1 macOS #7-4] Check out job at https://app.eu-central-1.saucelabs.com/tests/5c19fb1d12354b71b27d82a3a6f926d3?auth=be5cc169c61d5d3538d7d009cd512722
------------------------------------------------------------------
[chrome 94.0.4606.54 windows #0-5] Running: chrome (v94.0.4606.54) on windows
[chrome 94.0.4606.54 windows #0-5] Session ID: 2989813c6bc44c92982e1f465e05a006
[chrome 94.0.4606.54 windows #0-5]
[chrome 94.0.4606.54 windows #0-5] » /test/specs/menu.spec.ts
[chrome 94.0.4606.54 windows #0-5] Menu
[chrome 94.0.4606.54 windows #0-5]    ✓ should be able to the swag items overview page
[chrome 94.0.4606.54 windows #0-5]    ✓ should be able to log out
[chrome 94.0.4606.54 windows #0-5]    ✓ should be able to clear the cart
[chrome 94.0.4606.54 windows #0-5]
[chrome 94.0.4606.54 windows #0-5] 3 passing (8.8s)
[chrome 94.0.4606.54 windows #0-5]
[chrome 94.0.4606.54 windows #0-5] Check out job at https://app.eu-central-1.saucelabs.com/tests/2989813c6bc44c92982e1f465e05a006?auth=b3d632885bd63a597dad8195f25e71db
------------------------------------------------------------------
[Safari 13.1 macOS #7-2] Running: Safari (v13.1) on macOS
[Safari 13.1 macOS #7-2] Session ID: f54d3455866a4bee8cfad714880615e4
[Safari 13.1 macOS #7-2]
[Safari 13.1 macOS #7-2] » /test/specs/checkout.personal.info.spec.ts
[Safari 13.1 macOS #7-2] Checkout - Personal info
[Safari 13.1 macOS #7-2]    ✓ should validate we get an error if we don not provide all personal information
[Safari 13.1 macOS #7-2]    ✓ should validate that we can cancel the first checkout
[Safari 13.1 macOS #7-2]    ✓ should be able to continue the checkout
[Safari 13.1 macOS #7-2]
[Safari 13.1 macOS #7-2] 3 passing (9.6s)
[Safari 13.1 macOS #7-2]
[Safari 13.1 macOS #7-2] Check out job at https://app.eu-central-1.saucelabs.com/tests/f54d3455866a4bee8cfad714880615e4?auth=e343589d372613a95d1aba3136d603a7
------------------------------------------------------------------
[internet explorer 11 windows #2-4] Running: internet explorer (v11) on windows
[internet explorer 11 windows #2-4] Session ID: b1b3a860f3eb4973910a6ce9b801b359
[internet explorer 11 windows #2-4]
[internet explorer 11 windows #2-4] » /test/specs/login.spec.ts
[internet explorer 11 windows #2-4] LoginPage
[internet explorer 11 windows #2-4]    ✓ should be able to test loading of login page
[internet explorer 11 windows #2-4]    ✓ should be able to login with a standard user
[internet explorer 11 windows #2-4]    ✓ should not be able to login with a locked user
[internet explorer 11 windows #2-4]
[internet explorer 11 windows #2-4] 3 passing (9.7s)
[internet explorer 11 windows #2-4]
[internet explorer 11 windows #2-4] Check out job at https://app.eu-central-1.saucelabs.com/tests/b1b3a860f3eb4973910a6ce9b801b359?auth=34525eefd28c5df4d23542a68b5968ff
------------------------------------------------------------------
[MicrosoftEdge 44.17763.1.0 windows #3-1] Running: MicrosoftEdge (v44.17763.1.0) on windows
[MicrosoftEdge 44.17763.1.0 windows #3-1] Session ID: 945d8d9d7e4145afbf35fdc9ca20b60d
[MicrosoftEdge 44.17763.1.0 windows #3-1]
[MicrosoftEdge 44.17763.1.0 windows #3-1] » /test/specs/checkout.complete.spec.ts
[MicrosoftEdge 44.17763.1.0 windows #3-1] Checkout - Complete
[MicrosoftEdge 44.17763.1.0 windows #3-1]    ✓ should be able to test loading of login page
[MicrosoftEdge 44.17763.1.0 windows #3-1]
[MicrosoftEdge 44.17763.1.0 windows #3-1] 1 passing (2.8s)
[MicrosoftEdge 44.17763.1.0 windows #3-1]
[MicrosoftEdge 44.17763.1.0 windows #3-1] Check out job at https://app.eu-central-1.saucelabs.com/tests/945d8d9d7e4145afbf35fdc9ca20b60d?auth=f3c5771f7b65bdd4ffd7619ee8ef49ab
------------------------------------------------------------------
[safari 13605.3.8 macOS #5-3] Running: safari (v13605.3.8) on macOS
[safari 13605.3.8 macOS #5-3] Session ID: 4d372d5d21164cf8b5102398eb2a557c
[safari 13605.3.8 macOS #5-3]
[safari 13605.3.8 macOS #5-3] » /test/specs/checkout.summary.spec.ts
[safari 13605.3.8 macOS #5-3] Checkout - Summary
[safari 13605.3.8 macOS #5-3]    ✓ should validate that we can continue shopping
[safari 13605.3.8 macOS #5-3]    ✓ should validate that we can cancel checkout and go to the inventory page
[safari 13605.3.8 macOS #5-3]    ✓ should validate that we have 1 product in our checkout overview
[safari 13605.3.8 macOS #5-3]
[safari 13605.3.8 macOS #5-3] 3 passing (6.1s)
[safari 13605.3.8 macOS #5-3]
[safari 13605.3.8 macOS #5-3] Check out job at https://app.eu-central-1.saucelabs.com/tests/4d372d5d21164cf8b5102398eb2a557c?auth=b0be081df1427ce2836fd7a482959004
------------------------------------------------------------------
[Safari 14.1 macOS #8-6] Running: Safari (v14.1) on macOS
[Safari 14.1 macOS #8-6] Session ID: bf08f474af404181b336033ec86d5743
[Safari 14.1 macOS #8-6]
[Safari 14.1 macOS #8-6] » /test/specs/swag.item.details.spec.ts
[Safari 14.1 macOS #8-6] Swag Item Details
[Safari 14.1 macOS #8-6]    ✓ should validate that we can go back from the details to the inventory page
[Safari 14.1 macOS #8-6]    ✓ should validate that a product can be added to a cart
[Safari 14.1 macOS #8-6]    ✓ should validate that a product can be removed from the cart
[Safari 14.1 macOS #8-6]
[Safari 14.1 macOS #8-6] 3 passing (9.2s)
[Safari 14.1 macOS #8-6]
[Safari 14.1 macOS #8-6] Check out job at https://app.eu-central-1.saucelabs.com/tests/bf08f474af404181b336033ec86d5743?auth=2da335a33da5c46be67b2bee3ade9874
------------------------------------------------------------------
[Safari 12.0 macOS #6-6] Running: Safari (v12.0) on macOS
[Safari 12.0 macOS #6-6] Session ID: 04c23a9425bd4dfa9a3c81beca04cec1
[Safari 12.0 macOS #6-6]
[Safari 12.0 macOS #6-6] » /test/specs/swag.item.details.spec.ts
[Safari 12.0 macOS #6-6] Swag Item Details
[Safari 12.0 macOS #6-6]    ✓ should validate that we can go back from the details to the inventory page
[Safari 12.0 macOS #6-6]    ✓ should validate that a product can be added to a cart
[Safari 12.0 macOS #6-6]    ✓ should validate that a product can be removed from the cart
[Safari 12.0 macOS #6-6]
[Safari 12.0 macOS #6-6] 3 passing (9.9s)
[Safari 12.0 macOS #6-6]
[Safari 12.0 macOS #6-6] Check out job at https://app.eu-central-1.saucelabs.com/tests/04c23a9425bd4dfa9a3c81beca04cec1?auth=7d8080e0160125ad77f92c12c9d1fc6d
------------------------------------------------------------------
[Safari 12.0 macOS #6-4] Running: Safari (v12.0) on macOS
[Safari 12.0 macOS #6-4] Session ID: 2d3eb764b99146c5bd7d0ed0d694a534
[Safari 12.0 macOS #6-4]
[Safari 12.0 macOS #6-4] » /test/specs/login.spec.ts
[Safari 12.0 macOS #6-4] LoginPage
[Safari 12.0 macOS #6-4]    ✓ should be able to test loading of login page
[Safari 12.0 macOS #6-4]    ✓ should be able to login with a standard user
[Safari 12.0 macOS #6-4]    ✓ should not be able to login with a locked user
[Safari 12.0 macOS #6-4]
[Safari 12.0 macOS #6-4] 3 passing (8.8s)
[Safari 12.0 macOS #6-4]
[Safari 12.0 macOS #6-4] Check out job at https://app.eu-central-1.saucelabs.com/tests/2d3eb764b99146c5bd7d0ed0d694a534?auth=91f6fa9e960868f19bb77c9104f610aa
------------------------------------------------------------------
[Safari 12.0 macOS #6-2] Running: Safari (v12.0) on macOS
[Safari 12.0 macOS #6-2] Session ID: 4422def3baa7443c96cf010d518e2030
[Safari 12.0 macOS #6-2]
[Safari 12.0 macOS #6-2] » /test/specs/checkout.personal.info.spec.ts
[Safari 12.0 macOS #6-2] Checkout - Personal info
[Safari 12.0 macOS #6-2]    ✓ should validate we get an error if we don not provide all personal information
[Safari 12.0 macOS #6-2]    ✓ should validate that we can cancel the first checkout
[Safari 12.0 macOS #6-2]    ✓ should be able to continue the checkout
[Safari 12.0 macOS #6-2]
[Safari 12.0 macOS #6-2] 3 passing (9.6s)
[Safari 12.0 macOS #6-2]
[Safari 12.0 macOS #6-2] Check out job at https://app.eu-central-1.saucelabs.com/tests/4422def3baa7443c96cf010d518e2030?auth=0cd0f4d085e4e2b91d5c2a62eedabd21
------------------------------------------------------------------
[internet explorer 11 windows #2-5] Running: internet explorer (v11) on windows
[internet explorer 11 windows #2-5] Session ID: 7b11a149f1654e90a9047bd57b991d58
[internet explorer 11 windows #2-5]
[internet explorer 11 windows #2-5] » /test/specs/menu.spec.ts
[internet explorer 11 windows #2-5] Menu
[internet explorer 11 windows #2-5]    ✓ should be able to the swag items overview page
[internet explorer 11 windows #2-5]    ✓ should be able to log out
[internet explorer 11 windows #2-5]    ✓ should be able to clear the cart
[internet explorer 11 windows #2-5]
[internet explorer 11 windows #2-5] 3 passing (12.2s)
[internet explorer 11 windows #2-5]
[internet explorer 11 windows #2-5] Check out job at https://app.eu-central-1.saucelabs.com/tests/7b11a149f1654e90a9047bd57b991d58?auth=27b2344ca71087e635b226d965db4aef
------------------------------------------------------------------
[Safari 13.1 macOS #7-5] Running: Safari (v13.1) on macOS
[Safari 13.1 macOS #7-5] Session ID: 2bacc9adb394473e9216b5917e313261
[Safari 13.1 macOS #7-5]
[Safari 13.1 macOS #7-5] » /test/specs/menu.spec.ts
[Safari 13.1 macOS #7-5] Menu
[Safari 13.1 macOS #7-5]    ✓ should be able to the swag items overview page
[Safari 13.1 macOS #7-5]    ✓ should be able to log out
[Safari 13.1 macOS #7-5]    ✓ should be able to clear the cart
[Safari 13.1 macOS #7-5]
[Safari 13.1 macOS #7-5] 3 passing (9.4s)
[Safari 13.1 macOS #7-5]
[Safari 13.1 macOS #7-5] Check out job at https://app.eu-central-1.saucelabs.com/tests/2bacc9adb394473e9216b5917e313261?auth=34107fc15969acb9cfde69e593a8bf86
------------------------------------------------------------------
[chrome 94.0.4606.54 windows #0-6] Running: chrome (v94.0.4606.54) on windows
[chrome 94.0.4606.54 windows #0-6] Session ID: a738ce854744430b86b6bd4bc03b855e
[chrome 94.0.4606.54 windows #0-6]
[chrome 94.0.4606.54 windows #0-6] » /test/specs/swag.item.details.spec.ts
[chrome 94.0.4606.54 windows #0-6] Swag Item Details
[chrome 94.0.4606.54 windows #0-6]    ✓ should validate that we can go back from the details to the inventory page
[chrome 94.0.4606.54 windows #0-6]    ✓ should validate that a product can be added to a cart
[chrome 94.0.4606.54 windows #0-6]    ✓ should validate that a product can be removed from the cart
[chrome 94.0.4606.54 windows #0-6]
[chrome 94.0.4606.54 windows #0-6] 3 passing (9.5s)
[chrome 94.0.4606.54 windows #0-6]
[chrome 94.0.4606.54 windows #0-6] Check out job at https://app.eu-central-1.saucelabs.com/tests/a738ce854744430b86b6bd4bc03b855e?auth=21415541bba8a5c610d124eb76558468
------------------------------------------------------------------
[safari 13605.3.8 macOS #5-5] Running: safari (v13605.3.8) on macOS
[safari 13605.3.8 macOS #5-5] Session ID: 7230d46ef07b4d3ab5a9153bde5418b3
[safari 13605.3.8 macOS #5-5]
[safari 13605.3.8 macOS #5-5] » /test/specs/menu.spec.ts
[safari 13605.3.8 macOS #5-5] Menu
[safari 13605.3.8 macOS #5-5]    ✓ should be able to the swag items overview page
[safari 13605.3.8 macOS #5-5]    ✓ should be able to log out
[safari 13605.3.8 macOS #5-5]    ✓ should be able to clear the cart
[safari 13605.3.8 macOS #5-5]
[safari 13605.3.8 macOS #5-5] 3 passing (9.4s)
[safari 13605.3.8 macOS #5-5]
[safari 13605.3.8 macOS #5-5] Check out job at https://app.eu-central-1.saucelabs.com/tests/7230d46ef07b4d3ab5a9153bde5418b3?auth=5dba13d0032b31708c63a03a6cb5aac2
------------------------------------------------------------------
[Safari 13.1 macOS #7-6] Running: Safari (v13.1) on macOS
[Safari 13.1 macOS #7-6] Session ID: cf91b77fca454aeb981109cda720e6ad
[Safari 13.1 macOS #7-6]
[Safari 13.1 macOS #7-6] » /test/specs/swag.item.details.spec.ts
[Safari 13.1 macOS #7-6] Swag Item Details
[Safari 13.1 macOS #7-6]    ✓ should validate that we can go back from the details to the inventory page
[Safari 13.1 macOS #7-6]    ✓ should validate that a product can be added to a cart
[Safari 13.1 macOS #7-6]    ✓ should validate that a product can be removed from the cart
[Safari 13.1 macOS #7-6]
[Safari 13.1 macOS #7-6] 3 passing (9.5s)
[Safari 13.1 macOS #7-6]
[Safari 13.1 macOS #7-6] Check out job at https://app.eu-central-1.saucelabs.com/tests/cf91b77fca454aeb981109cda720e6ad?auth=7f4f7cba33549b6bdcc14edd5041d3b9
------------------------------------------------------------------
[internet explorer 11 windows #2-2] Running: internet explorer (v11) on windows
[internet explorer 11 windows #2-2] Session ID: 05d0d0de00bc436090b2799bfabbe266
[internet explorer 11 windows #2-2]
[internet explorer 11 windows #2-2] » /test/specs/checkout.personal.info.spec.ts
[internet explorer 11 windows #2-2] Checkout - Personal info
[internet explorer 11 windows #2-2]    ✓ should validate we get an error if we don not provide all personal information
[internet explorer 11 windows #2-2]    ✓ should validate that we can cancel the first checkout
[internet explorer 11 windows #2-2]    ✓ should be able to continue the checkout
[internet explorer 11 windows #2-2]
[internet explorer 11 windows #2-2] 3 passing (11.7s)
[internet explorer 11 windows #2-2]
[internet explorer 11 windows #2-2] Check out job at https://app.eu-central-1.saucelabs.com/tests/05d0d0de00bc436090b2799bfabbe266?auth=9f88e7ca0910cb10927ad6c2cdade24a
------------------------------------------------------------------
[MicrosoftEdge 44.17763.1.0 windows #3-3] Running: MicrosoftEdge (v44.17763.1.0) on windows
[MicrosoftEdge 44.17763.1.0 windows #3-3] Session ID: b263fe18fa714c56ae36c7535efdb515
[MicrosoftEdge 44.17763.1.0 windows #3-3]
[MicrosoftEdge 44.17763.1.0 windows #3-3] » /test/specs/checkout.summary.spec.ts
[MicrosoftEdge 44.17763.1.0 windows #3-3] Checkout - Summary
[MicrosoftEdge 44.17763.1.0 windows #3-3]    ✓ should validate that we can continue shopping
[MicrosoftEdge 44.17763.1.0 windows #3-3]    ✓ should validate that we can cancel checkout and go to the inventory page
[MicrosoftEdge 44.17763.1.0 windows #3-3]    ✓ should validate that we have 1 product in our checkout overview
[MicrosoftEdge 44.17763.1.0 windows #3-3]
[MicrosoftEdge 44.17763.1.0 windows #3-3] 3 passing (9.1s)
[MicrosoftEdge 44.17763.1.0 windows #3-3]
[MicrosoftEdge 44.17763.1.0 windows #3-3] Check out job at https://app.eu-central-1.saucelabs.com/tests/b263fe18fa714c56ae36c7535efdb515?auth=f59ddbe8eb15a0e74675795c1af2c7dc
------------------------------------------------------------------
[Safari 12.0 macOS #6-7] Running: Safari (v12.0) on macOS
[Safari 12.0 macOS #6-7] Session ID: 62107acb8baa4ed49bb577cd5503af59
[Safari 12.0 macOS #6-7]
[Safari 12.0 macOS #6-7] » /test/specs/swag.items.list.spec.ts
[Safari 12.0 macOS #6-7] Swag items list
[Safari 12.0 macOS #6-7]    ✓ should validate that all products are present
[Safari 12.0 macOS #6-7]    ✓ should validate that the details of a product can be opened
[Safari 12.0 macOS #6-7]    ✓ should validate that a product can be added to the cart
[Safari 12.0 macOS #6-7]    ✓ should validate that a product can be removed from the cart
[Safari 12.0 macOS #6-7]    ✓ should be able to open the cart summary page
[Safari 12.0 macOS #6-7]
[Safari 12.0 macOS #6-7] 5 passing (11.6s)
[Safari 12.0 macOS #6-7]
[Safari 12.0 macOS #6-7] Check out job at https://app.eu-central-1.saucelabs.com/tests/62107acb8baa4ed49bb577cd5503af59?auth=08798424d5dfcb8accd728ac779c8dcf
------------------------------------------------------------------
[msedge 93.0.961.38 windows #4-5] Running: msedge (v93.0.961.38) on windows
[msedge 93.0.961.38 windows #4-5] Session ID: f1f808962e1747adbd1614aabd78ff3c
[msedge 93.0.961.38 windows #4-5]
[msedge 93.0.961.38 windows #4-5] » /test/specs/menu.spec.ts
[msedge 93.0.961.38 windows #4-5] Menu
[msedge 93.0.961.38 windows #4-5]    ✓ should be able to the swag items overview page
[msedge 93.0.961.38 windows #4-5]    ✓ should be able to log out
[msedge 93.0.961.38 windows #4-5]    ✓ should be able to clear the cart
[msedge 93.0.961.38 windows #4-5]
[msedge 93.0.961.38 windows #4-5] 3 passing (9.6s)
[msedge 93.0.961.38 windows #4-5]
[msedge 93.0.961.38 windows #4-5] Check out job at https://app.eu-central-1.saucelabs.com/tests/f1f808962e1747adbd1614aabd78ff3c?auth=51e6d5a6da0b332770acabb743a7030f
------------------------------------------------------------------
[Safari 12.0 macOS #6-5] Running: Safari (v12.0) on macOS
[Safari 12.0 macOS #6-5] Session ID: 7fb1af1d7c544a14a52b205a9c2c8acc
[Safari 12.0 macOS #6-5]
[Safari 12.0 macOS #6-5] » /test/specs/menu.spec.ts
[Safari 12.0 macOS #6-5] Menu
[Safari 12.0 macOS #6-5]    ✓ should be able to the swag items overview page
[Safari 12.0 macOS #6-5]    ✓ should be able to log out
[Safari 12.0 macOS #6-5]    ✓ should be able to clear the cart
[Safari 12.0 macOS #6-5]
[Safari 12.0 macOS #6-5] 3 passing (9.6s)
[Safari 12.0 macOS #6-5]
[Safari 12.0 macOS #6-5] Check out job at https://app.eu-central-1.saucelabs.com/tests/7fb1af1d7c544a14a52b205a9c2c8acc?auth=d8d9b9e147f92da1020a08ece55add2d
------------------------------------------------------------------
[chrome 94.0.4606.54 windows #0-7] Running: chrome (v94.0.4606.54) on windows
[chrome 94.0.4606.54 windows #0-7] Session ID: c74ce70f8201497eba31820bbbee70f3
[chrome 94.0.4606.54 windows #0-7]
[chrome 94.0.4606.54 windows #0-7] » /test/specs/swag.items.list.spec.ts
[chrome 94.0.4606.54 windows #0-7] Swag items list
[chrome 94.0.4606.54 windows #0-7]    ✓ should validate that all products are present
[chrome 94.0.4606.54 windows #0-7]    ✓ should validate that the details of a product can be opened
[chrome 94.0.4606.54 windows #0-7]    ✓ should validate that a product can be added to the cart
[chrome 94.0.4606.54 windows #0-7]    ✓ should validate that a product can be removed from the cart
[chrome 94.0.4606.54 windows #0-7]    ✓ should be able to open the cart summary page
[chrome 94.0.4606.54 windows #0-7]
[chrome 94.0.4606.54 windows #0-7] 5 passing (13.6s)
[chrome 94.0.4606.54 windows #0-7]
[chrome 94.0.4606.54 windows #0-7] Check out job at https://app.eu-central-1.saucelabs.com/tests/c74ce70f8201497eba31820bbbee70f3?auth=866e559fe1b147fac9f55d07c0fc1931
------------------------------------------------------------------
[firefox 92.0 windows #1-3] Running: firefox (v92.0) on windows
[firefox 92.0 windows #1-3] Session ID: efdb1ef1e2c345989c0bad5a20446e4e
[firefox 92.0 windows #1-3]
[firefox 92.0 windows #1-3] » /test/specs/checkout.summary.spec.ts
[firefox 92.0 windows #1-3] Checkout - Summary
[firefox 92.0 windows #1-3]    ✓ should validate that we can continue shopping
[firefox 92.0 windows #1-3]    ✓ should validate that we can cancel checkout and go to the inventory page
[firefox 92.0 windows #1-3]    ✓ should validate that we have 1 product in our checkout overview
[firefox 92.0 windows #1-3]
[firefox 92.0 windows #1-3] 3 passing (7.5s)
[firefox 92.0 windows #1-3]
[firefox 92.0 windows #1-3] Check out job at https://app.eu-central-1.saucelabs.com/tests/efdb1ef1e2c345989c0bad5a20446e4e?auth=ba41cc0e21816bccc7e33d5011499d3f
------------------------------------------------------------------
[safari 13605.3.8 macOS #5-6] Running: safari (v13605.3.8) on macOS
[safari 13605.3.8 macOS #5-6] Session ID: 2e814f3cf4b848b0953ee0d1e2312489
[safari 13605.3.8 macOS #5-6]
[safari 13605.3.8 macOS #5-6] » /test/specs/swag.item.details.spec.ts
[safari 13605.3.8 macOS #5-6] Swag Item Details
[safari 13605.3.8 macOS #5-6]    ✓ should validate that we can go back from the details to the inventory page
[safari 13605.3.8 macOS #5-6]    ✓ should validate that a product can be added to a cart
[safari 13605.3.8 macOS #5-6]    ✓ should validate that a product can be removed from the cart
[safari 13605.3.8 macOS #5-6]
[safari 13605.3.8 macOS #5-6] 3 passing (9.3s)
[safari 13605.3.8 macOS #5-6]
[safari 13605.3.8 macOS #5-6] Check out job at https://app.eu-central-1.saucelabs.com/tests/2e814f3cf4b848b0953ee0d1e2312489?auth=2aa19d450bedf0e554d15d76227fee1f
------------------------------------------------------------------
[msedge 93.0.961.38 windows #4-6] Running: msedge (v93.0.961.38) on windows
[msedge 93.0.961.38 windows #4-6] Session ID: e411cb589f814c09960f4046657bd31b
[msedge 93.0.961.38 windows #4-6]
[msedge 93.0.961.38 windows #4-6] » /test/specs/swag.item.details.spec.ts
[msedge 93.0.961.38 windows #4-6] Swag Item Details
[msedge 93.0.961.38 windows #4-6]    ✓ should validate that we can go back from the details to the inventory page
[msedge 93.0.961.38 windows #4-6]    ✓ should validate that a product can be added to a cart
[msedge 93.0.961.38 windows #4-6]    ✓ should validate that a product can be removed from the cart
[msedge 93.0.961.38 windows #4-6]
[msedge 93.0.961.38 windows #4-6] 3 passing (11.4s)
[msedge 93.0.961.38 windows #4-6]
[msedge 93.0.961.38 windows #4-6] Check out job at https://app.eu-central-1.saucelabs.com/tests/e411cb589f814c09960f4046657bd31b?auth=29c70aebbbbbc9bafb6d6650564519c7
------------------------------------------------------------------
[firefox 92.0 windows #1-4] Running: firefox (v92.0) on windows
[firefox 92.0 windows #1-4] Session ID: de272e6ef5b54f20acedb8a878c2e15a
[firefox 92.0 windows #1-4]
[firefox 92.0 windows #1-4] » /test/specs/login.spec.ts
[firefox 92.0 windows #1-4] LoginPage
[firefox 92.0 windows #1-4]    ✓ should be able to test loading of login page
[firefox 92.0 windows #1-4]    ✓ should be able to login with a standard user
[firefox 92.0 windows #1-4]    ✓ should not be able to login with a locked user
[firefox 92.0 windows #1-4]
[firefox 92.0 windows #1-4] 3 passing (8.8s)
[firefox 92.0 windows #1-4]
[firefox 92.0 windows #1-4] Check out job at https://app.eu-central-1.saucelabs.com/tests/de272e6ef5b54f20acedb8a878c2e15a?auth=021586df9fb53e2f599e1a477fe53beb
------------------------------------------------------------------
[internet explorer 11 windows #2-6] Running: internet explorer (v11) on windows
[internet explorer 11 windows #2-6] Session ID: 08319747981546c4a36ed953f65867b0
[internet explorer 11 windows #2-6]
[internet explorer 11 windows #2-6] » /test/specs/swag.item.details.spec.ts
[internet explorer 11 windows #2-6] Swag Item Details
[internet explorer 11 windows #2-6]    ✓ should validate that we can go back from the details to the inventory page
[internet explorer 11 windows #2-6]    ✓ should validate that a product can be added to a cart
[internet explorer 11 windows #2-6]    ✓ should validate that a product can be removed from the cart
[internet explorer 11 windows #2-6]
[internet explorer 11 windows #2-6] 3 passing (14s)
[internet explorer 11 windows #2-6]
[internet explorer 11 windows #2-6] Check out job at https://app.eu-central-1.saucelabs.com/tests/08319747981546c4a36ed953f65867b0?auth=4c66909918a415c44639f388b9d027f9
------------------------------------------------------------------
[MicrosoftEdge 44.17763.1.0 windows #3-0] Running: MicrosoftEdge (v44.17763.1.0) on windows
[MicrosoftEdge 44.17763.1.0 windows #3-0] Session ID: 43b921ef13a74153a02c86bab979b034
[MicrosoftEdge 44.17763.1.0 windows #3-0]
[MicrosoftEdge 44.17763.1.0 windows #3-0] » /test/specs/cart.summary.spec.ts
[MicrosoftEdge 44.17763.1.0 windows #3-0] Cart Summary page
[MicrosoftEdge 44.17763.1.0 windows #3-0]    ✓ should validate that we can continue shopping
[MicrosoftEdge 44.17763.1.0 windows #3-0]    ✓ should validate that we can go from the cart to the checkout page
[MicrosoftEdge 44.17763.1.0 windows #3-0]    ✓ should validate that a product can be removed from the cart
[MicrosoftEdge 44.17763.1.0 windows #3-0]
[MicrosoftEdge 44.17763.1.0 windows #3-0] 3 passing (12.1s)
[MicrosoftEdge 44.17763.1.0 windows #3-0]
[MicrosoftEdge 44.17763.1.0 windows #3-0] Check out job at https://app.eu-central-1.saucelabs.com/tests/43b921ef13a74153a02c86bab979b034?auth=e3e879713e7a08efe0f0dbacd978c17d
------------------------------------------------------------------
[firefox 92.0 windows #1-0] Running: firefox (v92.0) on windows
[firefox 92.0 windows #1-0] Session ID: b9f8184b7b76470ab3bd5477978c0bf5
[firefox 92.0 windows #1-0]
[firefox 92.0 windows #1-0] » /test/specs/cart.summary.spec.ts
[firefox 92.0 windows #1-0] Cart Summary page
[firefox 92.0 windows #1-0]    ✓ should validate that we can continue shopping
[firefox 92.0 windows #1-0]    ✓ should validate that we can go from the cart to the checkout page
[firefox 92.0 windows #1-0]    ✓ should validate that a product can be removed from the cart
[firefox 92.0 windows #1-0]
[firefox 92.0 windows #1-0] 3 passing (11.4s)
[firefox 92.0 windows #1-0]
[firefox 92.0 windows #1-0] Check out job at https://app.eu-central-1.saucelabs.com/tests/b9f8184b7b76470ab3bd5477978c0bf5?auth=eaf3f67ffbc6e067dbcd0e524abd9d6c
------------------------------------------------------------------
[firefox 92.0 windows #1-2] Running: firefox (v92.0) on windows
[firefox 92.0 windows #1-2] Session ID: 045213d92a6545a29dba63360199c18e
[firefox 92.0 windows #1-2]
[firefox 92.0 windows #1-2] » /test/specs/checkout.personal.info.spec.ts
[firefox 92.0 windows #1-2] Checkout - Personal info
[firefox 92.0 windows #1-2]    ✓ should validate we get an error if we don not provide all personal information
[firefox 92.0 windows #1-2]    ✓ should validate that we can cancel the first checkout
[firefox 92.0 windows #1-2]    ✓ should be able to continue the checkout
[firefox 92.0 windows #1-2]
[firefox 92.0 windows #1-2] 3 passing (10.8s)
[firefox 92.0 windows #1-2]
[firefox 92.0 windows #1-2] Check out job at https://app.eu-central-1.saucelabs.com/tests/045213d92a6545a29dba63360199c18e?auth=868b04cc46f3eca4082d93b79efd575f
------------------------------------------------------------------
[MicrosoftEdge 44.17763.1.0 windows #3-4] Running: MicrosoftEdge (v44.17763.1.0) on windows
[MicrosoftEdge 44.17763.1.0 windows #3-4] Session ID: d01ad303bedd4c32af948e7ff85d3c4d
[MicrosoftEdge 44.17763.1.0 windows #3-4]
[MicrosoftEdge 44.17763.1.0 windows #3-4] » /test/specs/login.spec.ts
[MicrosoftEdge 44.17763.1.0 windows #3-4] LoginPage
[MicrosoftEdge 44.17763.1.0 windows #3-4]    ✓ should be able to test loading of login page
[MicrosoftEdge 44.17763.1.0 windows #3-4]    ✓ should be able to login with a standard user
[MicrosoftEdge 44.17763.1.0 windows #3-4]    ✓ should not be able to login with a locked user
[MicrosoftEdge 44.17763.1.0 windows #3-4]
[MicrosoftEdge 44.17763.1.0 windows #3-4] 3 passing (13.5s)
[MicrosoftEdge 44.17763.1.0 windows #3-4]
[MicrosoftEdge 44.17763.1.0 windows #3-4] Check out job at https://app.eu-central-1.saucelabs.com/tests/d01ad303bedd4c32af948e7ff85d3c4d?auth=894f6d695fd405fb244dda5406dc767b
------------------------------------------------------------------
[MicrosoftEdge 44.17763.1.0 windows #3-2] Running: MicrosoftEdge (v44.17763.1.0) on windows
[MicrosoftEdge 44.17763.1.0 windows #3-2] Session ID: 0a22e8feec0345a5a1fa844884d5a1c7
[MicrosoftEdge 44.17763.1.0 windows #3-2]
[MicrosoftEdge 44.17763.1.0 windows #3-2] » /test/specs/checkout.personal.info.spec.ts
[MicrosoftEdge 44.17763.1.0 windows #3-2] Checkout - Personal info
[MicrosoftEdge 44.17763.1.0 windows #3-2]    ✓ should validate we get an error if we don not provide all personal information
[MicrosoftEdge 44.17763.1.0 windows #3-2]    ✓ should validate that we can cancel the first checkout
[MicrosoftEdge 44.17763.1.0 windows #3-2]    ✓ should be able to continue the checkout
[MicrosoftEdge 44.17763.1.0 windows #3-2]
[MicrosoftEdge 44.17763.1.0 windows #3-2] 3 passing (15.6s)
[MicrosoftEdge 44.17763.1.0 windows #3-2]
[MicrosoftEdge 44.17763.1.0 windows #3-2] Check out job at https://app.eu-central-1.saucelabs.com/tests/0a22e8feec0345a5a1fa844884d5a1c7?auth=11f8c727522df8eb257367850fa86658
------------------------------------------------------------------
[firefox 92.0 windows #1-5] Running: firefox (v92.0) on windows
[firefox 92.0 windows #1-5] Session ID: ac39e0462b2b43f5ab613c870267ba5f
[firefox 92.0 windows #1-5]
[firefox 92.0 windows #1-5] » /test/specs/menu.spec.ts
[firefox 92.0 windows #1-5] Menu
[firefox 92.0 windows #1-5]    ✓ should be able to the swag items overview page
[firefox 92.0 windows #1-5]    ✓ should be able to log out
[firefox 92.0 windows #1-5]    ✓ should be able to clear the cart
[firefox 92.0 windows #1-5]
[firefox 92.0 windows #1-5] 3 passing (13.5s)
[firefox 92.0 windows #1-5]
[firefox 92.0 windows #1-5] Check out job at https://app.eu-central-1.saucelabs.com/tests/ac39e0462b2b43f5ab613c870267ba5f?auth=104249772288406562ec07ae437397ea
------------------------------------------------------------------
[MicrosoftEdge 44.17763.1.0 windows #3-5] Running: MicrosoftEdge (v44.17763.1.0) on windows
[MicrosoftEdge 44.17763.1.0 windows #3-5] Session ID: 2f026c245c4d48b99ce216045318de54
[MicrosoftEdge 44.17763.1.0 windows #3-5]
[MicrosoftEdge 44.17763.1.0 windows #3-5] » /test/specs/menu.spec.ts
[MicrosoftEdge 44.17763.1.0 windows #3-5] Menu
[MicrosoftEdge 44.17763.1.0 windows #3-5]    ✓ should be able to the swag items overview page
[MicrosoftEdge 44.17763.1.0 windows #3-5]    ✓ should be able to log out
[MicrosoftEdge 44.17763.1.0 windows #3-5]    ✓ should be able to clear the cart
[MicrosoftEdge 44.17763.1.0 windows #3-5]
[MicrosoftEdge 44.17763.1.0 windows #3-5] 3 passing (15s)
[MicrosoftEdge 44.17763.1.0 windows #3-5]
[MicrosoftEdge 44.17763.1.0 windows #3-5] Check out job at https://app.eu-central-1.saucelabs.com/tests/2f026c245c4d48b99ce216045318de54?auth=f37d2e2b7c5b2a1c97887f6fd2a8c1ab
------------------------------------------------------------------
[firefox 92.0 windows #1-6] Running: firefox (v92.0) on windows
[firefox 92.0 windows #1-6] Session ID: 73e5f71acfea4a258cb830f18742c629
[firefox 92.0 windows #1-6]
[firefox 92.0 windows #1-6] » /test/specs/swag.item.details.spec.ts
[firefox 92.0 windows #1-6] Swag Item Details
[firefox 92.0 windows #1-6]    ✓ should validate that we can go back from the details to the inventory page
[firefox 92.0 windows #1-6]    ✓ should validate that a product can be added to a cart
[firefox 92.0 windows #1-6]    ✓ should validate that a product can be removed from the cart
[firefox 92.0 windows #1-6]
[firefox 92.0 windows #1-6] 3 passing (16.4s)
[firefox 92.0 windows #1-6]
[firefox 92.0 windows #1-6] Check out job at https://app.eu-central-1.saucelabs.com/tests/73e5f71acfea4a258cb830f18742c629?auth=2f26291dc31ff755b620327abecc7284
------------------------------------------------------------------
[MicrosoftEdge 44.17763.1.0 windows #3-6] Running: MicrosoftEdge (v44.17763.1.0) on windows
[MicrosoftEdge 44.17763.1.0 windows #3-6] Session ID: d96cfe2a75cc4e9cb08895f5d48a17cd
[MicrosoftEdge 44.17763.1.0 windows #3-6]
[MicrosoftEdge 44.17763.1.0 windows #3-6] » /test/specs/swag.item.details.spec.ts
[MicrosoftEdge 44.17763.1.0 windows #3-6] Swag Item Details
[MicrosoftEdge 44.17763.1.0 windows #3-6]    ✓ should validate that we can go back from the details to the inventory page
[MicrosoftEdge 44.17763.1.0 windows #3-6]    ✓ should validate that a product can be added to a cart
[MicrosoftEdge 44.17763.1.0 windows #3-6]    ✓ should validate that a product can be removed from the cart
[MicrosoftEdge 44.17763.1.0 windows #3-6]
[MicrosoftEdge 44.17763.1.0 windows #3-6] 3 passing (16.9s)
[MicrosoftEdge 44.17763.1.0 windows #3-6]
[MicrosoftEdge 44.17763.1.0 windows #3-6] Check out job at https://app.eu-central-1.saucelabs.com/tests/d96cfe2a75cc4e9cb08895f5d48a17cd?auth=c058b38f9aa01e0a6759a0879e0a2fd1
------------------------------------------------------------------
[msedge 93.0.961.38 windows #4-7] Running: msedge (v93.0.961.38) on windows
[msedge 93.0.961.38 windows #4-7] Session ID: 65dc73c78eff4072bbc0510e6ecb1ca1
[msedge 93.0.961.38 windows #4-7]
[msedge 93.0.961.38 windows #4-7] » /test/specs/swag.items.list.spec.ts
[msedge 93.0.961.38 windows #4-7] Swag items list
[msedge 93.0.961.38 windows #4-7]    ✓ should validate that all products are present
[msedge 93.0.961.38 windows #4-7]    ✓ should validate that the details of a product can be opened
[msedge 93.0.961.38 windows #4-7]    ✓ should validate that a product can be added to the cart
[msedge 93.0.961.38 windows #4-7]    ✓ should validate that a product can be removed from the cart
[msedge 93.0.961.38 windows #4-7]    ✓ should be able to open the cart summary page
[msedge 93.0.961.38 windows #4-7]
[msedge 93.0.961.38 windows #4-7] 5 passing (11.9s)
[msedge 93.0.961.38 windows #4-7]
[msedge 93.0.961.38 windows #4-7] Check out job at https://app.eu-central-1.saucelabs.com/tests/65dc73c78eff4072bbc0510e6ecb1ca1?auth=5b97ed6bf9149cb63d26a8c6aa7f8041
------------------------------------------------------------------
[firefox 92.0 windows #1-7] Running: firefox (v92.0) on windows
[firefox 92.0 windows #1-7] Session ID: 1a0747fbcae04fa9b1d29bc786a6e130
[firefox 92.0 windows #1-7]
[firefox 92.0 windows #1-7] » /test/specs/swag.items.list.spec.ts
[firefox 92.0 windows #1-7] Swag items list
[firefox 92.0 windows #1-7]    ✓ should validate that all products are present
[firefox 92.0 windows #1-7]    ✓ should validate that the details of a product can be opened
[firefox 92.0 windows #1-7]    ✓ should validate that a product can be added to the cart
[firefox 92.0 windows #1-7]    ✓ should validate that a product can be removed from the cart
[firefox 92.0 windows #1-7]    ✓ should be able to open the cart summary page
[firefox 92.0 windows #1-7]
[firefox 92.0 windows #1-7] 5 passing (17.3s)
[firefox 92.0 windows #1-7]
[firefox 92.0 windows #1-7] Check out job at https://app.eu-central-1.saucelabs.com/tests/1a0747fbcae04fa9b1d29bc786a6e130?auth=f0d0549acd553dbbdf365ad1aca2cfbd
------------------------------------------------------------------
[Safari 13.1 macOS #7-7] Running: Safari (v13.1) on macOS
[Safari 13.1 macOS #7-7] Session ID: 6498c9c6a3bf4270ba23e74ce39ffa9b
[Safari 13.1 macOS #7-7]
[Safari 13.1 macOS #7-7] » /test/specs/swag.items.list.spec.ts
[Safari 13.1 macOS #7-7] Swag items list
[Safari 13.1 macOS #7-7]    ✓ should validate that all products are present
[Safari 13.1 macOS #7-7]    ✓ should validate that the details of a product can be opened
[Safari 13.1 macOS #7-7]    ✓ should validate that a product can be added to the cart
[Safari 13.1 macOS #7-7]    ✓ should validate that a product can be removed from the cart
[Safari 13.1 macOS #7-7]    ✓ should be able to open the cart summary page
[Safari 13.1 macOS #7-7]
[Safari 13.1 macOS #7-7] 5 passing (11.1s)
[Safari 13.1 macOS #7-7]
[Safari 13.1 macOS #7-7] Check out job at https://app.eu-central-1.saucelabs.com/tests/6498c9c6a3bf4270ba23e74ce39ffa9b?auth=219f2d04204281911e5d3a71f11aac6f
------------------------------------------------------------------
[internet explorer 11 windows #2-7] Running: internet explorer (v11) on windows
[internet explorer 11 windows #2-7] Session ID: 677898ba267047f88835ca7ec2e1489b
[internet explorer 11 windows #2-7]
[internet explorer 11 windows #2-7] » /test/specs/swag.items.list.spec.ts
[internet explorer 11 windows #2-7] Swag items list
[internet explorer 11 windows #2-7]    ✓ should validate that all products are present
[internet explorer 11 windows #2-7]    ✓ should validate that the details of a product can be opened
[internet explorer 11 windows #2-7]    ✓ should validate that a product can be added to the cart
[internet explorer 11 windows #2-7]    ✓ should validate that a product can be removed from the cart
[internet explorer 11 windows #2-7]    ✓ should be able to open the cart summary page
[internet explorer 11 windows #2-7]
[internet explorer 11 windows #2-7] 5 passing (16.8s)
[internet explorer 11 windows #2-7]
[internet explorer 11 windows #2-7] Check out job at https://app.eu-central-1.saucelabs.com/tests/677898ba267047f88835ca7ec2e1489b?auth=bc4ecc8777de0931a828ba9001608078
------------------------------------------------------------------
[safari 13605.3.8 macOS #5-7] Running: safari (v13605.3.8) on macOS
[safari 13605.3.8 macOS #5-7] Session ID: 451f2e8411c7416aaa946b01a24114f3
[safari 13605.3.8 macOS #5-7]
[safari 13605.3.8 macOS #5-7] » /test/specs/swag.items.list.spec.ts
[safari 13605.3.8 macOS #5-7] Swag items list
[safari 13605.3.8 macOS #5-7]    ✓ should validate that all products are present
[safari 13605.3.8 macOS #5-7]    ✓ should validate that the details of a product can be opened
[safari 13605.3.8 macOS #5-7]    ✓ should validate that a product can be added to the cart
[safari 13605.3.8 macOS #5-7]    ✓ should validate that a product can be removed from the cart
[safari 13605.3.8 macOS #5-7]    ✓ should be able to open the cart summary page
[safari 13605.3.8 macOS #5-7]
[safari 13605.3.8 macOS #5-7] 5 passing (12.6s)
[safari 13605.3.8 macOS #5-7]
[safari 13605.3.8 macOS #5-7] Check out job at https://app.eu-central-1.saucelabs.com/tests/451f2e8411c7416aaa946b01a24114f3?auth=68b18fe3480f1564acc87b312aab9bae
------------------------------------------------------------------
[MicrosoftEdge 44.17763.1.0 windows #3-7] Running: MicrosoftEdge (v44.17763.1.0) on windows
[MicrosoftEdge 44.17763.1.0 windows #3-7] Session ID: c3c74dbe7dba4f1888bda81e0073ad06
[MicrosoftEdge 44.17763.1.0 windows #3-7]
[MicrosoftEdge 44.17763.1.0 windows #3-7] » /test/specs/swag.items.list.spec.ts
[MicrosoftEdge 44.17763.1.0 windows #3-7] Swag items list
[MicrosoftEdge 44.17763.1.0 windows #3-7]    ✓ should validate that all products are present
[MicrosoftEdge 44.17763.1.0 windows #3-7]    ✓ should validate that the details of a product can be opened
[MicrosoftEdge 44.17763.1.0 windows #3-7]    ✓ should validate that a product can be added to the cart
[MicrosoftEdge 44.17763.1.0 windows #3-7]    ✓ should validate that a product can be removed from the cart
[MicrosoftEdge 44.17763.1.0 windows #3-7]    ✓ should be able to open the cart summary page
[MicrosoftEdge 44.17763.1.0 windows #3-7]
[MicrosoftEdge 44.17763.1.0 windows #3-7] 5 passing (22.4s)
[MicrosoftEdge 44.17763.1.0 windows #3-7]
[MicrosoftEdge 44.17763.1.0 windows #3-7] Check out job at https://app.eu-central-1.saucelabs.com/tests/c3c74dbe7dba4f1888bda81e0073ad06?auth=772caf19b6cce1132ee5077788a91f54
------------------------------------------------------------------
[Safari 14.1 macOS #8-5] Running: Safari (v14.1) on macOS
[Safari 14.1 macOS #8-5] Session ID: 4d489fa9eeb24279b3ca18d73396ddc7
[Safari 14.1 macOS #8-5]
[Safari 14.1 macOS #8-5] » /test/specs/menu.spec.ts
[Safari 14.1 macOS #8-5] Menu
[Safari 14.1 macOS #8-5]    ✓ should be able to the swag items overview page
[Safari 14.1 macOS #8-5]    ✓ should be able to log out
[Safari 14.1 macOS #8-5]    ✓ should be able to clear the cart
[Safari 14.1 macOS #8-5]
[Safari 14.1 macOS #8-5] 3 passing (9.7s)
[Safari 14.1 macOS #8-5]
[Safari 14.1 macOS #8-5] Check out job at https://app.eu-central-1.saucelabs.com/tests/4d489fa9eeb24279b3ca18d73396ddc7?auth=ebbbc56fbea79caacdbf259431afc380
------------------------------------------------------------------
[Safari 14.1 macOS #8-7] Running: Safari (v14.1) on macOS
[Safari 14.1 macOS #8-7] Session ID: b009a72b2bbe477da3c6bd5e93ba3a21
[Safari 14.1 macOS #8-7]
[Safari 14.1 macOS #8-7] » /test/specs/swag.items.list.spec.ts
[Safari 14.1 macOS #8-7] Swag items list
[Safari 14.1 macOS #8-7]    ✓ should validate that all products are present
[Safari 14.1 macOS #8-7]    ✓ should validate that the details of a product can be opened
[Safari 14.1 macOS #8-7]    ✓ should validate that a product can be added to the cart
[Safari 14.1 macOS #8-7]    ✓ should validate that a product can be removed from the cart
[Safari 14.1 macOS #8-7]    ✓ should be able to open the cart summary page
[Safari 14.1 macOS #8-7]
[Safari 14.1 macOS #8-7] 5 passing (13.6s)
[Safari 14.1 macOS #8-7]
[Safari 14.1 macOS #8-7] Check out job at https://app.eu-central-1.saucelabs.com/tests/b009a72b2bbe477da3c6bd5e93ba3a21?auth=fe2264842507a334235fcd1d1b6467fb


Spec Files:      72 passed, 72 total (100% completed) in 00:01:57
```

</details>
