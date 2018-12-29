import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import { CardSection,Card,GreenButton } from './Components/index.js';
import {Actions} from 'react-native-router-flux';

class LandingText1 extends Component {
  constructor(props) {
        super(props);
 
        this.state = {
            position: 0,
            interval: null
        };
    }
 
    componentWillMount() {
        this.setState({interval: setInterval(() => {
            this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
        }, 2800)});
    }
 
    componentWillUnmount() {
        clearInterval(this.state.interval);
    }
 onButtonPress(){
     Actions.front_image_2({type:'reset'})
 }
    render() {
        return (
            <View>
           
                  <ImageSlider images={[
        'https://test.shuttlescrap.com/img/screen1-02-min.png',
        'https://test.shuttlescrap.com/img/screen2-03-min.png',
        'https://test.shuttlescrap.com/img/screen3-04-min.png'
    ]}
     position={this.state.position}
     onPositionChanged={position => this.setState({position})}
     height={Dimensions.get('window').height/1.2}
     onPress={null}
    />
              
              
              <CardSection style={styles.ButtonWrapp}>
              <GreenButton
               onPress={this.onButtonPress.bind(this)}
               ><Text style={{fontFamily:'Bangla Sangam MN'}}>Next</Text></GreenButton>
              </CardSection>
            
            </View>
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
    backgroundColor:'transparent',
    marginLeft:10,
    marginRight:10,
    padding:10,
    borderColor:'transparent',
    borderWidth:0,
    marginTop:30
   }
});

export default LandingText1;