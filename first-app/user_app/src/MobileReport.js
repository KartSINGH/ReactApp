import React, {Component} from 'react';
import {ScrollView,View,Text,Dimensions,Image,TouchableOpacity} from 'react-native';
import { Card, CardSection, Input, Button, Spinner,GreenButton,GoogleButton} from './Components/index.js';
import {Actions} from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import axios from 'axios';
import {connect} from 'react-redux';
import {mobileSelected,deviceName,save_device_price,saveId} from './Actions/index.js';
class MobileReport extends Component{
    state={
        data:[],
        point:0
    }
    
    componentDidMount() {
         
        axios({
            method:'post',
            url:'https://api.shuttlescrap.com/mobiles/get_single_mobile',
            data:{
                id:this.props.mobile_id
            }
        }).then((resp)=>{
            this.setState({
                data: resp.data
            })
            console.log(resp.data[0].product_name+" action called");
            this.props.deviceName(resp.data[0].product_name)
           
        }).catch((error)=>{
            alert(error)
        })
    }
   save_device_price(show){
           this.props.save_device_price(show)
       }
    saveMobileCondition(){
        alert("mobile condition " + this.props.mobile_condition)
            axios({
            method:'post',
            url:'https://api.shuttlescrap.com/mobiles/submit_mobile_condition',
            data:{
                mobile_working_status:this.props.mobileWorkingStatus,
                mobile_age:this.props.mobile_age,
                mobile_screen_status:this.props.mobile_screen_status,
                isBatteryFaulty:this.props.isBatteryFaulty,
                isSpeakerFaulty:this.props.isSpeakerFaulty,
                isVolumeFaulty:this.props.isVolumeFaulty,
                isPowerFaulty:this.props.isPowerFaulty,
                isCameraFaulty:this.props.isCameraFaulty,
                isChargerFaulty:this.props.isChargerFaulty,
                charger:this.props.charger,
                earphones:this.props.earphones,
                bill:this.props.bill,
                box:this.props.box,
                battery:this.props.battery,
                warranty:this.props.warranty,
                mobile_condition:this.props.mobile_condition,
                device_price:this.props.device_price,
                device_name:this.props.deviceName
            }
        }).then((respo)=>{
             
            this.props.saveId(respo.data.id);
           
           
        }).catch((error)=>{
            alert(error)
        })
    }
    renderBrands(){
       var points = this.state.point;
       
        if(this.props.mobile_age=='3'){
           points = points + 0;
        }
        if(this.props.mobile_age=='6'){
            points = points + 2;
        }
        if(this.props.mobile_age=='12'){
            points = points + 5;
        }
        if(this.props.mobile_age=='24'){
            points = points + 8;
        }
        if(this.props.mobile_age=='36'){
            points = points + 12;
        }
        if(this.props.mobile_screen_status=='scratchless'){
            points = points + 0
        }
        if(this.props.mobile_screen_status=='minor'){
            points = points + 3
        }
        if(this.props.mobile_screen_status=='major'){
            points = points + 15
        }
        if(this.props.mobile_screen_status=='complete'){
            points = points + 50
        }
        if(this.props.isBatteryFaulty==true){
            points = points + 10
        }
        if(this.props.isSpeakerFaulty==true){
            points = points + 10
        }
        if(this.props.isVolumeFaulty==true){
            points = points + 10
        }
        if(this.props.isPowerFaulty==true){
            points = points + 10
        }
         if(this.props.isCameraFaulty==true){
            points = points + 10
        }
         if(this.props.isChargerFaulty==true){
            points = points + 10
        }
        if(this.props.charger==false){
            points=points+5
        }
         if(this.props.bill==false){
            points=points+5
        }
         if(this.props.earphones==false){
            points=points+5
        }
         if(this.props.box==false){
            points=points+5
        }
         if(this.props.warranty==false){
            points=points+10
        }
         if(this.props.battery==false){
            points=points+15
        }
        if(this.props.mobile_condition == "fair"){
            points = points+0
        }
        if(this.props.mobile_condition == "average"){
            points = points+4
        }
        if(this.props.mobile_condition == "damaged"){
            points = points+6
        }
      
          return this.state.data.map(options =>{
              var price=options.price.split(' ');
              price=price[1].split(',');
              price=price[0]+price[1];
              price=parseInt(price)/2.01;
              price=price - ((price/100)*points)
              price=Math.floor(price);
              price=price.toString()
              var show_price = price.split('');
              var show=''
              if(show_price.length==4){
                show=show_price[0]+','+show_price[1]+show_price[2]+show_price[3]
                this.save_device_price(show)
              }else if(show_price.length==5){
                show=show_price[0]+show_price[1]+','+show_price[2]+show_price[3]+show_price[4]
                this.save_device_price(show)
              }
              else{
                  show=show_price[0]+show_price[1]+show_price[2]
                this.save_device_price(show)
              }
            return(
                <View style={{flexDirection:'column'}}>
                <Card style={{flexDirection:'row'}}>
                    <CardSection>
                        <Image 
                         resizeMode='contain'
                         source={{uri:options.image}}
                         style={styles.imgStyle}
                        />
                    </CardSection>
                    <CardSection style={{backgroundColor:'#22aa86',flex:1,width:500,flexDirection:'column'}}>
                        <Text style={{color:'white',fontSize:18}}>{options.product_name}</Text>
                        <Text style={{color:'#424242'}}>{options.brand_name}</Text>
                        <Text style={{color:'white',fontSize:25,marginTop:15}}>Final Quote is Rs. {show}</Text>
                    </CardSection>
                </Card>
                <Card style={{flexDirection:'column'}}>
                    <CardSection style={{flexDirection:'column',padding:30}}>
                         <Text style={{color:'#424242',fontSize:20}}>Mobile Report</Text>
                    </CardSection>
                    <CardSection style={{flexDirection:'column',padding:30,paddingBottom:40}}>
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
                    
                </Card>
               
                
                </View>

            )
        })
    }
   
    render(){
            return(
                <View style={{flex:1}}>
                     <ScrollView style={{flexDirection:'column',marginTop:50}}>
                        {this.renderBrands()}
                    </ScrollView>
                     <Button style={{position:'absolute',bottom:0,flex:1,width:Dimensions.get('window').width,margin:0,backgroundColor:'#424242',borderWidth:0,padding:0,marginLeft:0}} onPress={this.saveMobileCondition.bind(this)} ><Text style={{ alignSelf: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily:'Bangla Sangam MN',
        textAlign:'center',
        }}>Sell this Mobile Now</Text></Button>
                </View>
        )
    }
}
const styles={
    viewStyle:{
        width:Dimensions.get('window').width/2.1,
        backgroundColor:'white'
    },
     imgStyle:{
        width:160,
        height:120,
        marginTop:5,
        
        
   }
}
mapStateToProps=({mobile})=>{
    const {mobile_id,mobileWorkingStatus,mobile_age,mobile_screen_status,isBatteryFaulty,isSpeakerFaulty,isVolumeFaulty,isPowerFaulty,isCameraFaulty,isChargerFaulty,charger,earphones,bill,warranty,box,battery,mobile_condition,device_price} = mobile;
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
       device_price,
       
    }
}
export default connect(mapStateToProps,{mobileSelected,deviceName,save_device_price,saveId})(MobileReport);