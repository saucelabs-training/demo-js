exports.config = {
  // ====================
  // Runner Configuration
  // ====================
  runner: 'local',
  // ==================
  // Specify Test Files
  // ==================
  specs: ['./test/specs/*.js'],
  // ============
  // Capabilities
  // ============
  maxInstances: 5,
  // capabilities can be found in the `wdio.local.chrome.conf.js` or `wdio.sauce.conf.js`
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
  },
  services: [],
};
