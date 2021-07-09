const {describe, it, beforeEach, expect} = require('@playwright/test');
const {LOGIN_USERS, PAGES, PRODUCTS} = require('../e2eConstants')
const {MenuPage} = require('../page-objects/MenuPage')
const {SwagOverviewPage} = require('../page-objects/SwagOverviewPage')
const {CartSummaryPage} = require('../page-objects/CartSummaryPage')
const {LoginPage} = require('../page-objects/LoginPage')
const {AppHeaderPage} = require('../page-objects/AppHeaderPage')
const {setTestContext} = require('../helpers')

describe('Menu', () => {
  let appHeaderPage
  let cartSummaryPage
  let loginPage
  let menuPage
  let swagOverviewPage

  beforeEach(async ({page}) => {
    appHeaderPage = new AppHeaderPage(page)
    cartSummaryPage = new CartSummaryPage(page)
    menuPage = new MenuPage(page)
    loginPage = new LoginPage(page)
    swagOverviewPage = new SwagOverviewPage(page)

    await setTestContext(
      page,
      {
        user: LOGIN_USERS.STANDARD,
        path: PAGES.CART,
        products: [PRODUCTS.BACKPACK],
      }
    )
    await cartSummaryPage.waitForIsDisplayed()
    await menuPage.open()
  })

  it('should be able to the swag items overview page', async () => {
    await menuPage.openInventoryList()

    expect(await swagOverviewPage.waitForIsDisplayed()).toEqual(true)
  })

  it('should be able to open the about page', async ({page}) => {
    const currentUrl = page.url()
    await menuPage.openAboutPage()

    expect(page.url()).not.toEqual(currentUrl)
  })

  it('should be able to log out', async () => {
    await menuPage.logout()

    expect(await loginPage.waitForIsDisplayed()).toEqual(true)
  })

  it('should be able to clear the cart', async () => {
    expect(await appHeaderPage.getCartAmount()).toEqual('1')

    await menuPage.restAppState()

    expect(await appHeaderPage.getCartAmount()).toEqual('')
  })
})
