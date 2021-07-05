# Playwright
> **For Demonstration Purposes Only**\
> The code in these scripts is provided on an "AS-IS" basis without warranty of any kind, either express or implied,
> including without limitation any implied warranties of condition, uninterrupted use, merchantability, fitness for a
> particular purpose, or non-infringement. These scripts are provided for educational and demonstration purposes only,
> and should not be used in production. Issues regarding these scripts should be submitted through GitHub. These scripts
> are maintained by the Technical Services team at Sauce Labs.

## Introduction
This folder contains a simple set up for Playwright which can be run locally and with
[`saucectl`](https://docs.saucelabs.com/testrunner-toolkit/index.html).

## Install dependencies
- Open a new terminal and clone the main project by using the following command

  `git clone https://github.com/saucelabs-training/demo-js.git`

- From the root of the project, execute

  ```shell
  cd testrunner-toolkit
  cd playwright
  ```

  You are now in this folder.
- Install all dependencies by running the following command in the terminal

  `npm install`

  This will install all dependencies, including the `saucectl`-runner

### Run tests locally
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
`config-ex1.yml` provides a minimum configuration needed to run the Playwright tests. In this example, all tests are 
executed on a single chrome browser in sequential order.


> **Note:** More options can be found in the
> [Playwright on Sauce Labs](https://docs.saucelabs.com/web-apps/automated-testing/playwright) documentation 
