# Nightwatch Mobile Web: Update Sauce Status Real Devices
This folder contains a simple set up for Nightwatch mobile web tests on Sauce Labs real devices in the new UI (Unified
Platform) that will automatically update the status in Sauce Labs.

> **NOTE:**\
> This folder doesn't hold all tests like all other frameworks. We, read Sauce Labs, wants to show how Nightwatch can be
> integrated with Legacy Sauce Labs and not show some best practices.\
> The reason for this is that I, read [wswebcreation](https://github.com/wswebcreation), don't recommend using
> Nightwatch as a JavaScript based framework based on the following points:
> - For a JS based framework Nightwatch is way too complex to start with. It holds its own concepts which differ too
>   much from the rest of the JS-based frameworks and aks for a specific Nightwatch skill set which doesn't make you an 
>   *all-round* JS QA-er. 
> - The Nightwatch page-object concept is completely different in comparison to a *normal* JavaScript way of creating 
>   page-objects.
> - Normally a test-file itself should not hold direct references to elements on a page. It should only hold the steps, 
>   methods and assertions to come to a specific end state. 
>   It is a **BAD PRACTICE** to add for example assertions in page-object. A page-object should only hold references to 
>   elements and *helpers* to easily interact with elements on a page. 
> 
> In my opinion, read [wswebcreation](https://github.com/wswebcreation), Nightwatch forces you to implement complex code 
> based on bad practices which makes your framework harder to understand and maintain. 

## Install dependencies
You can install all dependencies by running the following command

    npm install
    
This will install all needed dependencies that are listed in the `package.json`-file

> NOTE: Make sure you are in the folder `nightwatch/webdriver/examples/update-sauce-real-devices` when you execute this 
> command

## Run tests on real devices in the Sauce Labs cloud
You can run your tests on Sauce Labs EU DC with this command for Android

    npm run test.saucelabs.android.eu

and this command for iOS

    npm run test.saucelabs.ios.eu
    
You can run your tests on Sauce Labs US DC with this command for Android

    npm run test.saucelabs.android.us

and this command for iOS

    npm run test.saucelabs.ios.us


