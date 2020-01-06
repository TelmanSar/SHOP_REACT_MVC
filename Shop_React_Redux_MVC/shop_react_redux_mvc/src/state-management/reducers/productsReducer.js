import { PRODUCT_TYPES } from '../../core/constants/actionTypes';
import createAsyncReducer from '../../core/helpers/createAsyncReducer';

export const productsReducer = createAsyncReducer(PRODUCT_TYPES.RX_GET_PRODUCTS, []);
