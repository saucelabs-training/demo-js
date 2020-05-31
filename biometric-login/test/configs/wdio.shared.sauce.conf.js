const {config} = require('./wdio.shared.conf');

// ========
// Services
// ========
config.services = config.services.concat([['sauce']]);

// =================
// Service Providers
// =================
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;
config.region = process.env.REGION || 'us';

exports.config = config;
