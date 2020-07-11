# saucectl
This folder contains simple examples of using Saucectl

## Install dependencies

Follow instructions from [here](https://github.com/saucelabs/testrunner-toolkit)

> NOTE: Make sure you are in the folder `testrunner-toolkit/examples` when you execute this command

## Run tests in Sauce

    saucectl run

It will run all tests and the logs will look like this

```log
saucectl run

> sauce-playwright-runner@0.0.0 test /home/seluser
> DISPLAY="$(cat DISPLAY)" DEBUG="playwright:*" jest --config=./.config/jest.config.js --runInBand

Setting test timeout to 60sec

PASS tests/specs/swag.items.list.spec.js (7.547s)
Setting test timeout to 60sec

PASS tests/specs/swag.item.details.spec.js (5.885s)
Setting test timeout to 60sec

PASS tests/specs/cart.summary.spec.js
Setting test timeout to 60sec

PASS tests/specs/checkout.personal.info.spec.js (8.029s)
Setting test timeout to 60sec

PASS tests/specs/menu.spec.js (8.652s)
Setting test timeout to 60sec

PASS tests/specs/checkout.summary.spec.js
Setting test timeout to 60sec

PASS tests/specs/login.spec.js (5.06s)
Setting test timeout to 60sec

PASS tests/specs/checkout.complete.spec.js

Test Suites: 8 passed, 8 total
Tests:       25 passed, 25 total
Snapshots:   0 total
Time:        49.838s
Ran all test suites.

Open job details page: https://app.eu-central-1.saucelabs.com/tests/773b6c6d0e8d4bc7a4cba2def2b10903
```
