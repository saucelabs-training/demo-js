import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * The current implementation uses the locators inside of the method.
     * As the page object expands, you will find that you are reusing the 
     * locators in multiple places. In that case, you might want to move
     * them into a private property
     */
    login (username: string, password: string):void {
        $('#username').setValue(username);
        $('#password').setValue(password);
        $('button[type="submit"]').click(); 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open():void {
        super.open('login');
    }
}

export default new LoginPage();
