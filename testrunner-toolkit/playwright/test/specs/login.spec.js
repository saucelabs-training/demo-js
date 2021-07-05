const {test, expect} = require('@playwright/test')
const {LOGIN_USERS} = require('../e2eConstants')
const {LoginPage} = require('../page-objects/LoginPage')
const {SwagOverviewPage} = require('../page-objects/SwagOverviewPage')

test.describe('LoginPage', () => {
  let loginPage
  let swagOverviewPage

  test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page)
    swagOverviewPage = new SwagOverviewPage(page)

    await loginPage.open();
  })

  test('should be able to test loading of login page', async ({page}) => {
    expect(await loginPage.waitForIsDisplayed()).toEqual(true)
  })

  test('should be able to login with a standard user', async ({page}) => {
    await loginPage.signIn(LOGIN_USERS.STANDARD)

    // Wait for the inventory screen and check it
    expect(await swagOverviewPage.waitForIsDisplayed()).toEqual(true)
  })

  test('should not be able to login with a locked user', async ({page}) => {
    // It doesn't matter which error we check, all errors should be checked in a UT
    // With this UT we just check that A failure is triggered
    await loginPage.signIn(LOGIN_USERS.LOCKED)

    expect(await loginPage.getErrorMessage()).toContain('Epic sadface: Sorry, this user has been locked out.')
  })
})
