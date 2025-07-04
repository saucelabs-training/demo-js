import {DEFAULT_TIMEOUT} from '../configs/e2eConstants';

export default class BasePage {
    private selector;

    constructor(selector) {
        this.selector = selector;
    }

    /**
     * Wait for the element to be displayed
     */
    async waitForIsShown(isShown = true): Promise<boolean> {
        try{
            const result = await $(this.selector).waitForDisplayed({
                timeout: DEFAULT_TIMEOUT,
                reverse: !isShown
            });

            return !!result;
        } catch (e) {
            return !isShown;
        }
    }

    /**
     * Give back if the element is displayed
     */
    async isDisplayed(): Promise<boolean> {
        return $(this.selector).isDisplayed();
    }
}
