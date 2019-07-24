# JavaScript Selenium Examples

[![CircleCI](https://circleci.com/gh/saucelabs-training/demo-js.svg?style=svg)](https://circleci.com/gh/saucelabs-training/demo-js) [![Sauce Test Status](https://saucelabs.com/buildstatus/jtack4970)](https://app.saucelabs.com/u/jtack4970)

This directory contains example scripts for running automated Selenium tests on Sauce Labs using **NodeJS**. You can use these scripts to test your Sauce Labs authentication credentials, setup of your automated testing environment, and try out Sauce Labs features.
> ##### For Demonstration Purposes Only

> The code in these scripts is provided on an "AS-IS” basis without warranty of any kind, either express or implied, including without limitation any implied warranties of condition, uninterrupted use, merchantability, fitness for a particular purpose, or non-infringement. These scripts are provided for educational and demonstration purposes only, and should not be used in production. Issues regarding these scripts should be submitted through GitHub. These scripts are maintained by the Technical Services team at Sauce Labs.

<br />


## Prerequisites

In order to run these scripts you must complete the following prerequisite steps:

* Install [Git](~/prerequisites.md#install-git)
* Install [NPM/Node](~/prerequisites.md#install-npm-and-nodejs)
* Install [a Framework](~/prerequisites.md#install-a-test-framework)
* (Optional) Install an [IDE](~/prerequisites.md#install-an-ide)

<br />

### Run A Sample Test


1. Clone the Repository:

    ```
    git clone https://github.com/saucelabs-training/demo-js.git
    ```

2. Navigate to the desired directory (e.g.):
    ```
    cd mocha-chai-tests
    ```
3. Resolve Dependencies (via `package.json`)
    
    ```
    npm install
    ```
4. Run the Test
    
    ```
    npm test
    ```
    You should see the following output in the console:
    ```
    > demo-js@0.0.1 test /path/to/demo-js
    > node on-boarding-modules/node-examples/module2-test.js
    
    Test Passed!

    ```
5. Visit the [saucelabs.com automated build page](https://app.saucelabs.com/dashboard/builds) and select the build `Onboarding Sample App - NodeJS` to see the following test case:
    
    ![2-user-site](2-user-site.png)
    
<br />
