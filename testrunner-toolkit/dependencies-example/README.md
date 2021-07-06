# `saucectl` with extra dependencies
> **NOTE 1:**
> 
> `saucectl` can install extra dependencies, see the docs
> [here](https://docs.saucelabs.com/testrunner-toolkit/configuration/index.html#set-npm-packages-in-configyml). The way
> `saucectl` provides the option to install extra dependencies works the same for all supported JavaScript based
> frameworks.

This folder contains a simple set up for Cypress with a test that uses a **dependency**. In this case the 
[cypress-axe](https://github.com/component-driven/cypress-axe/)-library to test accessibility with axe-core.
This can be run locally, in a docker container and on Sauce Labs with the
[Sauce Labs Testrunner Toolkit](https://docs.saucelabs.com/testrunner-toolkit/index.html).

> **NOTE 2:**
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

> **NOTE 3:** The sample AXE test will fail due to accessibility issues

Make sure you follow all steps as mentioned below.

## Install dependencies
- Open a new terminal and clone the main project by using the following command

  `git clone https://github.com/saucelabs-training/demo-js.git`

- From the root of the project, execute

  ```shell
  cd testrunner-toolkit
  cd dependencies-example
  ```

  You are now in this folder.
- Install all dependencies by running the following command in the terminal

  `npm install`

  This will install all dependencies, including the `saucectl`-runner

## Run tests locally
You can run the tests on your local machine, the only thing you need to have is Chrome. If you have it you can run this 
command

    npm run test.local

It will run all tests in *headless*-mode, meaning you will not see a browser starting, but the logs will look like this

<details>
 <summary>Click to expand and see the logs.</summary>

```log
npm run test.local

> cypress-1@1.0.0 test.local
> npx cypress run

It looks like this is your first time using Cypress: 7.6.0

✔  Verified Cypress! /Users/wimselles/Library/Caches/Cypress/7.6.0/Cypress.app

Opening Cypress...

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    7.6.0                                                                              │
  │ Browser:    Electron 89 (headless)                                                             │
  │ Specs:      1 found (axe.spec.js)                                                              │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  axe.spec.js                                                                     (1 of 1)


  Axe Login test
    1) should be able to test loading of login page


  0 passing (2s)
  1 failing

  1) Axe Login test
       should be able to test loading of login page:
     AssertionError: 6 accessibility violations were detected: expected 6 to equal 0
      at Context.eval (https://www.saucedemo.com/__cypress/tests?p=cypress/support/index.js:37605:20)




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      1                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  1                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     2 seconds                                                                        │
  │ Spec Ran:     axe.spec.js                                                                      │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /sauce-training/demo-js/testrunner-toolkit/dependencie    (1920x1080)
     s-example/cypress/screenshots/axe.spec.js/Axe Login test -- should be able to te               
     st loading of login page (failed).png                                                          


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: /sauce-training/demo-js/testrunne     (1 second)
                          r-toolkit/dependencies-example/cypress/videos/axe.spec.js.m               
                          p4                                                                        


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✖  axe.spec.js                              00:02        1        -        1        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✖  1 of 1 failed (100%)                     00:02        1        -        1        -        - 
 ```
</details>

You can also run the test in *headfull*-mode with this command

    npm run test.local.headfull
    
You will then see Chrome popping up.

## Run tests in Sauce
There are two options to run the tests:
1. Through a npm script by opening a terminal and enter

     ```shell
     # For the EU DC
     npm run test.sauce.eu
     
     # For the US DC
     npm run test.sauce.us
     ```

1. Or using the `saucectl`-command and select a configuration. This can be done by opening a terminal and type in the
   following command

   > **Note:** `npx` is used here because `saucectl` is one of the `devDependencies` in this project. When `saucectl`
   > is installed globally (with `npm install -g saucectl`) then you can use `saucectl` without the `npx prefix`
    ```shell
    # For the EU DC
    npx saucectl run
     
    # For the US DC
    npx saucectl run --region us-west-1
    ```

> **NOTE 4:** To see all options that `saucectl` is providing type in `npx saucectl --help`

It will run all tests on Chrome, Firefox and MicroSoftEdge and the logs will look like this

<details>
 <summary>Click to expand and see the logs.</summary>

```log
npm run test.sauce.eu

> cypress-1@1.0.0 test.sauce.eu
> DATE=\"$(date)\" npx saucectl run

Running version 0.52.3
11:58:29 WRN 'rootDir' is not defined. Using the current working directory instead (equivalent to 'rootDir: .'). Please set 'rootDir' explicitly in your config!
11:58:29 INF Running Cypress in Sauce Labs

                                        (.                          
                                       #.                           
                                       #.                           
                           .####################                    
                         #####////////*******/######                
                       .##///////*****************###/              
                      ,###////*********************###              
                      ####//***********************####             
                       ###/************************###              
                        ######********************###. ##           
                           (########################  ##     ##     
                                   ,######(#*         ##*   (##     
                               /############*          #####        
                           (########(  #########(    ###            
                         .#######,    */  ############              
                      ,##########  %#### , ########*                
                    *### .#######/  ##  / ########                  
                   ###   .###########//###########                  
               ######     ########################                  
             (#(    *#(     #######.    (#######                    
                    ##,    /########    ########                    
                           *########    ########                    

   _____        _    _  _____ ______    _____ _      ____  _    _ _____  
  / ____|  /\  | |  | |/ ____|  ____|  / ____| |    / __ \| |  | |  __ \ 
 | (___   /  \ | |  | | |    | |__    | |    | |   | |  | | |  | | |  | |
  \___ \ / /\ \| |  | | |    |  __|   | |    | |   | |  | | |  | | |  | |
  ____) / ____ \ |__| | |____| |____  | |____| |___| |__| | |__| | |__| |
 |_____/_/    \_\____/ \_____|______|  \_____|______\____/ \____/|_____/

11:58:29 INF Project archived. durationMs=6 size=59946
11:58:29 INF Checking if /var/folders/vg/lfm83td92t921fbqjrxrs4ym0000gp/T/saucectl-app-payload879868874/app.zip has already been uploaded previously
11:58:30 INF Project uploaded. durationMs=401 storageId=67151189-af24-4320-b427-ab8673002caa
11:58:30 INF Launching workers. concurrency=2
11:58:30 INF Starting suite. region=eu-central-1 suite="Swag Labs Login Axe Test"
11:58:32 INF Suite started. browser=chrome platform="Windows 10" suite="Swag Labs Login Axe Test" url=https://app.eu-central-1.saucelabs.com/tests/1f994b76f18848799d35e505e5f6e505
11:58:40 INF Suites in progress: 1
11:58:50 INF Suites in progress: 1
11:59:00 INF Suites in progress: 1
11:59:10 INF Suites in progress: 1
11:59:18 ERR Suite finished. passed=false suite="Swag Labs Login Axe Test" url=https://app.eu-central-1.saucelabs.com/tests/1f994b76f18848799d35e505e5f6e505
11:59:18 INF console.log output: 
Sauce Cypress Runner 7.1.1
Preparing npm environment

Installing packages: axe-core@^4.1.3 cypress-axe@^0.12.2
npm WARN read-shrinkwrap This version of npm is compatible with lockfileVersion@1, but package-lock.json was generated for lockfileVersion@2. I'll try to do my best with it!
npm WARN cypress-axe@0.12.2 requires a peer of cypress@^3 || ^4 || ^5 || ^6 but none is installed. You must install peer dependencies yourself.
npm WARN cypress-1@1.0.0 No repository field.

+ axe-core@4.2.3
+ cypress-axe@0.12.2
added 2 packages from 5 contributors in 1.915s

Couldn't determine Mocha version

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    7.3.0                                                                              │
  │ Browser:    Custom Chrome 91                                                                   │
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
6 accessibility violations were detected: expected 6 to equal 0

  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      1                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  1                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     6 seconds                                                                        │
  │ Spec Ran:     axe.spec.js                                                                      │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  c:\chef\payload\__project__\__assets__\axe.spec.js\Axe Login test -- should be a     (1400x933)
     ble to test loading of login page (failed).png                                                 


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ×  axe.spec.js                              00:06        1        -        1        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ×  1 of 1 failed (100%)                     00:06        1        -        1        -        -  

 suite="Swag Labs Login Axe Test"

       Name                                Duration    Status    Browser      Platform    
──────────────────────────────────────────────────────────────────────────────────────────
  ✖    Swag Labs Login Axe Test                 47s    failed    chrome 91    Windows 10  
──────────────────────────────────────────────────────────────────────────────────────────
  ✖    1 of 1 suites have failed (100%)         47s 
```
</details>
