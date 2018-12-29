import Sidebar from 'react-native-sidebar';
import React,{Component} from 'react';
import {ScrollView,View,Text, Image,TouchableOpacity, Picker,NetInfo,BackAndroid,
  ToastAndroid} from 'react-native';
import {Card,CardSection,Button,Input,ColInput,GoogleButton,GreenButton,OrangeButton,Spinner,Header } from './Components/index.js';
import {connect} from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {leftSidebarOpen,
        timeSelected,
        dateSelected,
        addressChanged,
        addressChanged1,
        addressChanged2,
        pickupBook,
        paymentMethodSelect,
        accountChanged,
        ifscChanged,
        scrapAmountChanged,
        logOut,
        paytm_input,
        
} from './Actions/index.js';
import DateTimePicker from 'react-native-modal-datetime-picker';
import FontAwesome, { Icons } from 'react-native-fontawesome';
class Dashboard extends Component{
    state = {
    isDateTimePickerVisible: false,
    isDateTimePickerVisible1: false,
    connection:false,
    time_check:'',
    backPress:false
  };
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
     Actions.pop()
      }
      return true;
      }.bind(this));
  }
  onPaytmChange(text){
      this.props.paytm_input(text);
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    
    this._hideDateTimePicker();
    my_date=date.toString();
    my_date=my_date.split(" ");

    new_date = my_date[0]+" "+my_date[1]+" "+my_date[2]+" "+my_date[3]
    this.props.dateSelected(new_date);
  };

   _showDateTimePicker1 = () => this.setState({ isDateTimePickerVisible1: true });

  _hideDateTimePicker1 = () => this.setState({ isDateTimePickerVisible1: false });

  _handleDatePicked1 = (time) => {
    var my_time = time.toString();
    my_time=my_time.split(" ");
    this.props.timeSelected(my_time[4]);

    var time_check= my_time[4].split(":");

    time_check  = parseInt(time_check);
    this.setState({
        time_check:time_check
    })
    if(time_check>=9 && time_check <=18){
        this._hideDateTimePicker1();
    }
    else{
        alert("Please select a time between 9AM - 6PM");
        this._hideDateTimePicker1();
       
    }
  };
 openLeftSidebar(){
  this._leftsidebar.open('left');
}
openRightSidebar(){
  this._leftsidebar.open('right');
}
renderTime(){
    if(this.props.is_time_selected){
        return(
            <Text style={styles.TextStyle}>{this.props.time} is your Booking Time</Text>
        )
    }else{
        return(
            <Text style={styles.TextStyle}>Select Time</Text>
        )
    }
}
renderDate(){
    if(this.props.is_date_selected){
        return(
            <Text style={styles.TextStyle}>{this.props.date} is your Booking Date</Text>
        )
    }else{
        return(
            <Text style={styles.TextStyle}>Select Booking Date</Text>
        )
    }
}
onlogOut(){
    this.props.logOut()
    
}
onAddressChange(text){

    this.props.addressChanged(text);
}
onAddressChange1(text){

    this.props.addressChanged1(text);
}
onAddressChange2(text){

    this.props.addressChanged2(text);
}
bookPickup(){
    const {date,time,email,address,address1,address2,payment_method,account_number,ifsc_code,name,scrap_amount,booking_credits,booking_status,device_name,report_id,paytm_number}=this.props;
   
      if(time!='' && address!='' && payment_method!='' && date!=''){
         
          var time_check= time[4].split(":");
             
             time_check  = parseInt(time_check);
          if(this.state.time_check>=9 && this.state.time_check<=18){
              
            this.props.pickupBook({email,name,date,time,address,address1,address2,payment_method,account_number,ifsc_code,scrap_amount,booking_credits,booking_status,device_name,report_id,paytm_number});
          }else{
              alert("Please select a time between 9AM - 6PM");
          }
        
      }else{
          alert("Please Fill Complete Form")
      }
    
}
onAccountChange(text){
   
    this.props.accountChanged(text);
}
onIfscChange(text){
    
    this.props.ifscChanged(text);
}
renderAccount(){
    if(this.props.payment_method=="imps"){
        return(
       
       <ScrollView>
            <Input 
                label="Account Number"
                placeholder="Enter Acccount Number"
                 keyboardType="numeric"
                onChangeText={
                     this.onAccountChange.bind(this)
                    }
                value={this.props.account_number}
                />
          <Input 
                label="IFSC Code"
                placeholder="Enter IFSC code"
                onChangeText={
                        this.onIfscChange.bind(this)
                 }
                value={this.props.ifsc_code}
            />
       </ScrollView>
        )
    }if(this.props.payment_method=="paytm"){
        return(
            <ScrollView>
            <Input 
                label="Mobile Number for PayTm"
                placeholder="Enter Mobile Number"
                 keyboardType="numeric"
                  maxLength={10}
                onChangeText={
                     this.onPaytmChange.bind(this)
                    }
                value={this.props.paytm_number}
                />
                </ScrollView>
        )
    }else{
        return(
       <Text style={styles.description}>{this.props.payment_method} has been selected </Text>
        )
    }
}
onScrapAmountChange=(text)=>{
    
    this.props.scrapAmountChanged(text);
}
renderPickupButton(){
      if(this.props.pickup_start){
            
            return <Spinner size="large" />
        }else{
            NetInfo.isConnected.fetch().then((isConnected)=>{
              this.setState({
                  connection: isConnected
              })
             })
             if(this.state.connection){
                return(<GreenButton onPress={this.bookPickup.bind(this)}> Book Pickup </GreenButton>); 
             }else{
                return(<GreenButton >No Internet Connection </GreenButton>); 
             }
             
        
}
}
renderScrapAmount(){
    if(this.props.device_name==''){
        return( <CardSection>
             <View>
                <FontAwesome  style={styles.icon}>{Icons.barChartO}</FontAwesome>
                </View>
             <Input 
                label="Scrap"
                placeholder="Amount in kg"
                onChangeText={
                    this.onScrapAmountChange.bind(this)
                }
                keyboardType="numeric"
                maxLength={3}
                value={this.props.scrap_amount}
             />
         </CardSection>)
    }
}
renderContent(){
    
    return(
        <ScrollView style={{flex:1,backgroundColor:'rgb(244,244,244)'}}>
            <View style={styles.viewStyle}>
                <Text style={styles.description2} onPress={  this.openLeftSidebar.bind(this) }> <FontAwesome  style={styles.icon1}>{Icons.bars}</FontAwesome></Text>
                <Text style={styles.textStyle}>Booking Form</Text>
                <Text style={styles.description1} onPress={ this.openRightSidebar.bind(this) }>Predictor</Text>
            </View>
        <Card>
            <CardSection style={{paddingTop:30}}>
                <View>
                <FontAwesome  style={styles.icon}>{Icons.mapMarker}</FontAwesome>
                </View>
                <Input 
                    label="Address"
                    placeholder="Address Line 1"
                    onChangeText={
                        this.onAddressChange.bind(this)
                    }
                    value={this.props.address}
                 />
            </CardSection>
             <CardSection style={{paddingTop:30}}>
                <View>
                <FontAwesome  style={styles.icon}>{Icons.mapMarker}</FontAwesome>
                </View>
                <Input 
                    label="Address"
                    placeholder="Address Line 2"
                    onChangeText={
                        this.onAddressChange1.bind(this)
                    }
                    value={this.props.address1}
                 />
            </CardSection>
             <CardSection style={{paddingTop:30}}>
                <View>
                <FontAwesome  style={styles.icon}>{Icons.mapMarker}</FontAwesome>
                </View>
                <Input 
                    label="Gurugram Sector Number"
                    placeholder="Sector Number (Optional)"
                    onChangeText={
                        this.onAddressChange2.bind(this)
                    }
                    value={this.props.address2}
                 />
            </CardSection>
        {this.renderScrapAmount()}
          <CardSection style={{ flexDirection: 'row',borderColor:'transparent' }}>
              <View>
                <FontAwesome  style={styles.icon}>{Icons.money}</FontAwesome>
                </View>
                    <Text style={{
                        paddingLeft:20,
                        fontSize: 16,
                        paddingTop: 10,
                        paddingBottom: 10,
                        fontFamily:'Bangla Sangam MN'
                    }}>Select Payback Mode from Below</Text>
                </CardSection>
        <CardSection>
            <Picker 
                selectedValue={this.props.payment_method}
                onValueChange={text=>this.props.paymentMethodSelect({ prop:'payment_method',value:text })}
                style={{flex:1}}
            >
                <Picker.Item label="Cash" value="cash" />
                <Picker.Item label="E-Wallet" value="paytm" />
                <Picker.Item label="IMPS" value="imps" />
            </Picker>
        </CardSection>
       <CardSection>
            {this.renderAccount()}
        </CardSection>
       
        <CardSection style={{paddingTop:10}}>
                <Button onPress={this._showDateTimePicker1}>
         {this.renderTime()}
        </Button>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible1}
          onConfirm={this._handleDatePicked1}
          onCancel={this._hideDateTimePicker1}
          mode='time'
          titleIOS='Pick a Time'
          is24Hour={false}
        />
         </CardSection>

            <CardSection style={{paddingBottom:30,paddingTop:10}}>
                <Button onPress={this._showDateTimePicker}>
          {this.renderDate()}
        </Button>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          mode='date'
          titleIOS='Pick a Date'
          minimumDate= {new Date()}
        />
            </CardSection>
            
        </Card>
       
        <Card>
            <CardSection>
       
        {this.renderPickupButton()}
            </CardSection>
        </Card>
        </ScrollView>
      
    )
}
renderLeftSidebar(){
    return(
    <ScrollView style={{flex:1,backgroundColor:'#22aa86'}}>
        <Image 
        resizeMode='stretch'
        source={require('../img/logo.png')}
        style={styles.imgStyle}
         />
         <Card style={{marginTop:10}}>
            <CardSection>
                <Text  style={styles.leftSidebarStyle}>Welcome {this.props.name}</Text>
            </CardSection>
         </Card>
        <Card style={{marginTop:10}}>
            <CardSection style={{backgroundColor:'teal'}}>
                <Text style={styles.leftSidebarStyle2}>
                    Request Scrap Pickup
                </Text>
            </CardSection>
            <CardSection>
               <TouchableOpacity>
                <Text style={styles.leftSidebarStyle} onPress={
                    
                    Actions.product_category.bind(this)}>
                   Prices We Offer
                </Text>
               </TouchableOpacity>
            </CardSection>
            
            <CardSection>
                <Text style={styles.leftSidebarStyle} onPress={Actions.user_profile.bind(this)}>
                   My Profile
                </Text>
            </CardSection>
            <CardSection>
                 <Text style={styles.leftSidebarStyle}>
                   Policies
                </Text>
            </CardSection>
             <CardSection>
                 <Text style={styles.leftSidebarStyle} onPress={this.onlogOut.bind(this)}>
                  Logout
                </Text>
             </CardSection>
        </Card>
        <Card style={{marginTop:10}}>
            <CardSection>
                <Text  style={styles.leftSidebarStyle}>Know About Us </Text>
            </CardSection>
         </Card>
   </ScrollView>
    );
}
renderRightSidebar(){
    return(
         <ScrollView style={{flex:1,backgroundColor:'#d6874a'}}>
        <Image 
        resizeMode='stretch'
        source={require('../img/scrap.png')}
        style={styles.imgStyle}
         />
         <Card style={{marginTop:10}}>
            <CardSection style={{backgroundColor:'#22aa86'}}>
                <Text  style={styles.leftSidebarStyle1}>Scrap Value Predictor</Text>
            </CardSection>
         </Card>
        <Card style={{marginTop:10,marginBottom:10}}>
            <CardSection>
                <Text style={styles.description}>
                   Our Analyser finds the best price for your scrap material at your home or at your 
                   workplace.You can check true price of your electronic as well as dry products.So
                   hurry up and find out how much worth your scrap is.
                   "ENCASH from TRASH"

                </Text>
            </CardSection>
        </Card>
                <Button><View><Text style={styles.TextStyle}>Estimate Your Scrap Value</Text></View></Button>
   </ScrollView>
    );
}
render(){
  
    return (
       
        <Sidebar 
                leftSidebar={ this.renderLeftSidebar() }
                rightSidebar={ this.renderRightSidebar() }
                style={{ flex: 0.6, backgroundColor: 'white',elevation:6 }}
                ref = {(c) => this._leftsidebar = c}
                >
            { this.renderContent() }
        </Sidebar>
    )
}
}
const styles={
    leftSidebarStyle:{
        alignSelf:'center',
        fontFamily:'Bangla Sangam MN',
        fontSize:16,
        color:'rgb(10,10,10)',
        justifyContent:'center',
        flex:1,
        marginLeft:10
    },
     leftSidebarStyle2:{
        alignSelf:'center',
        fontFamily:'Bangla Sangam MN',
        fontSize:16,
        color:'white',
        justifyContent:'center',
        flex:1,
        backgroundColor:'teal',
        marginLeft:10
    },
     leftSidebarStyle1:{
        alignSelf:'center',
        fontFamily:'Bangla Sangam MN',
        fontSize:16,
        color:'white',
        justifyContent:'center',
        flex:1,
        fontWeight:'bold',
        marginLeft:10
    },
    imgStyle:{
        width:240,
        height:170,
        marginTop:90,
        alignSelf:'center'
   },
   description:{
        color:'#242424',
        fontFamily:'Bangla Sangam MN',
        fontSize:16,
        textAlign:'center',
        alignSelf:'center',
        flex:1
   },
   description2:{
        color:'#242424',
        fontFamily:'Bangla Sangam MN',
        fontSize:16,
        textAlign:'left',
        flex:1,
        color:'#fff',
        paddingLeft:10
   },
    description1:{
        color:'#242424',
        fontFamily:'Bangla Sangam MN',
        fontSize:16,
        textAlign:'right',
        flex:1,
        color:'#fff',
        paddingRight:10
   },
   title:{
        color:'#242424',
        fontFamily:'Bangla Sangam MN',
        fontSize:22,
        textAlign:'center',
        alignSelf:'center',
        flex:1
   },
    icon:{
        fontSize: 18,
        lineHeight: 28,
        flex: 2,
        paddingLeft:10,
        color:'#22aa86'
    },
     icon1:{
        fontSize: 22,
        lineHeight: 28,
        flex: 2,
        paddingLeft:10,
        color:'#fff'
    },
    viewStyle: {
        backgroundColor: '#22aa86',
        height: 60,
        paddingTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        elevation: 4,
        position: 'relative',
        flexDirection:'row'
    },
    textStyle: {
       fontSize: 22,
        lineHeight: 28,
        color:'white',
         fontFamily:'Bangla Sangam MN',
    },
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
mapStateToProps=({sidebar_status,login,mobile})=>{
const { sidebar,time,is_time_selected,is_date_selected,date,address,address1,address2,pickup_start,payment_method,is_paymentMethod_selected,account_number,ifsc_code,scrap_amount,booking_credits,booking_status,paytm_number } = sidebar_status;

const {email,name}=login;
const {device_name,report_id} = mobile;
return{
    sidebar,
    time,
    date,
    address,
    address1,
    address2,
    is_time_selected,
    is_date_selected,
    email,
    name,
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
    report_id
}
}

export default connect(mapStateToProps,{leftSidebarOpen,timeSelected,dateSelected,addressChanged,addressChanged1,addressChanged2,pickupBook,paymentMethodSelect,accountChanged,ifscChanged,scrapAmountChanged,logOut,paytm_input})(Dashboard);