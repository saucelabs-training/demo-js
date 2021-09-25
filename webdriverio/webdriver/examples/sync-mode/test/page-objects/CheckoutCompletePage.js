import BasePage from './BasePage';

const SCREEN_SELECTOR = '#checkout_complete_container';

class CheckoutCompletePage extends BasePage {
    constructor() {
        super(SCREEN_SELECTOR);
    }

    get screen() {
        return $(SCREEN_SELECTOR);
    }
}

export default new CheckoutCompletePage();
