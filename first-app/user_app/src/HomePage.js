import Sidebar from 'react-native-sidebar';
import React,{Component} from 'react';
import {ScrollView,View,Text, Image,TouchableOpacity,BackAndroid,
  ToastAndroid} from 'react-native';
import {Card,CardSection,Button,Input,ColInput,GoogleButton,GreenButton,OrangeButton,Spinner,Header } from './Components/index.js';
import {connect} from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {leftSidebarOpen,
        timeSelected,
        dateSelected,
        addressChanged,
        pickupBook,
        paymentMethodSelect,
        accountChanged,
        ifscChanged,
        scrapAmountChanged,
        logOut,
        clear
} from './Actions/index.js';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import DeviceInfo from 'react-native-device-info';
class HomePage extends Component{
    state={
        backPress:false
    }
   
openLeftSidebar(){
  this._leftsidebar.open('left');
}
openRightSidebar(){
  this._leftsidebar.open('right');
}
onlogOut(){
    this.props.logOut(); 
}
bookRequest(){
    
    Actions.l3();
}
prices(){
    Actions.product_category();
}
userProfile(){
    Actions.user_profile();
}
predictor(){
    Actions.predictor();
}
componentDidMount() {
    var DeviceInfo = require('react-native-device-info');
     var model_name=DeviceInfo.getModel();
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
renderContent(){
    return(
        
     <ScrollView style={{backgroundColor:'rgb(244,244,244)'}}>
         <View style={styles.viewStyle}>
                <Text style={styles.description2} onPress={  this.openLeftSidebar.bind(this) }> <FontAwesome  style={styles.icon1}>{Icons.bars}</FontAwesome></Text>
                        <Image 
                         resizeMode='contain'
                         source={require('../img/logo.png')}
                         style={styles.imgStyle4}
                        />
                <Text style={styles.description1} onPress={ this.openRightSidebar.bind(this) }>Predictor</Text>
            </View>
        <Card style={{flexDirection:'row'}}>
                    <CardSection>
                        <Image 
                         resizeMode='contain'
                         source={require('../img/smartphone.png')}
                         style={styles.imgStyle}
                        />
                    </CardSection>
                    <CardSection style={{backgroundColor:'#22aa86',flex:1,width:500,flexDirection:'column'}}>
                        <Text style={{color:'white',fontSize:15}}>Sell your {DeviceInfo.getModel()} mobile at an amazing price !</Text>
                        <Text style={{color:'#424242',marginTop:10,fontSize:20}}>#sellWithShuttlescrap</Text>
                      <Button style={{marginTop:20,marginBottom:20}} onPress={()=>{Actions.mobile_brands()}}><Text style={styles.TextStyle}>Check Now</Text></Button>
                    </CardSection>
                </Card>
            <Card style={{marginTop:10}}>
                <CardSection style={{flexDirection:'row',flex:1,justifyContent: 'space-around',marginTop:-10,paddingBottom:10}}>
                     <TouchableOpacity onPress={this.bookRequest.bind(this)}>
                    <Card style={{paddingRight:10,paddingLeft:10,backgroundColor:'rgb(244,244,244)'}}>
                        <CardSection style={{backgroundColor:'rgb(244,244,244)'}}>
                            <View onPress={this.bookRequest.bind(this)}>
                                 <Image 
                                    resizeMode='contain'
                                    source={require('../img/pickup.png')}
                                    style={styles.imgStyle4}
                                    />
                                 <Text style={styles.textStyle}>Raise Bulk Pickup 
                                </Text>
                            </View>
                        </CardSection>
                    </Card>
                    </TouchableOpacity>
                     <TouchableOpacity onPress={this.prices.bind(this)}>
                    <Card style={{paddingRight:10,paddingLeft:10,backgroundColor:'rgb(244,244,244)'}}>
                        <CardSection style={{backgroundColor:'rgb(244,244,244)'}}>
                            <View>
                                 <Image 
                                    resizeMode='contain'
                                    source={require('../img/price-tag.png')}
                                    style={styles.imgStyle4}
                                    />
                                 <Text style={styles.textStyle}>Check Per kg prices 
                                </Text>
                            </View>
                        </CardSection>
                    </Card>
                    </TouchableOpacity> 
                </CardSection>
            </Card>
             <Card style={{marginTop:10}}>
                 <CardSection>
                 <Text style={{textAlign:'center',alignSelf:'center',flex:1,fontSize:14}}>What Do you wish to sell today?</Text>
                 </CardSection>
                <CardSection style={{flexDirection:'row',flex:1,justifyContent: 'space-around',marginTop:-5,paddingBottom:10}}>                    
                    <TouchableOpacity onPress={()=>{Actions.laptop_brands()}}>
                    <Card style={{paddingRight:5,paddingLeft:5,backgroundColor:'rgb(244,244,244)'}}>
                        <CardSection style={{backgroundColor:'rgb(244,244,244)',borderRadius:0}} >
                            <View>
                                <Image 
                         resizeMode='contain'
                         source={require('../img/laptop.png')}
                         style={styles.imgStyle6}
                        />
                                 <Text style={styles.textStyle}>Laptops
                                </Text>
                            </View>
                        </CardSection>
                    </Card>
                    </TouchableOpacity>
                     <TouchableOpacity onPress={()=>{Actions.mobile_brands()}}>
                    <Card style={{paddingRight:5,paddingLeft:5,backgroundColor:'rgb(244,244,244)'}}>
                        <CardSection style={{backgroundColor:'rgb(244,244,244)',borderRadius:0}} >
                            <View>
                                <Image 
                         resizeMode='contain'
                         source={require('../img/search.png')}
                         style={styles.imgStyle6}
                        />
                                 <Text style={styles.textStyle}>Mobiles
                                </Text>
                            </View>
                        </CardSection>
                    </Card>
                    </TouchableOpacity>
                      <TouchableOpacity onPress={()=>{Actions.desktop_brands()}}>
                    <Card style={{paddingRight:5,paddingLeft:5,backgroundColor:'rgb(244,244,244)'}}>
                        <CardSection style={{backgroundColor:'rgb(244,244,244)',borderRadius:0}} >
                            <View>
                                <Image 
                         resizeMode='contain'
                         source={require('../img/computer.png')}
                         style={styles.imgStyle6}
                        />
                                 <Text style={styles.textStyle}>Desktop
                                </Text>
                            </View>
                        </CardSection>
                    </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Actions.tv_brands()}}>
                    <Card style={{paddingRight:5,paddingLeft:5,backgroundColor:'rgb(244,244,244)'}}>
                        <CardSection style={{backgroundColor:'rgb(244,244,244)',borderRadius:0}} >
                            <View>
                                 <Image 
                         resizeMode='contain'
                         source={require('../img/monitor.png')}
                         style={styles.imgStyle6}
                        />
                                 <Text style={styles.textStyle}>T.V
                                </Text>
                            </View>
                        </CardSection>
                    </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Actions.predictor1()}}>
                    <Card style={{paddingRight:5,paddingLeft:5,backgroundColor:'rgb(244,244,244)'}}>
                        <CardSection style={{backgroundColor:'rgb(244,244,244)',borderRadius:0}} >
                            <View>
                                  <Image 
                         resizeMode='contain'
                         source={require('../img/plus.png')}
                         style={styles.imgStyle6}
                        />
                                 <Text style={styles.textStyle}>See All
                                </Text>
                            </View>
                        </CardSection>
                    </Card>
                    </TouchableOpacity>
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
        style={styles.imgStyle1}
         />
         <Card style={{marginTop:10}}>
            <CardSection>
                <Text  style={styles.leftSidebarStyle}>Welcome {this.props.name}</Text>
            </CardSection>
         </Card>
        <Card style={{marginTop:10}}>
            <CardSection>
                <Text style={styles.leftSidebarStyle} onPress={Actions.l3.bind(this)}>
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
        style={styles.imgStyle1}
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
                <Button style={{marginTop:40}}><Text style={styles.TextStyle}>Estimate Your Scrap Value</Text></Button>
   </ScrollView>
  
    );
}
render(){
    this.props.clear()
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
        width:90,
        height:90,
        marginTop:20,
        alignSelf:'center'
   },
   imgStyle4:{
        width:60,
        height:40,
        marginTop:10,
        alignSelf:'center'
   },
    imgStyle6:{
        width:35,
        height:35,
        marginTop:5,
        alignSelf:'center'
   },
   imgStyle1:{
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
        fontSize: 30,
        lineHeight: 50,
        flex: 2,
        color:'#22aa86',
        paddingBottom:10,
        alignSelf:'center'
    },
     icon1:{
        fontSize: 22,
        lineHeight: 28,
        flex: 2,
        color:'white'
    },
    viewStyle: {
        backgroundColor: '#22aa86',
        height: 50,
        paddingTop: 10,
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
         fontSize: 12,
         lineHeight: 28,
         color:'#424242',
         fontFamily:'Bangla Sangam MN',
         textAlign:'center',
         flex:1,
         alignSelf:'center'
    },
    textStyle1: {
       fontSize: 20,
        lineHeight: 28,
        color:'white',
         fontFamily:'Bangla Sangam MN',
       
         flex:1,
         alignSelf:'center'
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
mapStateToProps=({login})=>{
const {name} = login;
return{
  name
}
}
export default connect(mapStateToProps,{logOut,clear})(HomePage);