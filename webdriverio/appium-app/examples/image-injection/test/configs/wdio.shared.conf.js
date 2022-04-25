/**
 * More information about the WebdriverIO config can be found here:
 * https://webdriver.io/docs/configurationfile.html
 */
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
  // The specific capabilities can be found in the separate files
  maxInstances: 10,

  // ===================
  // Test Configurations
  // ===================
  logLevel: 'silent',
  bail: 0,
  baseUrl: '',
  waitforTimeout: 45000,
  // A timeout of 5 min
  connectionRetryTimeout: 5 * 60 * 1000,
  connectionRetryCount: 1,
  // Empty for now, will be filled with the separate configs
  services: [],
  framework: 'jasmine',
  reporters: ['spec'],
  jasmineOpts: {
    defaultTimeoutInterval: 180000,
  },

  // =====
  // Hooks
  // =====
  before: () => {
    /**
     * Custom property that is used to determine if the app is already launched for the first time
     * This property is needed because the first time the app is automatically started, so a double
     * restart is not needed.
     */
    driver.firstAppStart = true;
  },
};
