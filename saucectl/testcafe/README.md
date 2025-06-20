# TestCafe with the Sauce Labs Testrunner Toolkit

> **For Demonstration Purposes Only**\
> The code in these scripts is provided on an "AS-IS" basis without warranty of any kind, either express or implied,
> including without limitation any implied warranties of condition, uninterrupted use, merchantability, fitness for a
> particular purpose, or non-infringement. These scripts are provided for educational and demonstration purposes only,
> and should not be used in production. Issues regarding these scripts should be submitted through GitHub. These scripts
> are maintained by the Technical Services team at Sauce Labs.

## Introduction
This folder contains a simple set up for TestCafe which can be run locally and with the Sauce Labs
[`saucectl`](https://docs.saucelabs.com/testrunner-toolkit)-runner.

## Install dependencies
- Open a new terminal and clone the main project by using the following command 
  
  `git clone https://github.com/saucelabs-training/demo-js.git`
  
- From the root of the project, execute
  
  ```shell
  cd testrunner-toolkit
  cd testcafe
  ```
  
  You are now in this folder.
- Install all dependencies by running the following command in the terminal
  
  `npm install`
  
  This will install all dependencies, including the `saucectl`-runner

## Run tests locally
You can run the tests on your local machine, the only thing you need to have is Chrome. If you have it you can run this 
command in a new terminal

    npm run test.local

It will run all tests in your local Chrome browser in headless mode.

## Run tests in Sauce
There are two options to run the examples (see the [examples](#examples) below):
1. Through a npm script by opening a terminal and enter

     ```shell
     # For the EU DC, where `#` is the number of the example
     npm run test.sauce.ex#.eu
     
     # For the US DC, where `#` is the number of the example
     npm run test.sauce.ex#.us
     ```
   
1. Or using the `saucectl`-command and select a configuration. This can be done by opening a terminal and type in the 
following command
   
    > **Note:** `npx` is used here because `saucectl` is one of the `devDependencies` in this project. When `saucectl`
    > is installed globally (with `npm install -g saucectl`) then you can use `saucectl` without the `npx prefix`

    ```shell
    # For the EU DC, where `#` is the number of the example
    npx saucectl run -c ./.sauce/config-ex1.yml --region
     
    # For the US DC, where `#` is the number of the example
    npx saucectl run -c ./.sauce/config-ex1.yml --region us-west-1
    ```

> **Note:** To see all options that `saucectl` is providing type in `npx saucectl --help`

It will run all tests, and the logs will look like this

<details>
  <summary>Expand to see the logs</summary>

```logs
npm run test.local

> testcafe-saucedemo@1.0.0 test.local
> node tests/configs/local.chrome.config.js

 Running tests in:
 - Chrome 91.0.4472.114 / macOS 10.15.7

 Test cart items overview page
 ✓ should validate that we can continue shopping
 ✓ should validate that we can go from the cart to the checkout page
 ✓ should validate that a product can be removed from the cart

 Test cart items overview page
 ✓ should validate that we can continue shopping

 Test checkout overview page
 ✓ should validate we get an error if we don not provide all personal information
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

 Test checkout summary page
 ✓ should be able to go to the swag items overview page
 ✓ should be able to open the about page
 ✓ should be able to log out
 ✓ should be able to clear the cart

 Test swag items details page
 ✓ should validate that we can go back from the details to the inventory page
 ✓ should validate that a product can be added to a cart
 ✓ should validate that a product can be removed from the cart

 Test swag items overview page
 ✓ should validate that all products are present
 ✓ should validate that the details of a product can be opened
 ✓ should validate that a product can be added to a cart
 ✓ should validate that a product can be removed from the cart
 ✓ should be able to open the cart summary page


 25 passed (2m 23s)
Tests failed: 0
```
</details>

## Examples
All below mentioned examples can be found in the [`.sauce`](./.sauce)-folder. You can run the configurations by running
the following command from the root of this folder

```shell
# By default all configs run on the EU DC, if you run `saucectl` directly from the command line and you
# want to run on the US DC then add `--region us-west-1` at the end
npx saucectl run -c ./.sauce/config-ex#.yml

# OR for use with the EU data center
npm run test.sauce.ex#.eu

# OR for use with the US data center
npm run test.sauce.ex#.us
```

> **Note:** The `#` stands for the number of the below mentioned examples.

### Example 1 - Minimal configuration for all tests
`config-ex1.yml` provides a minimum configuration needed to run the TestCafe tests.
In this example, all tests are executed on a single chrome browser in sequential order.

### Example 2 - Parallel tests
`config-ex2.yml` breaks apart the execution of the tests such that they can run in parallel on separate chrome browsers.

### Example 3 - Cross Browser tests
`config-ex3.yml` run the login tests on:
- Windows 10 with Chrome, Firefox and MicroSoftEdge
- MacOS 11 with Safari, Chrome, Firefox and MicroSoftEdge

### Example 4 - Run on iOS simulators
`config-ex4.yml` run all tests on iOS simulators

> **Note:** More options can be found in the
> [TestCafe on Sauce Labs](https://docs.saucelabs.com/testrunner-toolkit/configuration/testcafe) documentation 
