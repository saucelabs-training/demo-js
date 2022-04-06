# TestCafe "BestPractices"
This folder contains set up for TestCafe to run on your local machine or in Sauce Labs.

## Install dependencies
You can install all dependencies by running the following command

    npm install
    
This will install all needed dependencies that are listed in the `package.json`-file

> NOTE: Make sure you are in the folder `testcafe/best-practices` when you execute this command

## Run tests locally
You can run the tests on your local machine, the only thing you need to have is Chrome. If you have it you can run this command

    npm run test.local

It will run all tests in your local Chrome browser in headless mode. The logs will look like this

```log
➜  testcafe git:(master) ✗ npm run test.local

> testcafe-saucedemo@1.0.0 test.local /testcafe
> node tests/configs/local.chrome.config.js

 Running tests in:
 - Chrome 81.0.4044.113 / macOS 10.15.4

 Test cart items overview page
 ✓ should validate that we can continue shopping
 ✓ should validate that we can go from the cart to the checkout page
 ✓ should validate that a product can be removed from the cart

 Test cart items overview page
 ✓ should validate that we can continue shopping

 Test checkout overview page
 ✓ should validate that we can continue shopping
 ✓ should validate that we can cancel the first checkout
 ✓ should be able to continue the checkout

 Test checkout summary page
 ✓ should validate that we can continue shopping
 ✓ should validate that we can cancel checkout and go to the inventory page
 ✓ should validate that we have 1 product in our checkout overview

 Test Login
 ✓ should be able to test loading of login page
 ✓ should be able to login with a standard user
 ✓ should not be able to login with a locked user
 ✓ should not be able to login with an invalid username
 ✓ should not be able to login with an invalid password
 ✓ should not be able to login with non existing data

 Test swag items details page
 ✓ should validate that we can go back from the details to the inventory page
 ✓ should validate that a product can be added to a cart
 ✓ should validate that a product can be removed from the cart

 Test swag items overview page
 ✓ should validate that all products are present
 ✓ should validate that the details of a product can be opened
 ✓ should validate that a product can be added to a cart


 25 passed (9s)
Tests failed: 0
```

## Run tests on Sauce Labs
We recommend using [SauceCTL](https://github.com/saucelabs/saucectl) for running TestCafe tests. If you haven't installed the SauceCTL runner, you can do that by running

```
npm install -g saucectl
```

To run tests, you can then execute

```
npm run test.saucelabs.eu
```

to run tests against the EU data center or

```
npm run test.saucelabs.us
```

to run tests against the US data center. Both commands use the `saucectl run` command with some additional configuration. 

_Special Note_: Using `saucectl` does _not_ automatically start a Sauce Connect tunnel, which may be advantageous if you want to use an existing tunnel, or if you do not require a Sauce Connect tunnel with your TestCafe tests. 

If you would like to run tests with an existing Sauce Connect tunnel, use

```
saucectl run --tunnel-name myTunnel
```

or set the tunnel name in the [config file](https://docs.saucelabs.com/dev/cli/saucectl/#configure-saucectl-for-your-tests) of your tests.