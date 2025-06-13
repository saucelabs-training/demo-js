exports.config = {
  // ====================
  // Runner Configuration
  // ====================
  runner: 'local',
  // ==================
  // Specify Test Files
  // ==================
  specs: ['./test/specs/**/*.js'],
  // ============
  // Capabilities
  // ============
  maxInstances: 25,
  // capabilities can be found in the `wdio.saucelabs.android.conf.js` or `wdio.saucelabs.ios.conf.js`
  // ===================
  // Test Configurations
  // ===================
  logLevel: 'silent',
  bail: 0,
  baseUrl: 'https://www.saucedemo.com/',
  waitforTimeout: 10000,
  // A timeout of 5 min
  connectionRetryTimeout: 5 * 60 * 1000,
  connectionRetryCount: 1,
  framework: 'jasmine',
  reporters: ['spec'],
  jasmineOpts: {
    defaultTimeoutInterval: 60000,
    // Babel setup
    helpers: [require.resolve('@babel/register')],
  },
  services: [],
};
