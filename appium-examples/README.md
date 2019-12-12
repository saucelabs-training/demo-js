## NodeJS Appium Example Scripts

These demonstration scripts allow you to run an automated Appium tests on Sauce Labs platforms.

> ###### Disclaimer:
> The code in these scripts is provided on an "AS-IS" basis without warranty of any kind, either express or implied, including without limitation any implied warranties of condition, uninterrupted use, merchantability, fitness for a particular purpose, or non-infringement. These scripts are provided for educational and demonstration purposes only, and should not be used in production. Issues regarding these scripts should be submitted through GitHub. These scripts are maintained by the Technical Services team at Sauce Labs.
>
> Some examples in this repository, such as `appium-examples` and `headless-examples`, may require a different account tier beyond free trial. Please contact the [Sauce Labs Sales Team](https://saucelabs.com/contact) for support and information.

<br />

### Prerequisites

* Install [node](https://nodejs.org/en/download/)
* Install [WebdriverIO](https://webdriver.io/docs/gettingstarted.html#install-webdriverio-cli)

### Environment Setup

1. Set Global Dependencies
    * Install [node](https://nodejs.org/en/download/)
    * Or Install NPM with [Homebrew](http://brew.sh/)
    ```
    $ brew install npm
    ```
    * Clone this repository into a directory of your choice.
    ```
    $ git clone https://github.com/saucelabs-training/demo-js.git
    ```
    * Navigate to the `demo-js/appium-examples`, and choose your desired framework + the`wdio` project version, for example:
    ```
    $ cd demo-js/wdio5/mocha-framework
    ```

2. Set Sauce Credentials
    * In the terminal [export your Sauce Labs Credentials as environmental variables](https://wiki.saucelabs.com/display/DOCS/Best+Practice%3A+Use+Environment+Variables+for+Authentication+Credentials):
    ```
    $ export SAUCE_USERNAME=<your Sauce Labs username>
    $ export SAUCE_ACCESS_KEY=<your Sauce Labs access key>
    ```
 
 <br />
 
### Running the Tests

1. Choose and navigate to the desired test framework:
    * `wdio4/mocha-framework`
    * `wdio5/mocha-framework`
2. Navigate to the desired directory:
    * for running tests on emulators and simulators: `emusim`
    * for running tests on real devices: `rdc`
3. Resolve project dependencies and install packages (Use `sudo` if necessary)
	```
	$ npm install
	```
4. Run the following command to run tests in Parallel:
	```
	$ npm test
	```
5. Visit the [Sauce Labs Dashboard](https://saucelabs.com/beta/dashboard/) to see the results.

<br />

### Advice and Troubleshooting

There may be additional latency when using a remote webdriver to run tests on Sauce Labs, therefore timeouts or "Waits" may need to be increased. Please read the following wiki page on [tips regarding explicit waits](https://wiki.saucelabs.com/display/DOCS/Best+Practice%3A+Use+Explicit+Waits)

<br />

##### More Information
* [Sauce Labs Documentation](https://wiki.saucelabs.com/)
* [Appium Documentation](http://appium.io/slate/en/master/)
* [WebdriverIO Documentation](https://webdriver.io/docs/gettingstarted.html)
* [Node Documentation](https://nodejs.org/en/docs/)