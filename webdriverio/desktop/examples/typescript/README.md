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
  
You can run your tests on Sauce Labs US DC with this command

    npm run test.saucelabs.us

You can run your tests on Sauce Labs EU DC with this command

    npm run test.saucelabs.eu

Test output will look like this
```
> npm run test.saucelabs.eu

> typescript@1.0.0 test.saucelabs.eu /Users/wimselles/Sauce/Git/sauce-training/demo-js/webdriverio/webdriver/examples/typescript
> REGION=eu wdio wdio.conf.ts


Execution of 1 workers started at 2021-12-20T07:41:51.520Z

2021-12-20T07:41:51.590Z INFO @wdio/cli:launcher: Run onPrepare hook
2021-12-20T07:41:51.592Z INFO @wdio/cli:launcher: Run onWorkerStart hook
2021-12-20T07:41:51.593Z INFO @wdio/local-runner: Start worker 0-0 with arg: wdio.conf.ts
[0-0] 2021-12-20T07:41:51.950Z INFO @wdio/local-runner: Run worker command: run
[0-0] RUNNING in chrome - /test/specs/example.e2e.ts
[0-0] 2021-12-20T07:41:52.423Z INFO webdriver: Initiate new session using the WebDriver protocol
[0-0] 2021-12-20T07:41:52.426Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session
[0-0] 2021-12-20T07:41:52.426Z INFO webdriver: DATA {
[0-0]   capabilities: {
[0-0]     alwaysMatch: { browserName: 'chrome', acceptInsecureCerts: true },
[0-0]     firstMatch: [ {} ]
[0-0]   },
[0-0]   desiredCapabilities: { browserName: 'chrome', acceptInsecureCerts: true }
[0-0] }
[0-0] 2021-12-20T07:41:54.704Z INFO webdriver: COMMAND executeScript("sauce:job-name=My Login application", <object>)
[0-0] 2021-12-20T07:41:54.704Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/255af36c1ea74952ac0506f761237bdb/execute
[0-0] 2021-12-20T07:41:54.704Z INFO webdriver: DATA { script: 'sauce:job-name=My Login application', args: [] }
[0-0] 2021-12-20T07:41:54.753Z INFO webdriver: RESULT 
[0-0] 2021-12-20T07:41:54.755Z INFO webdriver: COMMAND executeScript("sauce:context=My Login application - should login with valid credentials", <object>)
[0-0] 2021-12-20T07:41:54.756Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/255af36c1ea74952ac0506f761237bdb/execute
[0-0] 2021-12-20T07:41:54.756Z INFO webdriver: DATA {
[0-0]   script: 'sauce:context=My Login application - should login with valid credentials',
[0-0]   args: []
[0-0] }
[0-0] 2021-12-20T07:41:54.803Z INFO webdriver: RESULT 
[0-0] 2021-12-20T07:41:54.804Z INFO webdriver: COMMAND navigateTo("https://the-internet.herokuapp.com/login")
[0-0] 2021-12-20T07:41:54.804Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/255af36c1ea74952ac0506f761237bdb/url
[0-0] 2021-12-20T07:41:54.804Z INFO webdriver: DATA { url: 'https://the-internet.herokuapp.com/login' }
[0-0] 2021-12-20T07:41:56.663Z INFO webdriver: COMMAND findElement("css selector", "#username")
[0-0] 2021-12-20T07:41:56.663Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/255af36c1ea74952ac0506f761237bdb/element
[0-0] 2021-12-20T07:41:56.664Z INFO webdriver: DATA { using: 'css selector', value: '#username' }
[0-0] 2021-12-20T07:41:56.719Z INFO webdriver: RESULT { ELEMENT: '0.20990854359548328-1' }
[0-0] 2021-12-20T07:41:56.725Z INFO webdriver: COMMAND elementClear("0.20990854359548328-1")
[0-0] 2021-12-20T07:41:56.726Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/255af36c1ea74952ac0506f761237bdb/element/0.20990854359548328-1/clear
[0-0] 2021-12-20T07:41:56.865Z INFO webdriver: COMMAND elementSendKeys("0.20990854359548328-1", <object>)
[0-0] 2021-12-20T07:41:56.866Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/255af36c1ea74952ac0506f761237bdb/element/0.20990854359548328-1/value
[0-0] 2021-12-20T07:41:56.866Z INFO webdriver: DATA { value: [
[0-0]     't', 'o', 'm',
[0-0]     's', 'm', 'i',
[0-0]     't', 'h'
[0-0]   ] }
[0-0] 2021-12-20T07:41:57.026Z INFO webdriver: COMMAND findElement("css selector", "#password")
[0-0] 2021-12-20T07:41:57.026Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/255af36c1ea74952ac0506f761237bdb/element
[0-0] 2021-12-20T07:41:57.026Z INFO webdriver: DATA { using: 'css selector', value: '#password' }
[0-0] 2021-12-20T07:41:57.081Z INFO webdriver: RESULT { ELEMENT: '0.20990854359548328-3' }
[0-0] 2021-12-20T07:41:57.083Z INFO webdriver: COMMAND elementClear("0.20990854359548328-3")
[0-0] 2021-12-20T07:41:57.083Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/255af36c1ea74952ac0506f761237bdb/element/0.20990854359548328-3/clear
[0-0] 2021-12-20T07:41:57.232Z INFO webdriver: COMMAND elementSendKeys("0.20990854359548328-3", <object>)
[0-0] 2021-12-20T07:41:57.233Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/255af36c1ea74952ac0506f761237bdb/element/0.20990854359548328-3/value
[0-0] 2021-12-20T07:41:57.233Z INFO webdriver: DATA {
[0-0]   value: [
[0-0]     'S', 'u', 'p', 'e', 'r',
[0-0]     'S', 'e', 'c', 'r', 'e',
[0-0]     't', 'P', 'a', 's', 's',
[0-0]     'w', 'o', 'r', 'd', '!'
[0-0]   ]
[0-0] }
[0-0] 2021-12-20T07:41:57.431Z INFO webdriver: COMMAND findElement("css selector", "button[type="submit"]")
[0-0] 2021-12-20T07:41:57.431Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/255af36c1ea74952ac0506f761237bdb/element
[0-0] 2021-12-20T07:41:57.431Z INFO webdriver: DATA { using: 'css selector', value: 'button[type="submit"]' }
[0-0] 2021-12-20T07:41:57.482Z INFO webdriver: RESULT { ELEMENT: '0.20990854359548328-4' }
[0-0] 2021-12-20T07:41:57.485Z INFO webdriver: COMMAND elementClick("0.20990854359548328-4")
[0-0] 2021-12-20T07:41:57.485Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/255af36c1ea74952ac0506f761237bdb/element/0.20990854359548328-4/click
[0-0] 2021-12-20T07:41:57.916Z INFO webdriver: COMMAND findElement("css selector", "#flash")
[0-0] 2021-12-20T07:41:57.917Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/255af36c1ea74952ac0506f761237bdb/element
[0-0] 2021-12-20T07:41:57.917Z INFO webdriver: DATA { using: 'css selector', value: '#flash' }
[0-0] 2021-12-20T07:41:57.965Z INFO webdriver: RESULT { ELEMENT: '0.27886688246513347-1' }
[0-0] 2021-12-20T07:41:57.968Z INFO webdriver: COMMAND findElements("css selector", "#flash")
[0-0] 2021-12-20T07:41:57.968Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/255af36c1ea74952ac0506f761237bdb/elements
[0-0] 2021-12-20T07:41:57.968Z INFO webdriver: DATA { using: 'css selector', value: '#flash' }
[0-0] 2021-12-20T07:41:58.018Z INFO webdriver: RESULT [ { ELEMENT: '0.27886688246513347-1' } ]
[0-0] 2021-12-20T07:41:58.022Z INFO webdriver: COMMAND findElement("css selector", "#flash")
[0-0] 2021-12-20T07:41:58.023Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/255af36c1ea74952ac0506f761237bdb/element
[0-0] 2021-12-20T07:41:58.023Z INFO webdriver: DATA { using: 'css selector', value: '#flash' }
[0-0] 2021-12-20T07:41:58.068Z INFO webdriver: RESULT { ELEMENT: '0.27886688246513347-1' }
[0-0] 2021-12-20T07:41:58.070Z INFO webdriver: COMMAND getElementText("0.27886688246513347-1")
[0-0] 2021-12-20T07:41:58.071Z INFO webdriver: [GET] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/255af36c1ea74952ac0506f761237bdb/element/0.27886688246513347-1/text
[0-0] 2021-12-20T07:41:58.124Z INFO webdriver: RESULT You logged into a secure area!
[0-0] ×
[0-0] 2021-12-20T07:41:58.125Z INFO @wdio/sauce-service: Update job with sessionId 255af36c1ea74952ac0506f761237bdb, status: passing
[0-0] 2021-12-20T07:41:58.221Z INFO webdriver: COMMAND deleteSession()
[0-0] 2021-12-20T07:41:58.221Z INFO webdriver: [DELETE] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/255af36c1ea74952ac0506f761237bdb
[0-0] 2021-12-20T07:41:58.308Z INFO webdriver: RESULT 
[0-0] PASSED in chrome - /test/specs/example.e2e.ts
2021-12-20T07:41:58.428Z INFO @wdio/cli:launcher: Run onComplete hook

 "spec" Reporter:
------------------------------------------------------------------
[chrome 96.0.4664.45 Windows #0-0] Running: chrome (v96.0.4664.45) on Windows
[chrome 96.0.4664.45 Windows #0-0] Session ID: 255af36c1ea74952ac0506f761237bdb
[chrome 96.0.4664.45 Windows #0-0]
[chrome 96.0.4664.45 Windows #0-0] » /test/specs/example.e2e.ts
[chrome 96.0.4664.45 Windows #0-0] My Login application
[chrome 96.0.4664.45 Windows #0-0]    ✓ should login with valid credentials
[chrome 96.0.4664.45 Windows #0-0]
[chrome 96.0.4664.45 Windows #0-0] 1 passing (3.6s)
[chrome 96.0.4664.45 Windows #0-0]
[chrome 96.0.4664.45 Windows #0-0] Check out job at https://app.eu-central-1.saucelabs.com/tests/255af36c1ea74952ac0506f761237bdb?auth=cb3b64aa34d76967c4bab5df451e131a


Spec Files:      1 passed, 1 total (100% completed) in 00:00:06 

2021-12-20T07:41:58.429Z INFO @wdio/local-runner: Shutting down spawned worker
2021-12-20T07:41:58.682Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully
2021-12-20T07:41:58.683Z INFO @wdio/local-runner: shutting down
```
