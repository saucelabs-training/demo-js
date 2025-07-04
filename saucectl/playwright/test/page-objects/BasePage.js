class BasePage {
    constructor(page, selector) {
        this.page = page;
        this.selector = selector
    }

    /**
     * Open a page and wait for the network to be idle
     *
     * @param {string} url
     *
     * @returns {Promise<void>}
     */
    async goTo(url) {
        await this.page.goto(url, 'networkidle0')
    }

    /**
     * Wait for a page to be visible
     *
     * @param {string} selector
     *
     * @returns {Promise<boolean>}
     */
    async waitForIsDisplayed(selector = this.selector) {
        try {
            await this.page.waitForSelector(selector, {
                visible: true,
                timeout: 3000,
            })
            return true
        } catch (e) {
            return false
        }
    }
}

module.exports = BasePage
