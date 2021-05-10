import LoginPage from '../pages/login.page';
import {LOGIN_USERS} from '../e2eConstants'

describe('My web app', () => {
    beforeEach(() => {
        browser.execute('sauce:context=########## Start beforeEach ##########');
    });
    
    afterEach(() => {
        browser.execute('sauce:context=########## Enf of test ##########');
    });

    it('home page should be fast', () => {
        LoginPage.open();
        const performance = browser.execute('sauce:log', {type: 'sauce:performance'});
        expect(performance.speedIndex).toBeLessThan(500);
    });

    it('inventory should be fast', () => {
        LoginPage.open();
        LoginPage.login(LOGIN_USERS.STANDARD)
        const performance = browser.execute('sauce:log', {type: 'sauce:performance'});
        expect(performance.speedIndex).toBeLessThan(500);
    });
});