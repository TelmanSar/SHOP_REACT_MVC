import Controller from '../../core/classes/AppController';
import {rxlLoginPending, rxlLoginDone, rxSignUpPending, rxSignUpDone} from '../../state-management/actions/userActions'

class UserController extends Controller {
    constructor(userOperation) {
        super();
        this.userOperation = userOperation;
    }

     login = async (store, action) => {
        try {
            store.dispatch(rxlLoginPending());
            const response = await this.userOperation.login(action.payload);
            store.dispatch(rxlLoginDone(response));
        } catch (e) {
            return new Error(e)
        }
    };

    signUp = async (store, action) => {
        try {
            store.dispatch(rxSignUpPending());
            const response = await this.userOperation.signUp(action.payload);
            store.dispatch(rxSignUpDone(response));
        } catch (e) {
            return new Error(e)
        }
    }
}

export default UserController;