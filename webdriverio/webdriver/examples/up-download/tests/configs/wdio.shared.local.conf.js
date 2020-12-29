const {config} = require('./wdio.shared.conf');

// ========
// Services
// ========
config.services = config.services.concat('selenium-standalone');

exports.config = config;
