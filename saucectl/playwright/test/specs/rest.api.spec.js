const {test, expect} = require('@playwright/test')
const {PAGES} = require('../e2eConstants')

test.describe('REST API', () => {
  test('should return 200 for the homepage', async ({request}) => {
    const response = await request.get(PAGES.BASE_URL)

    expect(response.status()).toBe(200)
  })

  test('should return HTML content type for the homepage', async ({request}) => {
    const response = await request.get(PAGES.BASE_URL)

    expect(response.headers()['content-type']).toContain('text/html')
  })

  // saucedemo.com is a React SPA: the initial HTML is a shell — the login
  // form is rendered client-side. The static HTML only contains the app
  // title, the React mount point, and the bundled script reference.
  test('should return a body that contains the app shell', async ({request}) => {
    const response = await request.get(PAGES.BASE_URL)
    const body = await response.text()

    expect(body).toContain('Swag Labs')
    expect(body).toContain('id="root"')
  })

  test('should return 200 for the web app manifest', async ({request}) => {
    const response = await request.get(`${PAGES.BASE_URL}/manifest.json`)

    expect(response.status()).toBe(200)
    expect(response.headers()['content-type']).toContain('application/json')
  })

  test('should return a valid JSON manifest with the app name', async ({request}) => {
    const response = await request.get(`${PAGES.BASE_URL}/manifest.json`)
    const manifest = await response.json()

    expect(manifest).toHaveProperty('short_name')
  })

  test('should return 404 for an unknown route', async ({request}) => {
    const response = await request.get(`${PAGES.BASE_URL}/this-page-does-not-exist`)

    expect(response.status()).toBe(404)
  })
})
