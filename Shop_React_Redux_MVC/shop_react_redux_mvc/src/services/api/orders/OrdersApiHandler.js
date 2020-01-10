import OnlineShop from '../OnlineShop';

const END_POINT = {
    prefix: 'Orders',
 };

class OrdersApiHandler extends OnlineShop {
    constructor(prefix) {
        super(prefix);
    }

    makeOrders(orders) {
        return super.post(END_POINT.authenticate, orders)
    }

}

const ordersApiHandler = new OrdersApiHandler(END_POINT.prefix);
export default ordersApiHandler;

