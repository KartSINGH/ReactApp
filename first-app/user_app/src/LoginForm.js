import React, { Component } from 'react';
import { Text, View, Image,ScrollView,NetInfo,Dimensions,BackAndroid,
  ToastAndroid,} from 'react-native';
import { Card, CardSection, Input, Button, Spinner,GreenButton,Confirm} from './Components/index.js';
import { Actions } from 'react-native-router-flux';
import { emailChanged, passwordChanged, loginUser } from './Actions/index.js';
import { connect } from 'react-redux';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import axios from 'axios';
class LandingPage extends Component{
    render(){
        return(

        <Image 
        resizeMode='stretch'
        source={require('../img/login.png')}
        style={styles.ImgStyle}
         >
         {this.props.children}
         </Image>
        
       )}
}
class LoginForm extends Component{
    state={
        connection:'',
        modal:false  ,
        backPress:false
    }
    componentWillMount() {
        BackAndroid.addEventListener('hardwareBackPress', function() {
      var _this = this;
      if(!this.state.backPress) {
      ToastAndroid.show('Back again to exit', ToastAndroid.SHORT);
      this.setState({backPress:true});
      setTimeout(function() {
      _this.setState({backPress:false});
      },2500);
      } else {
      return false;
      }
      return true;
      }.bind(this));
    }
    onAccept(){
    var email = this.props.email;
    this.setState({
        modal:false
    })
        axios({
            method:'post',
            url:'https://api.shuttlescrap.com/register/forgot_password',
            data:{
                user_email:email
            }
        })
        .then(function(response){
            alert(response.data);
        })
        .catch(function(error){
            alert(error);
            
        })
    }

    onDecline(){
        this.setState({
            modal:false
        })
    }
    onButtonPress(){
        const { email , password } = this.props;
        if(email!='' && password!=''){
             this.props.loginUser({email,password});
        }else{
            alert("Please Enter Correct Credentials")
        }
       
    }
    renderButton(){
        this.state.counter+=1;
        
        if(this.props.loading){
            return(<CardSection style={{borderColor:'transparent',backgroundColor:'transparent'}}>
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
           
                  NetInfo.isConnected.fetch().then((isConnected)=>{
              this.setState({
                  connection: isConnected
              })
             })
          
           
               if(this.state.connection==true){
               
                 return(
                <CardSection style={{borderColor:'transparent',backgroundColor:'transparent',marginTop:20}}> 
                 <GreenButton
                    onPress={ this.onButtonPress.bind(this) }
                    style={{flex:1}}
                 > 
                    Login
                </GreenButton>
                </CardSection>
            )       
             }else{
                  
                  return(
                <CardSection style={{borderColor:'transparent',backgroundColor:'transparent'}}> 
                 <GreenButton
                   
                    style={{flex:1}}
                 > 
                   No Internet
                </GreenButton>
                </CardSection>
            )       
             }
        
             
    }}
    goSignup(){
        Actions.l2();
    }

    onEmailChange(text){
      
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
       
        this.props.passwordChanged(text);
    }
    renderError(){
        return(
            <CardSection style={{backgroundColor:'transparent',marginLeft:120,marginRight:120}}>
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
            <LandingPage>
            <ScrollView style={{padding:0,marginTop:Dimensions.get('window').height/7,backgroundColor:'transparent'}}>
              
            <Card style={styles.gapStyle}>
            <CardSection style={{borderColor:'transparent',backgroundColor:'transparent',padding:15}}>
                <View>
                <FontAwesome  style={styles.icon}>{Icons.envelopeOpen}</FontAwesome>
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
            <CardSection  style={{borderColor:'transparent',backgroundColor:'transparent',padding:15}}>
                <View>
                <FontAwesome  style={styles.icon}>{Icons.key}</FontAwesome>
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
           
            <CardSection style={{backgroundColor:'transparent',borderColor:'transparent'}}>
                <Text style={styles.description1} onPress={this.show.bind(this)}>Forgot Password? </Text>
            </CardSection>
            </Card>
            <Text
            style={styles.signUpStyle}
            >New User? Create Your Account for free!</Text>
            <CardSection style={styles.buttonWrap}>
             <Button
                onPress={this.goSignup.bind(this)}
                
             >
                 <Text style={styles.TextStyle}>SignUp</Text>
            </Button>
            </CardSection>
           <Confirm
                    visible={this.state.modal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
             >
                  <Text style={{alignSelf:'center',fontSize:16}}> Please Enter Your Registered Email Below</Text>
                   <Input 
                    
                    placeholder="email@gmail.com"
                    onChangeText={
                        this.onEmailChange.bind(this)
                    }
                    keyboardType="email-address"
                    value={this.props.email}
                    style={{height:40}}
                    />
                </Confirm>
            </ScrollView>
            </LandingPage>
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
        marginRight:10,
        padding:20
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
        color:'white'
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
   TextStyle: {
        alignSelf: 'center',
        color: '#22aa86',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily:'Bangla Sangam MN',
        textAlign:'center'

    },
     ImgStyle:{
    flex:1,
    width:null,
    height:null,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
   },
    
}

const mapStateToProps= ({login})=>{
    const {email, password,error,loading} = login;
    return{
        email,
        password,
        error,
        loading
    }
}
export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser})(LoginForm);
