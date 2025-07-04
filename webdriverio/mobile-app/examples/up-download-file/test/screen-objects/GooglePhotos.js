class GooglePhotos {
  get signIn() {
    return $('android=new UiSelector().textContains("SIGN IN TO BACK UP")');
  }

  get keepOff() {
    return $('android=new UiSelector().textContains("Keep off")');
  }

  get photos() {
    return $$('android=new UiSelector().descriptionContains("Photo taken on")');
  }

  get photoDeleteButton() {
    return $('android=new UiSelector().resourceId("com.google.android.apps.photos:id/trash")');
  }

  get confirmMoveToTrashButton() {
    return $('android=new UiSelector().className("android.widget.Button").textContains("Move to trash")');
  }

  /**
   * Open Photos
   */
  async open() {
    await driver.startActivity(
      'com.google.android.apps.photos',
      '.home.HomeActivity',
    );

    // On a fresh booted emulator there is a question to sign in to Google Drive
    try {
      await this.signIn.waitForDisplayed({timeout: 5000});
      await driver.back();
      await this.keepOff.waitForDisplayed();
      await this.keepOff.click();
      await this.keepOff.waitForDisplayed({reverse: true})
    } catch (e) {
      // Do nothing
    }
  }

  /**
   * Open a photo from the overview
   *
   * @param {number|string} which Possible values are first and last for string, defaults to last else a number
   */
  async openPhoto(which) {
    let whichPhoto = which;

    if (typeof which === 'string') {
      whichPhoto = which === 'first' ? 0 : await this.photos.length - 1;
    }

    // Open photo and delete it
    await (await this.photos[whichPhoto]).click();
  }

  /**
   * Delete a photo from Photos, only visible photos can be deleted
   *
   * @param {number|string} which Possible values are first and last for string, defaults to last else a number
   */
  async deletePhoto(which = 'last') {
    await this.openPhoto(which);
    await this.photoDeleteButton.waitForDisplayed();
    await this.photoDeleteButton.click();
    await this.confirmMoveToTrashButton.waitForDisplayed();
    await this.confirmMoveToTrashButton.click();
    // Wait for it to disappear
    await this.confirmMoveToTrashButton.waitForDisplayed({reverse: true});
  }

  /**
   * Get the amount of photos
   *
   * @returns {Promise<number>}
   */
  async amountOfPhotos() {
    return this.photos.length;
  }
}

export default new GooglePhotos();
