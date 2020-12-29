const { config } = require('./wdio.shared.sauce.conf');
const build = `Chrome upload File: Sauce Labs Desktop build-${new Date().getTime()}`;

// ============
// Specs
// ============
config.specs = [
  './tests/specs/sauce.chrome.upload.spec.js'
];

// ============
// Capabilities
// ============
config.capabilities = [
  // =======
  // Windows
  // =======
  {
    browserName: 'chrome',
    platformName: 'Windows 10',
    'sauce:options': {
      build,
      screenResolution: '1440x900',
    },
  },
  // ===
  // Mac
  // ===
  {
    browserName: 'chrome',
    platformName: 'macOS 10.14',
    'sauce:options': {
      build,
      screenResolution: '1400x1050',
    },
  },
];

exports.config = config;
