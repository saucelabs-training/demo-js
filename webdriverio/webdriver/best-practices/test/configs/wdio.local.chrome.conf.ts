import {config} from './wdio.shared.conf';

// ============
// Capabilities
// ============
config.capabilities = [
  // Chrome example
  {
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: [
        '--no-sandbox',
        '--disable-infobars',
        '--headless',
      ],
    },

  },
];

// ========
// Services
// ========
config.services = config.services.concat('chromedriver');

exports.config = config;
