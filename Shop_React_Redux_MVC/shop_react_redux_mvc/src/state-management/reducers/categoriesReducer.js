import { CATEGORIES_TYPES } from '../../core/constants/actionTypes';
import createAsyncReducer from '../../core/helpers/createAsyncReducer';

export const categoriesReducer = createAsyncReducer(CATEGORIES_TYPES.RX_GET_CATEGORIES, []);

export const productsByCategory = createAsyncReducer(CATEGORIES_TYPES.RX_GET_PRODUCTS_BY_CATEGORY, []);

