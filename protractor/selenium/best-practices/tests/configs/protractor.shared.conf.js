const {join} = require('path');
const {SpecReporter} = require('jasmine-spec-reporter');

exports.config = {
    // ---------------------------------------------------------------------------
    // ----- The test framework
    // --------------------------------------------------
    // ---------------------------------------------------------------------------
    //
    framework: 'jasmine',

    /**
     * Options to be passed to jasmine.
     *
     * See https://github.com/jasmine/jasmine-npm/blob/master/lib/jasmine.js
     * for the exact options available.
     */
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 180000,
        isVerbose: true,
        includeStackTrace: true,
        // This is prevent the . for being printed in the console
        print: () => {
        },
    },

    // ---------------------------------------------------------------------------
    // ----- What tests to run ---------------------------------------------------
    // ---------------------------------------------------------------------------

    /**
     * Required. Spec patterns are relative to the location of this config.
     *
     * Example:
     * specs: [
     *   'spec/*_spec.js'
     * ]
     */
    specs: [
        join(process.cwd(), 'tests/specs/*.js'),
    ],

    // ---------------------------------------------------------------------------
    // ----- Global test information
    // ---------------------------------------------------------------------------
    //
    baseUrl: 'https://www.saucedemo.com',
    /**
     * Protractor will exit with an error if it sees any command line flags it doesn't
     * recognize. Set disableChecks true to disable this check.
     */
    disableChecks: true,

    /**
     * Enable/disable the WebDriver Control Flow.
     *
     * WebDriverJS (and by extention, Protractor) uses a Control Flow to manage the order in which
     * commands are executed and promises are resolved (see docs/control-flow.md for details).
     * However, as syntax like `async`/`await` are being introduced, WebDriverJS has decided to
     * deprecate the control flow, and have users manage the asynchronous activity themselves
     * (details here: https://github.com/SeleniumHQ/selenium/issues/2969).
     *
     * At the moment, the WebDriver Control Flow is still enabled by default. You can disable it by
     * setting the environment variable `SELENIUM_PROMISE_MANAGER` to `0`.  In a webdriver release in
     * Q4 2017, the Control Flow will be disabled by default, but you will be able to re-enable it by
     * setting `SELENIUM_PROMISE_MANAGER` to `1`.  At a later point, the control flow will be removed
     * for good.
     *
     * If you don't like managing environment variables, you can set this option in your config file,
     * and Protractor will handle enabling/disabling the control flow for you.  Setting this option
     * is higher priority than the `SELENIUM_PROMISE_MANAGER` environment variable.
     *
     * @type {boolean=}
     */
    SELENIUM_PROMISE_MANAGER: false,

    /**
     * A callback function called once protractor is ready and available, and
     * before the specs are executed. If multiple capabilities are being run,
     * this will run once per capability.
     *
     * You can specify a file containing code to run by setting onPrepare to
     * the filename string. onPrepare can optionally return a promise, which
     * Protractor will wait for before continuing execution. This can be used if
     * the preparation involves any asynchronous calls, e.g. interacting with
     * the browser. Otherwise Protractor cannot guarantee order of execution
     * and may start the tests before preparation finishes.
     *
     * At this point, global variable 'protractor' object will be set up, and
     * globals from the test framework will be available. For example, if you
     * are using Jasmine, you can add a reporter with:
     *
     *    jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter(
     *      'outputdir/', true, true));
     *
     * If you need access back to the current configuration object,
     * use a pattern like the following:
     *
     *    return browser.getProcessedConfig().then(function(config) {
     *      // config.capabilities is the CURRENT capability being run, if
     *      // you are using multiCapabilities.
     *      console.log('Executing capability', config.capabilities);
     *    });
     */
    onPrepare: async () => {
        // Use Babel to use ES6 code
        require('@babel/register');

        // Disable Angular, because it's not an angular site
        await browser.waitForAngularEnabled(false);

        // Add the reporter
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: 'none',
                displayFailuresSummary: false,
                displayPendingSummary: false,
                displayPendingSpec: true,
                displaySpecDuration: true,
            },
        }));

        // Set some config data
        const processedConfig = await browser.getProcessedConfig();
        browser.browserName = processedConfig.capabilities.browserName.toLowerCase();

        // Resize the screens if it is a VM
        if (!('platformName' in processedConfig.capabilities)) {
            await browser.driver.manage().window().setSize(1366, 768);
        }

        /**
         * The test-names need to be updated in Sauce Labs.
         * This needs to be done by adding a new reporter like this. We can determine that
         * we use Sauce Labs if the `sauceUser` and `sauceKey` are filled
         */
        if (processedConfig.sauceUser && processedConfig.sauceKey) {
            jasmine.getEnv().addReporter({
                suiteStarted: async (result) => {
                    await browser.executeScript('sauce:job-name=' + result.fullName);
                },
                specStarted: async (result) => {
                    await browser.executeScript('sauce:context=' + result.fullName);
                },
                specDone: async (result) => {
                    // If there are errors please update the error to Sauce Labs
                    if (result.failedExpectations.length > 0) {
                        const promisses = result.failedExpectations.map(async error => {
                            const errorUpdate = await browser.executeScript('sauce:context=' + error.stack);

                            return errorUpdate;
                        });

                        await Promise.all(promisses);
                    }
                },
            });
        }
    },
};
