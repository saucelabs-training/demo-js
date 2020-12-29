const {config} = require('./protractor.shared.conf');

// ---------------------------------------------------------------------------
// ----- How to connect to Browser Drivers -----------------------------------
// ---------------------------------------------------------------------------
/**
 * The address of a running Selenium Server. If specified, Protractor will
 * connect to an already running instance of Selenium. This usually looks like
 * seleniumAddress: 'http://localhost:4444/wd/hub'
 */
config.seleniumAddress = 'http://localhost:4444/wd/hub/';
/**
 * If true, Protractor will connect directly to the browser Drivers
 * at the locations specified by chromeDriver and firefoxPath. Only Chrome
 * and Firefox are supported for direct connect.
 *
 * default: false
 */
config.directConnect = true;

// ---------------------------------------------------------------------------
// ----- How to set up browsers ----------------------------------------------
// ---------------------------------------------------------------------------

/**
 * Protractor can launch your tests on one or more browsers. If you are
 * testing on a single browser, use the capabilities option. If you are
 * testing on multiple browsers, use the multiCapabilities array.
 *
 * For a list of available capabilities, see
 * https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities
 * In addition, you may specify count, shardTestFiles, and maxInstances.
 *
 * Example:
 * capabilities: {
 *   browserName: 'chrome',
 *   name: 'Unnamed Job',
 *   logName: 'Chrome - English',
 *   count: 1,
 *   shardTestFiles: false,
 *   maxInstances: 1,
 *   specs: ['spec/chromeOnlySpec.js'],
 *   exclude: ['spec/doNotRunInChromeSpec.js'],
 *   seleniumAddress: 'http://localhost:4444/wd/hub'
 * }
 */
config.multiCapabilities = [
    {
        browserName: 'chrome',
        /**
         * Maximum number of browser instances that can run in parallel for this
         * set of capabilities. This is only needed if shardTestFiles is true.
         * Default is 1.
         */
        maxInstances: 10,
        /**
         * If this is set to be true, specs will be sharded by file (i.e. all
         * files to be run by this set of capabilities will run in parallel).
         * Default is false.
         */
        shardTestFiles: true,
        'goog:chromeOptions': {
            args: [
                '--no-sandbox',
                '--disable-infobars',
                '--headless',
            ],
            /**
             * Protractor is not W3C compliant so this needs to be disabled
             */
            w3c: false,
        },
    },
];

exports.config = config;
