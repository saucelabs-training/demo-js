# Protractor "Appium Web"
> **NOTE:**\
> If you look at Protractor you can get the feeling that, in spite of all the effort that the Open Source Community is 
> putting into it, it is not being maintained by Google anymore.\
> To be honest, [I'm](https://github.com/wswebcreation) pretty sure about it. If you look at the facts, see image below,
> you will notice that:
> - the amount of issues is increasing
> - the amount of PR's is increasing
> - the activity in the project is decreasing
> - the last official functional release was from end of 2018 (adding support for Sauce Labs EU data center) 
>
> This is not giving me a good feeling. As a contributor to the Protractor project in the last years, I also have the 
> feeling that there won't be a big chance that this is going to change.
> I'm not the only one who thinks about Protractor like this, please take a look at
> [this great article](https://dev.to/davert/5-reasons-you-should-not-use-protractor-in-2019-3l4b) which might also give you some insights.\
>
> Last but not leat, even though Protractor released version 7.0, **NO NEW FUNCTIONALITY AND OR BUGFIXES** were
> released. This was mainly a release to support Node.js 10.
>
> **Also be aware of the fact that Protractor DOES NOT SUPPORT W3C!** 
>
>![Protractor Support](docs/protractor-support.jpg)

This folder contains a sample on how to set up Protractor together with the Sauce Labs Real Device cloud. Please check
the `onPrepare`-hook in the [protractor.shared.conf.js](./tests/configs/protractor.shared.conf.js)-file for updating
the test status in Sauce Labs. Protractor **CAN NOT** automatically do that for you. 
Also check the [protractor.saucelabs.conf.js](./tests/configs/protractor.saucelabs.conf.js) configuration-file for the 
configuration and extra comments for optimal usage with Sauce Labs.

## Install dependencies
You can install all dependencies by running the following command

    npm install
    
This will install all needed dependencies that are listed in the `package.json`-file

> NOTE: Make sure you are in the folder `protractor/selenium/best-practices` when you execute this command

## Run tests on Sauce Labs
You can run your tests on Sauce Labs US DC with this command

    npm run test.saucelabs.us

You can run your tests on Sauce Labs EU DC with this command

    npm run test.saucelabs.eu

Logs will look like this

```log
npm run test.saucelabs.eu                                              

> protractor-sauce-best-practices@1.0.0 test.saucelabs.eu /Users/sauce-training/demo-js/protractor/appium-web/examples/real-devices
> env DATE="$(date)" REGION=eu protractor tests/configs/protractor.saucelabs.conf.js

[12:25:25] I/launcher - Running 2 instances of WebDriver
....[12:25:56] I/testLogger - 
------------------------------------

[12:25:56] I/testLogger - [chrome #01] PID: 97950
[chrome #01] Specs: /Users/sauce-training/demo-js/protractor/appium-web/examples/real-devices/tests/specs/login.spec.js
[chrome #01] 
[chrome #01] [12:25:25] I/hosted - Using the selenium server at https://ondemand.eu-central-1.saucelabs.com/wd/hub/
[chrome #01] Jasmine started
[chrome #01] 
[chrome #01]   LoginPage
[chrome #01]     ✓ should be able to login with a standard user
[chrome #01]     ✓ should not be able to login with a locked user
[chrome #01] 
[chrome #01] Executed 2 of 2 specs SUCCESS in 9 secs.

[12:25:56] I/testLogger - 

[12:25:56] I/launcher - 1 instance(s) of WebDriver still running
[12:25:56] I/testLogger - 
------------------------------------

[12:25:56] I/testLogger - [safari #11] PID: 97951
[safari #11] Specs: /Users/sauce-training/demo-js/protractor/appium-web/examples/real-devices/tests/specs/login.spec.js
[safari #11] 
[safari #11] [12:25:25] I/hosted - Using the selenium server at https://ondemand.eu-central-1.saucelabs.com/wd/hub/
[safari #11] Jasmine started
[safari #11] 
[safari #11]   LoginPage
[safari #11]     ✓ should be able to login with a standard user
[safari #11]     ✓ should not be able to login with a locked user
[safari #11] 
[safari #11] Executed 2 of 2 specs SUCCESS in 8 secs.

[12:25:56] I/testLogger - 

[12:25:56] I/launcher - 0 instance(s) of WebDriver still running
[12:25:56] I/launcher - chrome #01 passed
[12:25:56] I/launcher - safari #11 passed
✨  Done in 31.76s.
```
