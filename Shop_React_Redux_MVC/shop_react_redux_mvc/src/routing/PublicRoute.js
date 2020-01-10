import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import LocalStorageHelper from "../core/helpers/LocalStorageHelper";

export const PublicRoute = ({
                                component: Component,
                                ...rest
                            }) => (
    <Route {...rest} component={(props) => {
        return (
            LocalStorageHelper.getItem('access') ? (
                <Redirect to="/home"/>
            ) : (
                <Component {...props} />
            )
        )
    }
    }/>
);

export default PublicRoute;
