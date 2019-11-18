/**
 * Created by titusfortner on 11/23/16.
 * Modified by jamestacker on 11/14/19.
 */
export default class Page {
    open(path) {
        browser.url('/' + path)
    }
}
