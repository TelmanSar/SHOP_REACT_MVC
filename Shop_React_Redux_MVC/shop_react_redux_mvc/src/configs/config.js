import * as controllers from './controllerFactory';
import * as TYPES from '../core/constants/actionTypes';

const configs = {
    //login
    [TYPES.LOG_IN_TYPES.CNTRL_LOG_IN]: controllers.authUserController.login.bind(controllers.authUserController),

    //sign up
    [TYPES.SIGN_UP_TYPES.CNTRL_SIGN_UP]:'',

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