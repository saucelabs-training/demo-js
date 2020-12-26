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
  // capabilities can be found in the `wdio.saucelabs.android.conf.js` or `wdio.saucelabs.ios.conf.js`
  // ===================
  // Test Configurations
  // ===================
  logLevel: 'silent',
  bail: 0,
  baseUrl: 'https://www.saucedemo.com/',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'jasmine',
  reporters: ['spec'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000,
    helpers: [require.resolve('@babel/register')],
  },
  services: [],
  // ============
  // Hooks
  // ============
  before: () => {
    /**
     * Trigger the onChange on an element when the version of iOS is lower than 13
     *
     * Reason is that Appium `1.16.x` don't trigger React components how they should
     * and don't update the state, this is fixed in Appium `1.17.0`, see also the
     * release notes
     * `Fix handling of React components whose state is handled by React (appium/appium-remote-debugger#202)`
     * source: https://github.com/appium/appium/releases/tag/v1.17.0
     */
    ['addValue', 'setValue'].forEach(valueCommand => {
      browser.overwriteCommand(valueCommand, function (originalValueCommand, value) {
        // Set the value
        originalValueCommand(value);

        // Only trigger setting the value in a different way if it's iOS and the OS is lower than 13
        if(browser.isIOS && parseFloat(browser.capabilities.platformVersion) < 13){
          browser.execute((elementSelector) => {
            let input = document.querySelector(elementSelector);
            let lastValue = '';
            let event = new Event('input', {bubbles: true});
            let tracker = input._valueTracker;
            if (tracker) {
              tracker.setValue(lastValue);
            }
            input.dispatchEvent(event);
          }, this.selector);
        }
      }, true);
    });
  }
};
