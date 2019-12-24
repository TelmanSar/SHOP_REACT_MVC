import * as TYPES from '../core/constants/actionTypes'

const configs = {
    //auth
    [TYPES.AUTH_TYPES.CNTRL_LOG_IN]: controllers.tokenController.login.bind(controllers.tokenController),
    [TYPES.AUTH_TYPES.CNTRL_SIGN_UP]:'',

    //products
    [TYPES.PRODUCT_TYPES.CNTRL_GET_PRODUCTS]: '',
    [TYPES.PRODUCT_TYPES.CNTRL_GET_PRODUCT_BY_ID]:'',

    //orders
    [TYPES.ORDERS_TYPES.CNTRL_GET_ORDERS]:'',

    //categories
    [TYPES.CATEGORIES_TYPES.CNTRL_GET_CATEGORIES]:'',
    [TYPES.CATEGORIES_TYPES.CNTRL_GET_CATEGORY_BY_ID]:''
};

export default configs;