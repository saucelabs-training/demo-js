# TestCafe with the Sauce Labs Testrunner Toolkit
This folder contains a simple set up for TestCafe which can be run with the Sauce Labs Testrunner Toolkit

## Sauce Labs Testrunner Toolkit
### Install dependencies

Follow instructions from [here](https://github.com/saucelabs/testrunner-toolkit)

> NOTE: Make sure you are in the folder `testrunner-toolkit/testcafe` when you execute this command

### Run tests in Sauce

    saucectl run

It will run all tests and the logs will look like this

```log
saucectl run

> @saucelabs/stt-testcafe-node@0.0.1 test /home/seluser
> node ./src/testcafe-runner.js

 Running tests in:
 - Chrome 81.0.4044.138 / Linux 0.0

 ✓ Test cart items overview page - should validate that we can continue
 shopping
 ✓ Test cart items overview page - should validate that we can go from the
 cart to the checkout page
 ✓ Test cart items overview page - should validate that a product can be
 removed from the cart
 ✓ Test cart items overview page - should validate that we can continue
 shopping
 ✓ Test checkout overview page - should validate we get an error if we don
 not provide all personal information
 ✓ Test checkout overview page - should validate that we can cancel the first
 checkout
 ✓ Test checkout overview page - should be able to continue the checkout
 ✓ Test checkout summary page - should validate that we can continue shopping
 ✓ Test checkout summary page - should validate that we can cancel checkout
 and go to the inventory page
 ✓ Test checkout summary page - should validate that we have 1 product in our
 checkout overview
 ✓ Test Login - should be able to test loading of login page
 ✓ Test Login - should be able to login with a standard user
 ✓ Test Login - should not be able to login with a locked user
 ✓ Test checkout summary page - should be able to go to the swag items
 overview page
 ✓ Test checkout summary page - should be able to open the about page
 ✓ Test checkout summary page - should be able to log out
 ✓ Test checkout summary page - should be able to clear the cart
 ✓ Test swag items details page - should validate that we can go back from
 the details to the inventory page
 ✓ Test swag items details page - should validate that a product can be added
 to a cart
 ✓ Test swag items details page - should validate that a product can be
 removed from the cart
 ✓ Test swag items overview page - should validate that all products are
 present
 ✓ Test swag items overview page - should validate that the details of a
 product can be opened
 ✓ Test swag items overview page - should validate that a product can be
 added to a cart
 ✓ Test swag items overview page - should validate that a product can be
 removed from the cart
 ✓ Test swag items overview page - should be able to open the cart summary
 page


 25 passed (3m 10s)

Preparing assets
upload successful

Open job details page: https://app.eu-central-1.saucelabs.com/tests/427e230fa25046d4aaed3ebd2eb0c637
```

### Browser support
We support Chrome by default, but if you want to run on Firefox please add the following to the [config](./.sauce/config.yml)

```yaml
capabilities:
  - browserName: firefox
```
