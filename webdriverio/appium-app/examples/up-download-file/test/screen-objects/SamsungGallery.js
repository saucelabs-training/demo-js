class SamsungGallery {
  get picturesTabBarButton() {
    return $('android=new UiSelector().textMatches("Pictures")');
  }

  get photos() {
    return $$('android=new UiSelector().resourceId("com.sec.android.gallery3d:id/recycler_view_item")');
  }

  get deleteButton() {
    return $('android=new UiSelector().resourceId("com.sec.android.gallery3d:id/btn_delete")');
  }

  get confirmDeleteButton() {
    return $('android=new UiSelector().textContains("Move to Recycle bin")');
  }

  /**
   * Open Samsung Gallery
   */
  async open() {
    await driver.startActivity(
      'com.sec.android.gallery3d',
      'com.samsung.android.gallery.app.activity.GalleryActivity',
    );
    await this.picturesTabBarButton.waitForDisplayed();
    await this.picturesTabBarButton.click();
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
   * Delete a photo from Gallery, only visible photos can be deleted
   *
   * @param {number|string} which Possible values are first and last for string, defaults to last else a number
   */
  async deletePhoto(which = 'last') {
    await this.openPhoto(which);
    await this.deleteButton.waitForDisplayed();
    await this.deleteButton.click();
    await this.confirmDeleteButton.waitForDisplayed();
    await this.confirmDeleteButton.click();
    // Wait for it to disappear
    await this.confirmDeleteButton.waitForDisplayed({reverse: true});
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

export default new SamsungGallery();
