const {test, expect} = require('@playwright/test')
const {LOGIN_USERS, PAGES} = require('../e2eConstants')
const {LoginPage} = require('../page-objects/LoginPage')
const {SwagOverviewPage} = require('../page-objects/SwagOverviewPage')

/**
 * Smoke suite: an API health check runs first and determines whether the UI
 * tests are worth executing at all. If the app is unreachable, every test is
 * skipped rather than failing with misleading browser errors.
 */
test.describe('Smoke', () => {
  let isAppAvailable = false
  let loginPage
  let swagOverviewPage

  test.beforeAll(async ({request}) => {
    const response = await request.get(PAGES.BASE_URL)
    isAppAvailable = response.ok()
  })

  test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page)
    swagOverviewPage = new SwagOverviewPage(page)
  })

  test('API smoke: app is reachable and serves HTML', async ({request}) => {
    test.skip(!isAppAvailable, 'App did not respond — skipping smoke tests')

    const response = await request.get(PAGES.BASE_URL)

    expect(response.status()).toBe(200)
    expect(response.headers()['content-type']).toContain('text/html')

    const body = await response.text()
    expect(body).toContain('Swag Labs')
  })

  test('UI smoke: standard user can log in and reach the inventory', async ({page}) => {
    test.skip(!isAppAvailable, 'App did not respond — skipping smoke tests')

    await loginPage.open()
    await loginPage.signIn(LOGIN_USERS.STANDARD)

    expect(await swagOverviewPage.waitForIsDisplayed()).toEqual(true)
  })

  test('UI smoke: locked user is rejected at login', async ({page}) => {
    test.skip(!isAppAvailable, 'App did not respond — skipping smoke tests')

    await loginPage.open()
    await loginPage.signIn(LOGIN_USERS.LOCKED)

    expect(await loginPage.getErrorMessage()).toContain(
      'Epic sadface: Sorry, this user has been locked out.',
    )
  })
})
