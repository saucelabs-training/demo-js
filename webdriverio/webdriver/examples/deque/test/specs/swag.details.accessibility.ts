import {setTestContext} from "../helpers";
import {LOGIN_USERS, PAGES} from "../configs/e2eConstants";

describe('Swag Items Accessibility Spec', () => {
    it('should accessibility scan the swag details page', async () => {
        //Navigate to the page that you'd like to scan
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_DETAILS
        });
        //Scans the page for accessibility and pushes results to sauce labs
        await browser.getAxeResults();
    });
});