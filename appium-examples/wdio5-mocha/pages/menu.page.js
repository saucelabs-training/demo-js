/**
 * Created by titusfortner on 11/23/16.
 * Modified by jamestacker on 11/14/19.
 */
import Page from './page'

class MenuPage extends Page {
    /* Define Element */
    get arcsEntry() {return $('Arcs');}
    /* Define page methods */
    open() {
        super.open('Arcs');
    }

    submit() {
        this.arcsEntry.click();
    }
}
export default new MenuPage();