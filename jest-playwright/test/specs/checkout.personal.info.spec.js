const { LOGIN_USERS, PAGES, PERSONAL_INFO } = require('../e2eConstants')
const CheckoutPersonalInfoPage = require('../page-objects/CheckoutPersonalInfoPage')
const CheckoutSummaryPage = require('../page-objects/CheckoutSummaryPage')
const CartSummaryPage = require('../page-objects/CartSummaryPage')
const { setTestContext } = require('../helpers')

describe('Checkout - Personal info', () => {
    beforeEach(async () => {
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.CHECKOUT_PERSONAL_INFO,
        })
        await CheckoutPersonalInfoPage.waitForIsDisplayed()
    })

    it('should validate we get an error if we don not provide all personal information', async () => {
        // It doesn't matter which error we check here, all error states should have been tested in a UT
        // Reason for selecting this one is that it triggers multiple fields and thus triggers the state
        await CheckoutPersonalInfoPage.submitPersonalInfo(
            PERSONAL_INFO.NO_POSTAL_CODE,
        )

        expect(await CheckoutPersonalInfoPage.waitForIsDisplayed()).toEqual(
            true,
            'Error message is shown, this is not correct',
        )

        expect(await CheckoutPersonalInfoPage.getErrorMessage()).toEqual(
            'Error: Postal Code is required',
            'Error message is shown, but not with the correct message',
        )
    })

    it('should validate that we can cancel the first checkout', async () => {
        expect(await CartSummaryPage.waitForIsDisplayed()).toEqual(
            false,
            'Cart screen is already visible',
        )

        await CheckoutPersonalInfoPage.cancelCheckout()

        expect(await CartSummaryPage.waitForIsDisplayed()).toEqual(
            true,
            'Cart content screen is still not visible',
        )
    })

    it('should be able to continue the checkout', async () => {
        await CheckoutPersonalInfoPage.submitPersonalInfo(
            PERSONAL_INFO.STANDARD,
        )

        expect(await CheckoutSummaryPage.waitForIsDisplayed()).toEqual(
            true,
            'Checkout page two is still not visible',
        )
    })
})
