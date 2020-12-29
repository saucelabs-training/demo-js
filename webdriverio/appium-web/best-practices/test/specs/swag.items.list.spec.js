import AppHeaderPage from '../page-objects/AppHeaderPage';
import SwagOverviewPage from '../page-objects/SwagOverviewPage';
import SwagDetailsPage from '../page-objects/SwagDetailsPage';
import CartSummaryPage from '../page-objects/CartSummaryPage';
import {setTestContext} from '../helpers';
import {LOGIN_USERS, PAGES, PRODUCTS} from "../configs/e2eConstants";

describe('Swag items list', () => {
    it('should validate that all products are present', () => {
        setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
        });
        SwagOverviewPage.waitForIsShown();

        // Actual test starts here
        expect(SwagOverviewPage.getAmount()).toEqual(
            6,
            'Amount of items was not equal to 6',
        );
    });

    it('should validate that the details of a product can be opened', () => {
        setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
        });
        SwagOverviewPage.waitForIsShown();

        // Actual test starts here
        const product = 'Sauce Labs Backpack';

        SwagOverviewPage.openSwagDetails(product);

        expect(SwagDetailsPage.waitForIsShown()).toEqual(
            true,
            'Swag Item detail page was not shown',
        );

        expect(SwagDetailsPage.getText()).toContain(
            product,
            'Swag Item detail page did not show the right text',
        );
    });

    it('should validate that a product can be added to the cart', () => {
        setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
        });
        SwagOverviewPage.waitForIsShown();

        // Actual test starts here
        expect(AppHeaderPage.getCartAmount()).toEqual(
            '',
            'The amount of cart items is not equal to nothing',
        );

        SwagOverviewPage.addSwagToCart(0);

        expect(AppHeaderPage.getCartAmount()).toEqual(
            '1',
            'The amount of cart items is not equal to 1',
        );
    });

    it('should validate that a product can be removed from the cart', () => {
        setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
            products: [PRODUCTS.BACKPACK]
        });
        SwagOverviewPage.waitForIsShown();

        // Actual test starts here
        expect(AppHeaderPage.getCartAmount()).toEqual(
            '1',
            'The amount of cart items is not equal to 1',
        );

        SwagOverviewPage.removeSwagFromCart(0);

        expect(AppHeaderPage.getCartAmount()).toEqual(
            '',
            'The amount of cart items is not equal to 0',
        );
    });

    it('should be able to open the cart summary page', () => {
        setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
        });
        SwagOverviewPage.waitForIsShown();

        // Actual test starts here
        AppHeaderPage.openCart();

        expect(CartSummaryPage.waitForIsShown()).toEqual(
            true,
            'Cart Summary page was not shown',
        );
    });
});
