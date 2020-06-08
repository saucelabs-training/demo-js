const { LOGIN_USERS, PAGES } = require('../e2eConstants')
const CheckoutCompletePage = require('../page-objects/CheckoutCompletePage')
const { setTestContext } = require('../helpers')

describe('Checkout - Complete', () => {
    it('should be able to test loading of login page', async () => {
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.CHECKOUT_COMPLETE,
        })

        expect(await CheckoutCompletePage.waitForIsDisplayed()).toEqual(
            true,
            'Checkout complete page was not shown',
        )
    })
})
