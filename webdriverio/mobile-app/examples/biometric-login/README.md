# Using Biometric login on Sauce Labs
This folder contains examples for using Biometric login for:

- [Android Real Devices in the Sauce Labs Real Device Cloud](#run-tests-on-android-real-devices-in-the-sauce-labs-real-device-cloud)
- [Android Emulators in the Sauce Labs Emulator Cloud](#run-tests-on-android-emulators-in-the-sauce-labs-emulator-cloud)
- [iOS Real Devices in the Sauce Labs Real Device Cloud](#run-tests-on-ios-real-devices-in-the-sauce-labs-real-device-cloud)
- [iOS Simulators in the Sauce Labs Simulator Cloud](#run-tests-on-ios-simulators-in-the-sauce-labs-emulator-cloud)

The WebdriverIO framework is being used here together with:
- TypeScript
- Mocha
- Async mode

## Install dependencies
You can install all dependencies by running the following command

    npm install

This will install all needed dependencies that are listed in the `package.json`-file

> NOTE: Make sure you are in the folder `webdriverio/appium-app/examples/biometric-login` when you execute this command

## Important information
### Environment variables for Sauce Labs
The examples in this repository that can run on Sauce Labs use environment variables, make sure you've added the following

    # For Sauce Labs Emulators/Simulators/Real devices
    export SAUCE_USERNAME=********
    export SAUCE_ACCESS_KEY=*******

### Demo app(s)
The demo app that has been used for all these tests can be found [here](https://github.com/saucelabs/my-demo-app-rn/releases).
Be aware of the fact that and iOS simulator uses a different build then a iOS real device. So please check the file you
download.

> The advice is to download the files to an `apps` folder in the root of this folder.

Make sure that when you downloaded the files from the releases page, that you rename the apps to the following, see
also the names of the apps in the configurations files [here](test/configs):

- `Android-MyDemoAppRN.{#.#.#}.build-{####}.apk` => `Android.MyDemoAppRN.apk`
- `iOS-Real-Device-MyRNDemoApp.{#.#.#}-{####}.ipa` => `iOS.MyDemoAppRN.ipa`
- `iOS-Simulator-MyRNDemoApp.{#.#.#}-{####}.zip` => `iOS.MyDemoAppRN.zip`

**If you don't do that then the scripts can't use find the apps!**

### Upload apps to Sauce Storage
If you want to use Android emulators, iOS simulators or iOS real devices in the New Sauce Labs UI you need to upload 
the apps to the Sauce Storage.

#### Manual upload
Execute the following steps to manually upload the apps:
- Login to the Sauce Labs UI
- Go to **LIVE** > **Mobile App**
- Click on **App Upload** and OR select the folder, OR drag the apps to the screen to upload them

#### Automated upload
You can find a script to upload them to, OR the US, OR EU DC in [this](scripts)-folder. You can push the files to the
storage by doing the following from the root of this folder:

    cd scripts
    ./push_apps_to_storage.sh

If the push was successful you will get a lot of logs.

### iOS
Using TouchID or FaceID for iOS simulators is pretty straightforward, you **DON'T** need to add an extra capability to 
your capabilities, you can just enable it during runtime, please check [this](test/specs/biometrics.emusim.spec.ts) to 
see how to do that.

For running test on the Sauce Labs Real Device Cloud you need to add `allowTouchIdEnroll: true` to your capabilities,
see also the [iOS Sauce Labs Real Device Cloud config](test/configs/wdio.ios.sauce.rdc.conf.ts)-file

### Android
Android is not that straightforward as iOS when it comes to Emulators. There is no specific capability you can use to 
enable fingerprint support. You need to first enable it manually or with Appium to enable this. I used 
[this article](https://dev.to/gromanas/how-to-automate-biometrics-android-edition-2c7c) written by 
[Georgios Romanas](https://github.com/gromanas) to get the flow (Thanks my friend!!).

The challenge with Android was that there is a different flow for almost each version. Take for example Android 7,
that version doesn't support to automatically set a pin, you need to walk through a complete flow to enable this.
There is also a small different in the fingerprint wizard between Android 9 and 10. This has been covered in the used code,
see [this](test/screen-objects/AndroidSettings.ts)-file. The method `enableBiometricLogin()` will do all the magic for you.

## Run Tests on Android Real Devices in the Sauce Labs Real Device Cloud
If you want to run the tests on Android Sauce Labs Real Devices then you can run the Android test with

    // If using the US DC
    npm run test.sauce.rdc.andoid.us

    // If using the EU DC
    npm run test.sauce.rdc.andoid.eu

The tests, which can be found [here](test/specs/biometrics.rdc.spec.ts), will be executed on:

- Samsung Galaxy S(7|8|9|10|20|21).*
- Google Pixel.*

> Both devices use *dynamic* allocation, meaning they will try to find an available device that matches a regular 
expression, for more information about that please check the 
[Android config](test/configs/wdio.android.sauce.rdc.conf.ts)-file.

## Run tests on Android Emulators in the Sauce Labs Emulator Cloud
If you want to run the tests on Sauce Labs Android emulators then you can run the Android test with

    // If using the US DC
    npm run test.sauce.emulator.andoid.us

    // If using the EU DC
    npm run test.sauce.emulator.andoid.eu

The tests, which can be found [here](test/specs/biometrics.emusim.spec.ts), will be executed on:

- Android 7.1
- Android 8.1
- Android 9.0
- Android 10.0
- Android 11.0

See this [config](test/configs/wdio.android.sauce.emu.conf.ts)-file for more information.

> As mentioned in [Important information > Android](#android), there is no easy way to enable biometrics on Android
> emulators. That's why this manual process has been scripted with Appium.

## Run Tests on iOS Real Devices in the Sauce Labs Real Device Cloud
If you want to run the tests on iOS Sauce Labs Real Devices then you can run the iOS test with

    // If using the US DC
    npm run test.sauce.rdc.ios.us

    // If using the EU DC
    npm run test.sauce.rdc.ios.eu

The tests, which can be found [here](test/specs/biometrics.rdc.spec.ts), will be executed on:

- iPhone ([6-8]|SE).* => supports Touch ID
- iPhone (11|12|13|X.*).* => supports Face ID

> Both devices use *dynamic* allocation, meaning they will try to find an available device that matches a regular
expression, for more information about that please check the [iOS config](test/configs/wdio.ios.sauce.rdc.conf.ts)-file.

## Run tests on iOS Simulators in the Sauce Labs Emulator Cloud
If you want to run the tests on Sauce Labs iOS simulators then you can run the Android test with

    // If using the US DC
    npm run test.sauce.simulator.ios.us

    // If using the EU DC
    npm run test.sauce.simulator.ios.eu

The tests, which can be found [here](test/specs/biometrics.emusim.spec.ts), will be executed on:

- iPhone 8 Plus => has Touch ID
- iPhone 12 => has Face ID

See this [config](test/configs/wdio.ios.sauce.sim.conf.ts)-file for more information.
