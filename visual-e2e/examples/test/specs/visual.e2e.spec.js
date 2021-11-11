describe('Home page', () => {
    it('should look correctly', async () => {
        await browser.url(`https://www.saucedemo.com`);
        // Create a group of tests
        await browser.execute('/*@visual.init*/', 'Sauce Demo');
        // Capture snapshot of current page
        await browser.execute('/*@visual.snapshot*/', 'Login Page');
        //Stop the test
        const result = await browser.execute('/*@visual.end*/');
        //Expect that no error messages come back
        expect(result.message).toBeNull();
    });
});


