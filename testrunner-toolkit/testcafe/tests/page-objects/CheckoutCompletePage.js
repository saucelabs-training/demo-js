import BasePage from './BasePage';
import {Selector as $} from 'testcafe';

class CheckoutCompletePage extends BasePage {
    constructor() {
        const screen = $('#checkout_complete_container');

        super(screen);

        this.screen = screen;
    }
}

export default new CheckoutCompletePage();
