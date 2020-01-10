import Operations from '../../../core/classes/AppOperation';
import ApiHandler from "../../../core/classes/ApiHandler";
import LocalStorageHelper from '../../../core/helpers/LocalStorageHelper';
import { ACCESS, USER_CREDENTIALS } from '../../../core/constants/util';

class UserOperation extends Operations {
    constructor(usersApiHandler){
        super();
        this.usersApiHandler = usersApiHandler
    }

    _tokenAccessConfig = (token) => {
        ApiHandler.token = token;
         LocalStorageHelper.deleteItem(ACCESS);
         LocalStorageHelper.setItem(ACCESS, token)
    };

    _userCredentialsAccessConfig = (userCredentials) => {
        LocalStorageHelper.deleteItem(USER_CREDENTIALS);
        LocalStorageHelper.setItem(USER_CREDENTIALS, userCredentials)
    };

    login = async (payload) => {
        const response = await this.usersApiHandler.login(payload);
        // todo  return responseErrorCheck(response)
        this._tokenAccessConfig (response.result.token);
        this._userCredentialsAccessConfig({ firstName: response.result.firstName, lastName: response.result.lastName});

        return response.result
    };

    signUp = async (payload) => {
        const response = await this.usersApiHandler.signUp(payload);
        // todo  return responseErrorCheck(response)
        return response.result
    }

}

export default UserOperation;