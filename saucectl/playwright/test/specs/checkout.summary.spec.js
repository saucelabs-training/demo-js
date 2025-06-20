const {test, expect} = require('@playwright/test');
const {LOGIN_USERS, PAGES, PRODUCTS} = require('../e2eConstants')
const {SwagOverviewPage} = require('../page-objects/SwagOverviewPage')
const {CheckoutCompletePage} = require('../page-objects/CheckoutCompletePage')
const {CheckoutSummaryPage} = require('../page-objects/CheckoutSummaryPage')
const {setTestContext} = require('../helpers')

test.describe('Checkout - Summary', () => {
  let swagOverviewPage
  let checkoutCompletePage
  let checkoutSummaryPage

  test.beforeEach(async ({page}) => {
    swagOverviewPage = new SwagOverviewPage(page)
    checkoutCompletePage = new CheckoutCompletePage(page)
    checkoutSummaryPage = new CheckoutSummaryPage(page)

    await setTestContext(page
      ,
      {
        user: LOGIN_USERS.STANDARD,
        path: PAGES.CHECKOUT_SUMMARY,
        products: [PRODUCTS.BACKPACK],
      }
    )
    await checkoutSummaryPage.waitForIsDisplayed()
  })

  test('should validate that we can continue shopping', async () => {
    await checkoutSummaryPage.finishCheckout()

    expect(await checkoutCompletePage.waitForIsDisplayed()).toEqual(true)
  })

  test('should validate that we can cancel checkout and go to the inventory page', async () => {
    await checkoutSummaryPage.cancelCheckout()

    expect(await swagOverviewPage.waitForIsDisplayed()).toEqual(true)
  })

  test('should validate that we have 1 product in our checkout overview', async () => {
    expect(await checkoutSummaryPage.getSwagAmount()).toEqual(1)
  })
})
