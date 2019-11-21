/**
 * Created by titusfortner on 11/23/16.
 */
function Page () {
}

Page.prototype.open = function (path) {
    browser.url('/' + path)
};

module.exports = new Page();