describe('My sauce demo app', () => {
    it('should open', () => {
        browser.navigateTo('https://www.saucedemo.com');
        expect($('#login-button').isDisplayed()).toBeTrue();
    });
});


