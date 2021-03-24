# Cypress Parallel Tests
This folder will hold a default test setup for Cypress that can tests in parallel Sauce Labs with the
[Sauce Labs Testrunner Toolkit](https://docs.saucelabs.com/testrunner-toolkit/index.html).

> **Note:**
> Setting running parallel tests on the Sauce Labs cloud can be done in the [config.yml](./.sauce/config.yml) by
> adding extra concurrency to your config
> ```yaml
> sauce:
>   region: eu-central-1 # or us-west-1
>   # This is important, increase this number to the amount of Suite you want to run
>   concurrency: 4
> ```
> and add extra suites with for example the same browser, but different tests like this
> ```yaml
> suites:
>   - name: "Swag Labs Login"
>     browser: "chrome"
>     platformName: "Windows 10"
>     screenResolution: "1400x1050"
>     config:
>       testFiles: [ "**/login.*" ]
>   - name: "Swag Labs Rest"
>     browser: "chrome"
>     platformName: "Windows 10"
>     screenResolution: "1400x1050"
>     config:
>       testFiles: [ "**/cart.spec.js","**/menu.spec.js" ]
>   - name: "Swag Labs Swag Items"
>     browser: "chrome"
>     platformName: "Windows 10"
>     screenResolution: "1400x1050"
>     config:
>       testFiles: [ "**/swag.item.*" ]
>   - name: "Swag Labs Checkout"
>     browser: "chrome"
>     platformName: "Windows 10"
>     screenResolution: "1400x1050"
>     config:
>       testFiles: [ "**/checkout.*" ]
> ```

Make sure you follow all steps as mentioned below.

## Local Usage
### Install dependencies
>**Note:** Make sure you are in the `testrunner-toolkit/cypress/examples/cross/parallel-tests`-folder

You can install all dependencies by running the following command

    npm install
    
This will install all needed dependencies that are listed in the `package.json`-file

### Run tests locally
>**Note:** Running in parallel will not work in local execution mode

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

It will provide the following logs:

<details>
 <summary>Click to expand and see the logs.</summary>

```log
╰ npm run test.docker.sauce

> cypress-1@1.0.0 test.docker.sauce /Users/sauce-training/demo-js/testrunner-toolkit/cypress/examples/parallel-tests
> npx saucectl run --test-env docker

11:01:26 INF Running version 0.33.3
11:01:26 INF Reading config file config=.sauce/config.yml
11:01:26 INF Running Cypress in Docker
11:01:26 INF concurrency > 1: forcing file transfer mode to use 'copy'.
11:01:27 INF Launching workers. concurrency=2
11:01:27 INF Setting up test environment suite="Swag Labs Login"
11:01:27 INF Setting up test environment suite="Swag Labs Rest"
11:01:27 INF Using credentials set by environment variables suite="Swag Labs Rest"
11:01:27 INF Using credentials set by environment variables suite="Swag Labs Login"
11:01:27 INF Starting container id=6e627d7eca3f img=saucelabs/stt-cypress-mocha-node:v5.8.0 suite="Swag Labs Login"
11:01:27 INF Starting container id=8524a7151137 img=saucelabs/stt-cypress-mocha-node:v5.8.0 suite="Swag Labs Rest"
11:01:27 INF File copied from=cypress.json suite="Swag Labs Login" to=/home/seluser/
11:01:27 INF File copied from=cypress.json suite="Swag Labs Rest" to=/home/seluser/
11:01:27 INF File copied from=cypress suite="Swag Labs Login" to=/home/seluser/
11:01:27 INF File copied from=cypress suite="Swag Labs Rest" to=/home/seluser/
11:01:37 INF Suites in progress: 4
11:01:47 INF Suites in progress: 4
11:01:47 INF Tearing down environment suite="Swag Labs Login"
11:01:47 INF Tearing down environment suite="Swag Labs Rest"
11:01:49 INF Setting up test environment suite="Swag Labs Swag Items"
11:01:49 INF Suite finished. passed=true suite="Swag Labs Rest" url=https://app.eu-central-1.saucelabs.com/tests/d3106505c3454236a030bc00811d0c33
11:01:49 INF Using credentials set by environment variables suite="Swag Labs Swag Items"
11:01:49 INF Starting container id=86d54318277b img=saucelabs/stt-cypress-mocha-node:v5.8.0 suite="Swag Labs Swag Items"
11:01:49 INF Setting up test environment suite="Swag Labs Checkout"
11:01:49 INF Suite finished. passed=true suite="Swag Labs Login" url=https://app.eu-central-1.saucelabs.com/tests/82489d32ad4f450ea0242454afc7991c
11:01:49 INF Using credentials set by environment variables suite="Swag Labs Checkout"
11:01:49 INF Starting container id=614d017fdae8 img=saucelabs/stt-cypress-mocha-node:v5.8.0 suite="Swag Labs Checkout"
11:01:49 INF File copied from=cypress.json suite="Swag Labs Swag Items" to=/home/seluser/
11:01:49 INF File copied from=cypress suite="Swag Labs Swag Items" to=/home/seluser/
11:01:49 INF File copied from=cypress.json suite="Swag Labs Checkout" to=/home/seluser/
11:01:49 INF File copied from=cypress suite="Swag Labs Checkout" to=/home/seluser/
11:01:57 INF Suites in progress: 2
11:02:07 INF Suites in progress: 2
11:02:17 INF Suites in progress: 2
11:02:19 INF Tearing down environment suite="Swag Labs Checkout"
11:02:19 INF Tearing down environment suite="Swag Labs Swag Items"
11:02:20 INF Suite finished. passed=true suite="Swag Labs Swag Items" url=https://app.eu-central-1.saucelabs.com/tests/d6384547251e40fc9162e6b9c005a4c2
11:02:21 INF Suite finished. passed=true suite="Swag Labs Checkout" url=https://app.eu-central-1.saucelabs.com/tests/080700ce507b4696800e9efe467e7677
11:02:21 INF ┌───────────────────────┐
11:02:21 INF  All suites have passed! 
11:02:21 INF └───────────────────────┘
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

> cypress-1@1.0.0 test.sauce.eu /Users/sauce-training/demo-js/testrunner-toolkit/cypress/examples/parallel-tests
> DATE=\"$(date)\" npx saucectl run --test-env sauce

11:07:58 INF Running version 0.33.3
11:07:58 INF Reading config file config=.sauce/config.yml
11:07:58 INF Running Cypress in Sauce Labs
11:07:58 INF Project archived. durationMs=5 size=12420
11:07:58 INF Project uploaded. durationMs=433 storageId=23980bee-f020-441e-89ff-b4fffc730951
11:07:58 INF Launching workers. concurrency=4
11:07:58 INF Starting suite. region=eu-central-1 suite="Swag Labs Login"
11:07:58 INF Starting suite. region=eu-central-1 suite="Swag Labs Checkout"
11:07:58 INF Starting suite. region=eu-central-1 suite="Swag Labs Swag Items"
11:07:58 INF Starting suite. region=eu-central-1 suite="Swag Labs Rest"
11:08:00 INF Suite started. suite="Swag Labs Rest" url=https://app.eu-central-1.saucelabs.com/tests/6a450bca82b441d6bc5e2ab50900dec8
11:08:01 INF Suite started. suite="Swag Labs Swag Items" url=https://app.eu-central-1.saucelabs.com/tests/354f1b6126494ddaafc797418413b6e9
11:08:01 INF Suite started. suite="Swag Labs Checkout" url=https://app.eu-central-1.saucelabs.com/tests/d616c0f778ef4839bc54b231f4aaf14c
11:08:01 INF Suite started. suite="Swag Labs Login" url=https://app.eu-central-1.saucelabs.com/tests/4a9a5ed235c74934afa481f2ec631374
11:08:08 INF Suites in progress: 4
11:08:18 INF Suites in progress: 4
11:08:28 INF Suites in progress: 4
11:08:38 INF Suites in progress: 4
11:08:45 INF Suite finished. passed=true suite="Swag Labs Rest" url=https://app.eu-central-1.saucelabs.com/tests/6a450bca82b441d6bc5e2ab50900dec8
11:08:46 INF Suite finished. passed=true suite="Swag Labs Login" url=https://app.eu-central-1.saucelabs.com/tests/4a9a5ed235c74934afa481f2ec631374
11:08:48 INF Suites in progress: 2
11:08:58 INF Suites in progress: 2
11:09:01 INF Suite finished. passed=true suite="Swag Labs Swag Items" url=https://app.eu-central-1.saucelabs.com/tests/354f1b6126494ddaafc797418413b6e9
11:09:08 INF Suites in progress: 1
11:09:16 INF Suite finished. passed=true suite="Swag Labs Checkout" url=https://app.eu-central-1.saucelabs.com/tests/d616c0f778ef4839bc54b231f4aaf14c
11:09:16 INF ┌───────────────────────┐
11:09:16 INF  All suites have passed! 
11:09:16 INF └───────────────────────┘
```
</details>
