class BasePage {
    constructor(selector) {
        this.selector = selector;
    }

    /**
     * Open a page and wait for the network to be idle
     *
     * @param {string} url
     *
     * @returns {Promise<void>}
     */
    async goTo( url) {
        await page.goto(url, 'networkidle0');
    }

    /**
     * Wait for a page to be visible
     *
     * @param {string} selector
     *
     * @returns {Promise<boolean>}
     */
    async waitForIsDisplayed(selector = this.selector){
        try {
            await page.waitForSelector(selector, {
                visible: true,
                timeout: 3000,
            });
            return true;
        } catch (e) {
            return false;
        }
    }

    /**
     * Get the text of an element
     *
     * @param {string} selector
     *
     * @returns {Promise<string>}
     */
    async getText(selector){
        return page.$eval(selector, el => el.textContent || '');
    }

    /**
     * Get the value of an element
     *
     * @param {string} selector
     *
     * @returns {Promise<string>}
     */
    async getValue(selector){
        return page.$eval(selector, el => el.getAttribute('value') || '');
    }
}

module.exports = BasePage;
