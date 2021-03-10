const { config } = require('./protractor.shared.conf');

// ---------------------------------------------------------------------------
// ----- To use remote browsers via Sauce Labs -------------------------------
// ---------------------------------------------------------------------------
// THIS WILL NOT WORK FOR REAL DEVICES DUE TO AN ISSUE WITH PROTRACTOR
// config.sauceUser = process.env.SAUCE_USERNAME;
// config.sauceKey = process.env.SAUCE_ACCESS_KEY;
/**
 * If you run your tests on the Sauce Labs real device cloud you need to provide the selenium address.
 * Here we determine the address based on the DC we want to run on based on a command line argument.
 * DC endpoints can be found here https://wiki.saucelabs.com/display/DOCS/Data+Center+Endpoints
 */
const sauceRegion = process.env.REGION || 'us';
config.seleniumAddress = `https://ondemand.${sauceRegion === 'us' ? 'us-west' : 'eu-central'}-1.saucelabs.com/wd/hub/`;

/**
 * Use sauceBuild will not work if a custom seleniumAddress has been given.
 * This needs to be provided by the capabilities in order to make this work
 */
// config.sauceBuild = `Protractor RDC build-${process.env.DATE}`;

/**
 * If you would like to run more than one instance of WebDriver on the same
 * tests, use multiCapabilities, which takes an array of capabilities.
 * If this is specified, capabilities will be ignored.
 */
config.multiCapabilities = [
	// For Android devices
	{
		name: 'Run Android test on UP',
		browserName: 'chrome',
		// Give a Galaxy Phone based on a regular expression
		// For more information see https://wiki.saucelabs.com/display/DOCS/Appium+Capabilities+for+Real+Device+Testing
		deviceName: 'Samsung Galaxy S?.*',
		platformName: 'Android',
		// We only want to ryn on a phone
		phoneOnly: true,

		// This is needed for ChromeDriver, as of ChromeDriver 75
		// it is W3C by default. Protractor doesn't support this.
		'goog:chromeOptions':{
			w3c: false,
		},

		// This is needed with Protractor, providing the capabilities at the root of the config doesn't work when
		// you provide a custom seleniumAddress
		username: process.env.SAUCE_USERNAME,
		access_key: process.env.SAUCE_ACCESS_KEY,

		// The build name in Sauce
		build: `Protractor RDC build-${process.env.DATE}`,
	},
	// For iOS devices
	{
		name: 'Run iOS test on UP',
		// Give a Galaxy Phone based on a regular expression
		// For more information see https://wiki.saucelabs.com/display/DOCS/Appium+Capabilities+for+Real+Device+Testing
		browserName: 'safari',
		deviceName: 'iPhone [678]?.*',
		platformName: 'iOS',

		// This is needed with Protractor, providing the capabilities at the root of the config doesn't work when
		// you provide a custom seleniumAddress
		username: process.env.SAUCE_USERNAME,
		access_key: process.env.SAUCE_ACCESS_KEY,

		// The build name in Sauce
		build: `Protractor RDC build-${process.env.DATE}`,
	},
];

exports.config = config;
