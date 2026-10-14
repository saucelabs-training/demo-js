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

exports.config = config;
