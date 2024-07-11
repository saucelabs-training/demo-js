# WebdriverIO Native App Appium Flutter Integration Driver

This folder contains an example on how to run Flutter tests with Appium, the [`appium-flutter-integration-driver`](https://github.com/AppiumTestDistribution/appium-flutter-integration-driver) and WebdriverIO.

> **NOTE:** The demo apps, which can be found [here](https://github.com/saucelabs/my-demo-app-flutter/releases/tag/v1.0.0), have been build with Flutter 3, which needs Appium 2 to run. 
If you want to run the tests with Appium 1, you need to have a demo app that has been build with Flutter 2.\
> We assume you are familiar with creating and building Flutter apps. If not, please check out the [Flutter Android](https://docs.flutter.dev/deployment/android) or [Flutter iOS](https://docs.flutter.dev/deployment/ios) documentation.

## Install dependencies

You can install all dependencies by running the following command

    npm install

This will install all needed dependencies that are listed in the `package.json`-file

> NOTE: Make sure you are in the folder `webdriverio/appium-app/examples/appium-flutter-integration` when you execute this command

## Download 

The apps can be found [here](https://github.com/saucelabs/my-demo-app-flutter/releases/tag/v1.0.0).
- To download the demo app for Android please click [here](https://github.com/saucelabs/my-demo-app-flutter/releases/download/v1.0.0/sl_my_demo_flutter_app.apk).
- To download the demo app for iOs please click [here](https://github.com/saucelabs/my-demo-app-flutter/releases/download/v1.0.0/sl_my_demo_flutter_app.ipa).

## Upload Apps

The apps downloaded in the previous step. You need to manually upload them to the preferred Data Center, see [this](https://docs.saucelabs.com/mobile-apps/live-testing/live-mobile-app-testing/#uploading-an-app) for the instructions.

## Tests

The tests can be found [here](./test/specs/flutter.spec.js). Be aware of the fact that the syntax for the [`appium-flutter-integration-driver`](https://github.com/AppiumTestDistribution/appium-flutter-integration-driver) is different to the one you are used to for native Android/iOS testing. For more information, please check out the [`appium-flutter-integration-driver`](https://github.com/AppiumTestDistribution/appium-flutter-integration-driver).

> **NOTE:** Make sure you have read the [`appium-flutter-integration-driver`](https://github.com/AppiumTestDistribution/appium-flutter-integration-driver) documentation before you start writing tests.

## Run tests on Sauce Labs

To run the test on Sauce Labs, execute the following commands to make it work

| **REGION** | **OS**  | **App**                    | **Driver**                 | **Command**                                |
|------------|---------|----------------------------|----------------------------|--------------------------------------------|
| US         | Android | sl_my_demo_flutter_app.apk | Flutter Integration Driver | `npm run android.flutter.sauce.rdc.app.us` |
| US         | iOS     | sl_my_demo_flutter_app.ipa | Flutter Integration Driver | `npm run ios.flutter.sauce.rdc.app.us`     |
| EU         | Android | sl_my_demo_flutter_app.apk | Flutter Integration Driver | `npm run android.flutter.sauce.rdc.app.eu` |
| EU         | iOS     | sl_my_demo_flutter_app.ipa | Flutter Integration Driver | `npm run ios.flutter.sauce.rdc.app.eu`     |


<details>
    <summary>Click to expand and see logs from running this on Sauce Labs for Android Real Devices</summary>

```logs
npm run android.flutter.sauce.rdc.app.eu

> appium-flutter-integration-webdriverio-tests@0.1.0 android.flutter.sauce.rdc.app.eu
> REGION=eu wdio run test/configs/android.sauce.conf.ts


Execution of 1 workers started at 2024-07-09T15:02:03.265Z

2024-07-09T15:02:03.294Z DEBUG @wdio/utils:initializeServices: initialize service "flutter-by" as NPM package
2024-07-09T15:02:03.303Z DEBUG @wdio/utils:initializeServices: initialize service "sauce" as NPM package
2024-07-09T15:02:03.599Z INFO @wdio/cli:launcher: Run onPrepare hook
2024-07-09T15:02:03.599Z DEBUG @wdio/cli:utils: Finished to run "onPrepare" hook in 0ms
2024-07-09T15:02:03.600Z INFO @wdio/cli:launcher: Run onWorkerStart hook
2024-07-09T15:02:03.600Z DEBUG @wdio/cli:utils: Finished to run "onWorkerStart" hook in 0ms
2024-07-09T15:02:03.601Z INFO @wdio/local-runner: Start worker 0-0 with arg: run,test/configs/android.sauce.conf.ts
2024-07-09T15:02:03.603Z DEBUG @wdio/local-runner: Send command run to worker with cid "0-0"
[0-0] 2024-07-09T15:02:05.345Z INFO @wdio/local-runner: Run worker command: run
[0-0] 2024-07-09T15:02:05.390Z DEBUG @wdio/runner: init remote session
[0-0] 2024-07-09T15:02:05.392Z DEBUG @wdio/utils:initializeServices: initialize service "flutter-by" as NPM package
[0-0] 2024-07-09T15:02:05.416Z DEBUG @wdio/utils:initializeServices: initialize service "sauce" as NPM package
[0-0] 2024-07-09T15:02:05.665Z DEBUG @wdio/utils:shim: Finished to run "beforeSession" hook in 0ms
[0-0] RUNNING in Android - file:///test/specs/flutter.spec.ts
[0-0] 2024-07-09T15:02:05.922Z DEBUG @wdio/runner: init remote session
[0-0] 2024-07-09T15:02:05.922Z INFO webdriver: Initiate new session using the WebDriver protocol
[0-0] 2024-07-09T15:02:05.922Z INFO @wdio/utils: Connecting to existing driver at https://ondemand.eu-central-1.saucelabs.com:443/wd/hub
[0-0] 2024-07-09T15:02:06.078Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session
[0-0] 2024-07-09T15:02:06.078Z INFO webdriver: DATA {
[0-0]   capabilities: {
[0-0]     alwaysMatch: {
[0-0]       platformName: 'Android',
[0-0]       'appium:deviceName': 'Google Pixel.*',
[0-0]       'appium:automationName': 'FlutterIntegration',
[0-0]       'appium:app': 'storage:filename=sl_my_demo_flutter_app.apk',
[0-0]       'appium:newCommandTimeout': 240,
[0-0]       'sauce:options': [Object]
[0-0]     },
[0-0]     firstMatch: [ {} ]
[0-0]   },
[0-0]   desiredCapabilities: {
[0-0]     platformName: 'Android',
[0-0]     'appium:deviceName': 'Google Pixel.*',
[0-0]     'appium:automationName': 'FlutterIntegration',
[0-0]     'appium:app': 'storage:filename=sl_my_demo_flutter_app.apk',
[0-0]     'appium:newCommandTimeout': 240,
[0-0]     'sauce:options': {
[0-0]       name: '1st AppiumFlutterIntegrationDriver test using appium latest',
[0-0]       appiumVersion: 'latest'
[0-0]     }
[0-0]   }
[0-0] }
[0-0] 2024-07-09T15:03:01.667Z DEBUG @wdio/utils:shim: Finished to run "before" hook in 0ms
[0-0] 2024-07-09T15:03:01.670Z INFO webdriver: COMMAND executeScript("sauce:job-name=1st AppiumFlutterIntegrationDriver test using appium latest", <object>)
[0-0] 2024-07-09T15:03:01.670Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/c71d81b3-6d4b-4e36-b7c2-d6a87ea79fff/execute/sync
[0-0] 2024-07-09T15:03:01.671Z INFO webdriver: DATA {
[0-0]   script: 'sauce:job-name=1st AppiumFlutterIntegrationDriver test using appium latest',
[0-0]   args: []
[0-0] }
[0-0] 2024-07-09T15:03:01.716Z INFO webdriver: RESULT null
[0-0] 2024-07-09T15:03:01.716Z DEBUG @wdio/utils:shim: Finished to run "beforeSuite" hook in 47ms
[0-0] 2024-07-09T15:03:01.718Z INFO webdriver: COMMAND executeScript("sauce:context=1st AppiumFlutterIntegrationDriver test using appium latest - Flutter counter demo app", <object>)
[0-0] 2024-07-09T15:03:01.719Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/c71d81b3-6d4b-4e36-b7c2-d6a87ea79fff/execute/sync
[0-0] 2024-07-09T15:03:01.719Z INFO webdriver: DATA {
[0-0]   script: 'sauce:context=1st AppiumFlutterIntegrationDriver test using appium latest - Flutter counter demo app',
[0-0]   args: []
[0-0] }
[0-0] 2024-07-09T15:03:01.784Z INFO webdriver: RESULT 1st AppiumFlutterIntegrationDriver test using appium latest - Flutter counter demo app
[0-0] 2024-07-09T15:03:01.784Z DEBUG @wdio/utils:shim: Finished to run "beforeTest" hook in 67ms
[0-0] 2024-07-09T15:03:01.784Z INFO webdriver: COMMAND flutterByValueKey$("counterView_increment_floatingActionButton")
[0-0] 2024-07-09T15:03:01.784Z INFO webdriver: COMMAND flutterByValueKey("key", "counterView_increment_floatingActionButton")
[0-0] 2024-07-09T15:03:01.785Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/c71d81b3-6d4b-4e36-b7c2-d6a87ea79fff/element
[0-0] 2024-07-09T15:03:01.785Z INFO webdriver: DATA { using: 'key', value: 'counterView_increment_floatingActionButton' }
[0-0] 2024-07-09T15:03:02.212Z INFO webdriver: RESULT {
[0-0]   'element-6066-11e4-a52e-4f735466cecf': '920dcec9-20dc-ec92-0dce-c920dcec920d',
[0-0]   ELEMENT: '920dcec9-20dc-ec92-0dce-c920dcec920d'
[0-0] }
[0-0] 2024-07-09T15:03:02.218Z INFO webdriver: RESULT WebdriverIO.Element<920dcec9-20dc-ec92-0dce-c920dcec920d>
[0-0] 2024-07-09T15:03:02.218Z INFO webdriver: COMMAND elementClick("920dcec9-20dc-ec92-0dce-c920dcec920d")
[0-0] 2024-07-09T15:03:02.219Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/c71d81b3-6d4b-4e36-b7c2-d6a87ea79fff/element/920dcec9-20dc-ec92-0dce-c920dcec920d/click
[0-0] 2024-07-09T15:03:02.840Z INFO webdriver: RESULT null
[0-0] 2024-07-09T15:03:02.841Z INFO webdriver: COMMAND elementClick("920dcec9-20dc-ec92-0dce-c920dcec920d")
[0-0] 2024-07-09T15:03:02.842Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/c71d81b3-6d4b-4e36-b7c2-d6a87ea79fff/element/920dcec9-20dc-ec92-0dce-c920dcec920d/click
[0-0] 2024-07-09T15:03:03.221Z INFO webdriver: RESULT null
[0-0] 2024-07-09T15:03:03.221Z INFO webdriver: COMMAND elementClick("920dcec9-20dc-ec92-0dce-c920dcec920d")
[0-0] 2024-07-09T15:03:03.223Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/c71d81b3-6d4b-4e36-b7c2-d6a87ea79fff/element/920dcec9-20dc-ec92-0dce-c920dcec920d/click
[0-0] 2024-07-09T15:03:03.559Z INFO webdriver: RESULT null
[0-0] 2024-07-09T15:03:03.560Z INFO webdriver: COMMAND elementClick("920dcec9-20dc-ec92-0dce-c920dcec920d")
[0-0] 2024-07-09T15:03:03.560Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/c71d81b3-6d4b-4e36-b7c2-d6a87ea79fff/element/920dcec9-20dc-ec92-0dce-c920dcec920d/click
[0-0] 2024-07-09T15:03:03.900Z INFO webdriver: RESULT null
[0-0] 2024-07-09T15:03:03.901Z INFO webdriver: COMMAND elementClick("920dcec9-20dc-ec92-0dce-c920dcec920d")
[0-0] 2024-07-09T15:03:03.902Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/c71d81b3-6d4b-4e36-b7c2-d6a87ea79fff/element/920dcec9-20dc-ec92-0dce-c920dcec920d/click
[0-0] 2024-07-09T15:03:04.241Z INFO webdriver: RESULT null
[0-0] 2024-07-09T15:03:04.241Z INFO webdriver: COMMAND flutterByValueKey$("counterView_decrement_floatingActionButton")
[0-0] 2024-07-09T15:03:04.243Z INFO webdriver: COMMAND flutterByValueKey("key", "counterView_decrement_floatingActionButton")
[0-0] 2024-07-09T15:03:04.243Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/c71d81b3-6d4b-4e36-b7c2-d6a87ea79fff/element
[0-0] 2024-07-09T15:03:04.243Z INFO webdriver: DATA { using: 'key', value: 'counterView_decrement_floatingActionButton' }
[0-0] 2024-07-09T15:03:04.691Z INFO webdriver: RESULT {
[0-0]   'element-6066-11e4-a52e-4f735466cecf': '2d4983f0-2d49-83f0-2d49-83f02d4983f0',
[0-0]   ELEMENT: '2d4983f0-2d49-83f0-2d49-83f02d4983f0'
[0-0] }
[0-0] 2024-07-09T15:03:04.695Z INFO webdriver: RESULT WebdriverIO.Element<2d4983f0-2d49-83f0-2d49-83f02d4983f0>
[0-0] 2024-07-09T15:03:04.695Z INFO webdriver: COMMAND elementClick("2d4983f0-2d49-83f0-2d49-83f02d4983f0")
[0-0] 2024-07-09T15:03:04.695Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/c71d81b3-6d4b-4e36-b7c2-d6a87ea79fff/element/2d4983f0-2d49-83f0-2d49-83f02d4983f0/click
[0-0] 2024-07-09T15:03:05.034Z INFO webdriver: RESULT null
[0-0] 2024-07-09T15:03:05.035Z INFO webdriver: COMMAND elementClick("2d4983f0-2d49-83f0-2d49-83f02d4983f0")
[0-0] 2024-07-09T15:03:05.036Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/c71d81b3-6d4b-4e36-b7c2-d6a87ea79fff/element/2d4983f0-2d49-83f0-2d49-83f02d4983f0/click
[0-0] 2024-07-09T15:03:05.375Z INFO webdriver: RESULT null
[0-0] 2024-07-09T15:03:05.376Z INFO webdriver: COMMAND elementClick("2d4983f0-2d49-83f0-2d49-83f02d4983f0")
[0-0] 2024-07-09T15:03:05.376Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/c71d81b3-6d4b-4e36-b7c2-d6a87ea79fff/element/2d4983f0-2d49-83f0-2d49-83f02d4983f0/click
[0-0] 2024-07-09T15:03:05.702Z INFO webdriver: RESULT null
[0-0] 2024-07-09T15:03:05.702Z INFO webdriver: COMMAND flutterByText$("2")
[0-0] 2024-07-09T15:03:05.703Z INFO webdriver: COMMAND flutterByText("<Screenshot[base64]>", "2")
[0-0] 2024-07-09T15:03:05.703Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/c71d81b3-6d4b-4e36-b7c2-d6a87ea79fff/element
[0-0] 2024-07-09T15:03:05.703Z INFO webdriver: DATA { using: 'text', value: '2' }
[0-0] 2024-07-09T15:03:06.176Z INFO webdriver: RESULT {
[0-0]   'element-6066-11e4-a52e-4f735466cecf': '3bea3693-bea3-693b-ea36-93bea3693bea',
[0-0]   ELEMENT: '3bea3693-bea3-693b-ea36-93bea3693bea'
[0-0] }
[0-0] 2024-07-09T15:03:06.178Z INFO webdriver: RESULT WebdriverIO.Element<3bea3693-bea3-693b-ea36-93bea3693bea>
[0-0] 2024-07-09T15:03:06.179Z INFO webdriver: COMMAND getElementText("3bea3693-bea3-693b-ea36-93bea3693bea")
[0-0] 2024-07-09T15:03:06.179Z INFO webdriver: [GET] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/c71d81b3-6d4b-4e36-b7c2-d6a87ea79fff/element/3bea3693-bea3-693b-ea36-93bea3693bea/text
[0-0] 2024-07-09T15:03:06.274Z INFO webdriver: RESULT 2
[0-0] 2024-07-09T15:03:06.275Z DEBUG @wdio/utils:shim: Finished to run "afterTest" hook in 0ms
[0-0] 2024-07-09T15:03:06.276Z DEBUG @wdio/utils:shim: Finished to run "afterSuite" hook in 0ms
[0-0] 2024-07-09T15:03:06.415Z INFO @wdio/sauce-service: Update job with sessionId c71d81b3-6d4b-4e36-b7c2-d6a87ea79fff, status: passing
[0-0] 2024-07-09T15:03:06.415Z INFO webdriver: COMMAND executeScript("sauce:job-result=true", <object>)
[0-0] 2024-07-09T15:03:06.416Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/c71d81b3-6d4b-4e36-b7c2-d6a87ea79fff/execute/sync
[0-0] 2024-07-09T15:03:06.416Z INFO webdriver: DATA { script: 'sauce:job-result=true', args: [] }
[0-0] 2024-07-09T15:03:06.462Z INFO webdriver: RESULT null
[0-0] 2024-07-09T15:03:06.463Z DEBUG @wdio/utils:shim: Finished to run "after" hook in 187ms
[0-0] 2024-07-09T15:03:06.463Z INFO webdriver: COMMAND deleteSession()
[0-0] 2024-07-09T15:03:06.463Z INFO webdriver: [DELETE] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/c71d81b3-6d4b-4e36-b7c2-d6a87ea79fff
[0-0] 2024-07-09T15:03:06.921Z INFO webdriver: RESULT null
2024-07-09T15:03:07.033Z DEBUG @wdio/local-runner: Runner 0-0 finished with exit code 0
[0-0] PASSED in Android - file:///test/specs/flutter.spec.ts
2024-07-09T15:03:07.034Z INFO @wdio/cli:launcher: Run onWorkerEnd hook
2024-07-09T15:03:07.034Z DEBUG @wdio/cli:utils: Finished to run "onWorkerEnd" hook in 0ms
2024-07-09T15:03:07.034Z INFO @wdio/cli:launcher: Run onComplete hook
2024-07-09T15:03:07.034Z DEBUG @wdio/cli:utils: Finished to run "onComplete" hook in 0ms

 "spec" Reporter:
------------------------------------------------------------------
[undefined Android #0-0] Running: undefined on Android
[undefined Android #0-0] Session ID: c71d81b3-6d4b-4e36-b7c2-d6a87ea79fff
[undefined Android #0-0]
[undefined Android #0-0] » /test/specs/flutter.spec.ts
[undefined Android #0-0] 1st AppiumFlutterIntegrationDriver test using appium latest
[undefined Android #0-0]    ✓ Flutter counter demo app
[undefined Android #0-0]
[undefined Android #0-0] 1 passing (5.2s)
[undefined Android #0-0]
[undefined Android #0-0] Check out job at https://app.eu-central-1.saucelabs.com/tests/f106300f238447c5b0aa98056fdcc5c5


Spec Files:      1 passed, 1 total (100% completed) in 00:01:03  

2024-07-09T15:03:07.035Z INFO @wdio/local-runner: Shutting down spawned worker
2024-07-09T15:03:07.293Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully
2024-07-09T15:03:07.294Z INFO @wdio/local-runner: shutting down

```
</details>

<details>
    <summary>Click to expand and see logs from running this on Sauce Labs for iOS Real Devices</summary>

```logs
npm run ios.flutter.sauce.rdc.app.eu        

> appium-flutter-integration-webdriverio-tests@0.1.0 ios.flutter.sauce.rdc.app.eu
> REGION=eu wdio run test/configs/ios.sauce.conf.ts


Execution of 1 workers started at 2024-07-09T15:12:45.475Z

2024-07-09T15:12:45.502Z DEBUG @wdio/utils:initializeServices: initialize service "flutter-by" as NPM package
2024-07-09T15:12:45.518Z DEBUG @wdio/utils:initializeServices: initialize service "sauce" as NPM package
2024-07-09T15:12:45.837Z INFO @wdio/cli:launcher: Run onPrepare hook
2024-07-09T15:12:45.838Z DEBUG @wdio/cli:utils: Finished to run "onPrepare" hook in 1ms
2024-07-09T15:12:45.839Z INFO @wdio/cli:launcher: Run onWorkerStart hook
2024-07-09T15:12:45.839Z DEBUG @wdio/cli:utils: Finished to run "onWorkerStart" hook in 0ms
2024-07-09T15:12:45.839Z INFO @wdio/local-runner: Start worker 0-0 with arg: run,test/configs/ios.sauce.conf.ts
2024-07-09T15:12:45.842Z DEBUG @wdio/local-runner: Send command run to worker with cid "0-0"
[0-0] 2024-07-09T15:12:47.277Z INFO @wdio/local-runner: Run worker command: run
[0-0] 2024-07-09T15:12:47.328Z DEBUG @wdio/runner: init remote session
[0-0] 2024-07-09T15:12:47.331Z DEBUG @wdio/utils:initializeServices: initialize service "flutter-by" as NPM package
[0-0] 2024-07-09T15:12:47.341Z DEBUG @wdio/utils:initializeServices: initialize service "sauce" as NPM package
[0-0] 2024-07-09T15:12:47.527Z DEBUG @wdio/utils:shim: Finished to run "beforeSession" hook in 0ms
[0-0] RUNNING in iOS - file:///test/specs/flutter.spec.ts
[0-0] 2024-07-09T15:12:47.780Z DEBUG @wdio/runner: init remote session
[0-0] 2024-07-09T15:12:47.781Z INFO webdriver: Initiate new session using the WebDriver protocol
[0-0] 2024-07-09T15:12:47.781Z INFO @wdio/utils: Connecting to existing driver at https://ondemand.eu-central-1.saucelabs.com:443/wd/hub
[0-0] 2024-07-09T15:12:47.921Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session
[0-0] 2024-07-09T15:12:47.921Z INFO webdriver: DATA {
[0-0]   capabilities: {
[0-0]     alwaysMatch: {
[0-0]       platformName: 'iOS',
[0-0]       'appium:deviceName': 'iPhone.*',
[0-0]       'appium:automationName': 'FlutterIntegration',
[0-0]       'appium:app': 'storage:filename=sl_my_demo_flutter_app.ipa',
[0-0]       'appium:newCommandTimeout': 240,
[0-0]       'appium:platformVersion': '^1(4.[3-9]|[5-9]).*',
[0-0]       'sauce:options': [Object]
[0-0]     },
[0-0]     firstMatch: [ {} ]
[0-0]   },
[0-0]   desiredCapabilities: {
[0-0]     platformName: 'iOS',
[0-0]     'appium:deviceName': 'iPhone.*',
[0-0]     'appium:automationName': 'FlutterIntegration',
[0-0]     'appium:app': 'storage:filename=sl_my_demo_flutter_app.ipa',
[0-0]     'appium:newCommandTimeout': 240,
[0-0]     'appium:platformVersion': '^1(4.[3-9]|[5-9]).*',
[0-0]     'sauce:options': {
[0-0]       name: '1st AppiumFlutterIntegrationDriver test using appium latest',
[0-0]       resigningEnabled: true,
[0-0]       appiumVersion: 'latest'
[0-0]     }
[0-0]   }
[0-0] }
[0-0] 2024-07-09T15:13:08.951Z DEBUG @wdio/utils:shim: Finished to run "before" hook in 0ms
[0-0] 2024-07-09T15:13:08.954Z INFO webdriver: COMMAND executeScript("sauce:job-name=1st AppiumFlutterIntegrationDriver test using appium latest", <object>)
[0-0] 2024-07-09T15:13:08.954Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/3d3efc1f-3d00-4a53-82b6-8b978f53640e/execute/sync
[0-0] 2024-07-09T15:13:08.954Z INFO webdriver: DATA {
[0-0]   script: 'sauce:job-name=1st AppiumFlutterIntegrationDriver test using appium latest',
[0-0]   args: []
[0-0] }
[0-0] 2024-07-09T15:13:08.999Z INFO webdriver: RESULT null
[0-0] 2024-07-09T15:13:08.999Z DEBUG @wdio/utils:shim: Finished to run "beforeSuite" hook in 46ms
[0-0] 2024-07-09T15:13:09.002Z INFO webdriver: COMMAND executeScript("sauce:context=1st AppiumFlutterIntegrationDriver test using appium latest - Flutter counter demo app", <object>)
[0-0] 2024-07-09T15:13:09.002Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/3d3efc1f-3d00-4a53-82b6-8b978f53640e/execute/sync
[0-0] 2024-07-09T15:13:09.003Z INFO webdriver: DATA {
[0-0]   script: 'sauce:context=1st AppiumFlutterIntegrationDriver test using appium latest - Flutter counter demo app',
[0-0]   args: []
[0-0] }
[0-0] 2024-07-09T15:13:09.089Z INFO webdriver: RESULT 1st AppiumFlutterIntegrationDriver test using appium latest - Flutter counter demo app
[0-0] 2024-07-09T15:13:09.089Z DEBUG @wdio/utils:shim: Finished to run "beforeTest" hook in 88ms
[0-0] 2024-07-09T15:13:09.089Z INFO webdriver: COMMAND flutterByValueKey$("counterView_increment_floatingActionButton")
[0-0] 2024-07-09T15:13:09.090Z INFO webdriver: COMMAND flutterByValueKey("key", "counterView_increment_floatingActionButton")
[0-0] 2024-07-09T15:13:09.090Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/3d3efc1f-3d00-4a53-82b6-8b978f53640e/element
[0-0] 2024-07-09T15:13:09.090Z INFO webdriver: DATA { using: 'key', value: 'counterView_increment_floatingActionButton' }
[0-0] 2024-07-09T15:13:09.272Z INFO webdriver: RESULT {
[0-0]   'element-6066-11e4-a52e-4f735466cecf': '15266189-1526-6189-1526-618915266189',
[0-0]   ELEMENT: '15266189-1526-6189-1526-618915266189'
[0-0] }
[0-0] 2024-07-09T15:13:09.282Z INFO webdriver: RESULT WebdriverIO.Element<15266189-1526-6189-1526-618915266189>
[0-0] 2024-07-09T15:13:09.282Z INFO webdriver: COMMAND elementClick("15266189-1526-6189-1526-618915266189")
[0-0] 2024-07-09T15:13:09.282Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/3d3efc1f-3d00-4a53-82b6-8b978f53640e/element/15266189-1526-6189-1526-618915266189/click
[0-0] 2024-07-09T15:13:09.633Z INFO webdriver: RESULT null
[0-0] 2024-07-09T15:13:09.634Z INFO webdriver: COMMAND elementClick("15266189-1526-6189-1526-618915266189")
[0-0] 2024-07-09T15:13:09.634Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/3d3efc1f-3d00-4a53-82b6-8b978f53640e/element/15266189-1526-6189-1526-618915266189/click
[0-0] 2024-07-09T15:13:09.961Z INFO webdriver: RESULT null
[0-0] 2024-07-09T15:13:09.963Z INFO webdriver: COMMAND elementClick("15266189-1526-6189-1526-618915266189")
[0-0] 2024-07-09T15:13:09.969Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/3d3efc1f-3d00-4a53-82b6-8b978f53640e/element/15266189-1526-6189-1526-618915266189/click
[0-0] 2024-07-09T15:13:10.264Z INFO webdriver: RESULT null
[0-0] 2024-07-09T15:13:10.264Z INFO webdriver: COMMAND elementClick("15266189-1526-6189-1526-618915266189")
[0-0] 2024-07-09T15:13:10.267Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/3d3efc1f-3d00-4a53-82b6-8b978f53640e/element/15266189-1526-6189-1526-618915266189/click
[0-0] 2024-07-09T15:13:10.567Z INFO webdriver: RESULT null
[0-0] 2024-07-09T15:13:10.567Z INFO webdriver: COMMAND elementClick("15266189-1526-6189-1526-618915266189")
[0-0] 2024-07-09T15:13:10.569Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/3d3efc1f-3d00-4a53-82b6-8b978f53640e/element/15266189-1526-6189-1526-618915266189/click
[0-0] 2024-07-09T15:13:10.865Z INFO webdriver: RESULT null
[0-0] 2024-07-09T15:13:10.866Z INFO webdriver: COMMAND flutterByValueKey$("counterView_decrement_floatingActionButton")
[0-0] 2024-07-09T15:13:10.866Z INFO webdriver: COMMAND flutterByValueKey("key", "counterView_decrement_floatingActionButton")
[0-0] 2024-07-09T15:13:10.871Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/3d3efc1f-3d00-4a53-82b6-8b978f53640e/element
[0-0] 2024-07-09T15:13:10.871Z INFO webdriver: DATA { using: 'key', value: 'counterView_decrement_floatingActionButton' }
[0-0] 2024-07-09T15:13:11.051Z INFO webdriver: RESULT {
[0-0]   'element-6066-11e4-a52e-4f735466cecf': '15d548d3-15d5-48d3-15d5-48d315d548d3',
[0-0]   ELEMENT: '15d548d3-15d5-48d3-15d5-48d315d548d3'
[0-0] }
[0-0] 2024-07-09T15:13:11.061Z INFO webdriver: RESULT WebdriverIO.Element<15d548d3-15d5-48d3-15d5-48d315d548d3>
[0-0] 2024-07-09T15:13:11.061Z INFO webdriver: COMMAND elementClick("15d548d3-15d5-48d3-15d5-48d315d548d3")
[0-0] 2024-07-09T15:13:11.061Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/3d3efc1f-3d00-4a53-82b6-8b978f53640e/element/15d548d3-15d5-48d3-15d5-48d315d548d3/click
[0-0] 2024-07-09T15:13:11.398Z INFO webdriver: RESULT null
[0-0] 2024-07-09T15:13:11.399Z INFO webdriver: COMMAND elementClick("15d548d3-15d5-48d3-15d5-48d315d548d3")
[0-0] 2024-07-09T15:13:11.400Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/3d3efc1f-3d00-4a53-82b6-8b978f53640e/element/15d548d3-15d5-48d3-15d5-48d315d548d3/click
[0-0] 2024-07-09T15:13:11.699Z INFO webdriver: RESULT null
[0-0] 2024-07-09T15:13:11.699Z INFO webdriver: COMMAND elementClick("15d548d3-15d5-48d3-15d5-48d315d548d3")
[0-0] 2024-07-09T15:13:11.702Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/3d3efc1f-3d00-4a53-82b6-8b978f53640e/element/15d548d3-15d5-48d3-15d5-48d315d548d3/click
[0-0] 2024-07-09T15:13:12.019Z INFO webdriver: RESULT null
[0-0] 2024-07-09T15:13:12.019Z INFO webdriver: COMMAND flutterByText$("2")
[0-0] 2024-07-09T15:13:12.019Z INFO webdriver: COMMAND flutterByText("<Screenshot[base64]>", "2")
[0-0] 2024-07-09T15:13:12.020Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/3d3efc1f-3d00-4a53-82b6-8b978f53640e/element
[0-0] 2024-07-09T15:13:12.020Z INFO webdriver: DATA { using: 'text', value: '2' }
[0-0] 2024-07-09T15:13:12.198Z INFO webdriver: RESULT {
[0-0]   'element-6066-11e4-a52e-4f735466cecf': '147a93d5-147a-93d5-147a-93d5147a93d5',
[0-0]   ELEMENT: '147a93d5-147a-93d5-147a-93d5147a93d5'
[0-0] }
[0-0] 2024-07-09T15:13:12.203Z INFO webdriver: RESULT WebdriverIO.Element<147a93d5-147a-93d5-147a-93d5147a93d5>
[0-0] 2024-07-09T15:13:12.203Z INFO webdriver: COMMAND getElementText("147a93d5-147a-93d5-147a-93d5147a93d5")
[0-0] 2024-07-09T15:13:12.203Z INFO webdriver: [GET] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/3d3efc1f-3d00-4a53-82b6-8b978f53640e/element/147a93d5-147a-93d5-147a-93d5147a93d5/text
[0-0] 2024-07-09T15:13:12.289Z INFO webdriver: RESULT 2
[0-0] 2024-07-09T15:13:12.318Z DEBUG @wdio/utils:shim: Finished to run "afterTest" hook in 0ms
[0-0] 2024-07-09T15:13:12.328Z DEBUG @wdio/utils:shim: Finished to run "afterSuite" hook in 0ms
[0-0] 2024-07-09T15:13:12.462Z INFO @wdio/sauce-service: Update job with sessionId 3d3efc1f-3d00-4a53-82b6-8b978f53640e, status: passing
[0-0] 2024-07-09T15:13:12.462Z INFO webdriver: COMMAND executeScript("sauce:job-result=true", <object>)
[0-0] 2024-07-09T15:13:12.463Z INFO webdriver: [POST] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/3d3efc1f-3d00-4a53-82b6-8b978f53640e/execute/sync
[0-0] 2024-07-09T15:13:12.463Z INFO webdriver: DATA { script: 'sauce:job-result=true', args: [] }
[0-0] 2024-07-09T15:13:12.506Z INFO webdriver: RESULT null
[0-0] 2024-07-09T15:13:12.506Z DEBUG @wdio/utils:shim: Finished to run "after" hook in 177ms
[0-0] 2024-07-09T15:13:12.507Z INFO webdriver: COMMAND deleteSession()
[0-0] 2024-07-09T15:13:12.507Z INFO webdriver: [DELETE] https://ondemand.eu-central-1.saucelabs.com/wd/hub/session/3d3efc1f-3d00-4a53-82b6-8b978f53640e
[0-0] 2024-07-09T15:13:12.586Z INFO webdriver: RESULT null
2024-07-09T15:13:12.697Z DEBUG @wdio/local-runner: Runner 0-0 finished with exit code 0
[0-0] PASSED in iOS - file:///test/specs/flutter.spec.ts
2024-07-09T15:13:12.697Z INFO @wdio/cli:launcher: Run onWorkerEnd hook
2024-07-09T15:13:12.698Z DEBUG @wdio/cli:utils: Finished to run "onWorkerEnd" hook in 0ms
2024-07-09T15:13:12.698Z INFO @wdio/cli:launcher: Run onComplete hook
2024-07-09T15:13:12.698Z DEBUG @wdio/cli:utils: Finished to run "onComplete" hook in 0ms

 "spec" Reporter:
------------------------------------------------------------------
[com.example.myDemoAppFlutter iOS #0-0] Running: com.example.myDemoAppFlutter on iOS
[com.example.myDemoAppFlutter iOS #0-0] Session ID: 3d3efc1f-3d00-4a53-82b6-8b978f53640e
[com.example.myDemoAppFlutter iOS #0-0]
[com.example.myDemoAppFlutter iOS #0-0] » /test/specs/flutter.spec.ts
[com.example.myDemoAppFlutter iOS #0-0] 1st AppiumFlutterIntegrationDriver test using appium latest
[com.example.myDemoAppFlutter iOS #0-0]    ✓ Flutter counter demo app
[com.example.myDemoAppFlutter iOS #0-0]
[com.example.myDemoAppFlutter iOS #0-0] 1 passing (3.6s)
[com.example.myDemoAppFlutter iOS #0-0]
[com.example.myDemoAppFlutter iOS #0-0] Check out job at https://app.eu-central-1.saucelabs.com/tests/7de9ea4da2ae4f72a8660c8bfe03cd90


Spec Files:      1 passed, 1 total (100% completed) in 00:00:27  

2024-07-09T15:13:12.698Z INFO @wdio/local-runner: Shutting down spawned worker
2024-07-09T15:13:12.950Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully
2024-07-09T15:13:12.950Z INFO @wdio/local-runner: shutting down
```
</details>
