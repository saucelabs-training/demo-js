import Base from './Base';
import {DEFAULT_PIN, INCORRECT_PIN} from '../configs/constants';

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
        // Sauce Labs (Legacy) RDC mocks iOS in a different then the normal iOS mocking,
        // so it also needs to be treated differently
        if (process.env.RDC) {
            return $('~Cancel');
        }

        return $('~Try Again');
    }

    get androidBiometryAlert() {
        return $('android=new UiSelector().textContains("Please sign in")');
    }

    get faceRecognition() {
        return $('~test-face-recognition');
    }

    /**
     * Submit biometric login
     *
     * @param {boolean} successful
     */
    submitBiometricLogin(successful) {
        // Touch / Face ID needs to be triggered differently on iOS
        if (driver.isIOS) {
            // Determine Face / Touch ID
            return this.submitIosBiometricLogin(successful);
        }

        return this.submitAndroidBiometricLogin(successful ? DEFAULT_PIN : INCORRECT_PIN);
    }

    /**
     * Verify that the biometric login failed
     *
     * return {Promise<boolean>}
     */
    isBiometryAlertShown() {
        if (driver.isIOS) {
            return this.iosRetryBiometry.waitForDisplayed({
                // On RDC the alert will not be shown again, so we need to sue the reverse here
                reverse: process.env.RDC
            });
        }

        return this.androidBiometryAlert.waitForDisplayed();
    }

    /**
     * Submit iOS biometric login
     *
     * @param {boolean} successful
     */
    submitIosBiometricLogin(successful) {
        // Sauce Labs (Legacy) RDC mocks iOS in a different then the normal iOS mocking,
        // so it also needs to be treated differently
        if (process.env.RDC) {
            return driver.touchId(successful);
        }

        this.allowIosBiometricUsage();

        return driver.execute(
            'mobile:sendBiometricMatch',
            {
                type: this.isFaceId() ? 'faceId' : 'touchId',
                match: successful,
            },
        );

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
