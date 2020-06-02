# WebdriverIO V6
This folder contains a simple set up for WebdriverIO V6.

## Install dependencies
You can install all dependencies by running the following command

    npm install
    
This will install all needed dependencies that are listed in the `package.json`-file

> NOTE: Make sure you are in the folder `webdriverio-v6` when you execute this command

## Run tests locally
You can run the tests on your local machine, the only thing you need to have is Chrome. If you have it you can run this command

    npm run test.local

It will run all tests in *headless*-mode, meaning you will not see a browser starting, but the logs will look like this


```log
➜  webdriverio-v6 git:(master) ✗ npm run test.local

> webdriverio-v6@1.0.0 test.local /Users/wimselles/Sauce/Git/js-sauce-integrations/webdriverio-v6
> wdio test/configs/wdio.local.chrome.conf.js


Execution of 8 spec files started at 2020-04-17T09:58:32.551Z

[0-2] RUNNING in chrome - /test/specs/checkout.personal.info.spec.js
[0-4] RUNNING in chrome - /test/specs/login.spec.js
[0-1] RUNNING in chrome - /test/specs/checkout.complete.spec.js
[0-5] RUNNING in chrome - /test/specs/menu.spec.js
[0-0] RUNNING in chrome - /test/specs/cart.summary.spec.js
[0-3] RUNNING in chrome - /test/specs/checkout.summary.spec.js
[0-7] RUNNING in chrome - /test/specs/swag.items.list.spec.js
[0-6] RUNNING in chrome - /test/specs/swag.item.details.spec.js
[0-1] PASSED in chrome - /test/specs/checkout.complete.spec.js
[0-4] PASSED in chrome - /test/specs/login.spec.js
[0-2] PASSED in chrome - /test/specs/checkout.personal.info.spec.js
[0-3] PASSED in chrome - /test/specs/checkout.summary.spec.js
[0-0] PASSED in chrome - /test/specs/cart.summary.spec.js
[0-7] PASSED in chrome - /test/specs/swag.items.list.spec.js
[0-6] PASSED in chrome - /test/specs/swag.item.details.spec.js
[0-5] PASSED in chrome - /test/specs/menu.spec.js

 "spec" Reporter:
------------------------------------------------------------------
[Chrome Headless 19.4.0 darwin #0-1] Spec: /Users/wimselles/Sauce/Git/js-sauce-integrations/webdriverio-v6/test/specs/checkout.complete.spec.js
[Chrome Headless 19.4.0 darwin #0-1] Running: Chrome Headless (v19.4.0) on darwin
[Chrome Headless 19.4.0 darwin #0-1] Session ID: 23f7b4cf-ebbc-433f-98b3-a054ae8be378
[Chrome Headless 19.4.0 darwin #0-1]
[Chrome Headless 19.4.0 darwin #0-1] Checkout - Complete
[Chrome Headless 19.4.0 darwin #0-1]    ✓ should be able to test loading of login page
[Chrome Headless 19.4.0 darwin #0-1]
[Chrome Headless 19.4.0 darwin #0-1] 1 passing (970ms)
------------------------------------------------------------------
[Chrome Headless 19.4.0 darwin #0-4] Spec: /Users/wimselles/Sauce/Git/js-sauce-integrations/webdriverio-v6/test/specs/login.spec.js
[Chrome Headless 19.4.0 darwin #0-4] Running: Chrome Headless (v19.4.0) on darwin
[Chrome Headless 19.4.0 darwin #0-4] Session ID: 130ba2b3-d736-48e0-8ae2-1d938b192206
[Chrome Headless 19.4.0 darwin #0-4]
[Chrome Headless 19.4.0 darwin #0-4] LoginPage
[Chrome Headless 19.4.0 darwin #0-4]    ✓ should be able to test loading of login page
[Chrome Headless 19.4.0 darwin #0-4]    ✓ should be able to login with a standard user
[Chrome Headless 19.4.0 darwin #0-4]    ✓ should not be able to login with a locked user
[Chrome Headless 19.4.0 darwin #0-4]
[Chrome Headless 19.4.0 darwin #0-4] 3 passing (2.5s)
------------------------------------------------------------------
[Chrome Headless 19.4.0 darwin #0-2] Spec: /Users/wimselles/Sauce/Git/js-sauce-integrations/webdriverio-v6/test/specs/checkout.personal.info.spec.js
[Chrome Headless 19.4.0 darwin #0-2] Running: Chrome Headless (v19.4.0) on darwin
[Chrome Headless 19.4.0 darwin #0-2] Session ID: 08fab342-d796-439a-bd1d-df877035c8a1
[Chrome Headless 19.4.0 darwin #0-2]
[Chrome Headless 19.4.0 darwin #0-2] Checkout - Personal info
[Chrome Headless 19.4.0 darwin #0-2]    ✓ should validate that we can continue shopping
[Chrome Headless 19.4.0 darwin #0-2]    ✓ should validate that we can cancel the first checkout
[Chrome Headless 19.4.0 darwin #0-2]    ✓ should be able to continue the checkout
[Chrome Headless 19.4.0 darwin #0-2]
[Chrome Headless 19.4.0 darwin #0-2] 3 passing (2.7s)
------------------------------------------------------------------
[Chrome Headless 19.4.0 darwin #0-3] Spec: /Users/wimselles/Sauce/Git/js-sauce-integrations/webdriverio-v6/test/specs/checkout.summary.spec.js
[Chrome Headless 19.4.0 darwin #0-3] Running: Chrome Headless (v19.4.0) on darwin
[Chrome Headless 19.4.0 darwin #0-3] Session ID: b0a110c1-27af-4abe-91f3-12bd55c1b4e5
[Chrome Headless 19.4.0 darwin #0-3]
[Chrome Headless 19.4.0 darwin #0-3] Checkout - Summary
[Chrome Headless 19.4.0 darwin #0-3]    ✓ should validate that we can continue shopping
[Chrome Headless 19.4.0 darwin #0-3]    ✓ should validate that we can cancel checkout and go to the inventory page
[Chrome Headless 19.4.0 darwin #0-3]    ✓ should validate that we have 1 product in our checkout overview
[Chrome Headless 19.4.0 darwin #0-3]
[Chrome Headless 19.4.0 darwin #0-3] 3 passing (2.7s)
------------------------------------------------------------------
[Chrome Headless 19.4.0 darwin #0-0] Spec: /Users/wimselles/Sauce/Git/js-sauce-integrations/webdriverio-v6/test/specs/cart.summary.spec.js
[Chrome Headless 19.4.0 darwin #0-0] Running: Chrome Headless (v19.4.0) on darwin
[Chrome Headless 19.4.0 darwin #0-0] Session ID: 838e694a-02ff-4e03-8cef-719052ff6c68
[Chrome Headless 19.4.0 darwin #0-0]
[Chrome Headless 19.4.0 darwin #0-0] Cart Summary page
[Chrome Headless 19.4.0 darwin #0-0]    ✓ should validate that we can continue shopping
[Chrome Headless 19.4.0 darwin #0-0]    ✓ should validate that we can go from the cart to the checkout page
[Chrome Headless 19.4.0 darwin #0-0]    ✓ should validate that a product can be removed from the cart
[Chrome Headless 19.4.0 darwin #0-0]
[Chrome Headless 19.4.0 darwin #0-0] 3 passing (3.5s)
------------------------------------------------------------------
[Chrome Headless 19.4.0 darwin #0-7] Spec: /Users/wimselles/Sauce/Git/js-sauce-integrations/webdriverio-v6/test/specs/swag.items.list.spec.js
[Chrome Headless 19.4.0 darwin #0-7] Running: Chrome Headless (v19.4.0) on darwin
[Chrome Headless 19.4.0 darwin #0-7] Session ID: 397f937a-1952-4f28-9933-2ba33857f357
[Chrome Headless 19.4.0 darwin #0-7]
[Chrome Headless 19.4.0 darwin #0-7] Swag items list
[Chrome Headless 19.4.0 darwin #0-7]    ✓ should validate that all products are present
[Chrome Headless 19.4.0 darwin #0-7]    ✓ should validate that the details of a product can be opened
[Chrome Headless 19.4.0 darwin #0-7]    ✓ should validate that a product can be added to the cart
[Chrome Headless 19.4.0 darwin #0-7]    ✓ should validate that a product can be removed from the cart
[Chrome Headless 19.4.0 darwin #0-7]    ✓ should be able to open the cart summary page
[Chrome Headless 19.4.0 darwin #0-7]
[Chrome Headless 19.4.0 darwin #0-7] 5 passing (5.1s)
------------------------------------------------------------------
[Chrome Headless 19.4.0 darwin #0-6] Spec: /Users/wimselles/Sauce/Git/js-sauce-integrations/webdriverio-v6/test/specs/swag.item.details.spec.js
[Chrome Headless 19.4.0 darwin #0-6] Running: Chrome Headless (v19.4.0) on darwin
[Chrome Headless 19.4.0 darwin #0-6] Session ID: 371721a2-3d5d-4e05-af69-d8d7713e77ad
[Chrome Headless 19.4.0 darwin #0-6]
[Chrome Headless 19.4.0 darwin #0-6] Swag Item Details
[Chrome Headless 19.4.0 darwin #0-6]    ✓ should validate that we can go back from the details to the inventory page
[Chrome Headless 19.4.0 darwin #0-6]    ✓ should validate that a product can be added to a cart
[Chrome Headless 19.4.0 darwin #0-6]    ✓ should validate that a product can be removed from the cart
[Chrome Headless 19.4.0 darwin #0-6]
[Chrome Headless 19.4.0 darwin #0-6] 3 passing (4.7s)
------------------------------------------------------------------
[Chrome Headless 19.4.0 darwin #0-5] Spec: /Users/wimselles/Sauce/Git/js-sauce-integrations/webdriverio-v6/test/specs/menu.spec.js
[Chrome Headless 19.4.0 darwin #0-5] Running: Chrome Headless (v19.4.0) on darwin
[Chrome Headless 19.4.0 darwin #0-5] Session ID: cc51a94a-e6c4-4838-aa83-22bd660c1b6e
[Chrome Headless 19.4.0 darwin #0-5]
[Chrome Headless 19.4.0 darwin #0-5] Menu
[Chrome Headless 19.4.0 darwin #0-5]    ✓ should be able to the swag items overview page
[Chrome Headless 19.4.0 darwin #0-5]    ✓ should be able to open the about page
[Chrome Headless 19.4.0 darwin #0-5]    ✓ should be able to log out
[Chrome Headless 19.4.0 darwin #0-5]    ✓ should be able to clear the cart
[Chrome Headless 19.4.0 darwin #0-5]
[Chrome Headless 19.4.0 darwin #0-5] 4 passing (8s)


Spec Files:      8 passed, 8 total (100% completed) in 00:00:24 
```

## Run tests on Sauce Labs
You can run your tests on Sauce Labs US DC with this command

    npm run test.saucelabs.us

You can run your tests on Sauce Labs EU DC with this command

    npm run test.saucelabs.eu

It will spin up multiple browsers which you can find [here](test/configs/wdio.saucelabs.conf.js).
