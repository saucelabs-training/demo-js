import AppHeaderPage from '../page-objects/AppHeaderPage';
import SwagOverviewPage from '../page-objects/SwagOverviewPage';
import LoginPage from "../page-objects/LoginPage";
import CartSummaryPage from "../page-objects/CartSummaryPage";
import MenuPage from "../page-objects/MenuPage";
import {setTestContext} from '../helpers';
import {LOGIN_USERS, PAGES, PRODUCTS} from "../configs/e2eConstants";

describe('Menu', () => {
    beforeEach(() => {
        setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.CART,
            products: [PRODUCTS.BACKPACK],
        });
        CartSummaryPage.waitForIsShown();
        MenuPage.open();
    });

    it('should be able to the swag items overview page', () => {
        MenuPage.openInventoryList();

        expect(SwagOverviewPage.waitForIsShown()).toEqual(
            true,
            'Swag Items overview page was not shown',
        );
    });

    // Don't execute this test on the EU DC, the saucelabs.com url is not working there making this test fail
    if(!process.env.REGION) {
        it('should be able to open the about page', () => {
            MenuPage.openAboutPage();

            expect(CartSummaryPage.waitForIsShown(false)).toEqual(
                true,
                'Swag Cart should not be shown anymore',
            );
        });
    }

    it('should be able to log out', () => {
        MenuPage.logout();

        expect(LoginPage.waitForIsShown()).toEqual(
            true,
            'Login is not shown',
        );
    });

    it('should be able to clear the cart', () => {
        expect(AppHeaderPage.getCartAmount()).toEqual(
            '1',
            'The amount of cart items is not equal to nothing',
        );

        MenuPage.restAppState();

        expect(AppHeaderPage.getCartAmount()).toEqual(
            '',
            'The amount of cart items is not equal to nothing',
        );
    });
});
