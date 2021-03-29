import { LOGIN_USERS } from '../configs/e2eConstants';
import LoginPage from '../page-objects/LoginPage';
import SwagOverviewPage from '../page-objects/SwagOverviewPage';

describe('LoginPage', () => {
    beforeEach(() => {
        browser.url('');
        LoginPage.waitForIsShown();
    });

    it('should be able to login with a standard user', () => {
        LoginPage.signIn(LOGIN_USERS.STANDARD);

        // Wait for the inventory screen and check it
        expect(SwagOverviewPage.waitForIsShown()).toEqual(
            true,
            'Inventory List screen was not shown',
        );
    });
});
