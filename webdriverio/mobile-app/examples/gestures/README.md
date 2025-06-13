# Appium Gestures
This repository has been created for the Webinar about "Automating Mobile Gestures with Appium". For more information 
check [this](https://saucelabs.com/resources/webinars/automating-mobile-gestures-with-appium) page.

## Table of Contents
- [Prerequisites](#prerequisites)
    - [Environment](#environment)
    - [Project](#project)
    - [Test Apps](#test-apps)
    - [Sauce Labs Storage](#sauce-labs-storage)
- [Tests](#tests)
    - [Exercises](#exercises)
    - [Answers](#answers)
    - [Running them locally](#running-them-locally)
    - [Running them on Sauce Labs Emulators/Simulators](#running-them-on-sauce-labs-emulatorssimulators)
    - [Running them on Sauce Labs Real Devices](#running-them-on-sauce-labs-real-devices)
    
## Prerequisites
### Environment
You’ll need [Node.js](https://nodejs.org/en/) installed.

- Install at least v12.16.1 or higher as this is the oldest active LTS version
- Only releases that are or will become an LTS release are officially supported

If you don't have Node installed, we recommend installing [NVM](https://github.com/nvm-sh/nvm) to assist managing 
multiple active Node.js versions.

Also set your [Sauce Labs Credentials](https://app.saucelabs.com/user-settings) in your environmental variables if you 
want to run the tests on Sauce Labs:

```bash
export SAUCE_USERNAME=********
export SAUCE_ACCESS_KEY=*******
```

### Project
- Clone the project
- Go to the root of this folder, so do `cd webdriverio/mobile-app/examples/gestures` to get here
- Install all dependencies with `npm install`

### Test Apps
This project has 3 test apps which can be found [here](test-apps). You will find
- an Android build, which can be used for Android emulators and Android real devices
- an iOS Simulator build
- and an iOS Real device build

### Sauce Labs Storage
If you want to use Sauce Labs you need to upload the apps to the storage, more information can be found [here](https://wiki.saucelabs.com/display/DOCS/Application+Storage).
You can find a script to upload the used apps [here](scripts/push_apps_to_storage.sh). Here you will find
a curl command that can upload the apps to the EU and US data center for you.

> **NOTE:** Make sure you've added your credentials to your environment variables so you can start uploading the apps.

## Tests
> **NOTE:** When you run the tests it will by default run the exercise spec, if you want to run the answers please add
>the following `--suite=answers` behind the npm commands which are explained below.

### Exercises
> **Note:** It's always easy to cheat ;-) and go to the answer immediately, but the advice is to play with it
>and learn =)

You can find the exercises in [this](tests/specs/exercises.spec.js) file.

### Answers
You can find the answers / explanation how to use the Gestures in [this](tests/specs/answers.spec.js) file.

### Running them locally
Please check the configuration for:

- [Android](tests/configs/wdio.android.local.emu.conf.js)
- [iOS](tests/configs/wdio.ios.local.sim.conf.js)

Make sure you have the same configuration, so you can run the tests with the following command

- Android: `npm run test.android.local.emu`
- iOS: `npm run test.ios.local.sim`

### Running them on Sauce Labs Emulators/Simulators
You need to upload the apps to the Sauce Labs storage, see [Sauce Labs Storage](#sauce-labs-storage) on how to upload them
to Sauce Labs.

You can find the configurations for here:

- [Android](tests/configs/wdio.android.sauce.emu.conf.js)
- [iOS](tests/configs/wdio.ios.sauce.sim.conf.js)

The tests can be executed on the EU or US Data Center, all depending on what you use. Run the following commands for
the correct Data Centers.

- **Android EU:** `npm run test.android.sauce.emu.eu`
- **Android US:** `npm run test.android.sauce.emu.us`
- **iOS EU:** `npm run test.ios.sauce.sim.eu`
- **iOS US:** `npm run test.ios.sauce.sim.us`

> **NOTE:** When this repository was made Appium 1.19.0 was not available on the Emulator cloud.
>This means the tests will fail when you try to use the newest Android Gesture commands.

### Running them on Sauce Labs Real Devices
You can find the configurations for here:

- [Android](tests/configs/wdio.android.sauce.real.conf.js)
- [iOS](tests/configs/wdio.ios.sauce.real.conf.js)

The tests can be executed on the EU or US Data Center, all depending on what you use. Run the following commands for
the correct Data Centers.

- **Android EU:** `npm run test.android.sauce.real.eu`
- **Android US:** `npm run test.android.sauce.real.us`
- **iOS EU:** `npm run test.ios.sauce.real.eu`
- **iOS US:** `npm run test.ios.sauce.real.us`
