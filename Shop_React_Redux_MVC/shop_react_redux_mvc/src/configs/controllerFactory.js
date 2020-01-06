import * as Controllers from '../controllers'
import * as Operations from '../services/operations';
import * as ApiHandlers from '../services/api';

//operations
const userOperation = new Operations.UserOperation(ApiHandlers.usersApiHandler);
const productsOperation = new Operations.ProductsOperation(ApiHandlers.productsApiHandler);

//controllers
const userController = new Controllers.UserController(userOperation);
const productsController = new Controllers.ProductsController(productsOperation);

export {
    userController,
    productsController
}
