import Controller from '../../core/classes/AppController';
import {rxGetProductsPending, rxGetProductsDone} from '../../state-management/actions/productsAction'

class ProductsController extends Controller {
    constructor(productsOperation) {
        super();
        this.productsOperation = productsOperation;
    }

    getProducts = async (store, action) => {
        try {
            store.dispatch(rxGetProductsPending());
            const response = await this.productsOperation.getProducts();
            store.dispatch(rxGetProductsDone(response));
        } catch (e) {
            return new Error(e)
        }
    };

}

export default ProductsController;