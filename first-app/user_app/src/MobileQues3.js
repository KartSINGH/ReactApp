import React, {Component} from 'react';
import {ScrollView,View,Text,Dimensions,ImScreen,TouchableOpacity,Image} from 'react-native';
import { Card, CardSection, Input, Button, Spinner,OrangeButton,GreenButton} from './Components/index.js';
import {Actions} from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import axios from 'axios';
import {connect} from 'react-redux';
import {mobileScreenSelected} from './Actions/index.js';

class MobileQues3 extends Component{
    render(){
        return(
            <View style={{flex:1}}>
            <ScrollView style={{flex:1,padding:10,paddingTop:40,height:Dimensions.get('window').height*1.5}}>
                <CardSection style={{padding:20,alignSelf:'center',borderWidth:0}}><Text style={{fontSize:16,alignSelf:'center'}}>Step 3/5</Text></CardSection>
                <Card>
                    <CardSection style={{padding:20,alignSelf:'center'}}><Text style={{fontSize:20,textAlign:'center'}}>Is Device Screen Broken or bears scratches?</Text></CardSection>
                    <CardSection style={{flexDirection:'row',borderBottomWidth:0,marginTop:20}}>
                        <Button onPress={()=>{this.props.mobileScreenSelected('scratchless')}}>
                            <Image 
                            resizeMode='stretch'
                            source={require('../img/goodphone.png')}
                            style={{alignSelf:'center',height:60,width:45,marginTop:10}}
                            />
                            <Text style={style.TextStyle}>Completely Scratchless</Text></Button>
                         <Button onPress={()=>{this.props.mobileScreenSelected('minor')}}>
                             <Image 
                            resizeMode='stretch'
                            source={require('../img/scratch.png')}
                            style={{alignSelf:'center',height:60,width:45,marginTop:10}}
                            />
                             <Text style={style.TextStyle}>Minor Scratches</Text></Button>
                    </CardSection>
                    <CardSection style={{flexDirection:'row',borderBottomWidth:0}}>
                        <Button onPress={()=>{this.props.mobileScreenSelected('major')}}>
                            <Image 
                            resizeMode='stretch'
                            source={require('../img/average.png')}
                            style={{alignSelf:'center',height:60,width:45,marginTop:10}}
                            />
                            <Text style={style.TextStyle}>Long Scratches</Text></Button>
                         <Button onPress={()=>{this.props.mobileScreenSelected('complete')}}>
                             <Image 
                            resizeMode='stretch'
                            source={require('../img/damaged.png')}
                            style={{alignSelf:'center',height:60,width:45,marginTop:10}}
                            />
                             <Text style={style.TextStyle}>Screen Broken Completely</Text></Button>
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
export default connect(null,{mobileScreenSelected})(MobileQues3);