describe('Protractor Demo', function() {
    it('should confirm page title', async () => {
        await browser.executeScript("sauce:context=Going to 'saucedemo.com'");
        await browser.get('https://www.saucedemo.com');
        await browser.executeScript("sauce:context=Asserting 'Swag Labs' title is present");
        let title = await browser.getTitle();
        expect(title).toEqual('Swag Labs');
    });
});
