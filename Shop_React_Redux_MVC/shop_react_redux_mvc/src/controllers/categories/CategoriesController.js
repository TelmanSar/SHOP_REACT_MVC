import Controller from '../../core/classes/AppController';
import {rxGetCategoriesPending, rxGetCategoriesDone, rxGetProductsByCategoryPending,rxGetProductsByCategoryDone} from '../../state-management/actions/categoriesAction'

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
            store.dispatch(rxGetProductsByCategoryPending());
            const response = await this.categoriesOperation.getProductsByCategory(action.payload);
            store.dispatch(rxGetProductsByCategoryDone(response));
        } catch (e) {
            return new Error(e)
        }
    };


}

export default CategoriesController;