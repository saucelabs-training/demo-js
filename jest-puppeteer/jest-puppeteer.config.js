module.exports = {
    launch: {
        dumpio: false,
        headless: process.env.HEADLESS !== 'false',   // export HEADLESS=false to launch Chromium
        devtools: true,                               // optionally display devtools in non-headless mode
        // slowMo: 100,                                  // optionally slow down typing
        defaultViewport: {                            // override default 800x600 pixel browser setting
            width: 1366,
            height: 768
        }
    },
};
