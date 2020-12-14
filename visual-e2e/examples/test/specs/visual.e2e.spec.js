describe('Home page', () => {
    it('should look correct visually', () => {
        browser.url('https://saucedemo.com');
        browser.execute('/*@visual.init*/', 'My Visual Test');
        browser.execute('/*@visual.snapshot*/', 'Login Page');
    });
});


