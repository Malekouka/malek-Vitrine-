import React from 'react'
import {  BrowserRouter as Router ,Switch, Route } from 'react-router-dom';
import Login from '../Auth/Login';
import  Register  from '../Auth/Register';

import Test from '../Screen/Test';
const Container = () => {
    return (
        <div>
            <Switch>
               <Route path={'/login'}>
                   <Login />
               </Route>
               <Route path={'/Register'}>
                   <Register />
               </Route>
              
            </Switch>
                
            
        </div>
    )
}

export default Container
