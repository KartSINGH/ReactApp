import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button, Spinner }  from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm.js';
class App extends Component {
    state = {loggedIn: null};

    componentWillMount() {
    firebase.initializeApp({

    apiKey: "AIzaSyAUvXNRKg9atNwpMsSG_nBASdKgeVwMeZ4",
    authDomain: "authentication-91bc4.firebaseapp.com",
    databaseURL: "https://authentication-91bc4.firebaseio.com",
    storageBucket: "authentication-91bc4.appspot.com",
    messagingSenderId: "523915180580"
        }
        );
     firebase.auth().onAuthStateChanged((user) =>{
            if(user) {
                this.setState({ loggedIn: true})
            } else {
                this.setState({loggedIn: false})
            }
        });
    }
    renderContent(){
       
        switch(this.state.loggedIn){
            case true: 
                return (
                <Button
                onPress={()=> firebase.auth().signOut()}
                >Log Out</Button>
                );
            case false: 
                    return <LoginForm />
            default: 
               return <Spinner size="large" />
        }

    }
    render() {
        return(
        <View>
            <Header headerText="Authentication" />
            <View>{this.renderContent()}</View>
        </View>
        );
    }
}


export default App;

