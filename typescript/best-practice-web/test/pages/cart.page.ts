import Page from './page';

class CartPage extends Page {
    private _urlPart:string = 'cart.html';

    open():void {
        super.open(this._urlPart);
    }

    takeSnapshot():void{
        super.takeSnapshot(this._urlPart)
    }
}

export default new CartPage();
