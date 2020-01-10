import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Header from "../view/components/header";
import LocalStorageHelper from "../core/helpers/LocalStorageHelper";

const PrivateRoute = ({
                          component: Component,
                          ...rest
                      }) => {
    return <Route {...rest} component={(props) => (
        LocalStorageHelper.getItem('access') ? (
            <>
                <Header {...props}/>
                <Component {...props} />
            </>
        ) : (
            <Redirect to="/"/>
        )
    )}/>
};

export default PrivateRoute;