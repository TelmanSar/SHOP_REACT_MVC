import * as Controllers from '../controllers'
import * as Operations from '../services/operations';
import * as ApiHandlers from '../services/api';

//operations
const userOperation = new Operations.UserOperation(ApiHandlers.usersApiHandler);
const productsOperation = new Operations.ProductsOperation(ApiHandlers.productsApiHandler);
const categoriesOperation = new Operations.CategoriesOperation(ApiHandlers.categoriesApiHandler);
const ordersOperation = new Operations.OrdersOperation(ApiHandlers.ordersApiHandler);

//controllers
const userController = new Controllers.UserController(userOperation);
const productsController = new Controllers.ProductsController(productsOperation);
const categoriesController = new Controllers.CategoriesController(categoriesOperation);
const ordersController = new Controllers.OrdersController(ordersOperation);

export {
    userController,
    productsController,
    categoriesController,
    ordersController,
}
