class SamsungGallery{
    get picturesTabBarButton(){
        return $('android=new UiSelector().textMatches("Pictures")');
    }
    get photos(){
        return $$('android=new UiSelector().resourceId("com.sec.android.gallery3d:id/recycler_view_item")');
    }

    get amountOfPhotos(){
        return this.photos.length;
    }

    get deleteButton(){
        return $('android=new UiSelector().resourceId("com.sec.android.gallery3d:id/btn_delete")');
    }

    get confirmDeleteButton(){
        return $('android=new UiSelector().textContains("Move to Recycle bin")');
    }

    /**
     * Open Samsung Gallery
     */
    open(){
        driver.startActivity(
            'com.sec.android.gallery3d',
            'com.samsung.android.gallery.app.activity.GalleryActivity',
        );
        this.picturesTabBarButton.waitForDisplayed();
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
     * Delete a photo from Gallery, only visible photos can be deleted
     *
     * @param {number|string} which Possible values are first and last for string, defaults to last else a number
     */
    deletePhoto(which= 'last'){
        this.openPhoto(which);
        this.deleteButton.waitForDisplayed();
        this.deleteButton.click();
        this.confirmDeleteButton.waitForDisplayed();
        this.confirmDeleteButton.click();
        // Wait for it to disappear
        this.confirmDeleteButton.waitForDisplayed({reverse: true});
    }
}

export default new SamsungGallery();
