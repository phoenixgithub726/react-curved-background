import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';

const Routes = ({ }) => {
   
    return (
        
            <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/home" exact component={Home} />
                <Redirect to="/login" />
            </Switch>
        
    )
}

export default Routes;
