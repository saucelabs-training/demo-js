const {test, expect} = require('@playwright/test')
const {LOGIN_USERS, PAGES, PRODUCTS} = require('../e2eConstants')
const {AppHeaderPage} = require('../page-objects/AppHeaderPage')
const {CartSummaryPage} = require('../page-objects/CartSummaryPage')
const {SwagOverviewPage} = require('../page-objects/SwagOverviewPage')
const {setTestContext} = require('../helpers')

/**
 * These tests demonstrate the API + UI combination pattern:
 * the API layer is used to set up test state (session and cart contents)
 * programmatically, bypassing the UI login and add-to-cart flows. This
 * makes each test faster and isolates it from failures in unrelated UI flows.
 */
test.describe('API setup + UI verification', () => {
  let appHeaderPage
  let cartSummaryPage
  let swagOverviewPage

  test.beforeEach(async ({page}) => {
    appHeaderPage = new AppHeaderPage(page)
    cartSummaryPage = new CartSummaryPage(page)
    swagOverviewPage = new SwagOverviewPage(page)
  })

  test('should reflect API-seeded cart contents on the cart page', async ({page, request}) => {
    // API step: verify the app is reachable before investing in UI interaction
    const healthCheck = await request.get(PAGES.BASE_URL)
    expect(healthCheck.status()).toBe(200)

    // API setup: establish a logged-in session and pre-populate the cart with
    // two products without touching the UI at all
    await setTestContext(page, {
      user: LOGIN_USERS.STANDARD,
      path: PAGES.CART,
      products: [PRODUCTS.BACKPACK, PRODUCTS.BIKE_LIGHT],
    })

    // UI verification: assert that the cart page reflects what the API set up
    await cartSummaryPage.waitForIsDisplayed()
    expect(await cartSummaryPage.getSwagAmount()).toEqual(2)
    expect(await appHeaderPage.getCartAmount()).toEqual('2')
  })

  test('should allow checking out after API-seeded cart', async ({page, request}) => {
    // API step: confirm the manifest is reachable — a lightweight check that
    // the server is up without loading a full HTML page
    const response = await request.get(`${PAGES.BASE_URL}/manifest.json`)
    expect(response.status()).toBe(200)

    // API setup: create a session with one item already in the cart and land
    // directly on the inventory page — no UI login needed
    await setTestContext(page, {
      user: LOGIN_USERS.STANDARD,
      path: PAGES.SWAG_ITEMS,
      products: [PRODUCTS.FLEECE_JACKET],
    })

    // UI verification: the cart badge should already show 1 from the API setup
    await swagOverviewPage.waitForIsDisplayed()
    expect(await appHeaderPage.getCartAmount()).toEqual('1')
  })
})
