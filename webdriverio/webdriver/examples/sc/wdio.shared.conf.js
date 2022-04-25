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
  maxInstances: 100,
  // capabilities can be found in the `wdio.saucelabs.conf.js`
  // ===================
  // Test Configurations
  // ===================
  logLevel: 'silent',
  bail: 0,
  baseUrl: 'https://www.saucedemo.com/',
  waitforTimeout: 10000,
  // A timeout of 3 min
  connectionRetryTimeout: 3 * 60 * 1000,
  connectionRetryCount: 3,
  framework: 'jasmine',
  reporters: ['spec'],
  jasmineOpts: {
    defaultTimeoutInterval: 60000,
  },
  services: [],
};
