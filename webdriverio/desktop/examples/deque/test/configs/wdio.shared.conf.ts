import AxeWebdriverIO from '@axe-core/webdriverio';

// @ts-ignore
// @ts-ignore
/**
 * This file holds all the shared config options
 * The rest of the files will extend options
 * More information about the config can be found
 * here https://webdriver.io/docs/configurationfile.html
 */
export const config: WebdriverIO.Config = {
  // ====================
  // Runner Configuration
  // ====================
  runner: 'local',
  // ==================
  // Specify Test Files
  // ==================
  specs: ['./test/specs/**/*.ts'],
  // ============
  // Capabilities
  // ============
  maxInstances: 100,
  // capabilities can be found in the `wdio.saucelabs.conf.ts`
  capabilities: [],
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
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    timeout: 60 * 1000,
  },
  // ========
  // Services
  // ========
  services: [],

  // ========
  // Hooks
  // ========
  //This setup is required to get AxeWebdriverIO working with browser
  before: (capabilities, specs, browser) => {
    // Creates a new AxeWebdriverIO instance and accepts browser object as argument
    const axeWdio = new AxeWebdriverIO({
      client: browser,
    });
    //Adds the get axe results command to the browser so it can be used in our specs
    browser.addCommand('getAxeResults', async (name) => {
      console.log('getting axe results');
      return await axeWdio.analyze();
    });
  },
};
