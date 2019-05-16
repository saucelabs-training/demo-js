# JavaScript Prerequisites

* Install [Git](#install-git)
* Install [NPM/Node](#install-npm-and-nodejs)
* Install [a Framework](#install-a-test-framework)
    * [Mocha](#install-mocha)
    * [Jasmine](#install-jasmine)
* (Optional) Install an [IDE](~/prerequisites.md#install-an-ide)
    
<br />

### Install Git

[Git](https://git-scm.com/doc) is a version control system that lets you check out code from a repository, 
work with that code on your own branch, and then merge that code with any changes that have been made by other developers. 
Git is an essential tool for distributed development teams, and is a critical component of the continuous 
integration/continuous development toolchain.

##### MacOSX:

1. Go to [https://git-scm.com/downloads](https://git-scm.com/downloads).
2. Under **Downloads**, click **Mac OS X**.
3. When the download completes, double-click the `.dmg` file open the installer package.
4. Double-click the installer package to begin the installation.
    > *Security Warning*
    >
    > You may see a warning message that the package can't be opened because it's not from a recognized developer. 
    If this happens, go to System Preferences > Security and Privacy Settings, and click Open Anyway.
5. Click **Continue** for the installation, and enter your local password to authorize the installation.

##### Windows:

1. Go to [https://git-scm.com/downloads](https://git-scm.com/downloads)
2. Under **Downloads**, click on **Windows**.
3. When the dialog opens asking if you want to allow the app to make changes to your device, click Yes.
4. Follow the steps in the setup wizard to complete the installation. You should accept all the default settings.

<br />

### Install NPM and NodeJS
[NPM](https://www.npmjs.com/get-npm) is the primary package manager that will help to resolve dependency issues.

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
   
[NodeJS](https://nodejs.org/en/download/) lets you develop and deploy JavaScript applications on desktops and servers. If you which to download and install the package manually refer to the following instructions:

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

<br />

### Install a Test Framework

A testing framework is a set of guidelines/rules for desiging test cases. Frameworks themselves consist of test and reporting classes that allow QA engineers to test efficiently. This repo only supports mocha, jasmine, and protractor. For more information regarding other libraries checkout our GitHub repo that catalogs all [sample test frameworks](https://github.com/saucelabs-sample-test-frameworks).

##### Install Mocha
1. Open a terminal (OSX) or command prompt (Windows)
2. Navigate to the mocha-examples directory:
    ```
    cd ~/on-boarding-modules/mocha-examples
    ```
3. Resolve the package dependencies:
    ```
    npm install
    ```
4. Run tests:
    ```
    npm test
    ```

##### Install Jasmine
1. Open a terminal (OSX) or command prompt (Windows)
2. Navigate to the jasmine-examples directory:
    ```
    cd ~/on-boarding-modules/jasmine-examples
    ```
3. Resolve the package dependencies:
    ```
    npm install
    ```
4. Run tests:
    ```
    npm test
    ```

<br />

### Install an IDE

It's recommended to install and Integrated Developer Environment, or a text editor, to help manage package dependencies, interperters, and overall code execution. There are several options available, some of them are free and some require payment:

* [Atom IDE](https://ide.atom.io/) free, IDE developed by GitHub.
* [WebStorm](https://www.jetbrains.com/webstorm/) free trial, paid after 30 days, developed by JetBrains.
* [Komodo Edit](https://www.activestate.com/komodo-edit), free, text editor, stripped down version of [Komodo IDE](https://www.activestate.com/products/komodo-ide/features/) (paid version).
* [Brackets](http://brackets.io/) free, text editor, contains a wealth of community plugins and extensions.
