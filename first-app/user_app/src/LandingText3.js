import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  BackAndroid,
  ToastAndroid,
} from 'react-native';
import { Button,Input,GreenButton } from './Components/index.js';
import { CardSection } from './Components/CardSection.js';
import { Card } from './Components/Card.js';
import {Actions} from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import{s_phoneChanged,getMyOtp} from './Actions/index.js';
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
class LandingText3 extends Component {
    onPhoneChange(text){
        console.log("phone is changing");
       this.props.s_phoneChanged(text);
    }
    getOtp(){
        console.log("getting otp ...");
        console.log(this.props);
        const{ s_phone }=this.props;
        this.props.getMyOtp(s_phone);
    }
     state={
      backPress:false
    }
   
    componentWillMount(){
      BackAndroid.addEventListener('hardwareBackPress', function() {
      var _this = this;
      if(!this.state.backPress) {
      ToastAndroid.show('Back again to exit', ToastAndroid.SHORT);
      this.setState({backPress:true});
      setTimeout(function() {
      _this.setState({backPress:false});
      },2500);
      } else {
     BackAndroid.exitApp();
      }
      return true;
      }.bind(this));
}
    render() {
        return (
            <LandingPage >
            <ScrollView style={{padding:20,marginTop:Dimensions.get('window').height/11,backgroundColor:'transparent'}}>
              <Card style={{marginTop:5,flex:1,padding:20,width:300}}>
                  <CardSection style={{borderColor:'transparent',backgroundColor:'transparent'}}>
                 <View>
                <Image 
                     resizeMode='cover'
                     source={require('../img/recieve.png')}
                     style={styles.imgStyle}
                 />
                </View>
                </CardSection>
                <CardSection style={{borderColor:'transparent',backgroundColor:'transparent',marginTop:40}}>
                <Input 
                    label="Phone"
                    placeholder="Enter Your Mobile Number" 
                    onChangeText={
                       this.onPhoneChange.bind(this)
                    }
                    maxLength={10}
                    keyboardType="numeric"
                    value={this.props.s_phone}
                    />
                </CardSection>
                <CardSection style={{borderColor:'transparent',backgroundColor:'transparent'}}>
              <GreenButton onPress={this.getOtp.bind(this)}
               ><Text style={{fontFamily:'Bangla Sangam MN'}}>Recieve OTP</Text></GreenButton>
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
   },
});
const mapStateToProps=({signup})=>{
    const {s_phone} = signup;
   
    return{
        s_phone,
    }
}
export default connect(mapStateToProps,{s_phoneChanged,getMyOtp})(LandingText3);