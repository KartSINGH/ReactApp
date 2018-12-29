import React, {Component} from 'react';
import {ScrollView,View,Text,Dimensions,Image,TouchableOpacity} from 'react-native';
import { Card, CardSection, Input, Button, Spinner,OrangeButton,GreenButton} from './Components/index.js';
import {Actions} from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import axios from 'axios';
import {connect} from 'react-redux';
import {mobileAgeSelected} from './Actions/index.js';

class MobileQues2 extends Component{
    render(){
        return(
            
            <ScrollView style={{padding:10,paddingTop:40,paddingVertical: 20}}>
                <CardSection style={{padding:20,alignSelf:'center',borderWidth:0}}>
                    <Text style={{fontSize:16,alignSelf:'center'}}>Step 2/5</Text></CardSection>
                <Card>
                    <CardSection style={{padding:20,alignSelf:'center'}}><Text style={{fontSize:20,alignSelf:'center'}}>How Old is your mobile?</Text></CardSection>
                    <CardSection style={{flexDirection:'row',borderBottomWidth:0,marginTop:20}}>
                        <Button onPress={()=>{this.props.mobileAgeSelected('3')}}>
                              <Image 
                            resizeMode='stretch'
                            source={require('../img/0-3.png')}
                            style={{alignSelf:'center',height:45,width:45,marginTop:10}}
                            />
                            <Text style={style.TextStyle}>Less than 3 Months</Text></Button>
                         <Button onPress={()=>{this.props.mobileAgeSelected('6')}}>
                               <Image 
                            resizeMode='stretch'
                            source={require('../img/3-6.png')}
                            style={{alignSelf:'center',height:45,width:45,marginTop:10}}
                            />
                             <Text style={style.TextStyle}>Between 3-6 Months</Text></Button>
                    </CardSection>
                    <CardSection style={{flexDirection:'row',borderBottomWidth:0}}>
                        <Button onPress={()=>{this.props.mobileAgeSelected('12')}}>
                              <Image 
                            resizeMode='stretch'
                            source={require('../img/6-12.png')}
                            style={{alignSelf:'center',height:45,width:45,marginTop:10}}
                            />
                            <Text style={style.TextStyle}>Between 6-12 Months</Text></Button>
                         <Button onPress={()=>{this.props.mobileAgeSelected('24')}}>
                               <Image 
                            resizeMode='stretch'
                            source={require('../img/1-2yrs.png')}
                            style={{alignSelf:'center',height:45,width:45,marginTop:10}}
                            />
                             <Text style={style.TextStyle}>Between 1-2 years</Text></Button>
                    </CardSection>
                    <CardSection style={{flexDirection:'row'}}>
                         <Button onPress={()=>{this.props.mobileAgeSelected('36')}}>
                               <Image 
                            resizeMode='stretch'
                            source={require('../img/2.png')}
                            style={{alignSelf:'center',height:45,width:45,marginTop:10}}
                            />
                             <Text style={style.TextStyle}>Above 2 years</Text></Button>
                    </CardSection>
                </Card>
            </ScrollView>
           
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
export default connect(null,{mobileAgeSelected})(MobileQues2);