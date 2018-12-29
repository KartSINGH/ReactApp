import React, {Component} from 'react';
import {ScrollView,View,Text,Dimensions,Image,TouchableOpacity} from 'react-native';
import { Card, CardSection, Input, Button, Spinner,GreenButton} from './Components/index.js';
import {Actions} from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import axios from 'axios';
import {connect} from 'react-redux';
import {desktopSelected} from './Actions/index.js';

class NotWorking extends Component{
    render(){
        return(
            <View style={{padding:10,paddingTop:120}}>
              
                    <CardSection style={{padding:20,alignSelf:'center',borderWidth:0}}><Text style={{fontSize:35,alignSelf:'center'}}>Ooops!</Text></CardSection> 
               
                <Card style={{marginBottom:20}}>
                    <CardSection style={{padding:20,alignSelf:'center',borderWidth:0}}><Text style={{fontSize:16,alignSelf:'center',textAlign:'center'}}>Sorry we shall not be able to offer a price for your Device</Text></CardSection> 
                    <CardSection style={{padding:20,alignSelf:'center',borderWidth:0}}><Text style={{fontSize:12,alignSelf:'center',textAlign:'center'}}>Rate for Not Working Products is Rs 15 per kg</Text></CardSection> 
                </Card>

                    <CardSection style={{borderBottomWidth:0}}>
                        <GreenButton>Sell It Now</GreenButton>
                   </CardSection>
               
            </View>
        )
    }
}

export default NotWorking;