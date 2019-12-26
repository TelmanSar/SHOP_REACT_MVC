import OnlineShop from '../OnlineShop';

const END_POINT = {
    prefix : 'Users',
    authenticate: 'authenticate'

};

class UsersApiHandler extends OnlineShop {
    constructor(prefix) {
        super(prefix);
    }

    login(userCredentials) {
        return this.post(END_POINT.authenticate, userCredentials)
    }
}

const usersApiHandler = new UsersApiHandler(END_POINT.prefix);
export default usersApiHandler;

