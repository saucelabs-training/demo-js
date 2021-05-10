import Page from './page';
import {PAGES} from '../e2eConstants';

class CartPage extends Page {
    private _urlPart:string = PAGES.CART;

    open():void {
        super.open(this._urlPart);
    }

    takeSnapshot():void{
        super.takeSnapshot(this._urlPart)
    }
}

export default new CartPage();
