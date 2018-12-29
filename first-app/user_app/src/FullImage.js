import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
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
        source={require('../img/front.png')}
        style={styles.imgStyle}
         >
         {this.props.children}
         </Image>
        
       )}
}
class LandingText extends Component {
    goLogin(){
        Actions.login({type:'reset'});
      }
    goPage1(){
      
      Actions.front_image_5({type:'reset'})
    }
    render() {
        return (
            <LandingPage>

              <CardSection style={styles.ButtonWrapp}>
              <OrangeButton
               onPress={this.goPage1.bind(this)}
               ><Text style={{fontFamily:'Bangla Sangam MN'}}>Get Started with Shuttlescrap</Text></OrangeButton>
              </CardSection>
              <CardSection style={styles.ButtonWrapp1}>
              <GreenButton
                onPress={this.goLogin}
              ><Text style={{fontFamily:'Bangla Sangam MN'}}>Skip to Login</Text></GreenButton>
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
   ButtonWrapp:{
    marginTop:369,
    backgroundColor:'transparent',
    marginLeft:40,
    marginRight:40,
    padding:20,
    borderRadius:0,
    paddingBottom:0,
    borderColor:'transparent',
    marginBottom:10,
    
   },
   ButtonWrapp1:{
    marginTop:0,
    backgroundColor:'transparent',
    marginLeft:40,
    marginRight:40,
    padding:20,
    paddingTop:0,
    borderRadius:0,
    borderColor:'transparent'
   }
});

export default LandingText;