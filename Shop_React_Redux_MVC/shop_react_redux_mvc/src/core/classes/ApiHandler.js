import API_METHODS from '../constants/apiMethods';
import JSONHelper from '../helpers/JSONhelper';
import {BEARER} from '../constants/util';
import HEADERS from '../constants/headers';

class ApiHandler {

    static token = '';

    constructor(domain, prefix) {
        this._domain = domain;
        this._prefix = prefix;
    }

    _createHeaders = () => {
        if (ApiHandler.token) {
            return {
                [HEADERS.Authorization]: `${BEARER} ${ApiHandler.token}`,
                [HEADERS.ContentType]: HEADERS.ApplicationJson,
                [HEADERS.Accept]: HEADERS.ApplicationJson,
            }
        }
        return {
            [HEADERS.ContentType]: HEADERS.ApplicationJson,
            [HEADERS.Accept]: HEADERS.ApplicationJson,
        }
    };

    post(url = '', body) {
        return fetch(url, {
            method: API_METHODS.POST,
            headers: this._createHeaders(),
            body: JSONHelper.stringify(body)
        }).then(res => this._errorAndSuccessFilter(res));
    }

    get(url = '', options) {
        return fetch(url, {
            method: API_METHODS.GET,
            headers: this._createHeaders()
        }).then(res => {
            return this._errorAndSuccessFilter(res)
        });
    }

    _errorAndSuccessFilter(res) {
        if(res.ok) {
            return res.json()
        } else {
            return {
                status: 0,
                responseStatus: res.status,
                errorMessage: res.statusText,
            }
        }
    }


    // -- Getters / Setters -- //

    get domain() {
        return this._domain;
    }

    set domain(value) {
        this._domain = value;
    }

    get prefix() {
        return this._prefix;
    }

    set prefix(value) {
        this._prefix = value;
    }

}

export default ApiHandler;