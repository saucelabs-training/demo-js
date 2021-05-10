# Best Practices for Web Testing

This repository was carefully created by the Solutions Architects at Sauce Labs using their decades of testing experience.

A good testing strategy doesn't only focus on web testing. Instead, it tackles risks at all levels of the system.

In this repository, you will find a cohesive Greybox (we have some insight into the app code) testing strategy using:

✅ Browser testing on desktop

✅ Browser testing on mobile

✅ Visual testing

✅ Front-end performance testing

✅ CICD pipeline executed on push and PR

✅ Sauce Labs cloud

## Test Strategy

| Expected Behavior  | Tested? | Test Type  | Rationale  | Tech |
|---|---|---|---|---|
| Application renders  | ✅ | Functional UI | A functional browser test checks that the app is okay | WebdriverIO |
| Every web page of the app renders successfully on desktop | ✅ | Visual test | A visual test efficiently validates app rendering | WebdriverIO, Screener.io |
| Every web page of the app renders successfully on mobile  | ✅ | Visual test on real mobile devices | A visual test efficiently validates app rendering | WebdriverIO, Screener.io |
| A user can successfully check out  | ✅ | Functional web test  | A web test is a good way to check functionality  | WebdriverIO |
| Front-end performance is at least an A  | ✅ | Front-end performance test  | Front-end perf is an important aspect of any digital quality effort | WebdriverIO, Sauce Labs |
| Test code runs on every commit in under 5 minutes  | ✅ | CICD  | Slow feedback makes it hard to iterate  | Github Actions |
| App is secure  | 🙅‍♂️ | Not covered here, but something to consider for testing strategy  |   |
| App is accessibility friendly  | 🙅‍♂️ | Not covered here, but something to consider for testing strategy |   |

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