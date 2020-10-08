import AppHeaderPage from '../page-objects/AppHeaderPage';
import SwagOverviewPage from '../page-objects/SwagOverviewPage';
import CartSummaryPage from '../page-objects/CartSummaryPage';
import CheckoutPersonalInfoPage from '../page-objects/CheckoutPersonalInfoPage';
import {setTestContext} from '../helpers';
import {LOGIN_USERS, PAGES, PRODUCTS} from "../configs/e2eConstants";

describe('Cart Summary page', () => {
    it('should validate that we can continue shopping', () => {
        setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.CART,
        });

        expect(CartSummaryPage.waitForIsShown()).toEqual(
            true,
            'Cart summary screen is still not visible'
        );

        // Actual test starts here
        CartSummaryPage.continueShopping();

        expect(SwagOverviewPage.waitForIsShown()).toEqual(
            true,
            'Inventory screen is still not visible'
        );
    });

    it('should validate that we can go from the cart to the checkout page', () => {
        setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.CART,
        });

        expect(CartSummaryPage.waitForIsShown()).toEqual(
            true,
            'Cart summary screen is still not visible'
        );

        // Actual test starts here
        CartSummaryPage.goToCheckout();

        expect(CheckoutPersonalInfoPage.waitForIsShown()).toEqual(
            true,
            'Inventory screen is still not visible'
        );
    });

    it('should validate that a product can be removed from the cart', () => {
        setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.CART,
            products: [PRODUCTS.BACKPACK],
        });

        expect(CartSummaryPage.waitForIsShown()).toEqual(
            true,
            'Cart summary screen is still not visible'
        );

        // Actual test starts here
        expect(AppHeaderPage.getCartAmount()).toEqual(
            '1',
            'The amount of cart items is not equal to 1',
        );
        expect(CartSummaryPage.getSwagAmount()).toEqual(
            1,
            'The amount of items in the cart overview is not equal to 1',
        );

        CartSummaryPage.removeSwag(0);

        expect(AppHeaderPage.getCartAmount()).toEqual(
            '',
            'The amount of cart items is not equal to nothing',
        );

        expect(CartSummaryPage.getSwagAmount()).toEqual(
            0,
            'The amount of items in the cart overview is not equal to 1',
        );
    });
});
