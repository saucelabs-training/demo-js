const assert = require('assert')

describe('WebdriverIO Demo', function() {
    it('should confirm page title', () => {
        browser.url('/');
        assert.equal(browser.getTitle(), 'Swag Labs');
    });
});
