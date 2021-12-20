import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        //act
        await LoginPage.open();
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        //assert
        await expect(await SecurePage.flashAlert).toBeExisting();
        await expect(await SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});
