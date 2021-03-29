# Webdriver IO w/ TS example

This is just a simple and working example using WebdriverIO with TypeScript.
The example is to demonstrate working test code in Sauce Labs.
Once you get this solution running, it's highly recommended to follow 
[best practices](../../../webdriver/best-practices/README.md)
to continue to build out your framework.

## Getting setup with wdio from scratch

* Follow [setup instructions](https://webdriver.io/docs/gettingstarted)
  * Be sure to select TypeScript as an option from the setup menu in the console

## Clone repo and run tests

You can also simply 
* clone this repository
* `cd webdriver/web/examples/typescript`
* `npm install`
* `npm run test`

Test output will look like this
```
> typescript@1.0.0 test
> wdio run ./wdio.conf.js
Execution of 1 spec files started at 2021-03-16T15:55:01.153Z
2021-03-16T15:55:01.208Z INFO @wdio/cli:launcher: Run onPrepare hook
2021-03-16T15:55:01.210Z INFO @wdio/cli:launcher: Run onWorkerStart hook
2021-03-16T15:55:01.211Z INFO @wdio/local-runner: Start worker 0-0 with arg: run,./wdio.conf.js
[0-0] 2021-03-16T15:55:01.629Z INFO @wdio/local-runner: Run worker command: run
[0-0] RUNNING in chrome - /test/specs/example.e2e.ts
[0-0] 2021-03-16T15:55:02.010Z INFO webdriver: Initiate new session using the WebDriver protocol
[0-0] 2021-03-16T15:55:02.011Z INFO webdriver: [POST] https://ondemand.us-west-1.saucelabs.com/wd/hub/session
[0-0] 2021-03-16T15:55:02.011Z INFO webdriver: DATA {
  capabilities: {
    alwaysMatch: { browserName: 'chrome', acceptInsecureCerts: true },
    firstMatch: [ {} ]
  },
  desiredCapabilities: { browserName: 'chrome', acceptInsecureCerts: true }
}
```