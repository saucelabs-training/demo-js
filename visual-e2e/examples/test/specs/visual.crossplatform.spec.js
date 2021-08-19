describe('Visual appearance', () => {
    it('should look correct', () => {
        browser.url('');
        browser.execute('/*@visual.init*/', 'My React App');
        browser.execute('/*@visual.snapshot*/', 'Home Page');

        browser.url('/inventory.html');
        browser.execute('/*@visual.snapshot*/', 'Inventory Page');

        const result = browser.execute('/*@visual.end*/');
        expect(result.message).toBeNull();
    });
});


