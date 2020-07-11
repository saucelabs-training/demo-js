module.exports = {
    // See https://github.com/microsoft/playwright/blob/master/docs/api.md#browsertypelaunchoptions
    launchBrowserApp: {
        headless: process.env.HEADLESS !== 'false', // export HEADLESS=false to launch Chromium
        devtools: true, // optionally display devtools in non-headless mode
        slowMo: process.env.SLOMO || 0, // optionally slow down typing
    },
    // See https://github.com/microsoft/playwright/blob/master/docs/api.md#browsernewcontextoptions
    context: {
        viewport: {
            // override default 800x600 pixel browser setting
            width: 1366,
            height: 768,
        },
    },
}
