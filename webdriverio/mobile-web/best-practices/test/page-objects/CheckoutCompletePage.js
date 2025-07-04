import BasePage from './BasePage';

const SCREEN_SELECTOR = '#checkout_complete_container';

class CheckoutCompletePage extends BasePage {
    constructor() {
        super(SCREEN_SELECTOR);
    }

    // Make it private so people can't mess with it
    // Source: https://github.com/tc39/proposal-class-fields#private-fields
    get #screen() {
        return $(SCREEN_SELECTOR);
    }
}

export default new CheckoutCompletePage();
