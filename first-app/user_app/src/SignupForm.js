import React,{Component} from 'react';
import {View, Text, Image,ScrollView,NetInfo,Dimensions,BackAndroid,
  ToastAndroid} from 'react-native';
import { Card, CardSection,Input,Button,GoogleButton,GreenButton,Spinner,FacebookButton} from './Components/index.js';
import {connect} from 'react-redux';
import { s_emailChanged,s_nameChanged,s_phoneChanged,s_passwordChanged,s_confirmChanged,signup } from './Actions/index.js';
import { Action } from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';
class LandingPage extends Component{
    render(){
        return(

        <Image 
        resizeMode='stretch'
        source={require('../img/signup.png')}
        style={styles.ImgStyle}
         >
         {this.props.children}
         </Image>
        
       )}
}
class SignupForm extends Component{
    state={
        connection:'',
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
    onEmailChange(text){
        
        this.props.s_emailChanged(text);
        
    }
    onNameChange(text){
        
        this.props.s_nameChanged(text);
    }
    onphoneChange(text){
        
        this.props.s_phoneChanged(text);
    }
    onpasswordChange(text){
        
        this.props.s_passwordChanged(text);
    }
    onconfirmChange(text){
       
        this.props.s_confirmChanged(text);
    }
    onButtonPress(){
        
        const { s_email , s_password,s_name,s_phone,s_confirm } = this.props;
        if(s_email!='' && s_password!='' && s_name!='' && s_confirm!=''){
            if(s_password==s_confirm){
             
                  this.props.signup({s_email , s_password,s_confirm,s_name,s_phone })
               
               
            }
            else{
                alert("Both Passwords Donot Match");
            }
            
        }
        else{
            alert("Enter Complete Details")
        }
        
    }
    renderButton(){
       
        if(this.props.s_loading==true){
           
            return <Spinner size="large" />
        }else{
             NetInfo.isConnected.fetch().then((isConnected)=>{
              this.setState({
                  connection: isConnected
              })
             })
             if(this.state.connection){
                 return(
                 <GreenButton
                    onPress={this.onButtonPress.bind(this)}
                 >
                    Signup
                </GreenButton>
            ); 
             }else{
                  return(
                 <GreenButton
                    
                 >
                    No Internet Connectivity
                </GreenButton>)
             }
           
    }}
    render(){
        return(
        <LandingPage>
            
        <ScrollView style={{padding:20,marginTop:Dimensions.get('window').height/8,backgroundColor:'transparent'}}>
            


            <Card style={{marginTop:5,flex:1,padding:20,width:300}}>
                <CardSection style={{borderColor:'transparent',backgroundColor:'transparent',marginBottom:10}}>
                     <View>
                <FontAwesome  style={styles.icon}>{Icons.envelopeOpen}</FontAwesome>
                </View>
                     <Input 
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={
                            this.onEmailChange.bind(this)
                        }
                        value={this.props.s_email}

                    />
                </CardSection>
                <CardSection style={{borderColor:'transparent',backgroundColor:'transparent',marginBottom:10}}>
                     <View>
                <FontAwesome  style={styles.icon}>{Icons.userPlus}</FontAwesome>
                </View>
                        <Input 
                        label="Username"
                        placeholder="User Name"
                        onChangeText={
                            this.onNameChange.bind(this)
                        }
                        value={this.props.s_name}
                    />
                </CardSection>
                <CardSection style={{borderColor:'transparent',backgroundColor:'transparent',marginBottom:10}}>
                     <View>
                <FontAwesome  style={styles.icon}>{Icons.phoneSquare}</FontAwesome>
                </View>
                         <Input 
                        label="Phone"
                        placeholder="Mobile Number"
                        onChangeText={
                            this.onphoneChange.bind(this)
                        }
                        value={this.props.s_phone}
                        bool={false}
                    />
                </CardSection>
                <CardSection style={{borderColor:'transparent',backgroundColor:'transparent',marginBottom:10}}>
                     <View>
                <FontAwesome  style={styles.icon}>{Icons.key}</FontAwesome>
                </View>
                         <Input
                            secureTextEntry
                            label="Password"
                            placeholder="Password"
                            onChangeText={
                                this.onpasswordChange.bind(this)
                            }
                            value={this.props.s_password}
                            
                          />
                </CardSection>
                <CardSection style={{borderColor:'transparent',backgroundColor:'transparent',marginBottom:10}}>
                     <View>
                <FontAwesome  style={styles.icon}>{Icons.key}</FontAwesome>
                </View>
                            <Input
                            secureTextEntry
                            label="Confirm"
                            placeholder="Password"
                            onChangeText={
                                this.onconfirmChange.bind(this)
                            }
                            value={this.props.s_confirm}
                          />
                </CardSection>
                <CardSection style={{borderColor:'transparent',backgroundColor:'transparent',marginBottom:10}}>
                    {this.props.error}
                </CardSection>
                 <CardSection style={{borderColor:'transparent',backgroundColor:'transparent'}}>
                       { this.renderButton() }
                </CardSection>
             
            </Card>

        </ScrollView>
      
        </LandingPage>
        )
    }
}
const styles={
    headingStyle:{
        alignSelf:'center',
        color:'#22aa86',
        fontWeight: 'bold',
        fontSize:16,
        marginTop:5,
        fontFamily:'Bangla Sangam MN'
    },
     headingStyle1:{
        alignSelf:'center',
        color:'#242424',
        fontWeight: 'bold',
        fontSize:22,
        marginTop:10,
        fontFamily:'Bangla Sangam MN'
    },
     icon:{
        fontSize: 18,
        lineHeight: 28,
        flex: 2,
        paddingLeft:10,
        color:'white',
        marginRight:30
    },
     icon1:{
        fontSize: 80,
        lineHeight: 150,
        flex: 2,
        color:'white',
        alignSelf:'center',
        marginTop:0
    },
     ImgStyle:{
    flex:1,
  // width:Dimensions.get('window').width,
    //height:Dimensions.get('window').height,
    width:null,
    height:null,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
   },
}
const mapStateToProps=({signup})=>{
    const { s_email,s_name,s_phone,s_confirm,s_password,s_loading,s_error } = signup;
    return{
        s_email,
        s_name,
        s_phone,
        s_password,
        s_confirm,
        s_loading,
        s_error
    }
}
export default connect(mapStateToProps,{s_emailChanged,s_nameChanged,s_passwordChanged,s_phoneChanged,s_confirmChanged,signup})(SignupForm);