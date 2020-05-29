import {DEFAULT_TIMEOUT} from '../configs/e2eConstants';

export default class BasePage {
    constructor(selector) {
        this.selector = selector;
    }

    /**
     * Wait for the element to be displayed
     *
     * @return {Promise<boolean>}
     */
    async waitForIsDisplayed(isShown = true) {
        const EC = protractor.ExpectedConditions;

        if (isShown) {
            return browser.wait(EC.visibilityOf($(this.selector)), DEFAULT_TIMEOUT);
        }

        return browser.wait(EC.invisibilityOf($(this.selector)), DEFAULT_TIMEOUT);
    }

    /**
     * Give back if the element is displayed
     *
     * @return {Promise<boolean>}
     */
    async isDisplayed() {
        return $(this.selector).isPresent();
    }
}
