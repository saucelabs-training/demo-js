# Cypress
This folder contains a simple set up for Cypress which can be run with the Sauce Labs Testrunner Toolkit

## Sauce Labs Testrunner Toolkit
### Install dependencies

Follow instructions from [here](https://github.com/saucelabs/testrunner-toolkit)

> NOTE: Make sure you are in the folder `testrunner-toolkit/cypress` when you execute this command

### Run tests in Sauce

    saucectl run

It will run all tests and the logs will look like this

```log
saucectl run

> sauce-cypress-runner@1.0.0 test /home/seluser
> ./bin/cypress

It looks like this is your first time using Cypress: 4.9.0

[07:36:42]  Verifying Cypress can run /home/seluser/.cache/Cypress/4.9.0/Cypress [started]
[07:36:45]  Verified Cypress!       /home/seluser/.cache/Cypress/4.9.0/Cypress [title changed]
[07:36:45]  Verified Cypress!       /home/seluser/.cache/Cypress/4.9.0/Cypress [completed]

Opening Cypress...
Couldn't determine Mocha version

tput: No value for $TERM and no -T specified
================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    4.9.0                                                                              │
  │ Browser:    Chrome 81                                                                          │
  │ Specs:      1 found (cypress.spec.js)                                                          │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  cypress.spec.js                                                                 (1 of 1)

  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        5                                                                                │
  │ Passing:      5                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     5 seconds                                                                        │
  │ Spec Ran:     cypress.spec.js                                                                  │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


tput: No value for $TERM and no -T specified
================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  cypress.spec.js                          00:05        5        5        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:05        5        5        -        -        -  

Preparing assets for cypress.spec.js

Open job details page: https://app.saucelabs.com/tests/a88a87a1cdbb40fda22d38f2675bed88
```

### Browser support
We support Chrome by default, but if you want to run on Firefox please add the following to the [config](./.sauce/config.yml)

```yaml
capabilities:
  - browserName: firefox
```
