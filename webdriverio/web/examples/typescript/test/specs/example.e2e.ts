import {LoginPage} from  '../pageobjects/login.page';
import {SecurePage} from '../pageobjects/secure.page';

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        // arrange
        const loginPage = new LoginPage();
        const securePage = new SecurePage();
        //act
        loginPage.open();
        loginPage.login('tomsmith', 'SuperSecretPassword!');
        //assert
        expect(securePage.flashAlert).toBeExisting();
        expect(securePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});


