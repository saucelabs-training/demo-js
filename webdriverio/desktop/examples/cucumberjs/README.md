# WebdriverIO, CucumberJS and Sauce Labs Desktop Web
This folder contains an example on how to run WebdriverIO tests written with CucumberJS in the Sauce Labs Desktop Web.

> **NOTE:** This project now uses WebdriverIO V7 instead of V6. The only difference is the way you now need to import
> CucumberJS, see below:
> 
```git
- const { Given, When, Then } = require('cucumber')
+ const { Given, When, Then } = require('@cucumber/cucumber')
// Or
- import {Given, When, Then} from 'cucumber'
+ import {Given, When, Then} from '@cucumber/cucumber'
```

## Install dependencies
You can install all dependencies by running the following command

    npm install

This will install all needed dependencies that are listed in the `package.json`-file

> NOTE: Make sure you are in the folder `webdriverio/webdriver/examples/cucumberjs` when you execute this command

## Run tests locally
You can run the tests on your local machine, the only thing you need to have is Chrome. If you have it you can run this 
command

    npm run test.local

It will run all tests in *headless*-mode, meaning you will not see a browser starting, but the logs will look like this

```log
yarn test.local       
yarn run v1.22.10
$ wdio test/configs/wdio.local.chrome.conf.js
2021-01-10T16:25:03.376Z DEBUG @wdio/config:utils: Couldn't find ts-node package, no TypeScript compiling

Execution of 2 spec files started at 2021-01-10T16:25:03.447Z

Starting ChromeDriver 87.0.4280.20 (c99e81631faa0b2a448e658c0dbd8311fb04ddbd-refs/branch-heads/4280@{#355}) on port 9515
Only local connections are allowed.
Please see https://chromedriver.chromium.org/security-considerations for suggestions on keeping ChromeDriver safe.
[1610295903.511][WARNING]: FromSockAddr failed on netmask
ChromeDriver was started successfully.
[0-1] RUNNING in chrome - /test/features/swag.items.list.feature
[0-0] RUNNING in chrome - /test/features/login.feature
[0-0] PASSED in chrome - /test/features/login.feature
[0-1] PASSED in chrome - /test/features/swag.items.list.feature


=====================================================================================
    Multiple Cucumber HTML report generated in:

    /Users/Sauce/Git/sauce-training/demo-js/webdriverio/webdriver/examples/cucumberjs/.tmp/report/index.html
=====================================================================================


 "spec" Reporter:
------------------------------------------------------------------
[chrome 87.0.4280.141 mac os x #0-0] Spec: /Users/Sauce/Git/sauce-training/demo-js/webdriverio/webdriver/examples/cucumberjs/test/features/login.feature
[chrome 87.0.4280.141 mac os x #0-0] Running: chrome (v87.0.4280.141) on mac os x
[chrome 87.0.4280.141 mac os x #0-0] Session ID: 11b727c1bae205a87c1a5e83cfac6312
[chrome 87.0.4280.141 mac os x #0-0]
[chrome 87.0.4280.141 mac os x #0-0] LoginPage
[chrome 87.0.4280.141 mac os x #0-0]     As a user I want to verify that the login page loads
[chrome 87.0.4280.141 mac os x #0-0]        ✓ Given I load the Swag Labs demo website
[chrome 87.0.4280.141 mac os x #0-0]        ✓ Then I should see the login page being loaded
[chrome 87.0.4280.141 mac os x #0-0]
[chrome 87.0.4280.141 mac os x #0-0]     As a user I want to be able to login
[chrome 87.0.4280.141 mac os x #0-0]        ✓ Given I load the Swag Labs demo website
[chrome 87.0.4280.141 mac os x #0-0]        ✓ When I login with valid credentials
[chrome 87.0.4280.141 mac os x #0-0]        ✓ Then I should see the swag items page being loaded
[chrome 87.0.4280.141 mac os x #0-0]
[chrome 87.0.4280.141 mac os x #0-0]     As a user I want to be notified if I'm not allowed to login as a locked out user
[chrome 87.0.4280.141 mac os x #0-0]        ✓ Given I load the Swag Labs demo website
[chrome 87.0.4280.141 mac os x #0-0]        ✓ When I login with locked out credentials
[chrome 87.0.4280.141 mac os x #0-0]        ✓ Then I should see the locked out error message
[chrome 87.0.4280.141 mac os x #0-0]
[chrome 87.0.4280.141 mac os x #0-0] 8 passing (3.6s)
------------------------------------------------------------------
[chrome 87.0.4280.141 mac os x #0-1] Spec: /Users/Sauce/Git/sauce-training/demo-js/webdriverio/webdriver/examples/cucumberjs/test/features/swag.items.list.feature
[chrome 87.0.4280.141 mac os x #0-1] Running: chrome (v87.0.4280.141) on mac os x
[chrome 87.0.4280.141 mac os x #0-1] Session ID: 513bc076b145bbc0935449c4448be5cf
[chrome 87.0.4280.141 mac os x #0-1]
[chrome 87.0.4280.141 mac os x #0-1] Swag items list
[chrome 87.0.4280.141 mac os x #0-1]     As an existing user I want to verify that all products are available
[chrome 87.0.4280.141 mac os x #0-1]        ✓ Given I'm on the swag overview page as an existing user
[chrome 87.0.4280.141 mac os x #0-1]        ✓ Then I should see 6 swag items
[chrome 87.0.4280.141 mac os x #0-1]
[chrome 87.0.4280.141 mac os x #0-1]     As an existing user I want to verify that I can view the product details
[chrome 87.0.4280.141 mac os x #0-1]        ✓ Given I'm on the swag overview page as an existing user
[chrome 87.0.4280.141 mac os x #0-1]        ✓ When I open the product details of "Sauce Labs Backpack"
[chrome 87.0.4280.141 mac os x #0-1]        ✓ Then I should see the details of the "Sauce Labs Backpack"
[chrome 87.0.4280.141 mac os x #0-1]
[chrome 87.0.4280.141 mac os x #0-1]     As an existing user I want to verify that I can add a product to the cart
[chrome 87.0.4280.141 mac os x #0-1]        ✓ Given I'm on the swag overview page as an existing user
[chrome 87.0.4280.141 mac os x #0-1]        ✓ And the cart has 0 items
[chrome 87.0.4280.141 mac os x #0-1]        ✓ When I add product 1 to the cart
[chrome 87.0.4280.141 mac os x #0-1]        ✓ Then the cart has 1 items
[chrome 87.0.4280.141 mac os x #0-1]
[chrome 87.0.4280.141 mac os x #0-1]     As an existing user I want to verify that I can remove a product to the cart
[chrome 87.0.4280.141 mac os x #0-1]        ✓ Given I'm on the swag overview page as an existing user with one product in my cart
[chrome 87.0.4280.141 mac os x #0-1]        ✓ And the cart has 1 items
[chrome 87.0.4280.141 mac os x #0-1]        ✓ When I remove product 1 from the cart
[chrome 87.0.4280.141 mac os x #0-1]        ✓ Then the cart has 0 items
[chrome 87.0.4280.141 mac os x #0-1]
[chrome 87.0.4280.141 mac os x #0-1]     As an existing user I want to verify that I open the cart summary page
[chrome 87.0.4280.141 mac os x #0-1]        ✓ Given I'm on the swag overview page as an existing user with one product in my cart
[chrome 87.0.4280.141 mac os x #0-1]        ✓ When I open the cart
[chrome 87.0.4280.141 mac os x #0-1]        ✓ Then I should see the cart page
[chrome 87.0.4280.141 mac os x #0-1]
[chrome 87.0.4280.141 mac os x #0-1] 16 passing (5.4s)


Spec Files:      2 passed, 2 total (100% completed) in 00:00:07 

✨  Done in 8.49s.
```

## Run tests on Sauce Labs
You can run your tests on Sauce Labs US DC with this command

    npm run test.saucelabs.us

You can run your tests on Sauce Labs EU DC with this command

    npm run test.saucelabs.eu

## Reporting
This setup uses:

- [`wdio-cucumberjs-json-reporter`](https://github.com/wswebcreation/wdio-cucumberjs-json-reporter) for creating a JSON
output
- [multiple-cucumber-html-reporter](https://github.com/wswebcreation/multiple-cucumber-html-reporter) for generating a
beautiful HTML report

See the [`wdio.shared.conf.js`](./test/configs/wdio.shared.conf.js)-hooks for more information on how to set this up.

## Running tags
The feature-files, see [here](./test/features) hold tags. They can be triggered by running a command like this

    npm run test.local -- --cucumberOpts.tagExpression='@product-details'
    
which will run all scenarios that have the tag `@product-details`, or run

    npm run test.local -- --cucumberOpts.tagExpression='@cart or @happy-flow'

which will run all scenarios that have the tag `@cart` or `@happy-flow`

See the [CucumberJS](https://cucumber.io/docs/cucumber/api/#tags) documentation for more information.
