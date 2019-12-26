import ApiHandler from '../../core/classes/ApiHandler';
import {API} from '../../core/constants/urls';

class OnlineShop extends ApiHandler {
    constructor(prefix) {
        super(API, prefix)
    }

    _checkResponse = (response) => {
        return response;
    };

    post(endPoint, formData = {}, queryFields = '') {
        return super.post(`${this.domain}/${this.prefix}/${endPoint ? endPoint + '/' : ''}`, formData).then(this._checkResponse.bind(this));
    }
}



export default OnlineShop;
