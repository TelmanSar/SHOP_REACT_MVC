import Controller from '../../core/classes/AppController';
import {rxMakeOrdersPending,rxMakeOrdersDone} from '../../state-management/actions/ordersAction'

class OrdersController extends Controller {
    constructor(ordersOperation) {
        super();
        this.ordersOperation = ordersOperation;
    }

    makeOrders = async (store, action) => {
        try {
            store.dispatch(rxMakeOrdersPending());
            const response = await this.ordersOperation.makeOrders(action.payload);
            store.dispatch(rxMakeOrdersDone(response));
        } catch (e) {
            return new Error(e)
        }
    };
}

export default OrdersController;