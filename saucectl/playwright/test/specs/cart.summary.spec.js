const {test, expect} = require('@playwright/test');
const {LOGIN_USERS, PAGES, PRODUCTS} = require('../e2eConstants')
const {SwagOverviewPage} = require('../page-objects/SwagOverviewPage')
const {CheckoutPersonalInfoPage} = require('../page-objects/CheckoutPersonalInfoPage')
const {AppHeaderPage} = require('../page-objects/AppHeaderPage')
const {CartSummaryPage} = require('../page-objects/CartSummaryPage')
const {setTestContext} = require('../helpers')

test.describe('Cart Summary page', () => {
  let appHeaderPage
  let cartSummaryPage
  let checkoutPersonalInfoPage
  let swagOverviewPage

  test.beforeEach(async ({page}) => {
    appHeaderPage = new AppHeaderPage(page)
    cartSummaryPage = new CartSummaryPage(page)
    checkoutPersonalInfoPage = new CheckoutPersonalInfoPage(page)
    swagOverviewPage = new SwagOverviewPage(page)
  })

  test('should validate that we can continue shopping', async ({page}) => {
    await setTestContext(
      page,
      {
        user: LOGIN_USERS.STANDARD,
        path: PAGES.CART,
      }
    )
    await cartSummaryPage.waitForIsDisplayed()

    // Actual test starts here
    await cartSummaryPage.continueShopping()

    expect(await swagOverviewPage.waitForIsDisplayed()).toEqual(true)
  })

  test('should validate that we can go from the cart to the checkout page', async ({page}) => {
    await setTestContext(
      page,
      {
        user: LOGIN_USERS.STANDARD,
        path: PAGES.CART,
      }
    )
    await cartSummaryPage.waitForIsDisplayed()

    // Actual test starts here
    await cartSummaryPage.goToCheckout()

    expect(await checkoutPersonalInfoPage.waitForIsDisplayed()).toEqual(true)
  })

  test('should validate that a product can be removed from the cart', async ({page}) => {
    await setTestContext(
      page,
      {
        user: LOGIN_USERS.STANDARD,
        path: PAGES.CART,
        products: [PRODUCTS.BACKPACK],
      }
    )
    await cartSummaryPage.waitForIsDisplayed()

    // Actual test starts here
    expect(await appHeaderPage.getCartAmount()).toEqual('1')
    expect(await cartSummaryPage.getSwagAmount()).toEqual(1,)

    await cartSummaryPage.removeSwag(0)

    expect(await appHeaderPage.getCartAmount()).toEqual('')

    expect(await cartSummaryPage.getSwagAmount()).toEqual(0)
  })
})
