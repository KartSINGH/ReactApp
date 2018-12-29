import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers/index.js';

import ReduxThunk from 'redux-thunk';
import Router from './Router.js';
class App extends Component{
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyAr944gLhvE7KcLoKCqYekUkmm2GqkigOM',
    authDomain: 'manager-291b7.firebaseapp.com',
    databaseURL: 'https://manager-291b7.firebaseio.com',
    projectId: 'manager-291b7',
    storageBucket: 'manager-291b7.appspot.com',
    messagingSenderId: '996482721144'
  };
  firebase.initializeApp(config);
    }
    render(){
        return(
            <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk) )}>          
               <Router />
            </Provider>
        );
    }
}

export default App;