import * as Controllers from '../controllers'
import * as Operations from '../services/operations';
import * as ApiHandlers from '../services/api';

//operations
const userOperations = new Operations.UserOperation(ApiHandlers.usersApiHandler);

//controllers
const userController = new Controllers.UserController(userOperations);

export {
    userController
}
