import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  BackAndroid,
  ToastAndroid,
} from 'react-native';
import { Button } from './Components/Button.js';
import { CardSection } from './Components/CardSection.js';
import { Card} from './Components/Card.js';
import {Actions} from 'react-native-router-flux';
import {GreenButton,OrangeButton} from './Components/index.js'
class LandingPage extends Component{
    render(){
        return(

        <Image 
        resizeMode='stretch'
        source={require('../img/screen 4-04.png')}
        style={styles.imgStyle}
         >
         {this.props.children}
         </Image>
        
       )}
}
class LandingTextLast extends Component {
  
    goLogin(){
      
      Actions.front_image_2({type:'reset'})
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
            <LandingPage>

            
              <CardSection style={styles.ButtonWrapp1}>
        <Button
                onPress={this.goLogin}
                style={{backgroundColor:'#424242'}}
              ><Text style={styles.TextStyle}>Continue</Text></Button>
              </CardSection>
              
            </LandingPage>
        )}
}
const styles = StyleSheet.create({
  imgStyle:{
    flex:1,
    width:null,
    height:null,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
   },
   ButtonWrapp1:{
    bottom:-3,
    backgroundColor:'transparent',
    marginLeft:0,
    marginRight:0,
    padding:0,
    padding:0,
    borderRadius:0,
    borderColor:'transparent',
    position:'absolute',
    width:500
   },
   TextStyle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily:'Bangla Sangam MN',
        textAlign:'center',
    },
});

export default LandingTextLast;