const {test, expect} = require('@playwright/test');
const {LOGIN_USERS, PAGES} = require('../e2eConstants')
const {CheckoutCompletePage} = require('../page-objects/CheckoutCompletePage')
const {setTestContext} = require('../helpers')

test.describe('Checkout - Complete', () => {
  let checkoutCompletePage

  test.beforeEach(async ({page}) => {
    checkoutCompletePage = new CheckoutCompletePage(page)
  })

  test('should be able to test loading of login page', async ({page}) => {
    await setTestContext(
      page,
      {
        user: LOGIN_USERS.STANDARD,
        path: PAGES.CHECKOUT_COMPLETE,
      }
    )

    expect(await checkoutCompletePage.waitForIsDisplayed()).toEqual(true)
  })
})
