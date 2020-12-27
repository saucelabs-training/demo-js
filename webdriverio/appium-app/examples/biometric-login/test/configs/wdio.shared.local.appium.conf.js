const {config} = require('./wdio.shared.conf');

// ======
// Appium
// ======
config.services = config.services.concat([
    [
        'appium',
        {
            command: 'appium',
            args: {
                // This is needed to tell Appium that we can execute local ADB commands
                relaxedSecurity: true,
            },
        },

    ],
]);
// Tell Appium which port to use
config.port = 4723;

exports.config = config;
