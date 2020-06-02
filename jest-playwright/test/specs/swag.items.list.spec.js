const { LOGIN_USERS, PAGES, PRODUCTS } = require('../e2eConstants')
const SwagOverviewPage = require('../page-objects/SwagOverviewPage')
const SwagDetailsPage = require('../page-objects/SwagDetailsPage')
const AppHeaderPage = require('../page-objects/AppHeaderPage')
const CartSummaryPage = require('../page-objects/CartSummaryPage')
const { setTestContext } = require('../helpers')

describe('Swag items list', () => {
    it('should validate that all products are present', async () => {
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
        })
        await SwagOverviewPage.waitForIsDisplayed()

        // Actual test starts here
        expect(await SwagOverviewPage.getAmount()).toEqual(
            6,
            'Amount of items was not equal to 6',
        )
    })

    it('should validate that the details of a product can be opened', async () => {
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
        })
        await SwagOverviewPage.waitForIsDisplayed()

        // Actual test starts here
        const product = 'Sauce Labs Backpack'

        await SwagOverviewPage.openSwagDetails(product)

        expect(await SwagDetailsPage.waitForIsDisplayed()).toEqual(
            true,
            'Swag Item detail page was not shown',
        )

        expect(await SwagDetailsPage.getSwagDetailsText()).toContain(
            product,
            'Swag Item detail page did not show the right text',
        )
    })

    it('should validate that a product can be added to the cart', async () => {
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
        })
        await SwagOverviewPage.waitForIsDisplayed()

        // Actual test starts here
        expect(await AppHeaderPage.getCartAmount()).toEqual(
            '',
            'The amount of cart items is not equal to nothing',
        )

        await SwagOverviewPage.addSwagToCart(0)

        expect(await AppHeaderPage.getCartAmount()).toEqual(
            '1',
            'The amount of cart items is not equal to 1',
        )
    })

    it('should validate that a product can be removed from the cart', async () => {
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
            products: [PRODUCTS.BACKPACK],
        })
        await SwagOverviewPage.waitForIsDisplayed()

        // Actual test starts here
        expect(await AppHeaderPage.getCartAmount()).toEqual(
            '1',
            'The amount of cart items is not equal to 1',
        )

        await SwagOverviewPage.removeSwagFromCart(0)

        expect(await AppHeaderPage.getCartAmount()).toEqual(
            '',
            'The amount of cart items is not equal to 0',
        )
    })

    it('should be able to open the cart summary page', async () => {
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
        })
        await SwagOverviewPage.waitForIsDisplayed()

        // Actual test starts here
        await AppHeaderPage.openCart()

        expect(await CartSummaryPage.waitForIsDisplayed()).toEqual(
            true,
            'Cart Summary page was not shown',
        )
    })
})
