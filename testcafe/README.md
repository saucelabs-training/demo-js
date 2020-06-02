# TestCafe
This folder contains a simple set up for TestCafe.

## Install dependencies
You can install all dependencies by running the following command

    npm install
    
This will install all needed dependencies that are listed in the `package.json`-file

> NOTE: Make sure you are in the folder `testcafe` when you execute this command

## Run tests locally
You can run the tests on your local machine, the only thing you need to have is Chrome. If you have it you can run this command

    npm run test.local

It will run all tests in your local Chrome browser in headless mode. The logs will look like this

```log
➜  testcafe git:(master) ✗ npm run test.local

> testcafe-saucedemo@1.0.0 test.local /Users/wimselles/Sauce/Git/js-sauce-integrations/testcafe
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


 22 passed (9s)
Tests failed: 0
```

## Run tests on Sauce Labs
To run the tests on Sauce Labs we advise you to read [this](https://github.com/DevExpress/testcafe-browser-provider-saucelabs) 
document and follow the step to set up your local and or CI-pipeline.

To get all the browsers / emulators run the following command

    npm run test.saucelabs.get.browsers

Just pick the browsers you need and add them to the TestCafe-configuration file which can be found [here](./tests/configs/saucelabs.config.js).

You can run your tests on Sauce Labs US DC with this command

    npm run test.saucelabs.us

You can run your tests on Sauce Labs EU DC with this command

    npm run test.saucelabs.eu

It will spin up multiple browsers.
