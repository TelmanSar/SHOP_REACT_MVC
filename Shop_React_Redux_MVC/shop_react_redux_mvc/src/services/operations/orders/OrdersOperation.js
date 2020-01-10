import Operations from '../../../core/classes/AppOperation';

class OrdersOperation extends Operations {
    constructor(ordersApiHandler){
        super();
        this.ordersApiHandler = ordersApiHandler
    }

    makeOrders = async (orders) => {
        const response = await this.ordersApiHandler.makeOrders(orders);
        // todo  return responseErrorCheck(response)
        return response.result
    };



}

export default OrdersOperation;