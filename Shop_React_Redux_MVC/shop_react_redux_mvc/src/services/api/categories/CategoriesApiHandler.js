import OnlineShop from '../OnlineShop';

const END_POINT = {
    prefix: 'Categories',
    products: 'Products'
};

class CategoriesApiHandler extends OnlineShop {
    constructor(prefix) {
        super(prefix);
    }

    getCategories() {
        return super.get()
    }

    getProductsByCategory(categoryId) {
        return super.get(`${categoryId}/${END_POINT.products}`)
    }


}

const categoriesApiHandler = new CategoriesApiHandler(END_POINT.prefix);
export default categoriesApiHandler;