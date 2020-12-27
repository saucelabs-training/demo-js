# Using Image Injection on Sauce Labs Real Devices
This folder contains examples for using image injection on real devices for:

- [Android real devices on the new Sauce Labs UI](#run-tests-on-sauce-labs-android-real-devices-in-the-new-sauce-labs-ui)
- [iOS real devices on the new Sauce Labs UI](#run-tests-on-sauce-labs-ios-real-devices-in-the-new-sauce-labs-ui)

> NOTE: this feature is **NOT** supported for emulators and simulators!!

## Install dependencies
You can install all dependencies by running the following command

    npm install

This will install all needed dependencies that are listed in the `package.json`-file

> NOTE: Make sure you are in the folder `webdriverio/appium-app/examples/image-injection` when you execute this command

## Important information
### Environment variables for Sauce Labs
The examples in this repository that can run on Sauce Labs use environment variables, make sure you've added the following

    # For Sauce Labs Real devices in the New UI
    export SAUCE_USERNAME=********
    export SAUCE_ACCESS_KEY=*******

### Demo app(s)
The demo app that has been used for all these tests can be found [here](https://github.com/saucelabs/sample-app-mobile/releases).
Be aware of the fact that you need the build for the iOS real device. So please check the file you download.

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
    {"username":"wim.selles","filename":"sample-app-ios-real.ipa","size":4597084,"md5":"33f82765909e4ac7fc9dd5e925b6d2ae","etag":"86e63c580c15530db573833371830323"}
 
## Run tests on Sauce Labs Android real devices in the New Sauce Labs UI
If you want to run the tests on Sauce Labs real devices in the **New Sauce Labs UI** then you can run the Android test with

    // If using the US DC
    npm run test.sauce.rdc.android.us
    
    // If using the EU DC
    npm run test.sauce.rdc.android.eu
    
The tests will be executed on a Samsung Galaxy 10.

See this [config](test/configs/wdio.android.sauce.real.conf.js)-file for more information.

## Run tests on Sauce Labs iOS real devices in the New Sauce Labs UI
If you want to run the tests on Sauce Labs real devices in the **New Sauce Labs UI** then you can run the iOS test with

    // If using the US DC
    npm run test.sauce.rdc.ios.us
    
    // If using the EU DC
    npm run test.sauce.rdc.ios.eu
    
The tests will be executed on a iPhone XS.

See this [config](test/configs/wdio.ios.sauce.real.conf.js)-file for more information.
