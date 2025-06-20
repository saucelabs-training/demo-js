//
// ==================================================================
// More information about the configuration options can be found here
// https://webdriver.io/docs/configurationfile.html
// ==================================================================
//
exports.config = {
  //
  // ====================
  // Runner Configuration
  // ====================
  //
  runner: 'local',

  //
  // ==================
  // Specify Test Files
  // ==================
  //
  specs: ['./tests/specs/exercises.spec.js'],
  suites: {
    answers: ['./tests/specs/answers.spec.js'],
  },

  //
  // ============
  // Capabilities
  // ============
  //
  // The capabilities are configured in:
  // - wdio.ios.local.sim.conf.js
  // - wdio.ios.sauce.sim.conf.js
  // - wdio.ios.sauce.real.conf.js
  // - wdio.android.local.emu.conf.js
  // - wdio.android.sauce.emu.conf.js
  // - wdio.android.sauce.real.conf.js
  //
  maxInstances: 1,

  //
  // ===================
  // Test Configurations
  // ===================
  //
  logLevel: 'silent',
  bail: 0,
  baseUrl: '',
  waitforTimeout: 45000,
  // A timeout of 5 min
  connectionRetryTimeout: 5 * 60 * 1000,
  connectionRetryCount: 1,
  // Services are empty here but will be defined in the
  // - wdio.shared.local.appium.conf.js
  // - wdio.shared.sauce.conf.js
  // configuration files
  services: [],
  reporters: ['spec'],
  framework: 'jasmine',
  jasmineOpts: {
    defaultTimeoutInterval: 60000,
  },

  //
  // =====
  // Hooks
  // =====
  //
  // Hooks are not used for this project
};
