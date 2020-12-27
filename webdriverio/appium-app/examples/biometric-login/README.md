# Using Biometric login on Sauce Labs
This folder contains examples for using Biometric login for:

- [iOS local simulators](#local-ios-simulator)
- [iOS simulators on the Sauce Labs Simulator Cloud](#sauce-labs-ios-simulator)
- [iOS real devices on the new Sauce Labs UI](#run-tests-on-sauce-labs-ios-real-devices-in-the-new-sauce-labs-ui)
- [iOS real devices on the Legacy RDC cloud](#run-tests-on-sauce-labs-ios-real-devices-in-the-legacy-rdc)
- [Android local emulators](#local-android-emulator)
- [Android emulators on the Sauce Labs Emulator Cloud](#sauce-labs-android-emulator)

> Android real devices are currently not supported

## Install dependencies
You can install all dependencies by running the following command

    npm install

This will install all needed dependencies that are listed in the `package.json`-file

> NOTE: Make sure you are in the folder `webdriverio/appium-app/examples/biometric-login` when you execute this command

## Important information
### Environment variables for Sauce Labs
The examples in this repository that can run on Sauce Labs use environment variables, make sure you've added the following

    # For Sauce Labs Emulators/Simulators/Real devices in the New UI
    export SAUCE_USERNAME=********
    export SAUCE_ACCESS_KEY=*******

    # For the Legacy RDC
    export SAUCE_RDC_EU_ACCESS_KEY_IOS=********

### Demo app(s)
The demo app that has been used for all these tests can be found [here](https://github.com/saucelabs/sample-app-mobile/releases).
Be aware of the fact that and iOS simulator uses a different build then a iOS real device. So please check the file you download.

> The advice is to download the files to an `apps` folder in the root of this folder.

### Upload apps to Sauce Storage
If you want to use Android emulators, iOS simulators or iOS real devices in the New Sauce Labs UI you need to upload the apps to the Sauce Storage.
You can find a script to upload them to, or the US, or EU DC in [this](scripts)-folder. You can push the files to the
storage by doing the following from the root of this folder:

    cd scripts
    ./push_apps_to_storage.sh

When you've done that you will see for example the following logs

    ➜  scripts git:(master) ✗ ./push_apps_to_storage.sh
    {"username":"wim.selles","filename":"sample-app-android.apk","size":24874172,"md5":"e46219548268d3e89ada443e1ed6e351","etag":"8b037c2ad1dc2b241e605ed97569d6dd"}
    {"username":"wim.selles","filename":"sample-app-ios-sim.zip","size":8178727,"md5":"4c551e66213832ff982e302014917adb","etag":"23256688a3f6357ad4c1c8cd1ed72b3e"}
    {"username":"wim.selles","filename":"sample-app-ios-real.ipa","size":4597084,"md5":"33f82765909e4ac7fc9dd5e925b6d2ae","etag":"86e63c580c15530db573833371830323"}


### iOS
Using TouchID or FaceID for iOS simulators is pretty straightforward, you **don't** need to add an extra capability to your capabilities,
you can just enable it during runtime, please check [this](test/specs/touch.face.id.spec.js) to see how to do that.

On the Sauce Labs Legacy RDC **AND** the New Sauce Labs UI you need to add `allowTouchIdEnroll: true` to your capabilities,
see also the [Legacy RDC config](test/configs/wdio.ios.legacy.rdc.conf.js) and the [New Sauce Labs UI config](test/configs/wdio.ios.sauce.real.conf.js)-file

### Android
Android is not that straightforward as iOS, there is no specific capability you can use to enable fingerprint support.
I used [this article](https://dev.to/gromanas/how-to-automate-biometrics-android-edition-2c7c) written by [Georgios Romanas](https://github.com/gromanas)
to get the flow (Thanks my friend!!).

The challenge with Android was that there is a different flow for almost each version. Take for example Android 7,
that version doesn't support to automatically set a pin, you need to walk through a complete flow to enable this.
There is also a small different in the fingerprint wizard between Android 9 and 10. This has been covered in the used code,
see [this](test/screen-objects/AndroidSettings.js)-file. The method `enableBiometricLogin()` will do all the magic for you.

## Run tests locally
### Local iOS simulator
If you want to run the tests on your local machine then you can run the iOS test with

    npm run test.local.ios.simulator

Make sure you have Appium Globally installed and have the same simulator available on your Mac as can be found in this
[config](test/configs/wdio.ios.local.sim.conf.js).

### Local Android emulator
If you want to run the tests on your local machine then you can run the Android test with

    npm run test.local.android.emulator

Make sure you have Appium Globally installed and have the same emulator available on your Mac/Windows/Linux machine as
can be found in this [config](test/configs/wdio.android.local.emu.conf.js).

## Run tests on Sauce Labs iOS simulators or Android emulators
> To configure your Android emulator or iOS simulator check our
> [Platform Configurator](https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/).

### Sauce Labs iOS simulator
If you want to run the tests on Sauce Labs simulators then you can run the iOS test with

    // If using the US DC
    npm run test.sauce.ios.simulator.us

    // If using the EU DC
    npm run test.sauce.ios.simulator.eu

The tests will be executed on:

- iOS 13.2
- iOS 12.4

and test **AND** TouchID **AND** FaceID.

The default Appium Version provided by Sauce Labs can be overriden as seen in the following commands

    // If using the US DC
    npm run test.sauce.ios.simulator.us --appium_version=1.17.1

    // If using the EU DC
    npm run test.sauce.ios.simulator.eu --appium_version=1.17.1

See this [config](test/configs/wdio.ios.sauce.sim.conf.js)-file for more information.

### Sauce Labs Android emulator
If you want to run the tests on Sauce Labs emulators then you can run the Android test with

    // If using the US DC
    npm run test.sauce.android.emulator.us

    // If using the EU DC
    npm run test.sauce.android.emulator.eu

The tests will be executed on:

- Android 7.1
- Android 8.1
- Android 9.0
- Android 10.0

The default Appium Version provided by Sauce Labs can be overriden as seen in the following commands

    // If using the US DC
    npm run test.sauce.android.emulator.us --appium_version=1.16.0

    // If using the EU DC
    npm run test.sauce.android.emulator.eu --appium_version=1.16.0

See this [config](test/configs/wdio.android.sauce.emu.conf.js)-file for more information.

## Run tests on Sauce Labs iOS real devices in the New Sauce Labs UI
If you want to run the tests on Sauce Labs real devices in the **New Sauce Labs UI** then you can run the iOS test with

    // If using the US DC
    npm run test.sauce.rdc.ios.us

    // If using the EU DC
    npm run test.sauce.rdc.ios.eu

The tests will be executed for FaceID.

See this [config](test/configs/wdio.ios.sauce.real.conf.js)-file for more information.

## Run tests on Sauce Labs iOS real devices in the Legacy RDC
If you want to run the tests on Sauce Labs real devices in the **Legacy RDC** then you can run the iOS test with

    // If using the US DC
    npm run test.legacy.rdc.ios.us

    // If using the EU DC
    npm run test.legacy.rdc.ios.eu

The tests will be executed for **AND** TouchID **AND** FaceID.

See this [config](test/configs/wdio.ios.legacy.rdc.conf.js)-file for more information.
