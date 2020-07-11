const { LOGIN_USERS, PAGES, PRODUCTS } = require('../e2eConstants')
const SwagOverviewPage = require('../page-objects/SwagOverviewPage')
const SwagDetailsPage = require('../page-objects/SwagDetailsPage')
const AppHeaderPage = require('../page-objects/AppHeaderPage')
const { setTestContext } = require('../helpers')

describe('Swag Item Details', () => {
    it('should validate that we can go back from the details to the inventory page', async () => {
        // Need to start with the inventory url here to get the correct routing
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
        })
        await SwagDetailsPage.open(PRODUCTS.BACKPACK)

        // Actual test starts here
        expect(await SwagDetailsPage.waitForIsDisplayed()).toEqual(
            true,
            'Swag details page is not shown',
        )

        await SwagDetailsPage.goBack()

        expect(await SwagOverviewPage.waitForIsDisplayed()).toEqual(
            true,
            'Inventory screen is still not visible',
        )
    })

    it('should validate that a product can be added to a cart', async () => {
        // Need to start with the inventory url here to get the correct routing
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
        })
        await SwagDetailsPage.open(PRODUCTS.BACKPACK)
        await SwagDetailsPage.waitForIsDisplayed()

        // Actual test starts here
        expect(await AppHeaderPage.getCartAmount()).toEqual(
            '',
            'The amount of cart items is not equal to nothing',
        )

        await SwagDetailsPage.addToCart()

        expect(await AppHeaderPage.getCartAmount()).toEqual(
            '1',
            'The amount of cart items is not equal to 1',
        )
    })

    it('should validate that a product can be removed from the cart', async () => {
        // Need to start with the inventory url here to get the correct routing
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
            products: [PRODUCTS.BACKPACK],
        })
        await SwagDetailsPage.open(PRODUCTS.BACKPACK)
        await SwagDetailsPage.waitForIsDisplayed()

        // Actual test starts here
        expect(await AppHeaderPage.getCartAmount()).toEqual(
            '1',
            'The amount of cart items is not equal to 1',
        )

        await SwagDetailsPage.removeFromCart()

        expect(await AppHeaderPage.getCartAmount()).toEqual(
            '',
            'The amount of cart items is not equal to nothing',
        )
    })
})
