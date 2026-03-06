# Cypress Examples

> **For Demonstration Purposes Only**\
> The code in these scripts is provided on an "AS-IS" basis without warranty of any kind, either express or implied,
> including without limitation any implied warranties of condition, uninterrupted use, merchantability, fitness for a
> particular purpose, or non-infringement. These scripts are provided for educational and demonstration purposes only,
> and should not be used in production. Issues regarding these scripts should be submitted through GitHub. These scripts
> are maintained by the Technical Services team at Sauce Labs.

## Introduction

This repository will hold multiple examples on how to run Cypress tests locally and with 
[saucectl](https://docs.saucelabs.com/web-apps/automated-testing/cypress/).

It is based on the following user journey:

1. A QA/DEV already has Cypress tests which he/she can run on his local machine
2. A QA/DEV wants to run his existing tests on Sauce Labs VMs

## Prerequisites

- Please check our [documentation](https://docs.saucelabs.com/dev/cli/saucectl/) for installing SauceCTL
- Make sure you've set up your credentials on your local machine and or CI-pipeline, see
  [this](https://docs.saucelabs.com/dev/cli/saucectl/#associate-your-credentials)-doc
- Check the [Cypress](https://docs.saucelabs.com/web-apps/automated-testing/cypress/)-docs for all options

### Install dependencies

You can install all dependencies by running the following command

    npm install

This will install all needed dependencies that are listed in the `package.json`-file

> NOTE: Make sure you are in the folder `saucectl/cypress` when you execute this command

### Install `saucectl`

You can install only saucectl by running the following command

```shell
npm install -g saucectl
```

## Cypress info

More information about Cypress and writing Cypress tests can be found
[here](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)

### WebKit support — `experimentalWebKitSupport` flag

If you want to run Cypress tests on **WebKit** (Safari's browser engine), you need to enable the experimental WebKit
support in your Cypress configuration file:

```javascript
module.exports = defineConfig({
    experimentalWebKitSupport: true,
    // ...
})
```

> **⚠️ Note:** This flag is already set in [`cypress.config.js`](./cypress.config.js). Without it, Cypress will not
> be able to launch or run tests on WebKit. This is required for Example 6, which runs cross-platform tests with WebKit.

### Microsoft Edge on Windows — `--no-sandbox` flag

The [`cypress.config.js`](./cypress.config.js) includes a `before:browser:launch` hook that automatically adds the
`--no-sandbox` flag when running tests on Microsoft Edge:

```javascript
on('before:browser:launch', (browser, launchOptions) => {
    if (browser.family === 'chromium' && browser.name === 'edge') {
        launchOptions.args.push('--no-sandbox')
    }
    return launchOptions
})
```

> **⚠️ Note:** This flag is required when running Edge on Sauce Labs VMs (Windows), where the sandbox is not
> available. If you are running these tests locally on Windows with Edge, be aware that this flag is applied
> automatically. Disabling the sandbox is generally safe in controlled CI/cloud environments, but should be used
> with caution on local machines due to potential security implications.

## Sauce Labs saucectl info

More information about the saucectl can be found
[here](https://docs.saucelabs.com/dev/cli/saucectl/)

## Examples:

All below mentioned examples can be found in the [`.sauce`](./.sauce)-folder. You can run the configurations by running
the following command from the root of this folder

      saucectl run --config ./.sauce/config-ex{#}.yml

      # OR for use with the EU data center
      npm run test.sauce.ex{#}.eu

      # OR for use with the US data center
      npm run test.sauce.ex{#}.us

The `#` stands for the number of the below mentioned examples.

### Example 1 - Minimal configuration for all tests

[`config-ex1.yml`](./.sauce/config-ex1.yml) provides a minimum configuration needed to run the Cypress tests.
In this example, all tests are executed on a single chrome browser in sequential order.

### Example 2 - Automatically sharding the tests

[`config-ex2.yml`](./.sauce/config-ex2.yml) run all tests on chrome. saucectl automatically
splits the tests by using "shard" property with the value "spec" so that they can easily run in parallel.

### Example 3 - Cross Browser tests

[`config-ex3.yml`](./.sauce/config-ex3.yml) run the login and the checkout tests on 3 different types of browsers where saucectl 
automatically splits the tests by using "shard" property with the value "spec" so that they can easily run in parallel.

### Example 4 - Cross Versions tests

[`config-ex4.yml`](./.sauce/config-ex4.yml) run all tests on different Chrome versions where saucectl automatically
splits the tests by using "shard" property with the value "concurrency" so that they can easily run in parallel.
Note: The configured concurrency is 5 and the number of specs are 8. Using "shard: concurrency" will split the 8 specs into 5 jobs.

### Example 5 - Using Sauce Connect

[`config-ex5.yml`](./.sauce/config-ex5.yml) Similar to config-ex2 but the web site is local. You can download and run local saucedemo.com 
website from [here](https://github.com/saucelabs/sample-app-web. You need to add the tunnel name to the tunnel 
parameter in the config file

### Example 6 - Cross Platform tests with Webkit

[`config-ex3.yml`](./.sauce/config-ex3.yml) similar to config-ext3 but on different platforms and using Webkit.
