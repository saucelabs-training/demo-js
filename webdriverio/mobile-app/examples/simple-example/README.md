# WebdriverIO Native App Simple Example
This folder is a very simple example to get you started with your native appium testing. Please refer to the appium
documentation [here](https://appium.io/docs/en/about-appium/getting-started/?lang=en#getting-started) to set up your 
machine if you have not yet setup your machine to run appium tests.

## Install dependencies
You can install all dependencies by running the following command

    npm install

This will install all needed dependencies that are listed in the `package.json`-file

> NOTE: Make sure you are in the folder `webdriverio/appium-app/examples/simple-example` when you execute this command

## Download / Upload Apps

> NOTE: When running locally you do not have to download the apps as they are provided in `webdriverio/appium-app/examples/simple-example/`

Running on sauce, you can download the apps used from [here](https://github.com/saucelabs/my-demo-app-rn/releases/). Make sure you rename the apps to:

- Android Emulators / Real Devices: `Android-MyDemoAppRN.*.*.*.build-***.apk` => `Android.MyDemoAppRN.apk`
- iOS Real Devices: `iOS-Real-Device-MyRNDemoApp.*.*.*-*.ipa` => `MyRNDemoApp.ipa`
- iOS Simulators: `iOS-Simulator-MyRNDemoApp.*.*.*-*.zip` => `MyRNDemoApp.zip`

And manually upload them to the preferred Data Center, see [this](https://docs.saucelabs.com/mobile-apps/live-testing/live-mobile-app-testing/#uploading-an-app) for the instructions.

You can run your tests on Sauce Labs US DC with this command

    # Run Android Emulator Tests
    npm run test.saucelabs.android.emu.us
    # Run iOS Simulators Tests
    npm run test.saucelabs.ios.sim.us

You can run your tests on Sauce Labs EU DC with this command

    # Run Android Emulator Tests
    npm run test.saucelabs.android.emu.eu
    # Run iOS Simulators Tests
    npm run test.saucelabs.ios.sim.eu

You can run your tests locally with this command

    # Run Android Emulator Tests
    npm run test.android.local.emu
    # Run iOS Simulators Tests
    npm run test.ios.local.sim
