const { config } = require('./wdio.shared.local.conf');

// ============
// Specs
// ============
config.specs = [
  './tests/specs/local.upload.spec.js'
];

// ============
// Capabilities
// ============
config.capabilities = [
  {
    browserName: 'chrome',
  },
  {
    browserName: 'firefox',
  },
];

exports.config = config;
