const { config } = require('./protractor.shared.conf');
const DEFAULT_CAPABILITIES = {
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
	screenResolution: '1600x1200',
};

// ---------------------------------------------------------------------------
// ----- To use remote browsers via Sauce Labs -------------------------------
// ---------------------------------------------------------------------------
config.sauceUser = process.env.SAUCE_USERNAME;
config.sauceKey = process.env.SAUCE_ACCESS_KEY;
/**
 * If you run your tests on SauceLabs you can specify the region you want to run your tests
 * in via the `sauceRegion` property. Available short handles for regions are:
 * us: us-west-1 (default)
 * eu: eu-central-1
 */
config.sauceRegion = process.env.REGION || 'us';
/**
 * Use sauceBuild if you want to group test capabilities by a build ID
 */
config.sauceBuild = `Protractor build-${process.env.DATE}`;

/**
 * If you would like to run more than one instance of WebDriver on the same
 * tests, use multiCapabilities, which takes an array of capabilities.
 * If this is specified, capabilities will be ignored.
 */
config.multiCapabilities = [
	{
		browserName: 'chrome',
		platform: 'Windows 10',
		version: 'latest',
		...DEFAULT_CAPABILITIES,
	},
	{
		browserName: 'firefox',
		platform: 'Windows 10',
		version: 'latest',
		...DEFAULT_CAPABILITIES,
	},
	{
		browserName: 'internet explorer',
		platform: 'Windows 8.1',
		version: 'latest',
		...DEFAULT_CAPABILITIES,
	},
	{
		browserName: 'MicrosoftEdge',
		platform: 'Windows 10',
		version: 'latest',
		...DEFAULT_CAPABILITIES,
	},
];

exports.config = config;
