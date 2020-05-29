const DEFAULT_TIMEOUT = 15000
const PAGES = {
    BASE_URL: 'https://www.saucedemo.com',
    CART: '/cart.html',
    CHECKOUT_COMPLETE: '/checkout-complete.html',
    CHECKOUT_PERSONAL_INFO: '/checkout-step-one.html',
    CHECKOUT_SUMMARY: '/checkout-step-two.html',
    LOGIN: '',
    SWAG_DETAILS: '/inventory-item.html',
    SWAG_ITEMS: '/inventory.html',
}
const PRODUCTS = {
    BIKE_LIGHT: 0,
    BOLT_SHIRT: 1,
    ONE_SIE: 2,
    TATT_SHIRT: 3,
    BACKPACK: 4,
    FLEECE_JACKET: 5,
}
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
}
const PERSONAL_INFO = {
    STANDARD: {
        firstName: 'Sauce',
        lastName: 'Bot',
        zip: '94105',
    },
    NO_FIRSTNAME: {
        firstName: '',
        lastName: 'Bot',
        zip: '94105',
    },
    NO_LAST_NAME: {
        firstName: 'Sauce',
        lastName: '',
        zip: '94105',
    },
    NO_POSTAL_CODE: {
        firstName: 'Sauce',
        lastName: 'Bot',
        zip: '',
    },
}

module.exports = {
    DEFAULT_TIMEOUT,
    LOGIN_USERS,
    PAGES,
    PERSONAL_INFO,
    PRODUCTS,
}
