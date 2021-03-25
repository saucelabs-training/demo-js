# Cypress Examples
This folder contains examples for Cypress which can be run local and with the
[Sauce Labs Testrunner Toolkit](https://docs.saucelabs.com/testrunner-toolkit/index.html).

It is based on the following user journey:

1. A QA/DEV already has Cypress tests which he/she can run on his local machine
1. A QA/DEV wants to use his existing tests together with the Docker infrastructure solution that Sauce Labs offers
1. A QA/DEV wants to run his existing tests on Sauce Labs VMs

## Cypress info
More information about Cypress and writing Cypress tests can be found 
[here](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)

## Sauce Labs Testrunner toolkit info
More information about the Sauce Labs Testrunner Toolkit can be found 
[here](https://docs.saucelabs.com/testrunner-toolkit/index.html)

## Examples:
- [Cypress and a default test set](./default). This folder will hold a default test setup for Cypress with multiple test 
  files. This can be executed locally, in a docker container or on Sauce Labs.
- [Cypress and Cross Browser Testing on Sauce Labs](./cross-browser). This folder will hold a default test setup for 
  Cypress that can run Cross Browser Tess on Sauce Labs.
- [Cypress and using extra dependencies](./dependencies). This folder contains a simple set up for Cypress with a test 
  that uses a dependency. This can be executed locally, in a docker container or on Sauce Labs.
- [Cypress and testing in parallel](./parallel-tests). This folder will hold a default test setup for Cypress that can 
  tests in parallel Sauce Labs.

## Coming soon!!
### Cypress and Sauce Connect. 
**This will follow soon. For examples on how to configure it, please check 
[Testrunner Toolkit Using Sauce Connect](https://docs.saucelabs.com/testrunner-toolkit/running-tests#using-sauce-connect)**
