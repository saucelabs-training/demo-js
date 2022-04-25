export const config: WebdriverIO.Config = {
  // ==================
  // Specify Test Files
  // ==================
  //
  specs: ['./test/specs/**/*.ts'],

  // ============
  // Capabilities
  // ============
  //
  // capabilities can be found in `wdio.saucelabs.conf.ts`
  capabilities: [],

  // ===================
  // Test Configurations
  // ===================
  //
  logLevel: 'silent',
  bail: 0,
  baseUrl: 'https://www.saucedemo.com',
  waitforTimeout: 15000,
  // A timeout of 3 min
  connectionRetryTimeout: 3 * 60 * 1000,
  connectionRetryCount: 3,
  // Will be set in the Sauce config
  services: [],
  // Framework you want to run your specs with.
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
};
