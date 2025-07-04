import AppHeaderPage from '../page-objects/AppHeaderPage';
import SwagOverviewPage from '../page-objects/SwagOverviewPage';
import CartSummaryPage from '../page-objects/CartSummaryPage';
import CheckoutPersonalInfoPage from '../page-objects/CheckoutPersonalInfoPage';
import {setTestContext} from '../helpers';
import {LOGIN_USERS, PAGES, PRODUCTS} from "../configs/e2eConstants";

describe('Cart Summary page', () => {
    it('should validate that we can continue shopping', async () => {
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.CART,
        });

        await expect(await CartSummaryPage.waitForIsShown()).toEqual(
            true,
            'Cart summary screen is still not visible'
        );

        // Actual test starts here
        await CartSummaryPage.continueShopping();

        await expect(await SwagOverviewPage.waitForIsShown()).toEqual(
            true,
            'Inventory screen is still not visible'
        );
    });

    it('should validate that we can go from the cart to the checkout page', async () => {
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.CART,
        });

        await expect(await CartSummaryPage.waitForIsShown()).toEqual(
            true,
            'Cart summary screen is still not visible'
        );

        // Actual test starts here
        await CartSummaryPage.goToCheckout();

        await expect(await CheckoutPersonalInfoPage.waitForIsShown()).toEqual(
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

        await expect(await CartSummaryPage.waitForIsShown()).toEqual(
            true,
            'Cart summary screen is still not visible'
        );

        // Actual test starts here
        await expect(await AppHeaderPage.getCartAmount()).toEqual(
            '1',
            'The amount of cart items is not equal to 1',
        );
        await expect(await CartSummaryPage.getSwagAmount()).toEqual(
            1,
            'The amount of items in the cart overview is not equal to 1',
        );

        await CartSummaryPage.removeSwag(0);

        await expect(await AppHeaderPage.getCartAmount()).toEqual(
            '',
            'The amount of cart items is not equal to nothing',
        );

        await expect(await CartSummaryPage.getSwagAmount()).toEqual(
            0,
            'The amount of items in the cart overview is not equal to 1',
        );
    });
});
