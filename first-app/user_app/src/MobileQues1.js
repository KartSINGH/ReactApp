import React, {Component} from 'react';
import {ScrollView,View,Text,Dimensions,Image,TouchableOpacity} from 'react-native';
import { Card, CardSection, Input, Button, Spinner,GreenButton} from './Components/index.js';
import {Actions} from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import axios from 'axios';
import {connect} from 'react-redux';
import {mobileWorkingSelected} from './Actions/index.js';


class MobileQues1 extends Component{
    buttonPress(){
        this.props.mobileWorkingSelected()
    }
    render(){
        return(
            <View style={{padding:10,paddingTop:100}}>
                    <CardSection style={{padding:20,alignSelf:'center',borderWidth:0}}><Text style={{fontSize:16,alignSelf:'center'}}>Step 1/5</Text></CardSection>
                <Card>
                    <CardSection style={{padding:20,alignSelf:'center'}}><Text style={{fontSize:20,alignSelf:'center'}}>Does your phone switch on?</Text></CardSection>
                     <CardSection style={{padding:100,paddingTop:10,paddingBottom:10}}><Button onPress={this.buttonPress.bind(this)}><Text style={style.TextStyle}>Yes</Text></Button><Button onPress={()=>{Actions.not_working({type:'reset'})}}><Text style={style.TextStyle}>No</Text></Button></CardSection>
                </Card>
            </View>
        )
    }
}
const style = {
    TextStyle: {
        alignSelf: 'center',
        color: '#22aa86',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily:'Bangla Sangam MN',
        textAlign:'center'

    }
}
export default connect(null,{mobileWorkingSelected})( MobileQues1);