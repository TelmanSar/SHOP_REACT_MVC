import {PRODUCT_TYPES} from '../../core/constants/actionTypes'

//get products
export const cntrlGetProducts = payload => ({
    type: PRODUCT_TYPES.CNTRL_GET_PRODUCTS,
    payload
});

export const rxGetProductsPending = payload => ({
    type: PRODUCT_TYPES.RX_GET_PRODUCTS_PENDING,
    payload
});

export const rxGetProductsDone = payload => ({
    type: PRODUCT_TYPES.RX_GET_PRODUCTS_DONE,
    payload
});


export const rxAddProductToCart = payload => {
    return ({
        type: PRODUCT_TYPES.RX_ADD_PRODUCT_TO_CART,
        payload
    });
};

export const rxRemoveProductFromCart = payload => ({
    type: PRODUCT_TYPES.RX_REMOVE_PRODUCT_FROM_CART,
    payload
});