# Cypress Cross Browser Tests
This folder contains a simple set up for Cypress with a test that uses a **dependency**. In this case the 
[cypress-axe](https://github.com/component-driven/cypress-axe/)-library to test accessibility with axe-core.
This can be run locally, in a docker container and on Sauce Labs with the
[Sauce Labs Testrunner Toolkit](https://docs.saucelabs.com/testrunner-toolkit/index.html).

> **NOTE 1:**
> 
>Running Cypress Test with dependencies on the Sauce Labs cloud can be set in the [config.yml](./.sauce/config.yml) by
> adding extra `npm` dependencies on the root of the `yml`-file like this
> ```yaml
> #...
> npm:
>   packages:
>     "axe-core": "^4.1.3"
>     "cypress-axe": "^0.12.2"
> ```
> Form more information check [npm dependencies](https://docs.saucelabs.com/testrunner-toolkit/configuration/common-syntax#npm)
> in our documentation.

> **NOTE 2:** The sample AXE test will fail due to accessibility issues

Make sure you follow all steps as mentioned below.

## Local Usage
### Install dependencies
>**Note:** Make sure you are in the `testrunner-toolkit/cypress/examples/dependencies`-folder

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

> cypress-1@1.0.0 test.local /Users/sauce-training/demo-js/testrunner-toolkit/cypress/examples/dependencies
> npx cypress run


====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    6.8.0                                                                              │
  │ Browser:    Electron 87 (headless)                                                             │
  │ Specs:      1 found (axe.spec.js)                                                              │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  axe.spec.js                                                                     (1 of 1)


  Axe Login test
    1) should be able to test loading of login page


  0 passing (1s)
  1 failing

  1) Axe Login test
       should be able to test loading of login page:
     AssertionError: 6 accessibility violations were detected: expected 6 to equal 0
      at Context.eval (https://www.saucedemo.com/__cypress/tests?p=cypress/support/index.js:37608:20)




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      1                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  1                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     1 second                                                                         │
  │ Spec Ran:     axe.spec.js                                                                      │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /Users/sauce-training/demo-js/testrunner-toolkit/cypress/exa     (1280x720)
     mples/dependencies/cypress/screenshots/axe.spec.js/Axe Login test -- should be a               
     ble to test loading of login page (failed).png                                                 


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: /Users/sauce-training/demo-js/testrunne    (0 seconds)
                          r-toolkit/cypress/examples/dependencies/cypress/videos/axe.               
                          spec.js.mp4                                                               


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✖  axe.spec.js                              00:01        1        -        1        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✖  1 of 1 failed (100%)                     00:01        1        -        1        -        -  
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

> cypress-1@1.0.0 test.docker.sauce /Users/sauce-training/demo-js/testrunner-toolkit/cypress/examples/dependencies
> npx saucectl run --test-env docker

10:39:34 INF Running version 0.33.3
10:39:34 INF Reading config file config=.sauce/config.yml
10:39:34 INF Running Cypress in Docker
10:39:34 INF concurrency > 1: forcing file transfer mode to use 'copy'.
10:39:35 INF Launching workers. concurrency=2
10:39:35 INF Setting up test environment suite="Swag Labs Login Axe Test"
10:39:35 INF Using credentials set by environment variables suite="Swag Labs Login Axe Test"
10:39:35 INF Starting container id=7d0cfcdcd741 img=saucelabs/stt-cypress-mocha-node:v5.8.0 suite="Swag Labs Login Axe Test"
10:39:35 INF File copied from=cypress.json suite="Swag Labs Login Axe Test" to=/home/seluser/
10:39:35 INF File copied from=cypress suite="Swag Labs Login Axe Test" to=/home/seluser/
10:39:45 INF Suites in progress: 1
10:39:55 INF Suites in progress: 1
10:40:05 INF Suites in progress: 1
10:40:06 WRN exitCode is 1 suite="Swag Labs Login Axe Test"
10:40:06 INF Tearing down environment suite="Swag Labs Login Axe Test"
10:40:08 ERR Suite finished. passed=false suite="Swag Labs Login Axe Test" url=https://app.eu-central-1.saucelabs.com/tests/a75bd31870f944a6b7dc6176b20004b2
10:40:08 INF console.log output: 

> sauce-cypress-runner@5.8.0 test /home/seluser
> ./bin/cypress "-r" "/home/seluser/sauce-runner.json" "-s" "Swag Labs Login Axe Test"

Sauce Cypress Runner 5.8.0
Preparing npm environment

Installing packages: axe-core@^4.1.3 cypress-axe@^0.12.2
npm WARN The package typescript is included as both a dev and production dependency.

+ axe-core@4.1.3
+ cypress-axe@0.12.2
added 2 packages from 5 contributors in 10.732s
It looks like this is your first time using Cypress: 5.6.0

[10:39:48]  Verifying Cypress can run /home/seluser/.cache/Cypress/5.6.0/Cypress [started]
[10:39:50]  Verified Cypress!       /home/seluser/.cache/Cypress/5.6.0/Cypress [title changed]
[10:39:50]  Verified Cypress!       /home/seluser/.cache/Cypress/5.6.0/Cypress [completed]

Opening Cypress...
Couldn't find tsconfig.json. tsconfig-paths will be skipped

tput: No value for $TERM and no -T specified
================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    5.6.0                                                                              │
  │ Browser:    Chrome 81                                                                          │
  │ Specs:      1 found (axe.spec.js)                                                              │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  axe.spec.js                                                                     (1 of 1)
- expected:  0
+ actual:  6
  81 |         .then(function (violations) {
  82 |         if (!skipFailures) {
> 83 |             assert.equal(violations.length, 0, violations.length + " accessibility violation" + (violations.length === 1 ? '' : 's') + " " + (violations.length === 1 ? 'was' : 'were') + " detected");
     | ^
  84 |         }
  85 |         else if (violations.length) {
  86 |             Cypress.log({

  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      1                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  1                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     1 second                                                                         │
  │ Spec Ran:     axe.spec.js                                                                      │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /home/seluser/__assets__/axe.spec.js/Axe Login test -- should be able to test lo     (1050x886)
     ading of login page (failed).png                                                               


================================================================================

  (Run Finished)
tput: No value for $TERM and no -T specified


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✖  axe.spec.js                              00:01        1        -        1        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✖  1 of 1 failed (100%)                     00:01        1        -        1        -        -  

Using /home/seluser/__assets__/axe.spec.js.mp4 as the main video.

Open job details page: https://app.eu-central-1.saucelabs.com/tests/a75bd31870f944a6b7dc6176b20004b2

npm ERR! Test failed.  See above for more details.
 suite="Swag Labs Login Axe Test"
10:40:08 ERR ┌────────────────────────────────┐
10:40:08 ERR  1 of 1 suites have failed (100%) 
10:40:08 ERR └────────────────────────────────┘
```
</details>

### Running tests on the Sauce Labs cloud
You can also run Cypress tests on Sauce Labs VM's with the following command:

```bash
npx saucectl run --test-env sauce

# OR for use with the EU data center

npm run test.sauce.eu

# OR for use with the US data center
npm run test.sauce.us
```
It will run all tests on Chrome, Firefox and MicroSoftEdge and the logs will look like this

<details>
 <summary>Click to expand and see the logs.</summary>

```log
╰ npm run test.sauce.eu

> cypress-1@1.0.0 test.sauce.eu /Users/sauce-training/demo-js/testrunner-toolkit/cypress/examples/cross-browser
> DATE=\"$(date)\" npx saucectl run --test-env sauce

10:31:40 INF Running version 0.33.3
10:31:40 INF Reading config file config=.sauce/config.yml
10:31:40 INF Running Cypress in Sauce Labs
10:31:40 INF Project archived. durationMs=4 size=4087
10:31:42 INF Project uploaded. durationMs=1115 storageId=b84ceb53-d5c0-4899-b6dd-a9d7546d336f
10:31:42 INF Launching workers. concurrency=3
10:31:42 INF Starting suite. region=us-west-1 suite="Swag Labs Login Chrome"
10:31:42 INF Starting suite. region=us-west-1 suite="Swag Labs Login MicrosoftEdge"
10:31:42 INF Starting suite. region=us-west-1 suite="Swag Labs Login Firefox"
10:31:44 INF Suite started. suite="Swag Labs Login Chrome" url=https://app.saucelabs.com/tests/4a5a84a3906f48c98f774dd356ad678e
10:31:45 INF Suite started. suite="Swag Labs Login Firefox" url=https://app.saucelabs.com/tests/638c20fc5e874d69bdb2418977e2326a
10:31:48 INF Suite started. suite="Swag Labs Login MicrosoftEdge" url=https://app.saucelabs.com/tests/8765f0bc0eaf40fa80d0c0de555bc1b0
10:31:52 INF Suites in progress: 3
10:32:02 INF Suites in progress: 3
10:32:12 INF Suites in progress: 3
10:32:22 INF Suites in progress: 3
10:32:29 INF Suite finished. passed=true suite="Swag Labs Login Chrome" url=https://app.saucelabs.com/tests/4a5a84a3906f48c98f774dd356ad678e
10:32:31 INF Suite finished. passed=true suite="Swag Labs Login Firefox" url=https://app.saucelabs.com/tests/638c20fc5e874d69bdb2418977e2326a
10:32:32 INF Suites in progress: 1
10:32:33 INF Suite finished. passed=true suite="Swag Labs Login MicrosoftEdge" url=https://app.saucelabs.com/tests/8765f0bc0eaf40fa80d0c0de555bc1b0
10:32:33 INF ┌───────────────────────┐
10:32:33 INF  All suites have passed! 
10:32:33 INF └───────────────────────┘
```
</details>
