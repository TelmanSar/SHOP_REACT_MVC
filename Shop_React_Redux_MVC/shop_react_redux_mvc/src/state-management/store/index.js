import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {controllerMiddleware} from '../middlewares';
import configs from '../../configs/config';
import * as reducers from '../reducers';

const rootReducers = combineReducers({
    authUser: reducers.userReducer,
    registrationMessage: reducers.registrationMessage
});

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(controllerMiddleware(configs))
    // other store enhancers if any
);

const store = createStore(rootReducers, enhancer);
export default store;