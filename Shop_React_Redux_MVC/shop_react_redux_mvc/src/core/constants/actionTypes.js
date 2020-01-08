export const LOG_IN_TYPES = {
    //login
    CNTRL_LOG_IN: 'CNTRL_LOG_IN',
    RX_LOG_IN: 'RX_LOG_IN',
    RX_LOG_IN_PENDING: 'RX_LOG_IN_PENDING',
    RX_LOG_IN_DONE: 'RX_LOG_IN_DONE',
};

export const SIGN_UP_TYPES = {
    //Sign up
    CNTRL_SIGN_UP: 'CNTRL_SIGN_UP',
    RX_SIGN_UP: 'RX_SIGN_UP',
    RX_SIGN_UP_PENDING: 'RX_SIGN_UP_PENDING',
    RX_SIGN_UP_DONE: 'RX_SIGN_UP_DONE',
};

export const PRODUCT_TYPES = {
    //all products
    CNTRL_GET_PRODUCTS: 'CNTRL_GET_PRODUCTS',
    RX_GET_PRODUCTS: 'RX_GET_PRODUCTS',
    RX_GET_PRODUCTS_PENDING: 'RX_GET_PRODUCTS_PENDING',
    RX_GET_PRODUCTS_DONE: 'RX_GET_PRODUCTS_DONE',

    //single product
    CNTRL_GET_PRODUCT_BY_ID: 'CNTRL_GET_PRODUCT_BY_ID',
    RX_GET_PRODUCT_BY_ID: 'RX_GET_PRODUCT_BY_ID',
    RX_GET_PRODUCT_BY_ID_PENDING: 'RX_GET_PRODUCT_BY_ID_PENDING',
    RX_GET_PRODUCT_BY_ID_DONE: 'RX_GET_PRODUCT_BY_ID_DONE',

    RX_ADD_PRODUCT_TO_CART: 'RX_ADD_PRODUCT_TO_CART',
    RX_REMOVE_PRODUCT_FROM_CART: 'RX_REMOVE_PRODUCT_FROM_CART',
};

export const CATEGORIES_TYPES = {
    //all categories
    CNTRL_GET_CATEGORIES: 'CNTRL_GET_CATEGORIES',
    RX_GET_CATEGORIES: 'RX_GET_CATEGORIES',
    RX_GET_CATEGORIES_PENDING: 'RX_GET_CATEGORIES_PENDING',
    RX_GET_CATEGORIES_DONE: 'RX_GET_CATEGORIES_DONE',


    //single category
    CNTRL_GET_PRODUCTS_BY_CATEGORY: 'CNTRL_GET_PRODUCTS_BY_CATEGORY',
    RX_GET_PRODUCTS_BY_CATEGORY: 'RX_GET_PRODUCTS_BY_CATEGORY',
    RX_GET_PRODUCTS_BY_CATEGORY_PENDING: 'RX_GET_PRODUCTS_BY_CATEGORY_PENDING',
    RX_GET_PRODUCTS_BY_CATEGORY_DONE: 'RX_GET_PRODUCTS_BY_CATEGORY_DONE',
};

export const ORDERS_TYPES = {
    //all orders
    CNTRL_GET_ORDERS: 'CNTRL_GET_ORDERS',
    RX_GET_ORDERS: 'RX_GET_ORDERS',
    RX_GET_ORDERS_PENDING: 'RX_GET_ORDERS_PENDING',
    RX_GET_ORDERS_DONE: 'RX_GET_ORDERS_DONE',
};