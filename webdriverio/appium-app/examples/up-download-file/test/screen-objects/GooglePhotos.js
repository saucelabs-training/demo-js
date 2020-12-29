class GooglePhotos{
    get signIn(){
        return $('android=new UiSelector().textContains("SIGN IN TO BACK UP")');
    }

    get keepOff(){
        return $('android=new UiSelector().textContains("Keep off")');
    }

    get photos(){
        return $$('android=new UiSelector().descriptionContains("Photo taken on")');
    }

    get amountOfPhotos(){
        return this.photos.length;
    }

    get photoDeleteButton(){
        return $('android=new UiSelector().resourceId("com.google.android.apps.photos:id/trash")');
    }

    get confirmMoveToTrashButton(){
        return $('android=new UiSelector().className("android.widget.Button").textContains("Move to trash")');
    }

    /**
     * Open Photos
     */
    open(){
        driver.startActivity(
            'com.google.android.apps.photos',
            '.home.HomeActivity',
        );

        // On a fresh booted emulator there is a question to sign in to Google Drive
        try {
            this.signIn.waitForDisplayed({timeout: 5000});
            driver.back();
            this.keepOff.waitForDisplayed();
            this.keepOff.click();
            this.keepOff.waitForDisplayed({reverse: true})
        } catch (e) {
            // Do nothing
        }
    }

    /**
     * Open a photo from the overview
     *
     * @param {number|string} which Possible values are first and last for string, defaults to last else a number
     */
    openPhoto(which){
        let whichPhoto = which;

        if(typeof which === 'string'){
            whichPhoto = which === 'first' ? 0 : this.photos.length -1;
        }

        // Open photo and delete it
        this.photos[whichPhoto].click();
    }

    /**
     * Delete a photo from Photos, only visible photos can be deleted
     *
     * @param {number|string} which Possible values are first and last for string, defaults to last else a number
     */
    deletePhoto(which= 'last'){
        this.openPhoto(which);
        this.photoDeleteButton.waitForDisplayed();
        this.photoDeleteButton.click();
        this.confirmMoveToTrashButton.waitForDisplayed();
        this.confirmMoveToTrashButton.click();
        // Wait for it to disappear
        this.confirmMoveToTrashButton.waitForDisplayed({reverse: true});
    }
}

export default new GooglePhotos();
