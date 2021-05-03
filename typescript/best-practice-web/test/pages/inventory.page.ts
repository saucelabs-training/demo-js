import Page from './page';

class InventoryPage extends Page {
    private _urlPart: string = '/inventory.html';

    open():void {
        super.open(this._urlPart);
    }

    takeSnapshot():void{
        super.takeSnapshot(this._urlPart);
    }
}

export default new InventoryPage();
