# WebdriverIO Async Mode with Best Practices, including the use of Page Objects
This folder contains best practices for WebdriverIO in Sync Mode, including the use of Page Objects.

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

```

</details>
