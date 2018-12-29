import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  BackAndroid,
  ToastAndroid,
} from 'react-native';
import { GreenButton } from './Components/GreenButton.js';
import { CardSection } from './Components/CardSection.js';
import {Actions} from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';
class LandingText2 extends Component {
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
            <ScrollView>
              <TouchableOpacity onPress={Actions.login.bind(this)}> 
              <CardSection style={styles.ButtonWrapp1}>
                <Image 
                  source={require('../img/login_icon.png')}
                  style={styles.imgStyle}
                  />  
             <Text style={styles.headingStyle1}>Login to your Dashboard</Text>
              </CardSection>
              </TouchableOpacity>

              <TouchableOpacity onPress={Actions.l2.bind(this)}>
               <CardSection style={styles.ButtonWrapp2}>
                <Image 
                    source={require('../img/verification.png')}
                    style={styles.imgStyle1}
                 />
            <Text style={styles.headingStyle1}>New User? Join Shuttlescrap!
            </Text>
              </CardSection>
              </TouchableOpacity>
            </ScrollView>
        )}
}
const styles = StyleSheet.create({
  imgStyle:{
    flex:1,
    width:90,
    height:120,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop:60,
   },
   imgStyle1:{
    flex:1,
    width:120,
    height:90,
    resizeMode: 'contain',
    alignSelf:'center',
    marginTop:60,
   },
   ButtonWrapp1:{
    backgroundColor:'#22aa86',
    marginLeft:0,
    marginRight:0,
    padding:10,
    borderColor:'transparent',
    height:Dimensions.get('window').height/2,
    width:Dimensions.get('window').width,
    flex:1,
    justifyContent:'center',
    flexDirection:'column'
   },
   ButtonWrapp2:{
    backgroundColor:'#424242',
    marginLeft:0,
    marginRight:0,
    padding:10,
    borderColor:'transparent',
    height:Dimensions.get('window').height/2,
    width:Dimensions.get('window').width,
    flex:1,
    justifyContent:'center',
    alignSelf:'center',
    flexDirection:'column'
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
     headingStyle1:{
        alignSelf:'center',
        color:'white',
        fontWeight: 'bold',
        fontSize:20,
        marginTop:5,
        flex:1,
        fontFamily:'Bangla Sangam MN'
    },
     ButtonWrapp:{
    backgroundColor:'transparent',
    marginLeft:10,
    marginRight:10,
    padding:10,
    borderColor:'transparent',
    borderWidth:0,
    marginTop:30,
   
   }

});

export default LandingText2;