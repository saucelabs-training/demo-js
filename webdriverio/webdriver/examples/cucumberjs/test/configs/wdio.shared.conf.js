const { generate } = require('multiple-cucumber-html-reporter');
const { removeSync } = require('fs-extra');

/**
 * This file holds all the shared config options
 * The rest of the files will extend options
 * More information about the config can be found
 * here https://webdriver.io/docs/configurationfile.html
 */
exports.config = {
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './test/features/**/*.feature'
    ],
    // ============
    // Capabilities
    // ============
    maxInstances: 100,
    // capabilities can be found in the `wdio.local.chrome.conf.js` or `wdio.saucelabs.conf.js`
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'silent',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    // Added the `cucumberjs-json`, see
    // https://github.com/wswebcreation/wdio-cucumberjs-json-reporter
    reporters: ['spec','cucumberjs-json'],
    // If you are using Cucumber you need to specify the location of your step definitions.
    // See https://webdriver.io/docs/frameworks.html#using-cucumber for more information about the properties
    cucumberOpts: {
        require: ['./test/step-definitions/**/*.steps.js'],
        backtrace: false,
        // requireModule: ['@babel/register'],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },

    // ========
    // Services
    // ========
    services: [],

    // =====
    // Hooks
    // =====
    onPrepare: () => {
        // Remove the `.tmp/` folder that holds the json and report files
        removeSync('.tmp/');
    },
    onComplete: () => {
        // Generate the report when it all tests are done
        generate({
            // Required
            // This part needs to be the same path where you store the JSON files
            // default = '.tmp/json/'
            jsonDir: '.tmp/json/',
            reportPath: '.tmp/report/',
            // for more options see https://github.com/wswebcreation/multiple-cucumber-html-reporter#options
        });
    },
}
