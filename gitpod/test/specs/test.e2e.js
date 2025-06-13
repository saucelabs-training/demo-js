
describe('Test using Gitpod ', () => {
    it('should visit a page and get the title', async () => {
        await browser.url('https://saucedemo.com');
        const title = await browser.getTitle();
        await expect(title).toContain('Swag Labs');
    })
})

