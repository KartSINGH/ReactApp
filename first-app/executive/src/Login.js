import React, { Component } from 'react';
import { Text, View, Image,ScrollView,NetInfo} from 'react-native';
import { Card, CardSection, Input, Button, Spinner,GreenButton,Confirm} from './Components/index.js';
import { Actions } from 'react-native-router-flux';
//import { emailChanged, passwordChanged, loginUser } from './Actions/index.js';
import { connect } from 'react-redux';

import axios from 'axios';
 
class Login extends Component{
    state={
        connection:'',
        modal:false
       
    }
   
    onButtonPress(){
       
       
    }
    renderButton(){
        this.state.counter+=1;
        
        if(this.props.loading){
            return(<CardSection>
            <Spinner size="large" />
            </CardSection>) 
        }else{
            /*NetInfo.isConnected.fetch().then(isConnected => {
             alert(isConnected);
             if(true){
                 alert("net is connected");
                return(
                  <CardSection style={{borderColor:'transparent'}}> 
                     
                 <GreenButton
                    onPress={ this.onButtonPress.bind(this) }
                    style={{flex:1}}
                 > 
                    Login
                </GreenButton>
                </CardSection>
            ); 
             }else{
                   alert("net is disconnected");
                return(
                  <CardSection style={{borderColor:'transparent'}}> 
                      <GreenButton style={{flex:1}} >No Internet Connection</GreenButton>
                  </CardSection>
                  ); 
             }*/
           
              
                 return(
                <CardSection style={{borderColor:'transparent'}}> 
                 <GreenButton
                    onPress={ this.onButtonPress.bind(this) }
                    style={{flex:1}}
                 > 
                    Login
                </GreenButton>
                </CardSection>
            )             
    }}
    goSignup(){
       
    }

    onEmailChange(text){
      
       
    }
    onPasswordChange(text){
       
       
    }
    renderError(){
        return(
            <CardSection style={{backgroundColor:'rgb(244,244,244)'}}>
                 <Text style={styles.errorTextStyle}>
                     {this.props.error}</Text>
           </CardSection>
        )
    }
    show(){
        this.setState({modal:!this.state.modal})
    }
    render(){
        return(
            <ScrollView style={{padding:0,margin:0,backgroundColor:'rgb(250,250,250)'}}>
               <Card style={{flex: 1,backgroundColor:'#bc4e00',marginTop:55,padding:0,borderColor:'transparent',paddingBottom:30}}> 
            <Image 
            resizeMode='stretch'
            source={require('../img/logo.png')}
            style={styles.imgStyle}
             />
         <Text style={{marginTop:20,alignSelf:'center',fontSize:13,color:'white'}}>Your Scrap is a burden no more </Text>

         </Card>
            <Card style={styles.gapStyle}>
            <CardSection style={{borderColor:'transparent',backgroundColor:'rgb(244,244,244)'}}>
                <View>
               
                </View>
                <Input 
                    
                    placeholder="email@gmail.com"
                    onChangeText={
                        this.onEmailChange.bind(this)
                    }
                    keyboardType="email-address"
                    value={this.props.email}
                    />
            </CardSection>
            <CardSection  style={{borderColor:'transparent',backgroundColor:'rgb(244,244,244)'}}>
                <View>
               
                </View>
                <Input
                    secureTextEntry
                    
                    placeholder="Password"
                    onChangeText={
                        this.onPasswordChange.bind(this)
                    }
                    value={this.props.password}
                    />
            </CardSection>
           {this.renderError()}
           
                { this.renderButton() }
           
            <CardSection>
               
            </CardSection>
            </Card>
           
        
            </ScrollView>
        );
    }
}
const styles={
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red',
        textAlign:'center'
    },
    gapStyle:{
        marginTop:15,
        marginBottom:10,
        marginLeft:10,
        marginRight:10
    },
    imgStyle:{
        height:90,
        width:130,
        alignSelf:'center',
        padding:0,
        margin:0,
        marginTop:10
    },
    signUpStyle:{
        alignSelf:'center',
        color:'#242424',
        fontSize:16,
        fontWeight:"bold",
        fontFamily:'Bangla Sangam MN',
        marginBottom:20,
        marginLeft:50,
        marginRight:50
    },
    heading:{
        textAlign:'center',
        alignSelf:'center',
        color:'#242424',
        fontSize:20,
        fontWeight:'bold',
        fontFamily:'Bangla Sangam MN',
        marginTop:80
    },
    icon:{
        fontSize: 18,
        lineHeight: 28,
        flex: 2,
        paddingLeft:10,
        marginRight:20,
        color:'#22aa86'
    },
    whiteIcon:{
        fontSize: 18,
        lineHeight: 28,
        flex: 2,
        color:'#fff'
    },
    buttonWrap:{
    marginTop:-17,
    backgroundColor:'transparent',
    marginLeft:50,
    marginRight:50,
    paddingLeft:10,
    paddingRight:10,
    borderColor:'transparent'
   },
   description1:{
        color:'#242424',
        fontFamily:'Bangla Sangam MN',
        fontSize:14,
        textAlign:'center',
        flex:1,
        paddingRight:10
   },
    
}

export default Login;
