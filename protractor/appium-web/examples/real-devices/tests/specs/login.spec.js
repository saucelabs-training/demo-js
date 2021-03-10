describe('LoginPage', () => {
  beforeEach(async () => {
    // Load the main url
    await browser.get('');

    // Wait until the home page is loaded
    await waitForIsDisplayed($('#login_button_container'));
  });

  it('should be able to login with a standard user', async () => {
    // Sign in
    await $('#user-name').sendKeys('standard_user');
    await $('#password').sendKeys('secret_sauce');
    await $('.btn_action').click();

    // Wait for the inventory screen and check it
    expect(await waitForIsDisplayed($('.inventory_list'))).toEqual(
      true,
      'Inventory List screen was not shown',
    );
  });

  it('should not be able to login with a locked user', async () => {
    // Sign in
    await $('#user-name').sendKeys('locked_out_user');
    await $('#password').sendKeys('secret_sauce');
    await $('.btn_action').click();

    // Wait for the error message to be displayed
    await waitForIsDisplayed($('[data-test="error"]'));

    // Assert the text
    expect(await $('[data-test="error"]').getText()).toContain(
      'Epic sadface: Sorry, this user has been locked out.',
      'The error message is not as expected',
    );
  });
});

/**
 * Wait for an element to be visible
 *
 * @param {ElementFinder} element
 *
 * @returns {WebElementPromise}
 */
async function waitForIsDisplayed(element) {
  const EC = protractor.ExpectedConditions;

  return browser.wait(EC.visibilityOf(element), 15000);
}
