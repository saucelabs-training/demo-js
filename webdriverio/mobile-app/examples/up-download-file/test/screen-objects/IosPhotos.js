class IosPhotos {
  // For iOS 15
  get continueButton() {
    return $('~Continue')
  }

  get allPhotosScreen() {
    return $('~All Photos')
  }

  get photos() {
    const selector = '**/XCUIElementTypeCell[`label CONTAINS "Photo,"`]'
    return  $$(`-ios class chain:${selector}`);
    // return $$('-ios class chain:**/XCUIElementTypeCell[`label CONTAINS "Photo,"`]');
  }

  async amountOfPhotos(){
    return this.photos.length;
  }
}

export default new IosPhotos();
