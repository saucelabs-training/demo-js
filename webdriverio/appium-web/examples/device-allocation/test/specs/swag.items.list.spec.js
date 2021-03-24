import SwagOverviewPage from '../page-objects/SwagOverviewPage';
import {setTestContext} from '../helpers';
import {LOGIN_USERS, PAGES} from "../configs/e2eConstants";

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
});
