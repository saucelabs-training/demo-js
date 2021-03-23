import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class LoginPage extends Page {
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username: string, password: string) {
        $('#username').setValue(username);
        $('#password').setValue(password);
        $('button[type="submit"]').click(); 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}
