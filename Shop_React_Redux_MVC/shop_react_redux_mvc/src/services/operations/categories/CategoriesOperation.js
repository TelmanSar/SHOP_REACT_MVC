import Operations from '../../../core/classes/AppOperation';

class CategoriesOperation extends Operations {
    constructor(categoriesApiHandler){
        super();
        this.categoriesApiHandler = categoriesApiHandler;
    }

    getCategories = async () => {
        const response = await this.categoriesApiHandler.getCategories();
        // todo  return responseErrorCheck(response)
        return response.result
    };

    getProductsByCategory = async (categoryId) => {
        const response = await this.categoriesApiHandler.getProductsByCategory(categoryId);
        // todo  return responseErrorCheck(response)
        return response.result
    };



}

export default CategoriesOperation;