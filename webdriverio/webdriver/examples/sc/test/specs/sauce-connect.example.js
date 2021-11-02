describe('My sauce demo app', () => {
    it('should open', async () => {
        await browser.navigateTo('https://www.saucedemo.com');
        await expect(await $('#login-button').isDisplayed()).toBeTrue();
    });
});


