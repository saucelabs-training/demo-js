const BasePage = require('./BasePage')
const SELECTORS = {
  screen: '#checkout_complete_container',
}

class CheckoutCompletePage extends BasePage {
  constructor(page) {
    super(page, SELECTORS.screen)
  }
}

module.exports = {CheckoutCompletePage}
