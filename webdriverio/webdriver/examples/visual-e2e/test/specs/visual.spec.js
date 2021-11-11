describe('My app', () => {
    it('should look correct', async () => {
        await browser.url('');
        await browser.execute('/*@visual.init*/', 'My React App');
        await browser.execute('/*@visual.snapshot*/', 'Home Page');

        await browser.url('/inventory.html');
        await browser.execute('/*@visual.snapshot*/', 'Inventory Page');

        const result = await browser.execute('/*@visual.end*/');
        expect(result.message).toBeNull();
    });
});


