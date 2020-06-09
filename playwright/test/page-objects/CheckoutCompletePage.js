const BasePage = require('./BasePage')
const SELECTORS = {
    screen: '#checkout_complete_container',
}

class CheckoutCompletePage extends BasePage {
    constructor() {
        super(SELECTORS.screen)
    }
}

module.exports = new CheckoutCompletePage()
