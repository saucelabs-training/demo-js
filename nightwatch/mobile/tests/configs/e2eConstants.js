const DEFAULT_TIMEOUT = 15000;
const PAGES = {
    CART: '/cart.html',
    CHECKOUT_COMPLETE: '/checkout-complete.html',
    CHECKOUT_PERSONAL_INFO: '/checkout-step-one.html',
    CHECKOUT_SUMMARY: '/checkout-step-two.html',
    LOGIN: '',
    SWAG_DETAILS: '/inventory-item.html',
    SWAG_ITEMS: '/inventory.html',
};
const LOGIN_USERS = {
    LOCKED: {
        username: 'locked_out_user',
        password: 'secret_sauce',
    },
    NO_MATCH: {
        username: 'd',
        password: 'd',
    },
    NO_USER_DETAILS: {
        username: '',
        password: '',
    },
    NO_PASSWORD: {
        username: 'standard_user',
        password: '',
    },
    PERFORMANCE: {
        username: 'performance_glitch_user',
        password: 'secret_sauce',
    },
    STANDARD: {
        username: 'standard_user',
        password: 'secret_sauce',
    },
};

module.exports = {
    DEFAULT_TIMEOUT,
    LOGIN_USERS,
    PAGES,
};
