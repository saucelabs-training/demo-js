/**
 * Created by titusfortner on 11/23/16.
 * Modified by jamestacker on 11/14/19.
 */
import Page from './page'

class HomePage extends Page {
    /* Define Element */
    get graphicsTab () { return $('Graphics'); }
    /* Define Page methods */
    open() {
        super.open('Graphics');
    }

    submit() {
        this.graphicsTab.click();
    }
}

export default new HomePage();