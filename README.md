# NodeJS-Mocha Selenium Examples

This directory contains example scripts and dependencies for running automated Selenium tests on Sauce Labs using **NodeJS** and **Mocha**. You can use these scripts to test your Sauce Labs authentication credentials, the setup of your automated testing environment, and try out Sauce Labs features, like cross-browser testing. Feel free to copy these files or clone the entire directory to your local environment to experiment with creating your own automated Selenium tests!

#### For Demonstration Purposes Only

The code in these scripts is provided on an "AS-IS” basis without warranty of any kind, either express or implied, including without limitation any implied warranties of condition, uninterrupted use, merchantability, fitness for a particular purpose, or non-infringement. These scripts are provided for educational and demonstration purposes only, and should not be used in production. Issues regarding these scripts should be submitted through GitHub. These scripts are maintained by the Technical Services team at Sauce Labs.

<br />

## Description

These procedures will show you to set up a Selenium environment for NodeJS. The scripts in this repository allow you run a simple automated test to validate your Selenium environment and your [saucelabs.com](https://app.saucelabs.com/login) account credentials.

<br />


## Prerequisites

In order to complete these exercises you must complete the following prerequisite installation and configuration steps:

* Install Git
* Install Node and NPM
* Install an IDE (WebStorm, Atom etc.)
* Install Mocha
* Setup Project

### Install Git

[Git](https://git-scm.com/doc) is a version control system that lets you check out code from a repository, 
work with that code on your own branch, and then merge that code with any changes that have been made by other developers. 
Git is an essential tool for distributed development teams, and is a critical component of the continuous 
integration/continuous development toolchain.

#### MacOSX:

1. Go to [https://git-scm.com/downloads](https://git-scm.com/downloads).
2. Under **Downloads**, click **Mac OS X**.
3. When the download completes, double-click the `.dmg` file open the installer package.
4. Double-click the installer package to begin the installation.
    > *Security Warning*
    >
    > You may see a warning message that the package can't be opened because it's not from a recognized developer. 
    If this happens, go to System Preferences > Security and Privacy Settings, and click Open Anyway.
5. Click **Continue** for the installation, and enter your local password to authorize the installation.

#### Windows:

1. Go to [https://git-scm.com/downloads](https://git-scm.com/downloads)
2. Under **Downloads**, click on **Windows**.
3. When the dialog opens asking if you want to allow the app to make changes to your device, click Yes.
4. Follow the steps in the setup wizard to complete the installation. You should accept all the default settings.
<br />

### Install NPM and NodeJS
* [NPM](https://www.npmjs.com/get-npm) is the primary package manager that will help to resolve dependency issues.
    1. Go to https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm).
    2. Click the button that reads "Download Node.js and NPM.
    3. The site will detect which operating system you're currently running and present the requesite packages. 
    4. Choose LTS, and open up the package to run the installer.
    5. Follow the prompts to complete the installation.
    6. To ensure NPM and Node.js installed correctly, open a terminal/shell and run the following command:
    ```
    node -v
    npm -v
    ```
* [NodeJS](https://nodejs.org/en/download/) lets you develop and deploy JavaScript applications on desktops and servers. If you which to download and install the package manually refer to the following instructions:

#### MacOSX:
1. Go to [https://nodejs.org/en/download/](https://nodejs.org/en/download/).
2. Under **LTS**, click **Mac OS Installer X**.
3. When the download completes, double-click the `.pkg` file to open the installer
4. Follow the prompts to complete the installation.

#### Windows:
1. Go to [https://nodejs.org/en/download/](https://nodejs.org/en/download/).
2. Under **LTS**, click **Windows Installer**.
3. When the download completes, double-click the `.msi` file to open the installer
4. Follow the prompts to complete the installation.

### Install an IDE

It's recommended to install and Integrated Developer Environment, or a text editor, to help manage package dependencies, interperters, and overall code execution. There are several options avaialbe, some of them are free and some require payment:

* [Atom IDE](https://ide.atom.io/) free, IDE developed by GitHub.
* [WebStorm](https://www.jetbrains.com/webstorm/) free trial, paid after 30 days, developed by JetBrains.
* [Komodo Edit](https://www.activestate.com/komodo-edit), free, text editor, stripped down version of [Komodo IDE](https://www.activestate.com/products/komodo-ide/features/) (paid version).
* [Brackets](http://brackets.io/) free, text editor, contains a wealth of community plugins and extensions.

### Setup the Project


1. **Create a Project Directory**:
    * Create a directory on your filesystem to store the project files. You can create the directory using the IDE toolbar or the command line:

    ```
    mkdir mocha-tests
    ```

2. **Initialize `package.json`**
    * In your IDE and/or terminal, create a **`package.json`** file by initializing the node package manager:
    
        ```
        cd mocha-tests
        npm init
        ```
    
    * When prompted for details enter the following:
        * name: `mocha-test`
        * entry point: `""`
        * test command: `./node_modules/.bin/mocha`
        
    * Copy and paste the source code from [https://github.com/saucelabs-training/demo-js-mocha/blob/master/web-tests/instant-sauce-mocha-test1.js](https://github.com/saucelabs-training/demo-js-mocha/blob/master/web-tests/instant-sauce-mocha-test1.js) into an empty JavaScript file.
    

2. **Add Mocha and Selenium Packages**
    * Use `npm install` to add the selenium-webdriver module to the project:
    
    ```
    npm install selenium-webdriver --save
    ```
    > Using `--save` adds the package as a dependency to `package.json`
    
    <br />
    
    * Use `npm install` to add the mocha module to the project:
    
    ```
    npm install mocha --save-dev
    ```
    > Using `--save-dev` allows adds the package as a developer dependency to `package.json`
    

<br />

### Run The Test
1. Ensure your `package.json` looks like the following:
    ```angular2
    {
      "name": "mocha-tests",
      "version": "0.0.1",
      "description": "Test Examples using Mocha",
      "main": "",
      "scripts": {
        "test": "mocha"
      },
      "private": true,
      "dependencies": {
        "debug": "^4.1.1",
        "http-errors": "^1.7.1",
        "selenium-webdriver": "3.6.0",
        "mocha": "^5.2.0"
      },
      "devDependencies": {
        "mocha": "^5.2.0"
      }
    }

    ```
2. In a terminal/shell, use `npm` to run the `mocha` test:

    ```
    npm test
    ```
    OR use your IDE Run Configuration.