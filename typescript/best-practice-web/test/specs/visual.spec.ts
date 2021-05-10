import loginPage from '../pages/login.page';
import {LOGIN_USERS} from '../e2eConstants'
import cartPage from '../pages/cart.page';
import inventoryPage from '../pages/inventory.page';

describe('My web app', () => {
    it('should look correct on desktop web', () => {
        loginPage.open();
        browser.execute('/*@visual.init*/', 'Sauce Demo App');
        loginPage.takeSnapshot();

        loginPage.login(LOGIN_USERS.STANDARD);
        inventoryPage.takeSnapshot();

        cartPage.open();
        cartPage.takeSnapshot();

        //And so on for every single page of the app...
    });
});