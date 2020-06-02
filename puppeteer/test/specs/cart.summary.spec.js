const {LOGIN_USERS, PAGES, PRODUCTS} = require('../e2eConstants');
const SwagOverviewPage = require('../page-objects/SwagOverviewPage');
const CheckoutPersonalInfoPage = require('../page-objects/CheckoutPersonalInfoPage');
const AppHeaderPage = require('../page-objects/AppHeaderPage');
const CartSummaryPage = require('../page-objects/CartSummaryPage');
const {setTestContext} = require('../helpers');

describe('Cart Summary page', () => {
    it('should validate that we can continue shopping', async () => {
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.CART,
        });
        await CartSummaryPage.waitForIsDisplayed();

        // Actual test starts here
        await CartSummaryPage.continueShopping();

        expect(await SwagOverviewPage.waitForIsDisplayed()).toEqual(
            true,
            'Inventory screen is still not visible'
        );
    });

    it('should validate that we can go from the cart to the checkout page', async () => {
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.CART,
        });
        await CartSummaryPage.waitForIsDisplayed();

        // Actual test starts here
        await CartSummaryPage.goToCheckout();

        expect(await CheckoutPersonalInfoPage.waitForIsDisplayed()).toEqual(
            true,
            'Inventory screen is still not visible'
        );
    });

    it('should validate that a product can be removed from the cart', async () => {
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.CART,
            products: [PRODUCTS.BACKPACK],
        });
        await CartSummaryPage.waitForIsDisplayed();

        // Actual test starts here
        expect(await AppHeaderPage.getCartAmount()).toEqual(
            '1',
            'The amount of cart items is not equal to 1',
        );
        expect(await CartSummaryPage.getSwagAmount()).toEqual(
            1,
            'The amount of items in the cart overview is not equal to 1',
        );

        await CartSummaryPage.removeSwag(0);

        expect(await AppHeaderPage.getCartAmount()).toEqual(
            '',
            'The amount of cart items is not equal to nothing',
        );

        expect(await CartSummaryPage.getSwagAmount()).toEqual(
            0,
            'The amount of items in the cart overview is not equal to 1',
        );
    });
});
