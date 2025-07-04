import AppScreen from './AppScreen';
import {locatorStrategy} from '../helpers/utils';

class CheckoutCompleteScreen extends AppScreen {
  constructor() {
    super(locatorStrategy('checkout complete screen'));
  }

  private get continueShoppingButton() {
    return $(locatorStrategy('Continue Shopping button'));
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }
}

export default new CheckoutCompleteScreen();
