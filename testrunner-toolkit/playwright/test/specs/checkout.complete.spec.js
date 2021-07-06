const {describe, it, beforeEach, expect} = require('@playwright/test');
const {LOGIN_USERS, PAGES} = require('../e2eConstants')
const {CheckoutCompletePage} = require('../page-objects/CheckoutCompletePage')
const {setTestContext} = require('../helpers')

describe('Checkout - Complete', () => {
  let checkoutCompletePage

  beforeEach(async ({page}) => {
    checkoutCompletePage = new CheckoutCompletePage(page)
  })

  it('should be able to test loading of login page', async ({page}) => {
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
