import {PRODUCT_TYPES} from '../../core/constants/actionTypes';
import createAsyncReducer from '../../core/helpers/createAsyncReducer';

export const productsReducer = createAsyncReducer(PRODUCT_TYPES.RX_GET_PRODUCTS, []);

export const cartProductsReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_TYPES.RX_ADD_PRODUCT_TO_CART:
            return {
                ...state,
                [action.payload.id]: state[action.payload.id] ? state[action.payload.id] + action.payload.qty : action.payload.qty
            };
        case PRODUCT_TYPES.RX_REMOVE_PRODUCT_FROM_CART:
            let newQty = 0;
            if (state[action.payload.id]) {
                newQty = state[action.payload.id] - action.payload.qty;
            }
            const tempState = {
                ...state,
                [action.payload.id]: newQty
            };
            for(let prop in tempState) {
                if(tempState[prop] <= 0) {
                    delete tempState[prop]
                }
            }
            return tempState;
        default:
            return state;
    }
};
