import Controller from '../../core/classes/AppController';
import {rxlLoginPending, rxlLoginDone} from '../../state-management/actions/authUserActions'

class AuthUserController extends Controller {
    constructor(authUserOperation) {
        super();
        this.authUserOperation = authUserOperation;
    }

    async login(store, action) {
        try {
            store.dispatch(rxlLoginPending());
            const response = await this.authUserOperation.login(action.payload);
            store.dispatch(rxlLoginDone(response));
        } catch (e) {
            return new Error(e)
        }
    }

}

export default AuthUserController;