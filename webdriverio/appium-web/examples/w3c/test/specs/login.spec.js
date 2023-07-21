describe('LoginPage', () => {
    beforeEach(async () => {
        await browser.url('');
        await $('#login_button_container').waitForDisplayed();
    });

    it('should be able to login with a standard user', async () => {
        await $('#user-name').addValue('standard_user');
        await $('#password').addValue('secret_sauce');
        // For some reason Android is not clicking properly
        driver.isAndroid
          ? await browser.execute('document.querySelector(\'.btn_action\').click()')
          : await $('.btn_action').click();

        // We will not execute an assertion here because if the page is not displayed it will
        // already throw an error
        await $('.inventory_list').waitForDisplayed();
    });
});
