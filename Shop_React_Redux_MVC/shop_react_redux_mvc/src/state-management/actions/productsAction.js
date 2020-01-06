import {PRODUCT_TYPES} from '../../core/constants/actionTypes'

//login
export const cntrlGetProducts = (payload) => ({
    type:PRODUCT_TYPES.CNTRL_GET_PRODUCTS,
    payload
});

export const rxGetProductsPending = payload => ({
    type:PRODUCT_TYPES.RX_GET_PRODUCTS_PENDING,
    payload
});

export const rxGetProductsDone = payload => ({
    type:PRODUCT_TYPES.RX_GET_PRODUCTS_DONE,
    payload
});