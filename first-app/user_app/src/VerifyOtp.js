import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';
import { Button,Input,GreenButton } from './Components/index.js';
import { CardSection } from './Components/CardSection.js';
import { Card } from './Components/Card.js';
import {Actions} from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import{otp_changed,submit_otp_success} from './Actions/index.js';
import {connect} from 'react-redux';
class LandingPage extends Component{
    render(){
        return(

        <Image 
        resizeMode='stretch'
        source={require('../img/otp-screen.png')}
        style={styles.ImgStyle}
         >
         {this.props.children}
         </Image>
        
       )}
}
class VerifyOtp extends Component {
    onOtpChange(text){
        console.log("phone is changing");
       this.props.otp_changed(text);
    }
    verifyOtp(){
        console.log("checking otp ...");
        console.log(this.props);
        const{ submit_otp,recieved_otp }=this.props;
         this.props.submit_otp_success();
        if(submit_otp==recieved_otp){
            console.log("verified");
            Actions.signup({type:'reset'});
        }else{
            alert("Please Enter Correct Otp")
        }
    }
    render() {
        return (
            <LandingPage>
            <ScrollView style={{padding:20,marginTop:Dimensions.get('window').height/11,backgroundColor:'transparent'}}>
            <Card style={{marginTop:5,flex:1,padding:20,width:300}}>
              <CardSection style={{borderColor:'transparent',backgroundColor:'transparent'}}>
                 <View>
                <Image 
                     resizeMode='cover'
                     source={require('../img/submit.png')}
                     style={styles.imgStyle}
                
                 />
                </View>
                </CardSection>
                <CardSection style={{borderColor:'transparent',backgroundColor:'transparent',marginTop:40}}>
                <Input 
                    label="Phone"
                    placeholder="Submit OTP" 
                    keyboardType="numeric"
                    onChangeText={
                       this.onOtpChange.bind(this)
                    }
                    value={this.props.submit_otp}
                    />
                </CardSection>
                <CardSection style={{borderColor:'transparent',backgroundColor:'transparent'}}>
              <GreenButton onPress={this.verifyOtp.bind(this)}
               ><Text style={{fontFamily:'Bangla Sangam MN'}}>Submit OTP</Text></GreenButton>
              </CardSection>
              </Card>
            </ScrollView>
            </LandingPage>
        )}
}
const styles = StyleSheet.create({
  imgStyle:{
     marginBottom:Dimensions.get('window').height/12,
    flex:1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignSelf:'center',
    alignItems:'center',
   
    
   },
   ButtonWrapp:{
    marginTop:Dimensions.get('window').height/7,
    backgroundColor:'transparent',
    marginLeft:10,
    marginRight:10,
    padding:10,
    borderColor:'transparent',
    flex:1,
    justifyContent:'center'
   },
   icon1:{
        fontSize: 70,
        lineHeight: 130,
        flex: 1,
        color:'white',
        alignSelf:'center',
        textAlign:'center',
        justifyContent:'center',
        marginTop:0
    },
    ImgStyle:{
    flex:1,
    width:null,
    height:null,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
   }
});
const mapStateToProps=({signup})=>{
    const {submit_otp,recieved_otp} = signup;
   
    return{
        submit_otp,
        recieved_otp
    }
}
export default connect(mapStateToProps,{otp_changed,submit_otp_success})(VerifyOtp);