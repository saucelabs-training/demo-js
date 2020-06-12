describe('SauceDemo login page', () => {
	test('should load', async () => {
		const page = (await browser.pages())[0]
		await page.goto('https://www.saucedemo.com/');
		expect(await page.title()).toBe('Swag Labs');
	});
	test('should login', async () => {
		const page = (await browser.pages())[0]
		await page.goto('https://www.saucedemo.com/');
		await page.type('#user-name', 'standard_user');
		await page.type('#password', 'secret_sauce');
		await page.click('.btn_action');
		expect(await page.title()).toBe('Swag Labs');
	});
});
