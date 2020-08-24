describe('My Login application', () => {
    it('should take snapshot', () => {
        browser.url('https://screener.io');
        browser.execute('/*@visual.init*/', 'My Visual Test');
        browser.execute('/*@visual.snapshot*/', 'Home');
    });
});


