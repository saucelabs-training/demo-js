# Cypress Cross Browser Tests
This folder contains a simple set up for Cypress with a test that uses a dependency. In this case the 
[cypress-axe](https://github.com/component-driven/cypress-axe/)-library to test accessibility with axe-core.
This can can be run locally, in a docker container and on Sauce Labs with the
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

    npx saucectl run
    
    # OR
    npm run test.docker.sauce

It will run all tests on Chrome and Firefox.

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
The logs will print out a link to the execution, or log in to Sauce Labs to see the results.
