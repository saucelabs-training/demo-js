import type { Options } from '@wdio/types';

/**
 * For more information about the WebdriverIO configuration options please visit:
 * https://webdriver.io/docs/configurationfile
 */
export const config: Options.Testrunner = {
  //
  // =====================
  // ts-node Configurations
  // =====================
  //
  autoCompileOpts: {
    autoCompile: true,
    // see https://github.com/TypeStrong/ts-node#cli-and-programmatic-options
    // for all available options
    tsNodeOpts: {
      transpileOnly: true,
      project: 'test/tsconfig.json',
    },
    // tsconfig-paths is only used if "tsConfigPathsOpts" are provided, if you
    // do please make sure "tsconfig-paths" is installed as dependency
    // tsConfigPathsOpts: {
    //     baseUrl: './'
    // }
  },
  //
  // ==================
  // Specify Test Files
  // ==================
  //
  specs: ['./test/specs/**/*.ts'],
  //
  // ============
  // Capabilities
  // ============
  //
  maxInstances: 2,
  //
  capabilities: [],
  //
  // ===================
  // Test Configurations
  // ===================
  //
  logLevel: 'silent',
  bail: 0,
  baseUrl: 'http://localhost',
  waitforTimeout: 10000,
  connectionRetryTimeout: 3 * 1000 * 60,
  connectionRetryCount: 0,
  //
  // Test runner services
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
  //
  reporters: ['spec'],
  services: [],
};
