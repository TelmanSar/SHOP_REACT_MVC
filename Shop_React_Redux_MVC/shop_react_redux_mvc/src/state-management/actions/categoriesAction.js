import {CATEGORIES_TYPES} from '../../core/constants/actionTypes'

//get categories
export const cntrlGetCategories = payload => ({
    type:CATEGORIES_TYPES.CNTRL_GET_CATEGORIES,
    payload
});

export const rxGetCategoriesPending = payload => ({
    type:CATEGORIES_TYPES.RX_GET_CATEGORIES_PENDING,
    payload
});

export const rxGetCategoriesDone = payload => ({
    type:CATEGORIES_TYPES.RX_GET_CATEGORIES_DONE,
    payload
});

// Get Products By Category
export const cntrlGetProductsByCategory = payload => ({
    type:CATEGORIES_TYPES.CNTRL_GET_PRODUCTS_BY_CATEGORY,
    payload
});