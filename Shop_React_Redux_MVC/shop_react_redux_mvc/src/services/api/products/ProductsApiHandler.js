import OnlineShop from '../OnlineShop';

const END_POINT = {
    prefix: 'Products',
};

class ProductsApiHandler extends OnlineShop {
    constructor(prefix) {
        super(prefix);
    }

    getProducts() {
        return super.get()
    }


}

const productsApiHandler = new ProductsApiHandler(END_POINT.prefix);
export default productsApiHandler;