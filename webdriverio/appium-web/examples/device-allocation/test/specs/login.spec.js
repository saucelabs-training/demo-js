describe('LoginPage', () => {
  it('should be able determine that the page loaded', async () => {
    await browser.url('');
    await $('#login_button_container').waitForDisplayed();
  });
});
