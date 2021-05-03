/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    open (path: string):void {
        browser.url(`https://www.saucedemo.com/${path}`)
    }

    takeSnapshot(pageName: string): void {
        browser.execute('/*@visual.snapshot*/', pageName);
    }
}
