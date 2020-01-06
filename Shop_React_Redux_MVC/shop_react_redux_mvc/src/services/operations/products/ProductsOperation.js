import Operations from '../../../core/classes/AppOperation';

class ProductsOperation extends Operations {
    constructor(productsApiHandler){
        super();
        this.productsApiHandler = productsApiHandler
    }

    getProducts = async () => {
        const response = await this.productsApiHandler.getProducts();
        // todo  return responseErrorCheck(response)
        return response.result
    };



}

export default ProductsOperation;