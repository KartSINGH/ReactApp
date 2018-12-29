import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import {connect} from 'react-redux';
import Login from './Login.js';
const RouterComponent = ()=>{
    return(
    <Router>
         <Scene key="login" component={Login}  hideNavBar={true} />
    </Router>
    )
}
export default RouterComponent;