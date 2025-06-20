const {test, expect} = require('@playwright/test');
const {LOGIN_USERS, PAGES, PRODUCTS} = require('../e2eConstants')
const {SwagOverviewPage} = require('../page-objects/SwagOverviewPage')
const {SwagDetailsPage} = require('../page-objects/SwagDetailsPage')
const {AppHeaderPage} = require('../page-objects/AppHeaderPage')
const {setTestContext} = require('../helpers')

test.describe('Swag Item Details', () => {
  let appHeaderPage
  let swagDetailsPage
  let swagOverviewPage

  test.beforeEach(async ({page}) => {
    appHeaderPage = new AppHeaderPage(page)
    swagDetailsPage = new SwagDetailsPage(page)
    swagOverviewPage = new SwagOverviewPage(page)
  })

  test('should validate that we can go back from the details to the inventory page', async ({page}) => {
    // Need to start with the inventory url here to get the correct routing
    await setTestContext(
      page,
      {
        user: LOGIN_USERS.STANDARD,
        path: PAGES.SWAG_ITEMS,
      }
    )
    await swagDetailsPage.open(PRODUCTS.BACKPACK)

    // Actual test starts here
    expect(await swagDetailsPage.waitForIsDisplayed()).toEqual(true)

    await swagDetailsPage.goBack()

    expect(await swagOverviewPage.waitForIsDisplayed()).toEqual(true)
  })

  test('should validate that a product can be added to a cart', async ({page}) => {
    // Need to start with the inventory url here to get the correct routing
    await setTestContext(
      page,
      {
        user: LOGIN_USERS.STANDARD,
        path: PAGES.SWAG_ITEMS,
      }
    )
    await swagDetailsPage.open(PRODUCTS.BACKPACK)
    await swagDetailsPage.waitForIsDisplayed()

    // Actual test starts here
    expect(await appHeaderPage.getCartAmount()).toEqual('')

    await swagDetailsPage.addToCart()

    expect(await appHeaderPage.getCartAmount()).toEqual('1')
  })

  test('should validate that a product can be removed from the cart', async ({page}) => {
    // Need to start with the inventory url here to get the correct routing
    await setTestContext(
      page,
      {
        user: LOGIN_USERS.STANDARD,
        path: PAGES.SWAG_ITEMS,
        products: [PRODUCTS.BACKPACK],
      }
    )
    await swagDetailsPage.open(PRODUCTS.BACKPACK)
    await swagDetailsPage.waitForIsDisplayed()

    // Actual test starts here
    expect(await appHeaderPage.getCartAmount()).toEqual('1')

    await swagDetailsPage.removeFromCart()

    expect(await appHeaderPage.getCartAmount()).toEqual('')
  })
})
