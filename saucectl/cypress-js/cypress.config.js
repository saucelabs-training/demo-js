const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://www.saucedemo.com',
        setupNodeEvents(on, config) {
            on('before:browser:launch', (browser, launchOptions) => {
                if (browser.family === 'chromium' && browser.name === 'edge') {
                    launchOptions.args.push('--no-sandbox')
                }
                return launchOptions
            })
        },
    },
})