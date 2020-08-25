describe('My Login application', () => {
    it('should take snapshot', () => {
        browser.url('https://saucedemo.com');
        browser.execute('/*@visual.init*/', 'My Visual Test');
        browser.execute('/*@visual.snapshot*/', 'Login Page');
    });
});


