import React from 'react';
import './App.css';
import {createBrowserHistory} from 'history';
import Login from './view/pages/login';
import SignUp from "./view/pages/signUp";
import Dashboard from './view/pages/dashBoard';
import Cart from './view/pages/cart'
import {Router, Switch} from 'react-router-dom';
import PrivateRoute from "./routing/PrivateRoute";
import PublicRoute from "./routing/PublicRoute";

export const history = createBrowserHistory();

const App = () => (
    <Router history={history}>
        <Switch>
            <PublicRoute path='/' component={Login} exact={true}/>
            <PublicRoute path='/signup' component={SignUp} />
            <PrivateRoute path='/home' component={Dashboard}/>
            <PrivateRoute path='/cart' component={Cart}/>
        </Switch>
    </Router>
);

export default App;