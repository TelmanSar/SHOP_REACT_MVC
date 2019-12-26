import * as Controllers from '../controllers'
import * as Operations from '../services/operations';
import * as ApiHandlers from '../services/api';

//operations
const authUserOperations = new Operations.AuthUserOperation(ApiHandlers.usersApiHandler);

//controllers
const authUserController = new Controllers.AuthUserController(authUserOperations);

export {
    authUserController
}
