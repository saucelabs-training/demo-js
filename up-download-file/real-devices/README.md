# Uploading and downloading files from Sauce Labs
This folder contains examples for using up / download files from:

- [Android real devices on the new Sauce Labs UI](#run-tests-on-sauce-labs-android-real-devices-in-the-new-sauce-labs-ui)
- [Android real devices on the Legacy RDC cloud](#run-tests-on-sauce-labs-android-real-devices-in-the-legacy-rdc)

## Install dependencies
You can install all dependencies by running the following command

    npm install

This will install all needed dependencies that are listed in the `package.json`-file

> NOTE: Make sure you are in the folder `up-download-file/real-devices` when you execute this command

## Important information
### Uploading files to Android real devices
The market of Android is being controlled by a lot of different vendors, this also means a lot of different file structures 
for where to upload your file to. This makes it a challenge to determine which folder on the device you 
need to upload the file to. 

The advice is that you use a dedicated device, so you always know the file structure and don't need to over complicate 
the uploading script.

### Environment variables for Sauce Labs
The examples in this repository that can run on Sauce Labs use environment variables, make sure you've added the following

    # For Sauce Labs Real devices in the New UI
    export SAUCE_USERNAME=********
    export SAUCE_ACCESS_KEY=*******
    
    # For the Legacy RDC
    export SAUCE_RDC_EU_ACCESS_KEY_ANDROID=********

## Uploading files
### Android Real devices
The script on how to use this can be found [here](./test/specs/upload.image.android.real.spec.js) and the execution 
will look like this

![Upload Android real device](./assets/upload-real-device.gif)


## Run tests on Sauce Labs Android real devices in the New Sauce Labs UI
If you want to run the tests on Sauce Labs real devices in the **New Sauce Labs UI** then you can run the Android test with

    // If using the US DC
    npm run test.sauce.rdc.android.us
    
    // If using the EU DC
    npm run test.sauce.rdc.android.eu
    
The tests will be executed on a Samsung Galaxy 10.

See this [config](./test/configs/wdio.android.sauce.real.conf.js)-file for more information.

## Run tests on Sauce Labs Android real devices in the Legacy RDC
If you want to run the tests on Sauce Labs real devices in the **Legacy RDC** then you can run the Android test with

    // If using the US DC
    npm run test.legacy.rdc.android.us
    
    // If using the EU DC
    npm run test.legacy.rdc.android.eu
    
The tests will be executed and Android 7, 8, 9 and 10.    

See this [config](./test/configs/wdio.android.legacy.rdc.conf.js)-file for more information.
