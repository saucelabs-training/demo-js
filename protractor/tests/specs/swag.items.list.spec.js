import AppHeaderPage from '../page-objects/AppHeaderPage';
import SwagOverviewPage from '../page-objects/SwagOverviewPage';
import SwagDetailsPage from '../page-objects/SwagDetailsPage';
import CartSummaryPage from '../page-objects/CartSummaryPage';
import {setTestContext} from '../helpers';
import {LOGIN_USERS, PAGES, PRODUCTS} from '../configs/e2eConstants';
import {browser} from "protractor";

describe('Swag items list', () => {
    it('should validate that all products are present', async () => {
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
        });
        await SwagOverviewPage.waitForIsDisplayed();

        // Actual test starts here
        expect(await SwagOverviewPage.getAmount()).toEqual(
            6,
            'Amount of items was not equal to 6',
        );
    });

    // @TODO: there is an error with IE11 `ReferenceError: 'URLSearchParams' is undefined`
    // This is fixed in the app, but not yet deployed
    if (browser.browserName !== 'internet explorer') {
        it('should validate that the details of a product can be opened', async () => {
            await setTestContext({
                user: LOGIN_USERS.STANDARD,
                path: PAGES.SWAG_ITEMS,
            });
            await SwagOverviewPage.waitForIsDisplayed();

            // Actual test starts here
            const product = 'Sauce Labs Backpack';

            await SwagOverviewPage.openSwagDetails(product);

            expect(await SwagDetailsPage.waitForIsDisplayed()).toEqual(
                true,
                'Swag Item detail page was not shown',
            );

            expect(await SwagDetailsPage.getText()).toContain(
                product,
                'Swag Item detail page did not show the right text',
            );
        });
    }

    it('should validate that a product can be added to the cart', async () => {
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
        });
        await SwagOverviewPage.waitForIsDisplayed();

        // Actual test starts here
        expect(await AppHeaderPage.getCartAmount()).toEqual(
            '',
            'The amount of cart items is not equal to nothing',
        );

        await SwagOverviewPage.addSwagToCart(0);

        expect(await AppHeaderPage.getCartAmount()).toEqual(
            '1',
            'The amount of cart items is not equal to 1',
        );
    });

    it('should validate that a product can be removed from the cart', async () => {
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
            products: [PRODUCTS.BACKPACK],
        });
        await SwagOverviewPage.waitForIsDisplayed();

        // Actual test starts here
        expect(await AppHeaderPage.getCartAmount()).toEqual(
            '1',
            'The amount of cart items is not equal to 1',
        );

        await SwagOverviewPage.removeSwagFromCart(0);

        expect(await AppHeaderPage.getCartAmount()).toEqual(
            '',
            'The amount of cart items is not equal to 0',
        );
    });

    it('should be able to open the cart summary page', async () => {
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
        });
        await SwagOverviewPage.waitForIsDisplayed();

        // Actual test starts here
        await AppHeaderPage.openCart();

        expect(await CartSummaryPage.waitForIsDisplayed()).toEqual(
            true,
            'Cart Summary page was not shown',
        );
    });
});
