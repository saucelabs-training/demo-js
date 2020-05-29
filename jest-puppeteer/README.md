# Jest with Puppeteer
This folder contains a simple set up for Jest and Puppeteer.

## Install dependencies
You can install all dependencies by running the following command

    npm install
    
This will install all needed dependencies that are listed in the `package.json`-file

> NOTE: Make sure you are in the folder `jest-puppeteer` when you execute this command

## Run tests locally
You can run the tests on your local machine, the only thing you need to have is Chrome. If you have it you can run this command

    npm run test.local

It will run all tests in *headless*-mode, meaning you will not see a browser starting, but the logs will look like this


```log
➜  jest-puppeteer git:(feat/jest-puppeteer) ✗ npm run test.local

> jest-puppeteer-examples@1.0.0 test.local /Users/wimselles/Sauce/Git/js-sauce-integrations/jest-puppeteer
> jest --runInBand --verbose

 PASS  test/specs/menu.spec.js
  Menu
    ✓ should be able to the swag items overview page (1236 ms)
    ✓ should be able to open the about page (1174 ms)
    ✓ should be able to log out (829 ms)
    ✓ should be able to clear the cart (587 ms)

 PASS  test/specs/checkout.personal.info.spec.js
  Checkout - Personal info
    ✓ should validate we get an error if we don not provide all personal information (228 ms)
    ✓ should validate that we can cancel the first checkout (3087 ms)
    ✓ should be able to continue the checkout (156 ms)

 PASS  test/specs/swag.items.list.spec.js
  Swag items list
    ✓ should validate that all products are present (449 ms)
    ✓ should validate that the details of a product can be opened (117 ms)
    ✓ should validate that a product can be added to the cart (81 ms)
    ✓ should validate that a product can be removed from the cart (80 ms)
    ✓ should be able to open the cart summary page (87 ms)

 PASS  test/specs/swag.item.details.spec.js
  Swag Item Details
    ✓ should validate that we can go back from the details to the inventory page (289 ms)
    ✓ should validate that a product can be added to a cart (116 ms)
    ✓ should validate that a product can be removed from the cart (113 ms)

 PASS  test/specs/checkout.summary.spec.js
  Checkout - Summary
    ✓ should validate that we can continue shopping (242 ms)
    ✓ should validate that we can cancel checkout and go to the inventory page (97 ms)
    ✓ should validate that we have 1 product in our checkout overview (120 ms)

 PASS  test/specs/cart.summary.spec.js
  Cart Summary page
    ✓ should validate that we can continue shopping (271 ms)
    ✓ should validate that we can go from the cart to the checkout page (115 ms)
    ✓ should validate that a product can be removed from the cart (60 ms)

 PASS  test/specs/login.spec.js
  LoginPage
    ✓ should be able to test loading of login page (85 ms)
    ✓ should be able to login with a standard user (139 ms)
    ✓ should not be able to login with a locked user (108 ms)

 PASS  test/specs/checkout.complete.spec.js
  Checkout - Complete
    ✓ should be able to test loading of login page (145 ms)

Test Suites: 8 passed, 8 total
Tests:       25 passed, 25 total
Snapshots:   0 total
Time:        12.195 s, estimated 13 s
Ran all test suites.
```

You can also run the test in *headfull*-mode with this command

    npm run test.local.headfull
    
You will then see Chrome poping up.

## Run tests on Sauce Labs
Due to 2 issues this set can't run on the [SauceCTL Testrunner Toolkit](https://github.com/saucelabs/testrunner-toolkit) offering yet, see:
- [Use jest-puppeteer or add `page` as a global](https://github.com/saucelabs/testrunner-toolkit/issues/)
- [File structure is not properly copied](https://github.com/saucelabs/testrunner-toolkit/issues/13)

