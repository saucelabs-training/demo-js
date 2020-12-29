import Base from './Base';

class QrCodeScreen extends Base {
	constructor() {
		super('~test-QR CODE SCANNER SCREEN');
	}

	get acceptCameraButton(){
		const okButtonSelector = 'type == \'XCUIElementTypeButton\' && name == \'OK\'';

		return $(`-ios predicate string:${ okButtonSelector }`);
	}

	acceptCameraAccess(){
		// In Sauce Labs (Legacy) RDC Android permissions are enabled by default.
		/// iOS needs to be done with automation
		if(driver.isIOS) {
			try {
				this.acceptCameraButton.waitForExist({timeout: 3000});
				this.acceptCameraButton.click();
			} catch (e) {
				// Do nothing, the alert was not shown
			}
		}
	}
}

export default new QrCodeScreen();
