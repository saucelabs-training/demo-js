# WebdriverIO Native App Best Practices

This folder contains best practices for WebdriverIO Native App testing:

- for Android Emulators/Real Devices and iOS Simulators/Real Devices
- Fully W3C compliant
- in Async Mode
- with TypeScript
- including the use of Page Objects.

It:

- provides a rich set of helpers for Gestures, deep linking and element interactions
- provides some best practices for handling the keyboard and scroll to elements
- and many more

## Install dependencies

You can install all dependencies by running the following command

    npm install

This will install all needed dependencies that are listed in the `package.json`-file

> NOTE: Make sure you are in the folder `webdriverio/appium-app/best-practices` when you execute this command

## Download / Upload Apps

You can download the used apps from [here](https://github.com/saucelabs/my-demo-app-rn/releases/). Make sure you rename the apps to:

- Android Emulators / Real Devices: `Android-MyDemoAppRN.*.*.*.build-***.apk` => `Android.MyDemoAppRN.apk`
- iOS Real Devices: `iOS-Real-Device-MyRNDemoApp.*.*.*-*.ipa` => `MyRNDemoApp.ipa`
- iOS Simulators: `iOS-Simulator-MyRNDemoApp.*.*.*-*.zip` => `MyRNDemoApp.zip`

And manually upload them to the preferred Data Center, see [this](https://docs.saucelabs.com/mobile-apps/live-testing/live-mobile-app-testing/#uploading-an-app) for the instructions.

## Run tests on Sauce Labs

You can run your tests on Sauce Labs US DC with this command

    # Run Android Real Devices Tests
    npm run test.saucelabs.android.rdc.us
    # Run iOS Real Devices Tests
    npm run test.saucelabs.ios.rdc.us
    # Run Android Emulator Tests
    npm run test.saucelabs.android.emu.us
    # Run iOS Simulators Tests
    npm run test.saucelabs.ios.sim.us

You can run your tests on Sauce Labs EU DC with this command

    # Run Android Real Devices Tests
    npm run test.saucelabs.android.rdc.eu
    # Run iOS Real Devices Tests
    npm run test.saucelabs.ios.rdc.eu
    # Run Android Emulator Tests
    npm run test.saucelabs.android.emu.eu
    # Run iOS Simulators Tests
    npm run test.saucelabs.ios.sim.eu

It will spin up multiple real devices / Android Emulators / iOS simulators which you can find here:

- [Android Real Devices](test/configs/wdio.android.sauce.rdc.conf.ts)
- [iOS Real Devices](test/configs/wdio.ios.sauce.rdc.conf.ts)
- [Android Emulators](test/configs/wdio.android.sauce.emu.conf.ts)
- [iOS Simulators](test/configs/wdio.ios.sauce.sim.conf.ts)

<details>
    <summary>Click to expand and see logs from running this on Sauce Labs for Android Real Devices</summary>

```logs
npm run test.saucelabs.android.rdc.eu         took  19s
yarn run v1.22.17
warning ../../../../../../../package.json: No license field
$ RDC=true REGION=eu npx wdio test/configs/wdio.android.sauce.rdc.conf.ts

Execution of 9 workers started at 2022-02-11T10:37:15.170Z

[0-3] RUNNING in com.saucelabs.mydemoapp.rn.MainActivity - /test/specs/checkout.complete.spec.ts
[0-4] RUNNING in com.saucelabs.mydemoapp.rn.MainActivity - /test/specs/checkout.payment.spec.ts
[0-1] RUNNING in com.saucelabs.mydemoapp.rn.MainActivity - /test/specs/catalog.spec.ts
[0-2] RUNNING in com.saucelabs.mydemoapp.rn.MainActivity - /test/specs/checkout.address.spec.ts
[0-5] RUNNING in com.saucelabs.mydemoapp.rn.MainActivity - /test/specs/checkout.review.order.spec.ts
[0-6] RUNNING in com.saucelabs.mydemoapp.rn.MainActivity - /test/specs/item.details.spec.ts
[0-7] RUNNING in com.saucelabs.mydemoapp.rn.MainActivity - /test/specs/login.spec.ts
[0-0] RUNNING in com.saucelabs.mydemoapp.rn.MainActivity - /test/specs/cart.spec.ts
[0-8] RUNNING in com.saucelabs.mydemoapp.rn.MainActivity - /test/specs/navigation.spec.ts
[0-3] PASSED in com.saucelabs.mydemoapp.rn.MainActivity - /test/specs/checkout.complete.spec.ts
[0-8] PASSED in com.saucelabs.mydemoapp.rn.MainActivity - /test/specs/navigation.spec.ts
[0-5] PASSED in com.saucelabs.mydemoapp.rn.MainActivity - /test/specs/checkout.review.order.spec.ts
[0-6] PASSED in com.saucelabs.mydemoapp.rn.MainActivity - /test/specs/item.details.spec.ts
[0-1] PASSED in com.saucelabs.mydemoapp.rn.MainActivity - /test/specs/catalog.spec.ts
[0-7] PASSED in com.saucelabs.mydemoapp.rn.MainActivity - /test/specs/login.spec.ts
[0-2] PASSED in com.saucelabs.mydemoapp.rn.MainActivity - /test/specs/checkout.address.spec.ts
[0-0] PASSED in com.saucelabs.mydemoapp.rn.MainActivity - /test/specs/cart.spec.ts
[0-4] PASSED in com.saucelabs.mydemoapp.rn.MainActivity - /test/specs/checkout.payment.spec.ts

 "spec" Reporter:
------------------------------------------------------------------
[10.102.56.22:16007 Android 12 #0-3] Running: 10.102.56.22:16007 on Android 12
[10.102.56.22:16007 Android 12 #0-3] Session ID: 1b2f767c-d3be-4dfb-b206-7c1d903ba943
[10.102.56.22:16007 Android 12 #0-3]
[10.102.56.22:16007 Android 12 #0-3] » /test/specs/checkout.complete.spec.ts
[10.102.56.22:16007 Android 12 #0-3] Checkout Complete
[10.102.56.22:16007 Android 12 #0-3]    ✓ should be able to continue shopping
[10.102.56.22:16007 Android 12 #0-3]
[10.102.56.22:16007 Android 12 #0-3] 1 passing (3.5s)
[10.102.56.22:16007 Android 12 #0-3]
[10.102.56.22:16007 Android 12 #0-3] Check out job at https://app.eu-central-1.saucelabs.com/tests/f9fc7a63e30a4df6a848225325ac1daf
------------------------------------------------------------------
[10.102.48.21:16017 Android 11 #0-8] Running: 10.102.48.21:16017 on Android 11
[10.102.48.21:16017 Android 11 #0-8] Session ID: 96abc90a-0945-40ba-8a3f-0b450c8818f7
[10.102.48.21:16017 Android 11 #0-8]
[10.102.48.21:16017 Android 11 #0-8] » /test/specs/navigation.spec.ts
[10.102.48.21:16017 Android 11 #0-8] Navigation
[10.102.48.21:16017 Android 11 #0-8]    ✓ should be able to navigate to all screens from the menu
[10.102.48.21:16017 Android 11 #0-8]
[10.102.48.21:16017 Android 11 #0-8] 1 passing (32s)
[10.102.48.21:16017 Android 11 #0-8]
[10.102.48.21:16017 Android 11 #0-8] Check out job at https://app.eu-central-1.saucelabs.com/tests/27c2856c9f68475eaf482d187d4fb359
------------------------------------------------------------------
[10.102.56.15:16009 Android 11 #0-5] Running: 10.102.56.15:16009 on Android 11
[10.102.56.15:16009 Android 11 #0-5] Session ID: 1a1c7295-78b6-4fad-9be4-135773e26130
[10.102.56.15:16009 Android 11 #0-5]
[10.102.56.15:16009 Android 11 #0-5] » /test/specs/checkout.review.order.spec.ts
[10.102.56.15:16009 Android 11 #0-5] Checkout Review Order
[10.102.56.15:16009 Android 11 #0-5]    ✓ should verify that all details are shown properly when 1 item is added
[10.102.56.15:16009 Android 11 #0-5]    ✓ should verify that the billing address can be different
[10.102.56.15:16009 Android 11 #0-5]    ✓ should verify multiple items could have been added
[10.102.56.15:16009 Android 11 #0-5]    ✓ should be able to place an order
[10.102.56.15:16009 Android 11 #0-5]
[10.102.56.15:16009 Android 11 #0-5] 4 passing (25.2s)
[10.102.56.15:16009 Android 11 #0-5]
[10.102.56.15:16009 Android 11 #0-5] Check out job at https://app.eu-central-1.saucelabs.com/tests/7da20dd60c47443fb5c3039b497f191f
------------------------------------------------------------------
[10.102.56.11:16006 Android 9 #0-6] Running: 10.102.56.11:16006 on Android 9
[10.102.56.11:16006 Android 9 #0-6] Session ID: c96f493f-1982-42b2-8f7c-07ac257cfb08
[10.102.56.11:16006 Android 9 #0-6]
[10.102.56.11:16006 Android 9 #0-6] » /test/specs/item.details.spec.ts
[10.102.56.11:16006 Android 9 #0-6] Item Details
[10.102.56.11:16006 Android 9 #0-6]    ✓ should be able to navigate back
[10.102.56.11:16006 Android 9 #0-6]    ✓ should be able submit a review
[10.102.56.11:16006 Android 9 #0-6]    ✓ should be able add items to the cart
[10.102.56.11:16006 Android 9 #0-6]    ✓ should be able validate the counter
[10.102.56.11:16006 Android 9 #0-6]
[10.102.56.11:16006 Android 9 #0-6] 4 passing (52.6s)
[10.102.56.11:16006 Android 9 #0-6]
[10.102.56.11:16006 Android 9 #0-6] Check out job at https://app.eu-central-1.saucelabs.com/tests/cf5511adbcdd49318b15cbe30be289ac
------------------------------------------------------------------
[10.102.48.17:16021 Android 10 #0-1] Running: 10.102.48.17:16021 on Android 10
[10.102.48.17:16021 Android 10 #0-1] Session ID: 238d00f5-2a14-4065-ae09-99ee7446111c
[10.102.48.17:16021 Android 10 #0-1]
[10.102.48.17:16021 Android 10 #0-1] » /test/specs/catalog.spec.ts
[10.102.48.17:16021 Android 10 #0-1] Catalog
[10.102.48.17:16021 Android 10 #0-1]    ✓ should be able to load the initial catalog screen
[10.102.48.17:16021 Android 10 #0-1]    ✓ should be able submit a review
[10.102.48.17:16021 Android 10 #0-1]    ✓ should be able to sort the items
[10.102.48.17:16021 Android 10 #0-1]    ✓ should be able to open the Backpack
[10.102.48.17:16021 Android 10 #0-1]    ✓ should be able to open the Bike Light
[10.102.48.17:16021 Android 10 #0-1]    ✓ should be able to open the Bolt T-Shirt
[10.102.48.17:16021 Android 10 #0-1]    ✓ should be able to open the Fleece Jacket
[10.102.48.17:16021 Android 10 #0-1]    ✓ should be able to open the Onesie
[10.102.48.17:16021 Android 10 #0-1]    ✓ should be able to open the Test.allTheThings()
[10.102.48.17:16021 Android 10 #0-1]
[10.102.48.17:16021 Android 10 #0-1] 9 passing (1m 5.4s)
[10.102.48.17:16021 Android 10 #0-1]
[10.102.48.17:16021 Android 10 #0-1] Check out job at https://app.eu-central-1.saucelabs.com/tests/5b52b89c19aa4a3ebc942086e0f74adf
------------------------------------------------------------------
[10.102.56.14:16020 Android 12 #0-7] Running: 10.102.56.14:16020 on Android 12
[10.102.56.14:16020 Android 12 #0-7] Session ID: 8966ca72-0ceb-4c54-b109-cfd23d9ea565
[10.102.56.14:16020 Android 12 #0-7]
[10.102.56.14:16020 Android 12 #0-7] » /test/specs/login.spec.ts
[10.102.56.14:16020 Android 12 #0-7] Login
[10.102.56.14:16020 Android 12 #0-7]    ✓ should be able to login with valid credentials
[10.102.56.14:16020 Android 12 #0-7]    ✓ should be able to login through the autofill
[10.102.56.14:16020 Android 12 #0-7]    ✓ should be able to logout
[10.102.56.14:16020 Android 12 #0-7]    ✓ should validate that an error message is shown when no username is provided
[10.102.56.14:16020 Android 12 #0-7]    ✓ should validate that an error message is shown when no password is provided
[10.102.56.14:16020 Android 12 #0-7]    ✓ should validate that an error message is shown when invalid credentials are provided
[10.102.56.14:16020 Android 12 #0-7]    ✓ should validate that an error message is shown when credentials of a locked out user are provided
[10.102.56.14:16020 Android 12 #0-7]    ✓ should validate that an error message is shown when credentials of a locked out user are provided through the autofill
[10.102.56.14:16020 Android 12 #0-7]
[10.102.56.14:16020 Android 12 #0-7] 8 passing (1m 6.6s)
[10.102.56.14:16020 Android 12 #0-7]
[10.102.56.14:16020 Android 12 #0-7] Check out job at https://app.eu-central-1.saucelabs.com/tests/c172d435139d4354be5a8aef0df9b2df
------------------------------------------------------------------
[10.102.56.12:16007 Android 9 #0-2] Running: 10.102.56.12:16007 on Android 9
[10.102.56.12:16007 Android 9 #0-2] Session ID: f2ca71f1-9b7a-4f50-acc0-e9622cf9bcb3
[10.102.56.12:16007 Android 9 #0-2]
[10.102.56.12:16007 Android 9 #0-2] » /test/specs/checkout.address.spec.ts
[10.102.56.12:16007 Android 9 #0-2] Checkout Address Page
[10.102.56.12:16007 Android 9 #0-2]    ✓ should show all errors when an empty form is submitted
[10.102.56.12:16007 Android 9 #0-2]    ✓ should be able to submit minimal data
[10.102.56.12:16007 Android 9 #0-2]    ✓ should be able to submit with all data
[10.102.56.12:16007 Android 9 #0-2]
[10.102.56.12:16007 Android 9 #0-2] 3 passing (58.8s)
[10.102.56.12:16007 Android 9 #0-2]
[10.102.56.12:16007 Android 9 #0-2] Check out job at https://app.eu-central-1.saucelabs.com/tests/9df22984259a497d88202046c8390440
------------------------------------------------------------------
[10.102.48.12:16012 Android 9 #0-0] Running: 10.102.48.12:16012 on Android 9
[10.102.48.12:16012 Android 9 #0-0] Session ID: 211a86af-7dbd-4878-a1f9-24875a305aff
[10.102.48.12:16012 Android 9 #0-0]
[10.102.48.12:16012 Android 9 #0-0] » /test/specs/cart.spec.ts
[10.102.48.12:16012 Android 9 #0-0] Cart
[10.102.48.12:16012 Android 9 #0-0]    ✓ should not show any bought products and allow you to go back to the catalog
[10.102.48.12:16012 Android 9 #0-0]    ✓ should verify that the screen will be updated when one item will be removed with the counter
[10.102.48.12:16012 Android 9 #0-0]    ✓ should verify that the screen will be updated when one item will be added with the counter
[10.102.48.12:16012 Android 9 #0-0]    ✓ should be able to remove a single item with multiple orders from the cart with the remove item button
[10.102.48.12:16012 Android 9 #0-0]    ✓ should be able to remove a second item with the remove item button
[10.102.48.12:16012 Android 9 #0-0]    ✓ should navigate to the login screen when a user wants to proceed to checkout but was never logged in
[10.102.48.12:16012 Android 9 #0-0]    ✓ should navigate to the checkout screen when a user was already logged in
[10.102.48.12:16012 Android 9 #0-0]
[10.102.48.12:16012 Android 9 #0-0] 7 passing (1m 26.8s)
[10.102.48.12:16012 Android 9 #0-0]
[10.102.48.12:16012 Android 9 #0-0] Check out job at https://app.eu-central-1.saucelabs.com/tests/798ada0a337c41a0abc07adf44323956
------------------------------------------------------------------
[10.102.56.12:16010 Android 9 #0-4] Running: 10.102.56.12:16010 on Android 9
[10.102.56.12:16010 Android 9 #0-4] Session ID: 24fc045f-91f8-4b4d-9c76-e29c31dffe37
[10.102.56.12:16010 Android 9 #0-4]
[10.102.56.12:16010 Android 9 #0-4] » /test/specs/checkout.payment.spec.ts
[10.102.56.12:16010 Android 9 #0-4] Checkout Payment Page
[10.102.56.12:16010 Android 9 #0-4]    ✓ should show all card data errors when an empty card data form is submitted
[10.102.56.12:16010 Android 9 #0-4]    ✓ should show card data errors after entering incorrect data
[10.102.56.12:16010 Android 9 #0-4]    ✓ should show all billing address errors when an empty billing address form is submitted
[10.102.56.12:16010 Android 9 #0-4]    ✓ should be able to submit card data
[10.102.56.12:16010 Android 9 #0-4]    ✓ should be able to submit card and minimal billing address data
[10.102.56.12:16010 Android 9 #0-4]    ✓ should be able to submit card and all billing address data
[10.102.56.12:16010 Android 9 #0-4]
[10.102.56.12:16010 Android 9 #0-4] 6 passing (1m 57.8s)
[10.102.56.12:16010 Android 9 #0-4]
[10.102.56.12:16010 Android 9 #0-4] Check out job at https://app.eu-central-1.saucelabs.com/tests/651611ec1d54429aa221122ae4ac44bc


Spec Files:      9 passed, 9 total (100% completed) in 00:03:28
```

</details>
