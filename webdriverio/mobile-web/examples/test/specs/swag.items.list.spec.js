const {setTestContext} = require( '../helpers');

describe('Swag items list',  () => {
    it('should validate that all products are present', async () => {
        // Bypass the login and wait for the product page to be loaded
        await setTestContext({
            user: {username: 'standard_user'},
            path: '/inventory.html',
        });
        await $('.inventory_list').waitForDisplayed();

        // Actual test starts here
        await expect((await $$('.inventory_item')).length).toEqual(6);
    });
});
