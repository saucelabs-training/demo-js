describe('Home page', () => {
    it('should look correct visually', () => {
        browser.url('');
        browser.execute('/*@visual.init*/', 'Sauce Demo App');
        browser.execute('/*@visual.snapshot*/', 'Home Page');
    });
});


