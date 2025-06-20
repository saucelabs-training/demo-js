const {test, expect} = require('@playwright/test');
const {LOGIN_USERS, PAGES, PRODUCTS} = require('../e2eConstants')
const {AppHeaderPage} = require('../page-objects/AppHeaderPage')
const {CartSummaryPage} = require('../page-objects/CartSummaryPage')
const {SwagDetailsPage} = require('../page-objects/SwagDetailsPage')
const {SwagOverviewPage} = require('../page-objects/SwagOverviewPage')
const {setTestContext} = require('../helpers')

test.describe('Swag items list', () => {
  let appHeaderPage
  let cartSummaryPage
  let swagDetailsPage
  let swagOverviewPage

  test.beforeEach(async ({page}) => {
    appHeaderPage = new AppHeaderPage(page)
    cartSummaryPage = new CartSummaryPage(page)
    swagDetailsPage = new SwagDetailsPage(page)
    swagOverviewPage = new SwagOverviewPage(page)
  })

  test('should validate that all products are present', async ({page}) => {
    await setTestContext(
      page,
      {
        user: LOGIN_USERS.STANDARD,
        path: PAGES.SWAG_ITEMS,
      }
    )
    await swagOverviewPage.waitForIsDisplayed()

    // Actual test starts here
    expect(await swagOverviewPage.getAmount()).toEqual(6)
  })

  test('should validate that the details of a product can be opened', async ({page}) => {
    await setTestContext(
      page,
      {
        user: LOGIN_USERS.STANDARD,
        path: PAGES.SWAG_ITEMS,
      }
    )
    await swagOverviewPage.waitForIsDisplayed()

    // Actual test starts here
    const product = 'Sauce Labs Backpack'

    await swagOverviewPage.openSwagDetails(product)

    expect(await swagDetailsPage.waitForIsDisplayed()).toEqual(true)

    expect(await swagDetailsPage.getSwagDetailsText()).toContain(product)
  })

  test('should validate that a product can be added to the cart', async ({page}) => {
    await setTestContext(
      page,
      {
        user: LOGIN_USERS.STANDARD,
        path: PAGES.SWAG_ITEMS,
      }
    )
    await swagOverviewPage.waitForIsDisplayed()

    // Actual test starts here
    expect(await appHeaderPage.getCartAmount()).toEqual('')

    await swagOverviewPage.addSwagToCart(0)

    expect(await appHeaderPage.getCartAmount()).toEqual('1')
  })

  test('should validate that a product can be removed from the cart', async ({page}) => {
    await setTestContext(
      page,
      {
        user: LOGIN_USERS.STANDARD,
        path: PAGES.SWAG_ITEMS,
        products: [PRODUCTS.BACKPACK],
      }
    )
    await swagOverviewPage.waitForIsDisplayed()

    // Actual test starts here
    expect(await appHeaderPage.getCartAmount()).toEqual('1')

    await swagOverviewPage.removeSwagFromCart(0)

    expect(await appHeaderPage.getCartAmount()).toEqual('')
  })

  test('should be able to open the cart summary page', async ({page}) => {
    await setTestContext(
      page,
      {
        user: LOGIN_USERS.STANDARD,
        path: PAGES.SWAG_ITEMS,
      }
    )
    await swagOverviewPage.waitForIsDisplayed()

    // Actual test starts here
    await appHeaderPage.openCart()

    expect(await cartSummaryPage.waitForIsDisplayed()).toEqual(true)
  })
})
