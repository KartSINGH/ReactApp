import React, { Component } from 'react';
import { Text, View, Image,ScrollView} from 'react-native';
import { Card, CardSection,Button,GreenButton} from './Components/index.js';
import { Actions } from 'react-native-router-flux';
import { logOut,clear} from './Actions/index.js';
import {connect} from 'react-redux';

class PickupBooked extends Component{
    onLogOut(){
        this.props.logOut();
    }
    goHome(){
        this.props.clear();
    }
   report(){
       if(this.props.device_name!=''){
                return(
                     <CardSection style={{flexDirection:'column',padding:30}}>
                    <Text style={{color:'#424242',fontSize:16}}>Device Name: {this.props.device_name} </Text> 
                     <Text style={{color:'#424242',fontSize:16}}>Expected Price: Rs {this.props.device_price.toString()} </Text> 
                         <Text style={{color:'#424242',fontSize:12}}>Does Mobile Switch on? : {this.props.mobileWorkingStatus.toString()}</Text>
                          <Text style={{color:'#424242',fontSize:12}}>Age of Mobile:Upto {this.props.mobile_age.toString()} months</Text>
                           <Text style={{color:'#424242',fontSize:12}}>is Screen damaged?: {this.props.mobile_screen_status.toString()}</Text>
                            <Text style={{color:'#424242',fontSize:12}}>is battery faulty?: {this.props.isBatteryFaulty.toString()}</Text>
                             <Text style={{color:'#424242',fontSize:12}}>is speaker faulty?: {this.props.isSpeakerFaulty.toString()}</Text>
                              <Text style={{color:'#424242',fontSize:12}}>is volume and other button not working? {this.props.isVolumeFaulty.toString()}</Text>
                               
                                <Text style={{color:'#424242',fontSize:12}}>Is Camera Faulty?: {this.props.isCameraFaulty.toString()}</Text>
                                 <Text style={{color:'#424242',fontSize:12}}>is Charger available? {this.props.charger.toString()}</Text>
                                  <Text style={{color:'#424242',fontSize:12}}>are earphones available? {this.props.earphones.toString()}</Text>
                                   <Text style={{color:'#424242',fontSize:12}}>is bill present? {this.props.bill.toString()}</Text>
                                    <Text style={{color:'#424242',fontSize:12}}>does the device posses warranty? {this.props.warranty.toString()}</Text>
                                     <Text style={{color:'#424242',fontSize:12}}>is device original box available? {this.props.box.toString()}</Text>
                                      <Text style={{color:'#424242',fontSize:12}}>is original battery present? {this.props.battery.toString()}</Text>
                                       </CardSection>
                )   
        }
   }
    render(){
      
        return(
            <View style={{flex:1,marginTop:40}}>
          <ScrollView>
              <View style={{flexDirection:'column'}}>
                <Card style={{flexDirection:'row'}}>
                    
                    <CardSection style={{backgroundColor:'#22aa86',flex:1,flexDirection:'column'}}>
                        <Text style={{color:'white',fontSize:20,marginTop:15}}>Your Pickup has been booked</Text>
                         <Text style={{color:'white',fontSize:16,marginTop:15}}>Your Order ID is {this.props.order_id}</Text>
                        <Text style={{color:'white',fontSize:12,marginTop:15}}>{this.props.device_name}</Text>
                    </CardSection>
                </Card>
                <Card style={{flexDirection:'column'}}>
                    <CardSection style={{flexDirection:'column',padding:30}}>
                         <Text style={{color:'#424242',fontSize:20}}>Pickup Summary</Text>
                    </CardSection>
                   
                        {
                            this.report()
                        }
                        
                   
                     <CardSection style={{flexDirection:'column',padding:30}}>
                         <Text style={{color:'#424242',fontSize:12}}>Pickup Date: {this.props.date.toString()}</Text>
                          <Text style={{color:'#424242',fontSize:12}}>Pickup Time: {this.props.time} </Text> 
                             <Text style={{color:'#424242',fontSize:12}}>Pickup Address: {this.props.address+" "+this.props.address1+" "+this.props.address2} </Text> 
                          
                    </CardSection>
                    
                </Card>
               
                
                </View>
          </ScrollView>
          </View>
        )
    }
}
const styles={
    imgStyle:{
        height:150,
        width:220,
        alignSelf:'center',
        padding:0,
        margin:0,
        marginTop:30,
        
    },
     description:{
       color:'#242424',
        fontFamily:'Bangla Sangam MN',
        fontSize:16,
        textAlign:'center',
        alignSelf:'center',
        flex:1
   },
    ButtonWrapp:{
    backgroundColor:'transparent',
    marginLeft:10,
    marginRight:10,
    padding:10,
    borderColor:'transparent',
    borderWidth:0
   }
}
mapStateToProps = ({mobile,sidebar_status})=>{
     const {mobile_id,mobileWorkingStatus,mobile_age,mobile_screen_status,isBatteryFaulty,isSpeakerFaulty,isVolumeFaulty,isPowerFaulty,isCameraFaulty,isChargerFaulty,charger,earphones,bill,warranty,box,battery,mobile_condition,device_name,device_price} = mobile;
     const { sidebar,time,is_time_selected,is_date_selected,date,address,address1,address2,pickup_start,payment_method,is_paymentMethod_selected,account_number,ifsc_code,scrap_amount,booking_credits,booking_status,paytm_number,order_id } = sidebar_status;
    return{
       mobile_id,
       mobileWorkingStatus,
       mobile_age,
       mobile_screen_status,
       isBatteryFaulty,
       isSpeakerFaulty,
       isVolumeFaulty,
       isPowerFaulty,
       isCameraFaulty,
       isChargerFaulty,
       charger,
       earphones,
       bill,
       warranty,
       box,
       battery,
       mobile_condition,
        sidebar,
    time,
    date,
    address,
    address1,
    address2,
    is_time_selected,
    is_date_selected,
   
    pickup_start,
    payment_method,
    is_paymentMethod_selected,
    account_number,
    ifsc_code,
    scrap_amount,
    booking_credits,
    booking_status,
    paytm_number,
    device_name,
    device_price,
    order_id
    }
}
export default connect(mapStateToProps,{logOut,clear})(PickupBooked);