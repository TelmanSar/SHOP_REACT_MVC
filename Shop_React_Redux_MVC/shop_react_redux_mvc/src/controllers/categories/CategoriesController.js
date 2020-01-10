import Controller from '../../core/classes/AppController';
import {rxGetCategoriesPending, rxGetCategoriesDone} from '../../state-management/actions/categoriesAction'
import {rxGetProductsPending, rxGetProductsDone} from '../../state-management/actions/productsAction'


class CategoriesController extends Controller {
    constructor(categoriesOperation) {
        super();
        this.categoriesOperation = categoriesOperation;
    }

    getCategories = async (store, action) => {
        try {
            store.dispatch(rxGetCategoriesPending());
            const response = await this.categoriesOperation.getCategories();
            store.dispatch(rxGetCategoriesDone(response));
        } catch (e) {
            return new Error(e)
        }
    };

    getProductsByCategory = async (store, action) => {
        try {
            store.dispatch(rxGetProductsPending());
            const response = await this.categoriesOperation.getProductsByCategory(action.payload);
            store.dispatch(rxGetProductsDone(response));
        } catch (e) {
            return new Error(e)
        }
    };


}

export default CategoriesController;