describe('Protractor Demo', function() {
    it('should greet the named user', async function() {
        await browser.executeScript("sauce:context=Going to 'saucedemo.com'");
        await browser.get(baseUrl);

        await browser.executeScript("sauce:context=Checking Page Title");
        const title = await browser.getTitle();
        console.log('Page Title is: ' + title);

        await browser.executeScript("sauce:context=Asserting 'Swag Labs' title is present");
        expect(title).toEqual('Swag Labs');
    });
});
