import React, {Component} from 'react';
import {ScrollView,View,Text,Dimensions,ImScreen,TouchableOpacity,Image} from 'react-native';
import { Card, CardSection, Input, Button, Spinner,OrangeButton,GreenButton} from './Components/index.js';
import {Actions} from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import axios from 'axios';
import {connect} from 'react-redux';
import {chargerAvailableSelected,earphoneAvailableSelected,billAvailableSelected,warrantyAvailableSelected,boxAvailableSelected,batteryAvailableSelected} from './Actions/index.js';

class MobileQues5 extends Component{
    state={
        battery_selected:false,
        speaker_selected:false,
        volume_selected:false,
        power_selected:false,
        screen_selected:false,
        charging_selected:false
    }
    selectedStyle = function(){
        if(this.state.battery_selected==false){
            return{
                borderTopWidth:1,
                borderLeftWidth:1,
                borderRightWidth:1,
                borderColor:'#22aa86',
                paddingLeft:20,
                paddingRight:20,
                paddingTop:7,
                paddingBottom:7,
                marginRight:7,
                flexDirection:'column'
        }
        }else{
            return{
                borderTopWidth:4,
                borderLeftWidth:4,
                borderRightWidth:4,
                borderBottomWidth:4,
                borderColor:'green',
                paddingLeft:20,
                paddingRight:20,
                paddingTop:7,
                paddingBottom:7,
                marginRight:7,
                flexDirection:'column'
        }
        }
        
    }
     selectedStyle1 = function(){
        if(this.state.speaker_selected==false){
            return{
                borderTopWidth:1,
                borderLeftWidth:1,
                borderRightWidth:1,
                borderColor:'#22aa86',
                paddingLeft:20,
                paddingRight:20,
                paddingTop:7,
                paddingBottom:7,
                marginRight:7,
                flexDirection:'column'
        }
        }else{
            return{
                borderTopWidth:4,
                borderLeftWidth:4,
                borderRightWidth:4,
                borderBottomWidth:4,
                borderColor:'green',
                paddingLeft:20,
                paddingRight:20,
                paddingTop:7,
                paddingBottom:7,
                 marginRight:7,
                 flexDirection:'column'
        }
        }
        
    }
     selectedStyle2 = function(){
        if(this.state.volume_selected==false){
            return{
                borderTopWidth:1,
                borderLeftWidth:1,
                borderRightWidth:1,
                borderColor:'#22aa86',
                paddingLeft:20,
                paddingRight:20,
                paddingTop:7,
                paddingBottom:7,
                marginRight:7,
                flexDirection:'column'
        }
        }else{
            return{
                borderTopWidth:4,
                borderLeftWidth:4,
                borderRightWidth:4,
                borderBottomWidth:4,
                borderColor:'green',
                paddingLeft:20,
                paddingRight:20,
                paddingTop:7,
                paddingBottom:7,
                 marginRight:7,
                 flexDirection:'column'
        }
        }
        
    }
     selectedStyle3 = function(){
        if(this.state.power_selected==false){
            return{
                borderTopWidth:1,
                borderLeftWidth:1,
                borderRightWidth:1,
                borderColor:'#22aa86',
                paddingLeft:20,
                paddingRight:20,
                paddingTop:7,
                paddingBottom:7,
                marginRight:7,
                flexDirection:'column'
        }
        }else{
            return{
              borderTopWidth:4,
                borderLeftWidth:4,
                borderRightWidth:4,
                borderBottomWidth:4,
                borderColor:'green',
                paddingLeft:20,
                paddingRight:20,
                paddingTop:7,
                paddingBottom:7,
                 marginRight:7,
                 flexDirection:'column'
        }
        }
        
    }
     selectedStyle4 = function(){
        if(this.state.screen_selected==false){
            return{
                borderTopWidth:1,
                borderLeftWidth:1,
                borderRightWidth:1,
                borderColor:'#22aa86',
                paddingLeft:20,
                paddingRight:20,
                paddingTop:7,
                paddingBottom:7,
                marginRight:7,
                flexDirection:'column'
        }
        }else{
            return{
               borderTopWidth:4,
                borderLeftWidth:4,
                borderRightWidth:4,
                borderBottomWidth:4,
                borderColor:'green',
                paddingLeft:20,
                paddingRight:20,
                paddingTop:7,
                paddingBottom:7,
                 marginRight:7,
                 flexDirection:'column'
        }
        }
        
    }
     selectedStyle5 = function(){
        if(this.state.charging_selected==false){
            return{
                borderTopWidth:1,
                borderLeftWidth:1,
                borderRightWidth:1,
                borderColor:'#22aa86',
                paddingLeft:20,
                paddingRight:20,
                paddingTop:7,
                paddingBottom:7,
                marginRight:7,
                flexDirection:'column'
        }
        }else{
            return{
               borderTopWidth:4,
                borderLeftWidth:4,
                borderRightWidth:4,
                borderBottomWidth:4,
                borderColor:'green',
                paddingLeft:20,
                paddingRight:20,
                paddingTop:7,
                paddingBottom:7,
                 marginRight:7,
                 flexDirection:'column'
        }
        }
        
    }
    battery_selected(){
        this.setState({
            battery_selected: !this.state.battery_selected
        })
        this.props.chargerAvailableSelected();
    }
    speaker_selected(){
        this.setState({
            speaker_selected: !this.state.speaker_selected
        })
        this.props.earphoneAvailableSelected();
    }
    volume_selected(){
        this.setState({
            volume_selected: !this.state.volume_selected
        })
        this.props.billAvailableSelected()
    }
    power_selected(){
        this.setState({
            power_selected: !this.state.power_selected
        })
         this.props.warrantyAvailableSelected();
    }
    screen_selected(){
        this.setState({
            screen_selected: !this.state.screen_selected
        })
         this.props.boxAvailableSelected();
    }
   charging_selected(){
        this.setState({
            charging_selected: !this.state.charging_selected
        })
         this.props.batteryAvailableSelected();
    }
    render(){
        return(
            <View style={{flex:1,paddingTop:60,margin:0,paddingLeft:0,paddingRight:0}}>
            <ScrollView style={{paddingLeft:10,paddingRight:10}}>
               
                <CardSection style={{padding:10,alignSelf:'center',borderWidth:0}}><Text style={{fontSize:16,alignSelf:'center'}}>Step 4/5</Text></CardSection>
              
                <Card style={{marginBottom:20,paddingBottom:30}}>
                    <CardSection style={{padding:20,alignSelf:'center'}}><Text style={{fontSize:20,textAlign:'center'}}>Which of the following are available with the mobile?</Text></CardSection>
                    <CardSection style={{flexDirection:'row',borderBottomWidth:0,marginTop:5,justifyContent:'center'}}>
                      
                        <Button style={this.selectedStyle()} onPress={()=>{this.battery_selected()}}><CardSection style={{alignSelf:'center',justifyContent:'center'}}><Image 
                            resizeMode='stretch'
                            source={require('../img/charger.png')}
                            style={{alignSelf:'center',height:65,width:45}}
                            /></CardSection>
             <Text style={style.TextStyle}>Charger</Text></Button>
                     
                        
                        <Button style={this.selectedStyle1()} onPress={()=>{this.speaker_selected()}}><CardSection style={{alignSelf:'center',justifyContent:'center'}}><Image 
                            resizeMode='stretch'
                            source={require('../img/earphone.png')}
                            style={{alignSelf:'center',height:65,width:45}}
                            /></CardSection><Text style={style.TextStyle}>earphone</Text></Button>
                      
                    </CardSection>
                    <CardSection style={{flexDirection:'row',borderBottomWidth:0,marginTop:5,justifyContent:'center'}}>
                        
                        <Button onPress={()=>{this.volume_selected()}} style={this.selectedStyle2()}><CardSection style={{alignSelf:'center',justifyContent:'center'}}><Image 
                            resizeMode='stretch'
                            source={require('../img/bill.png')}
                            style={{alignSelf:'center',height:65,width:45}}
                            /></CardSection><Text style={style.TextStyle}>Bill</Text></Button>
                      
    
                        <Button style={this.selectedStyle3()} onPress={()=>{this.power_selected()}}><CardSection style={{alignSelf:'center',justifyContent:'center'}}><Image 
                            resizeMode='stretch'
                            source={require('../img/warranty.png')}
                            style={{alignSelf:'center',height:65,width:45}}
                            /></CardSection><Text style={style.TextStyle}>Device Warranty</Text></Button>
                        
                    </CardSection>
                    <CardSection style={{flexDirection:'row',borderBottomWidth:0,marginTop:5,justifyContent:'center'}}>
                    
                        <Button onPress={()=>{this.screen_selected()}} style={this.selectedStyle4()}><CardSection style={{alignSelf:'center',justifyContent:'center'}}><Image 
                            resizeMode='stretch'
                            source={require('../img/box.png')}
                            style={{alignSelf:'center',height:65,width:45}}
                            /></CardSection><Text style={style.TextStyle}>Box</Text></Button>
                        
                        
                        <Button onPress={()=>{this.charging_selected()}} style={this.selectedStyle5()}><CardSection style={{alignSelf:'center',justifyContent:'center'}}><Image 
                            resizeMode='stretch'
                            source={require('../img/battery.png')}
                            style={{alignSelf:'center',height:65,width:45}}
                            /></CardSection><Text style={style.TextStyle}>Battery</Text></Button>
                      
                    </CardSection>
                   
                </Card>
               
                </ScrollView>
                  <Button style={{position:'absolute',bottom:0,flex:1,width:Dimensions.get('window').width,margin:0,backgroundColor:'#424242',borderWidth:0,padding:0,marginLeft:0}} onPress={()=>{Actions.mobile_ques_6()}}><Text style={{ alignSelf: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily:'Bangla Sangam MN',
        textAlign:'center',
        }}>Next</Text></Button>
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
export default connect(null,{chargerAvailableSelected,earphoneAvailableSelected,billAvailableSelected,warrantyAvailableSelected,boxAvailableSelected,batteryAvailableSelected})(MobileQues5);