import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        //act
        LoginPage.open();
        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        //assert
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});