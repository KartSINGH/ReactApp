import React, {Component} from 'react';
import {ScrollView,View,Text,Dimensions,Image,TouchableOpacity} from 'react-native';
import { Card, CardSection, Input, Button, Spinner,OrangeButton,GreenButton} from './Components/index.js';
import {Actions} from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import axios from 'axios';
import {connect} from 'react-redux';
import {mobileConditionSelected} from './Actions/index.js';

class MobileQues6 extends Component{
    render(){
        return(
            <View style={{padding:10,paddingTop:50,height:Dimensions.get('window').height,flex:1}}>
                <ScrollView>
                <CardSection style={{padding:20,alignSelf:'center',borderWidth:0}}>
                    <Text style={{fontSize:16,alignSelf:'center'}}>Step 6/6</Text></CardSection>
                <Card>
                    <CardSection style={{padding:20,alignSelf:'center'}}><Text style={{fontSize:20,alignSelf:'center'}}>Select Overall Condtion of your mobile body</Text></CardSection>
                    <CardSection style={{flexDirection:'row',borderBottomWidth:0,marginTop:20}}>
                        <Button onPress={()=>{this.props.mobileConditionSelected('fair')}}>
                              <Image 
                            resizeMode='stretch'
                            source={require('../img/goodphone.png')}
                            style={{alignSelf:'center',height:70,width:50,marginTop:10}}
                            />
                            <Text style={style.TextStyle}>Fair</Text></Button>
                    </CardSection>
                    <CardSection style={{flexDirection:'row',borderBottomWidth:0}}>
                        <Button onPress={()=>{this.props.mobileConditionSelected('average')}}>
                              <Image 
                            resizeMode='stretch'
                            source={require('../img/average.png')}
                            style={{alignSelf:'center',height:70,width:50,marginTop:10}}
                            />
                            <Text style={style.TextStyle}>Average</Text></Button>
                    </CardSection>
                    <CardSection style={{flexDirection:'row'}}>
                         <Button onPress={()=>{this.props.mobileConditionSelected('damaged')}}>
                               <Image 
                            resizeMode='stretch'
                            source={require('../img/damaged.png')}
                            style={{alignSelf:'center',height:70,width:50,marginTop:10}}
                            />
                             <Text style={style.TextStyle}>Damaged</Text></Button>
                    </CardSection>
                </Card>
                </ScrollView>
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
export default connect(null,{mobileConditionSelected})(MobileQues6);