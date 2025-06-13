const { config } = require('./wdio.shared.conf');
const defaultBrowserSauceOptions = {
  build: `WDIO CucumberJS: Sauce Labs Desktop Web build-${new Date().getTime()}`,
  screenResolution: '1600x1200',
};

// =====================
// Sauce specific config
// =====================
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;
// If you run your tests on Sauce Labs you can specify the region you want to run your tests
// in via the `region` property. Available short handles for regions are `us` (default) and `eu`.
// These regions are used for the Sauce Labs VM cloud and the Sauce Labs Real Device Cloud.
// If you don't provide the region, it defaults to `us`.
config.region = process.env.REGION || 'us';

// ============
// Capabilities
// ============
config.capabilities = [
  /**
   * Desktop browsers
   */
  {
    browserName: 'chrome',
    platformName: 'Windows 10',
    browserVersion: 'latest',
    'goog:chromeOptions': {
      args: [
        '--no-sandbox',
        '--disable-infobars',
        '--disable-features=SafeBrowsing,PasswordLeakToggleMove',
      ],
    },
    'sauce:options': {
      ...defaultBrowserSauceOptions,
    },
  },
];

// ========
// Services
// ========
config.services = config.services.concat('sauce');

exports.config = config;
