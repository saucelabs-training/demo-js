describe('Visual appearance', () => {
    it('should look correct for home page', () => {
        browser.url('');
        browser.execute('/*@visual.init*/', 'Sauce Demo App');
        browser.execute('/*@visual.snapshot*/', 'Home Page');
    });
    it('should look correct visually', () => {
        browser.url('/inventory.html');
        browser.execute('/*@visual.init*/', 'Sauce Demo App');
        browser.execute('/*@visual.snapshot*/', 'Inventory Page');
    });
});


