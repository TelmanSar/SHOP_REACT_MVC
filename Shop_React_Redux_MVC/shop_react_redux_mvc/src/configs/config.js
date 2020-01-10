import * as controllers from './controllerFactory';
import * as TYPES from '../core/constants/actionTypes';

const configs = {
    //login
    [TYPES.LOG_IN_TYPES.CNTRL_LOG_IN]: controllers.userController.login,

    //sign up
    [TYPES.SIGN_UP_TYPES.CNTRL_SIGN_UP]: controllers.userController.signUp,

    //products
    [TYPES.PRODUCT_TYPES.CNTRL_GET_PRODUCTS]: controllers.productsController.getProducts,

    //orders
    [TYPES.ORDERS_TYPES.CNTRL_MAKE_ORDERS]:controllers.ordersController.makeOrders,

    //categories
    [TYPES.CATEGORIES_TYPES.CNTRL_GET_CATEGORIES]: controllers.categoriesController.getCategories,
    [TYPES.CATEGORIES_TYPES.CNTRL_GET_PRODUCTS_BY_CATEGORY]:controllers.categoriesController.getProductsByCategory
};

export default configs;