# WebdriverIO Native App Appium Flutter

This folder contains an example on how to run Flutter tests with Appium, the [`appium-flutter-driver`](https://github.com/appium-userland/appium-flutter-driver) and WebdriverIO.

> **NOTE:** The demo apps, which can be found [here](./apps), have been build with Flutter 3, which needs Appium 2 to run. 
If you want to run the tests with Appium 1, you need to have a demo app that has been build with Flutter 2.\
> We assume you are familiar with creating and building Flutter apps. If not, please check out the [Flutter Android](https://docs.flutter.dev/deployment/android) or [Flutter iOS](https://docs.flutter.dev/deployment/ios) documentation.

## Install dependencies

You can install all dependencies by running the following command

    npm install

This will install all needed dependencies that are listed in the `package.json`-file

> NOTE: Make sure you are in the folder `webdriverio/appium-app/examples/appium-flutter` when you execute this command

## Download / Upload Apps

The apps can be found [here](./apps). You need to manually upload them to the preferred Data Center, see [this](https://docs.saucelabs.com/mobile-apps/live-testing/live-mobile-app-testing/#uploading-an-app) for the instructions.

## Tests

The tests can be found [here](./test/specs/flutter.spec.js). Be aware of the fact that the syntax for the [`appium-flutter-driver`](https://github.com/appium-userland/appium-flutter-driver) is different to the one you are used to for native Android/iOS testing. For more information, please check out the [`appium-flutter-driver`](https://github.com/appium-userland/appium-flutter-driver).

You have the option to use native Appium commands, to do so, you need to switch the context from `flutter` to `NATIVE_APP` and vice versa if you want to start using Flutter commands again. For an example, please check out [this](./test/specs/flutter.spec.ts#L16) line.

> **NOTE:** Make sure you have read the [`appium-flutter-driver`](https://github.com/appium-userland/appium-flutter-driver) documentation before you start writing tests.

## Run tests on Sauce Labs

You can run your tests on Sauce Labs US DC with this command

    # Run Android Real Devices Test
    npm run test.sauce.real.android.us
    # Run iOS Real Devices Tests
    npm run test.sauce.real.ios.us

You can run your tests on Sauce Labs EU DC with this command

    # Run Android Real Devices Test
    npm run test.sauce.real.android.eu
    # Run iOS Real Devices Tests
    npm run test.sauce.real.ios.eu

<details>
    <summary>Click to expand and see logs from running this on Sauce Labs for Android Real Devices</summary>

```logs
npm run test.sauce.real.android.eu
npm WARN config init.license Use `--init-license` instead.

> webdriverio-tests@0.1.0 test.sauce.real.android.eu
> REGION=eu wdio run test/configs/wdio.android.sauce.real.conf.ts

(⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂) ⠦ : timing config:load:flatten Completed in 3ms
Execution of 1 workers started at 2022-11-23T07:36:27.180Z

[0-0] RUNNING in Android - /test/specs/flutter.spec.tsmpleted in 3ms
[0-0] PASSED in Android - /test/specs/flutter.spec.tsompleted in 3ms

 "spec" Reporter:
------------------------------------------------------------------
[Samsung_Galaxy_Note_9_real Android 10 #0-0] Running: Samsung_Galaxy_Note_9_real on Android 10
[Samsung_Galaxy_Note_9_real Android 10 #0-0] Session ID: 794cd53e-3aff-403b-8e9b-104ec0315af1
[Samsung_Galaxy_Note_9_real Android 10 #0-0]
[Samsung_Galaxy_Note_9_real Android 10 #0-0] » /test/specs/flutter.spec.ts
[Samsung_Galaxy_Note_9_real Android 10 #0-0] appium-flutter-driver
[Samsung_Galaxy_Note_9_real Android 10 #0-0]    ✓ load and validate the app
[Samsung_Galaxy_Note_9_real Android 10 #0-0]
[Samsung_Galaxy_Note_9_real Android 10 #0-0] 1 passing (9.3s)
[Samsung_Galaxy_Note_9_real Android 10 #0-0]
[Samsung_Galaxy_Note_9_real Android 10 #0-0] Check out job at https://app.eu-central-1.saucelabs.com/tests/3bf6afa4b49d454698ad144260308540


Spec Files:      1 passed, 1 total (100% completed) in 00:02:01 
```

</details>

<details>
    <summary>Click to expand and see logs from running this on Sauce Labs for iOS Real Devices</summary>

```logs
npm run test.sauce.real.ios.eu
npm WARN config init.license Use `--init-license` instead.

> webdriverio-tests@0.1.0 test.sauce.real.ios.eu
> REGION=eu wdio run test/configs/wdio.ios.sauce.real.conf.ts

(⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂) ⠦ : timing config:load:flatten Completed in 3ms
Execution of 1 workers started at 2022-11-23T07:35:03.419Z

[0-0] RUNNING in iOS - /test/specs/flutter.spec.tsn Completed in 3ms
[0-0] PASSED in iOS - /test/specs/flutter.spec.tsen Completed in 3ms

 "spec" Reporter:
------------------------------------------------------------------
[00008120-001C65813E33401E iOS 16.1 #0-0] Running: 00008120-001C65813E33401E on iOS 16.1
[00008120-001C65813E33401E iOS 16.1 #0-0] Session ID: ab954208-7a5c-492d-ba1e-9f60a6cc94d2
[00008120-001C65813E33401E iOS 16.1 #0-0]
[00008120-001C65813E33401E iOS 16.1 #0-0] » /test/specs/flutter.spec.ts
[00008120-001C65813E33401E iOS 16.1 #0-0] appium-flutter-driver
[00008120-001C65813E33401E iOS 16.1 #0-0]    ✓ load and validate the app
[00008120-001C65813E33401E iOS 16.1 #0-0]
[00008120-001C65813E33401E iOS 16.1 #0-0] 1 passing (4s)
[00008120-001C65813E33401E iOS 16.1 #0-0]
[00008120-001C65813E33401E iOS 16.1 #0-0] Check out job at https://app.eu-central-1.saucelabs.com/tests/c962befc535f4c61940a59fede0d97a3


Spec Files:      1 passed, 1 total (100% completed) in 00:00:35
```

</details>
