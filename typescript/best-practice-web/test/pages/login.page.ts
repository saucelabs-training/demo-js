import Page from './page';

class LoginPage extends Page {
    /**
     * The current implementation uses the locators inside of the method.
     * As the page object expands, you will find that you are reusing the 
     * locators in multiple places. In that case, you might want to move
     * them into a private property
     */
    login (userDetails: { password: string; username: string; }):void {
        const {password, username} = userDetails;

        $('[data-test=username]').setValue(username);
        $('[data-test=password]').setValue(password);
        $('[data-test=login-button]').click(); 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open():void {
        super.open('');
    }

    takeSnapshot():void {
      super.takeSnapshot('/')
  }
}

export default new LoginPage();
