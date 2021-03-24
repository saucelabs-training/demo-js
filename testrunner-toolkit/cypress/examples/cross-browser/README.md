# Cypress Cross Browser Tests
This folder contains a simple set up for Cypress for Cross Browser Testing and run them on Sauce Labs with the
[Sauce Labs Testrunner Toolkit](https://docs.saucelabs.com/testrunner-toolkit/index.html).

> **Note:**
> Setting running Cross Browser tests on the Sauce Labs cloud can be done in the [config.yml](./.sauce/config.yml) by
> adding extra suites with extra browsers like this
> ```yaml
> suites:
>   # Chrome
>   - name: "Swag Labs Login Chrome"
>     browser: "chrome"
>     platformName: "Windows 10"
>     screenResolution: "1400x1050"
>     config:
>       testFiles: [ "**/login.*" ]
> # Firefox
>   - name: "Swag Labs Login Firefox"
>     browser: "firefox"
>     platformName: "Windows 10"
>     screenResolution: "1400x1050"
>     config:
>       testFiles: [ "**/login.*" ]
> ```

Make sure you follow all steps as mentioned below.

## Local Usage
### Install dependencies
>**Note:** Make sure you are in the `testrunner-toolkit/cypress/examples/cross/browser`-folder
> 
You can install all dependencies by running the following command

    npm install
    
This will install all needed dependencies that are listed in the `package.json`-file

### Run tests locally
You can run the tests on your local machine, the only thing you need to have is Chrome. If you have it you can run this 
command

    npm run test.local

It will run all tests in *headless*-mode, meaning you will not see a browser starting.

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

It will run all tests on Chrome and Firefox, but will fail on MicroSoft Edge because that one is not provided in 
the docker containers.

<details>
 <summary>Click to expand and see the logs.</summary>

```log
╰ npm run test.docker.sauce

> cypress-1@1.0.0 test.docker.sauce /Users/sauce-training/demo-js/testrunner-toolkit/cypress/examples/cross-browser
> npx saucectl run --test-env docker

10:26:04 INF Running version 0.33.3
10:26:04 INF Reading config file config=.sauce/config.yml
10:26:04 INF Running Cypress in Docker
10:26:04 INF concurrency > 1: forcing file transfer mode to use 'copy'.
10:26:05 INF Launching workers. concurrency=3
10:26:05 INF Setting up test environment suite="Swag Labs Login Firefox"
10:26:05 INF Setting up test environment suite="Swag Labs Login MicrosoftEdge"
10:26:05 INF Setting up test environment suite="Swag Labs Login Chrome"
10:26:05 INF Using credentials set by environment variables suite="Swag Labs Login Chrome"
10:26:05 INF Using credentials set by environment variables suite="Swag Labs Login MicrosoftEdge"
10:26:05 INF Using credentials set by environment variables suite="Swag Labs Login Firefox"
10:26:05 INF Starting container id=2285b91d796c img=saucelabs/stt-cypress-mocha-node:v5.8.0 suite="Swag Labs Login MicrosoftEdge"
10:26:05 INF Starting container id=7d65ad19d55e img=saucelabs/stt-cypress-mocha-node:v5.8.0 suite="Swag Labs Login Firefox"
10:26:05 INF Starting container id=8bff1499746b img=saucelabs/stt-cypress-mocha-node:v5.8.0 suite="Swag Labs Login Chrome"
10:26:05 INF File copied from=cypress.json suite="Swag Labs Login MicrosoftEdge" to=/home/seluser/
10:26:05 INF File copied from=cypress.json suite="Swag Labs Login Chrome" to=/home/seluser/
10:26:05 INF File copied from=cypress.json suite="Swag Labs Login Firefox" to=/home/seluser/
10:26:05 INF File copied from=cypress suite="Swag Labs Login MicrosoftEdge" to=/home/seluser/
10:26:05 INF File copied from=cypress suite="Swag Labs Login Firefox" to=/home/seluser/
10:26:05 INF File copied from=cypress suite="Swag Labs Login Chrome" to=/home/seluser/
10:26:15 INF Suites in progress: 3
10:26:18 WRN exitCode is 1 suite="Swag Labs Login MicrosoftEdge"
10:26:19 INF Tearing down environment suite="Swag Labs Login MicrosoftEdge"
10:26:21 ERR Suite finished. passed=false suite="Swag Labs Login MicrosoftEdge" url=https://app.saucelabs.com/tests/b8f4debdf9374e15bfc33e0b3b3fc592
10:26:21 INF console.log output: 

> sauce-cypress-runner@5.8.0 test /home/seluser
> ./bin/cypress "-r" "/home/seluser/sauce-runner.json" "-s" "Swag Labs Login MicrosoftEdge"

Sauce Cypress Runner 5.8.0
It looks like this is your first time using Cypress: 5.6.0

[10:26:07]  Verifying Cypress can run /home/seluser/.cache/Cypress/5.6.0/Cypress [started]
[10:26:10]  Verified Cypress!       /home/seluser/.cache/Cypress/5.6.0/Cypress [title changed]
[10:26:10]  Verified Cypress!       /home/seluser/.cache/Cypress/5.6.0/Cypress [completed]

Opening Cypress...
Couldn't find tsconfig.json. tsconfig-paths will be skipped
Can't run because you've entered an invalid browser name.

Browser: 'microsoftedge' was not found on your system or is not supported by Cypress.

Cypress supports the following browsers:
- chrome
- chromium
- edge
- electron
- firefox

You can also use a custom browser: https://on.cypress.io/customize-browsers

Available browsers found on your system are:
- chrome
- firefox
- electron

Open job details page: https://app.saucelabs.com/tests/b8f4debdf9374e15bfc33e0b3b3fc592

npm ERR! Test failed.  See above for more details.
 suite="Swag Labs Login MicrosoftEdge"
10:26:25 INF Suites in progress: 2
10:26:32 INF Tearing down environment suite="Swag Labs Login Chrome"
10:26:34 INF Suite finished. passed=true suite="Swag Labs Login Chrome" url=https://app.saucelabs.com/tests/1a5cf3285ba744b8ac6cb999ff0a5006
10:26:35 INF Suites in progress: 1
10:26:45 INF Suites in progress: 1
10:26:46 INF Tearing down environment suite="Swag Labs Login Firefox"
10:26:48 INF Suite finished. passed=true suite="Swag Labs Login Firefox" url=https://app.saucelabs.com/tests/59e960e0d7f941098fb147d90317e5a3
10:26:48 ERR ┌───────────────────────────────┐
10:26:48 ERR  1 of 3 suites have failed (33%) 
10:26:48 ERR └───────────────────────────────┘
```
</details>

The tests will be executed in a Docker container, but the results will be pushed to Sauce Labs.

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

> cypress-1@1.0.0 test.sauce.eu /Users/sauce-training/demo-js/testrunner-toolkit/cypress/examples/dependencies
> DATE=\"$(date)\" npx saucectl run --test-env sauce

10:41:21 INF Running version 0.33.3
10:41:21 INF Reading config file config=.sauce/config.yml
10:41:21 INF Running Cypress in Sauce Labs
10:41:21 INF Project archived. durationMs=2 size=3205
10:41:21 INF Project uploaded. durationMs=388 storageId=27b844ef-1ce3-4941-b2bb-499767954955
10:41:21 INF Launching workers. concurrency=2
10:41:21 INF Starting suite. region=eu-central-1 suite="Swag Labs Login Axe Test"
10:41:23 INF Suite started. suite="Swag Labs Login Axe Test" url=https://app.eu-central-1.saucelabs.com/tests/c118896d36f94f3d927d8666192eebf5
10:41:31 INF Suites in progress: 1
10:41:41 INF Suites in progress: 1
10:41:51 INF Suites in progress: 1
10:42:01 INF Suites in progress: 1
10:42:08 ERR Suite finished. passed=false suite="Swag Labs Login Axe Test" url=https://app.eu-central-1.saucelabs.com/tests/c118896d36f94f3d927d8666192eebf5
10:42:08 INF console.log output: 
Sauce Cypress Runner 5.7.0
Running npm install on install, --no-save, axe-core@^4.1.3, cypress-axe@^0.12.2
npm WARN enoent ENOENT: no such file or directory, open 'c:\chef\payload\__project__\package.json'
npm WARN cypress-axe@0.12.2 requires a peer of cypress@^3 || ^4 || ^5 || ^6 but none is installed. You must install peer dependencies yourself.
npm WARN __project__ No description
npm WARN __project__ No repository field.
npm WARN __project__ No README data
npm WARN __project__ No license field.

+ axe-core@4.1.3
+ cypress-axe@0.12.2
added 2 packages from 5 contributors in 1.424s
found 0 vulnerabilities


Couldn't determine Mocha version

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    5.6.0                                                                              │
  │ Browser:    Custom Chrome 89                                                                   │
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
  │ Video:        false                                                                            │
  │ Duration:     4 seconds                                                                        │
  │ Spec Ran:     axe.spec.js                                                                      │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  c:\chef\payload\__project__\__assets__\axe.spec.js\Axe Login test -- should be a     (1400x933)
     ble to test loading of login page (failed).png                                                 


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ×  axe.spec.js                              00:04        1        -        1        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ×  1 of 1 failed (100%)                     00:04        1        -        1        -        -  

 suite="Swag Labs Login Axe Test"
10:42:08 ERR ┌────────────────────────────────┐
10:42:08 ERR  1 of 1 suites have failed (100%) 
10:42:08 ERR └────────────────────────────────┘
```
</details>
