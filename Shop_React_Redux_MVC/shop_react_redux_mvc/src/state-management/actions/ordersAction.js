import {ORDERS_TYPES} from '../../core/constants/actionTypes'

//get categories
export const cntrlMakeOrders = payload => ({
    type:ORDERS_TYPES.CNTRL_MAKE_ORDERS,
    payload
});

export const rxMakeOrdersPending = payload => ({
    type:ORDERS_TYPES.RX_MAKE_ORDERS_PENDING,
    payload
});

export const rxMakeOrdersDone = payload => ({
    type:ORDERS_TYPES.RX_MAKE_ORDERS_DONE,
    payload
});