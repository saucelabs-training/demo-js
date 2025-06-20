export interface MobileConfig extends WebdriverIO.Config {
  firstAppStart: boolean;
}

export const config: MobileConfig = {
  // ==================
  // Specify Test Files
  // ==================
  //
  specs: ['./test/specs/*.spec.ts'],

  // ============
  // Capabilities
  // ============
  //
  capabilities: [],

  // ===================
  // Test Configurations
  // ===================
  //
  logLevel: 'silent',
  bail: 0,
  baseUrl: 'http://localhost',
  waitforTimeout: 15000,
  // A timeout of 5 min
  connectionRetryTimeout: 5 * 60 * 1000,
  connectionRetryCount: 2,
  services: [],
  // Framework you want to run your specs with.
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    // Add a 5 min timeout per test
    timeout: 5 * 60 * 1000,
  },

  // =====
  // Session flags
  // =====
  //
  /**
   * Custom property that is used to determine if the app is already launched for the first time
   * This property is needed because the first time the app is automatically started, so a double
   * restart is not needed.
   */
  firstAppStart: true,

  // =====
  // Hooks
  // =====
  //
};
