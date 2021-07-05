const {test, expect} = require('@playwright/test');
const {LOGIN_USERS, PAGES, PERSONAL_INFO} = require('../e2eConstants')
const {CheckoutPersonalInfoPage} = require('../page-objects/CheckoutPersonalInfoPage')
const {CheckoutSummaryPage} = require('../page-objects/CheckoutSummaryPage')
const {CartSummaryPage} = require('../page-objects/CartSummaryPage')
const {setTestContext} = require('../helpers')

test.describe('Checkout - Personal info', () => {
  let checkoutPersonalInfoPage
  let checkoutSummaryPage
  let cartSummaryPage
  test.beforeEach(async ({page}) => {
    checkoutPersonalInfoPage = new CheckoutPersonalInfoPage(page)
    checkoutSummaryPage = new CheckoutSummaryPage(page)
    cartSummaryPage = new CartSummaryPage(page)

    await setTestContext(
      page,
      {
        user: LOGIN_USERS.STANDARD,
        path: PAGES.CHECKOUT_PERSONAL_INFO,
      }
    )
    await checkoutPersonalInfoPage.waitForIsDisplayed()
  })

  test('should validate we get an error if we don not provide all personal information', async () => {
    // It doesn't matter which error we check here, all error states should have been tested in a UT
    // Reason for selecting this one is that it triggers multiple fields and thus triggers the state
    await checkoutPersonalInfoPage.submitPersonalInfo(
      PERSONAL_INFO.NO_POSTAL_CODE,
    )

    expect(await checkoutPersonalInfoPage.waitForIsDisplayed()).toEqual(true)
    expect(await checkoutPersonalInfoPage.getErrorMessage()).toEqual('Error: Postal Code is required')
  })

  test('should validate that we can cancel the first checkout', async () => {
    expect(await cartSummaryPage.waitForIsDisplayed()).toEqual(false)

    await checkoutPersonalInfoPage.cancelCheckout()

    expect(await cartSummaryPage.waitForIsDisplayed()).toEqual(true)
  })

  test('should be able to continue the checkout', async () => {
    await checkoutPersonalInfoPage.submitPersonalInfo(
      PERSONAL_INFO.STANDARD,
    )

    expect(await checkoutSummaryPage.waitForIsDisplayed()).toEqual(true)
  })
})
