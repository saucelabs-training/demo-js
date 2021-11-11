exports.config = {
  // ====================
  // Runner Configuration
  // ====================
  runner: 'local',
  // ==================
  // Specify Test Files
  // ==================
  specs: [
    './test/specs/**/*.js'
  ],
  // ============
  // Capabilities
  // ============
  maxInstances: 100,
  // capabilities can be found in `wdio.sauce.conf.js`
  // ===================
  // Test Configurations
  // ===================
  logLevel: 'error',
  bail: 0,
  baseUrl: 'https://www.saucedemo.com/',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'jasmine',
  reporters: ['spec'],
  jasmineOpts: {
    defaultTimeoutInterval: 120000,
  },
  services: [],
};
