# WebdriverIO
This folder contains set up for WebdriverIO which will run the browser tests on the Real Device Cloud (Unified Platform) 
of Sauce Labs.\
Please check the configuration file [here](test/configs/wdio.saucelabs.conf.js) to see all possible options. There is a
reference link to Real Device Testing Capabilities which can also be found [here](https://wiki.saucelabs.com/display/DOCS/Appium+Capabilities+for+Real+Device+Testing).\
The [`wdio-sauce-service`](https://webdriver.io/docs/sauce-service.html) will take care of:
- connecting to the correct Data Center
- updating the tests with the correct status 

## Install dependencies
You can install all dependencies by running the following command

    npm install
    
This will install all needed dependencies that are listed in the `package.json`-file

> NOTE: Make sure you are in the folder `webdriverio/web/appium` when you execute this command

## Run tests on Sauce Labs
You can run your tests on Sauce Labs US DC with this command

    npm run test.saucelabs.us

You can run your tests on Sauce Labs EU DC with this command

    npm run test.saucelabs.eu
