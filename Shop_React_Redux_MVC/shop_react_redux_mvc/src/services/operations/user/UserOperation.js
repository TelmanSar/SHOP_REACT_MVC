import Operations from '../../../core/classes/AppOperation';
import ApiHandler from "../../../core/classes/ApiHandler";
import LocalStorageHelper from '../../../core/helpers/LocalStorageHelper';
import { ACCESS } from '../../../core/constants/util';

class UserOperation extends Operations {
    constructor(usersApiHandler){
        super();
        this.usersApiHandler = usersApiHandler
    }

    _tokenAccessConfig = (token) => {
        ApiHandler.token = token;
         LocalStorageHelper.deleteItem(ACCESS);
        //todo check expiration /response.expiresIn = (response.expiresIn - this.expiresInInsurance) * 1000 + Date.now();
         LocalStorageHelper.setItem(ACCESS, token)
    };

    login = async (payload) => {
        const response = await this.usersApiHandler.login(payload);
        this._tokenAccessConfig (response.result.token);
        // todo  return responseErrorCheck(response)
        return response.result
    };

    signUp = async (payload) => {
        const response = await this.usersApiHandler.signUp(payload);
        // todo  return responseErrorCheck(response)
        return response.result
    }

}

export default UserOperation;