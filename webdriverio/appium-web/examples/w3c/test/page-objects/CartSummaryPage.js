import BasePage from './BasePage';

const SCREEN_SELECTOR = '#cart_contents_container';

class CartSummaryPage extends BasePage {
    constructor() {
        super(SCREEN_SELECTOR);
    }
}

export default new CartSummaryPage();
