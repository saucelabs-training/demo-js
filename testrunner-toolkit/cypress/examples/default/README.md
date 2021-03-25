# Cypress default set up
This folder contains a simple set up for Cypress which can be run locally, in a docker container and on Sauce Labs with 
the [Sauce Labs Testrunner Toolkit](https://docs.saucelabs.com/testrunner-toolkit/index.html).

Make sure you follow all steps as mentioned below.

## Local Usage
### Install dependencies
>**Note:** Make sure you are in the `testrunner-toolkit/cypress/examples/default`-folder

You can install all dependencies by running the following command

    npm install
    
This will install all needed dependencies that are listed in the `package.json`-file

### Run tests locally
You can run the tests on your local machine, the only thing you need to have is Chrome. If you have it you can run this 
command

    npm run test.local

It will run all tests in *headless*-mode, meaning you will not see a browser starting, but the logs will look like this

<details>
 <summary>Click to expand and see the logs.</summary>
 
```log
 ╰ npm run test.local         

> cypress-1@1.0.0 test.local /Users/sauce-training/demo-js/testrunner-toolkit/cypress/examples/default
> npx cypress run
                   
 
 ====================================================================================================
 
   (Run Starting)
 
   ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
   │ Cypress:    6.2.1                                                                              │
   │ Browser:    Electron 87 (headless)                                                             │
   │ Specs:      8 found (cart.summary.spec.js, checkout.complete.spec.js, checkout.personal.info.s │
   │             pec.js, checkout.summary.spec.js, login.spec.js, menu.spec.js, swag.item.details.s │
   │             pec.js, swag.item.list.spec.js)                                                    │
   └────────────────────────────────────────────────────────────────────────────────────────────────┘
 
 
 ────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                     
   Running:  cart.summary.spec.js                                                            (1 of 8)
 
 
   Cart Summary page
     ✓ should validate that we can continue shopping (1110ms)
     ✓ should validate that we can go from the cart to the checkout page (200ms)
     ✓ should validate that a product can be removed from the cart (229ms)
 
 
   3 passing (2s)
 
 
   (Results)
 
   ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
   │ Tests:        3                                                                                │
   │ Passing:      3                                                                                │
   │ Failing:      0                                                                                │
   │ Pending:      0                                                                                │
   │ Skipped:      0                                                                                │
   │ Screenshots:  0                                                                                │
   │ Video:        true                                                                             │
   │ Duration:     1 second                                                                         │
   │ Spec Ran:     cart.summary.spec.js                                                             │
   └────────────────────────────────────────────────────────────────────────────────────────────────┘
 
 
   (Video)
 
   -  Started processing:  Compressing to 32 CRF                                                     
   -  Finished processing: /Users/Sauce/Git/sauce-training/demo-js/testrunne    (0 seconds)
                           r-toolkit/cypress/cypress/videos/cart.summary.spec.js.mp4                 
 
 
 //...........              
 
 
 ====================================================================================================
 
   (Run Finished)
 
 
        Spec                                              Tests  Passing  Failing  Pending  Skipped  
   ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
   │ ✔  cart.summary.spec.js                     00:01        3        3        -        -        - │
   ├────────────────────────────────────────────────────────────────────────────────────────────────┤
   │ ✔  checkout.complete.spec.js                340ms        1        1        -        -        - │
   ├────────────────────────────────────────────────────────────────────────────────────────────────┤
   │ ✔  checkout.personal.info.spec.js           00:01        3        3        -        -        - │
   ├────────────────────────────────────────────────────────────────────────────────────────────────┤
   │ ✔  checkout.summary.spec.js                 895ms        3        3        -        -        - │
   ├────────────────────────────────────────────────────────────────────────────────────────────────┤
   │ ✔  login.spec.js                            00:01        3        3        -        -        - │
   ├────────────────────────────────────────────────────────────────────────────────────────────────┤
   │ ✔  menu.spec.js                             00:10        4        4        -        -        - │
   ├────────────────────────────────────────────────────────────────────────────────────────────────┤
   │ ✔  swag.item.details.spec.js                00:01        3        3        -        -        - │
   ├────────────────────────────────────────────────────────────────────────────────────────────────┤
   │ ✔  swag.item.list.spec.js                   00:01        5        5        -        -        - │
   └────────────────────────────────────────────────────────────────────────────────────────────────┘
     ✔  All specs passed!                        00:19       25       25        -        -        - 
 ```
</details>

You can also run the test in *headfull*-mode with this command

    npm run test.local.headfull
    
You will then see Chrome popping up.

## Sauce Labs Testrunner Toolkit
### Install dependencies
Follow instructions from [here](https://docs.saucelabs.com/testrunner-toolkit/installation)

### Run tests with Docker and Sauce
Make sure you've installed Docker on your local machine or in your pipeline, see also 
[this](https://docs.saucelabs.com/testrunner-toolkit/installation) page.

You can then run this project with

    npx saucectl run --test-env docker
    
    # OR
    npm run test.docker.sauce

It will run all tests and the logs will look like this

<details>
 <summary>Click to expand and see the logs.</summary>

```log
╰ npm run test.docker.sauce

> cypress-1@1.0.0 test.docker.sauce /Users/sauce-training/demo-js/testrunner-toolkit/cypress/examples/default
> npx saucectl run --test-env docker

10:11:11 INF Running version 0.33.3
10:11:11 INF Reading config file config=.sauce/config.yml
10:11:11 INF Running Cypress in Docker
10:11:11 INF concurrency > 1: forcing file transfer mode to use 'copy'.
10:11:11 INF Launching workers. concurrency=2
10:11:11 INF Setting up test environment suite="Cypress Chrome"
10:11:11 INF Using credentials set by environment variables suite="Cypress Chrome"
10:11:11 INF Starting container id=2d1f4f77697d img=saucelabs/stt-cypress-mocha-node:v5.8.0 suite="Cypress Chrome"
10:11:12 INF File copied from=cypress.json suite="Cypress Chrome" to=/home/seluser/
10:11:12 INF File copied from=cypress suite="Cypress Chrome" to=/home/seluser/
10:11:21 INF Suites in progress: 1
10:11:31 INF Suites in progress: 1
10:11:41 INF Suites in progress: 1
10:11:51 INF Suites in progress: 1
10:12:01 INF Suites in progress: 1
10:12:11 INF Suites in progress: 1
10:12:21 INF Suites in progress: 1
10:12:24 INF Tearing down environment suite="Cypress Chrome"
10:12:27 INF Suite finished. passed=true suite="Cypress Chrome" url=https://app.eu-central-1.saucelabs.com/tests/8ed9cc2fa3e5491da8628b72f7155320
10:12:27 INF ┌───────────────────────┐
10:12:27 INF  All suites have passed! 
10:12:27 INF └───────────────────────┘
```
</details>

The test will be executed in a Docker container, but the results will be pushed to Sauce Labs.

### Running tests on the Sauce Labs cloud
You can also run Cypress tests on Sauce Labs VM's with the following command:

```bash
npx saucectl run --test-env sauce

# OR for use with the EU data center

npm run test.sauce.eu

# OR for use with the US data center
npm run test.sauce.us
```

which will result in this

<img src="docs/cypress-recording.gif" />
