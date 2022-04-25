exports.config = {
  // ====================
  // More information about the configuration is found here https://webdriver.io/docs/configurationfile.html
  // ====================
  runner: 'local',
  specs: ['./test/specs/simple.spec.js'],
  maxInstances: 100,
  logLevel: 'warn',
  bail: 0,
  baseUrl: 'https://www.saucedemo.com/',
  waitforTimeout: 30000,
  // A timeout of 3 min
  connectionRetryTimeout: 3 * 60 * 1000,
  connectionRetryCount: 3,
  reporters: ['spec'],
  services: [],
  // ====================
  // Add Sauce Connect
  // ====================
  // services: [
  //     ['sauce', {
  //         sauceConnect: true
  //     }]
  // ],
  //Screener Configuration
  hostname: 'hub.screener.io',
  port: 443,
  protocol: 'https',
  path: '/wd/hub',
  capabilities: [
    {
      browserName: 'chrome',
      platformName: 'macOS 10.15',
      browserVersion: 'latest',
      'sauce:options': {
        username: process.env.SAUCE_USERNAME,
        accesskey: process.env.SAUCE_ACCESS_KEY,
      },
      'sauce:visual': {
        apiKey: process.env.SCREENER_API_KEY,
        projectName: 'demo-js',
        viewportSize: `1920x1080`,
        failOnNewStates: false,
      },
    },
  ],

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    /**
     * !IMPORTANT!
     * If you use multiple visual assertions in 1 single test (an `it`) then you might need to
     * increase this value. A single visual assertion can take up to 30-45 seconds.
     * A combination of E2E steps and a 2 or 3 visual checks might already exceed the single `it`
     * timeout that is set here.
     */
    timeout: 120000,
  },
};
