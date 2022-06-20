describe('LoginPage', () => {
  it('should validate that the page loaded', async () => {
    await browser.url('');
    await $('#login_button_container').waitForDisplayed();
  });
});
