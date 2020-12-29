export default class BasePage {
    constructor(selector) {
        this.screen = selector;
        this.url = 'https://www.saucedemo.com';
    }

    /**
     * Is the screen displayed
     *
     * @returns {Promise<boolean>}
     */
    isScreenDisplayed(){
        return this.screen.visible;
    }
}
