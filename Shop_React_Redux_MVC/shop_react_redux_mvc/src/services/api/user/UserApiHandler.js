import OnlineShop from '../OnlineShop';

const END_POINT = {
    prefix: 'user',
    authenticate: 'authenticate',
    register: 'register',
};

class UserApiHandler extends OnlineShop {
    constructor(prefix) {
        super(prefix);
    }

    login(userCredentials) {
        return super.post(END_POINT.authenticate, userCredentials)
    }

    signUp(userCredentials) {
        return super.post(END_POINT.register, userCredentials)
    }


}

const usersApiHandler = new UserApiHandler(END_POINT.prefix);
export default usersApiHandler;

