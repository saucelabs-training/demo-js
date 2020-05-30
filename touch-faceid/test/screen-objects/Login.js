import Base from './Base';

class LoginScreen extends Base {
    constructor() {
        super('~test-Login');
    }

    get biometryButton() {
        return $('~test-biometry');
    }

    get iosAllowBiometry() {
        return $('~Don’t Allow');
    }

    get allowBiometry() {
        return $('~OK');
    }

    get iosRetryBiometry() {
        return $('~Try Again');
    }

    get androidBiometryAlert() {
        return $('*//*[@resource-id="com.swaglabsmobileapp:id/fingerprint_icon"]');
    }

    get faceRecognition() {
        return $('~test-face-recognition');
    }

    /**
     * Submit biometric login
     *
     * @param {boolean|number} successful
     */
    submitBiometricLogin(successful) {
        // Touch / Face ID needs to be triggered differently on iOS
        if (driver.isIOS) {
            // Determine Face / Touch ID
            return this.submitIosBiometricLogin(successful);
        }

        return this.submitAndroidBiometricLogin(successful ? 1234 : 4321);
    }

    /**
     * Verify that the biometric login failed
     *
     * return {boolean}
     */
    isBiometryAlertShown() {
        if (driver.isIOS) {
            return this.iosRetryBiometry.waitForDisplayed();
        }

        // We need to pause here to make sure the biometric log in has been executed
        driver.pause(1000);

        return this.androidBiometryAlert.waitForDisplayed();
    }

    /**
     * Submit iOS biometric login
     *
     * @param {boolean} successful
     */
    submitIosBiometricLogin(successful) {
        // Check if biometric usage is  allowed
        if (!driver.config.services.includes('sauce')) {
            this.allowIosBiometricUsage();

            return driver.execute(
                'mobile:sendBiometricMatch',
                {
                    type: this.isFaceId() ? 'faceId' : 'touchId',
                    match: successful,
                },
            );
        }

        return driver.touchId(successful);
    }

    /**
     * Allow biometric usage on iOS if it isn't already accepted
     */
    allowIosBiometricUsage() {
        // See the wdio.shared.conf.js file in the `before` hook for what this property does
        if (!driver.isBioMetricAllowed) {
            // Wait for the alert
            try {
                this.iosAllowBiometry.waitForDisplayed({timeout: 3000});
                this.allowBiometry.click();
            } catch (e) {
                // This means that allow using touch/facID has already been accepted
            }
            // See the wdio.shared.conf.js file in the `before` hook for what this property does
            // Set it to accept
            driver.isBioMetricAllowed = true;
        }
    }

    /**
     * Check if this is the biometric login supports FaceID
     *
     * @return {boolean}
     */
    isFaceId() {
        return this.faceRecognition.isDisplayed();
    }

    /**
     * Submit Android biometric login
     *
     * @param {number} fingerprintId
     */
    submitAndroidBiometricLogin(fingerprintId) {
        this.androidBiometryAlert.waitForDisplayed();

        return driver.fingerPrint(fingerprintId);
    }
}

export default new LoginScreen();
