import * as Controllers from '../controllers'
import * as Operations from '../services/operations';
import * as ApiHandlers from '../services/api';

//operations
const userOperation = new Operations.UserOperation(ApiHandlers.usersApiHandler);
const productsOperation = new Operations.ProductsOperation(ApiHandlers.productsApiHandler);
const categoriesOperation = new Operations.CategoriesOperation(ApiHandlers.categoriesApiHandler);

//controllers
const userController = new Controllers.UserController(userOperation);
const productsController = new Controllers.ProductsController(productsOperation);
const categoriesController = new Controllers.CategoriesController(categoriesOperation);

export {
    userController,
    productsController,
    categoriesController,
}
