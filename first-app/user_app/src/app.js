import React, { Component } from 'react';
import Router from './Router.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './Reducers/index.js';
import ReduxThunk from 'redux-thunk';


class App extends Component {
 
  render() {
  

if(true){
    return (
      <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk) )}>
         <Router />
      </Provider>
    );

}
  
  }
}
export default App;