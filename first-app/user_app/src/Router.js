import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LandingText from './FullImage.js';
import LandingText1 from './LandingText1.js';
import LandingText2 from './LandingText2.js';
import LandingText3 from './LandingText3.js';
import LandingText5 from './LandingText.js';
import LandingText0 from './LandingText0.js';
import LandingTextLast from './LandingTextLast.js';
import LoginForm from './LoginForm.js';
import SignupForm from './SignupForm.js';
import Dashboard from './Dashboard.js';
import PickupBooked from './PickupBooked.js';
import ProductCategory from './ProductCategory.js';
import ElectronicProducts from './ElectronicProducts.js';
import DryProducts from './DryProducts.js';
import Sidebar from './Dashboard.js';
import UserProfile from './UserProfile.js';
import {logOut,clear} from './Actions/index.js';
import VerifyOtp from './VerifyOtp.js';
import HomePage from './HomePage.js';
import Predictor1 from './Predictor1.js';
import MobileBrands from './MobileBrands.js';
import MobileList from './MobileList.js';
import MobilePage from './MobilePage.js';
import AcBrand from './AcBrand.js';
import AcList from './AcList.js';
import AcPage from './AcPage.js';
import TabletBrand from './TabletBrand.js';
import TabletList from './TabletList.js';
import TabletPage from './TabletPage.js';
import TvBrand from './TvBrand.js';
import TvList from './TvList.js';
import TvPage from './TvPage.js';
import FridgeBrand from './FridgeBrand.js';
import FridgeList from './FridgeList.js';
import FridgePage from './FridgePage.js';
import MicrowaveBrand from './MicrowaveBrand.js';
import MicrowaveList from './MicrowaveList.js';
import MicrowavePage from './MicrowavePage.js';
import LaptopBrand from './LaptopBrand.js';
import LaptopList from './LaptopList.js';
import LaptopPage from './LaptopPage.js';
import DesktopBrand from './DesktopBrand.js';
import DesktopList from './DesktopList.js';
import DesktopPage from './DesktopPage.js';
import MobileQues1 from './MobileQues1.js';
import MobileQues2 from './MobileQues2.js';
import MobileQues3 from './MobileQues3.js';
import MobileQues4 from './MobileQues4.js';
import MobileQues5 from './MobileQues5.js';
import MobileQues6 from './MobileQues6.js';
import MobileReport from './MobileReport.js';
import NotWorking from './NotWorking.js';
import {connect} from 'react-redux';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import {
    CLEAR
} from './Actions/types.js';

 clearData=()=>{
        
 }
const RouterComponent = ()=>{
   
    return(
    <Router>
      
        
        <Scene key="l1">
            
            <Scene key="front_image" component={LandingText}  hideNavBar={true} />
            <Scene key="front_image_1" component={LandingText1} hideNavBar={true} duration={1250} />
            <Scene key="front_image_2" component={LandingText2} hideNavBar={true} duration={1250}/>
      
             <Scene key="front_image_last" component={LandingTextLast} hideNavBar={true} duration={1250}/>
             <Scene key="front_image_0" component={LandingText0} hideNavBar={true}  duration={1250}/>
             <Scene key="front_image_5" component={LandingText5} hideNavBar={true}  duration={1250}/>
           
        </Scene>
            <Scene key="login" component = {LoginForm} hideNavBar={true} leftButtonIconStyle={{ tintColor: 'white' }} navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}} title="Login" />
        <Scene key="l2">
                  <Scene key="front_image_3" component={LandingText3}  leftButtonIconStyle={{ tintColor: "white" }} navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:15}} title="Phone Number Verification" initial hideNavBar={false} hideTabBar={false}/>
                   <Scene key="front_image_4" component={VerifyOtp} leftButtonIconStyle={{ tintColor: 'white' }} navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:15}} title="Submit OTP" hideNavBar={false} hideTabBar={false}/>
            <Scene key="signup" component = {SignupForm} leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} title="Signup" navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}} />
        </Scene>
        <Scene key="l3">
             <Scene key="dashboard" 
              component={Dashboard} 
              title="Shuttlescrap" 
              hideNavBar={true}
              initial
              />
        </Scene>

         <Scene key="predictor1" component={Predictor1} title="Select Category" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}}/> 
          <Scene key="mobile_brands" component={MobileBrands} title="Select Mobile Brand" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}} duration={0}/>   
            <Scene key="mobile_products" component={MobileList} title="Select Mobile" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}} duration={0}/>   
            <Scene key="mobile_page" component={MobilePage} title="Mobile Info" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}}/> 
            

            <Scene key="tablet_brands" component={TabletBrand} title="Select Tablet Brand" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}} duration={0}/>   
            <Scene key="tablet_products" component={TabletList} title="Select Tablet" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}} duration={0}/>   
            <Scene key="tablet_page" component={TabletPage} title="Tablet Info" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}}/>     

            <Scene key="tv_brands" component={TvBrand} title="Select TV Brand" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}} duration={0} />   
            <Scene key="tv_products" component={TvList} title="Select TV" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}} duration={0}/>   
            <Scene key="tv_page" component={TvPage} title="TV Info" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}}/>     

             <Scene key="fridge_brands" component={FridgeBrand} title="Select Fridge Brand" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}} duration={0}/>   
            <Scene key="fridge_products" component={FridgeList} title="Select Fridge" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}} duration={0}/>   
            <Scene key="fridge_page" component={FridgePage} title="Fridge Info" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}}/>     

            <Scene key="microwave_brands" component={MicrowaveBrand} title="Select Microwave Brand" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}} duration={0}/>   
            <Scene key="microwave_products" component={MicrowaveList} title="Select Microwave" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}} duration={0}/>   
            <Scene key="microwave_page" component={MicrowavePage} title="Microwave Info" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}}/>     

            <Scene key="laptop_brands" component={LaptopBrand} title="Select Laptop Brand" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}} duration={0}/>   
            <Scene key="laptop_products" component={LaptopList} title="Select Laptop" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}} duration={0}/>   
            <Scene key="laptop_page" component={LaptopPage} title="Laptop Info" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}} duration={0}/> 

              <Scene key="desktop_brands" component={DesktopBrand} title="Select Laptop Brand" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}} duration={0}/>   
            <Scene key="desktop_products" component={DesktopList} title="Select Laptop" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}} duration={0}/>   
            <Scene key="desktop_page" component={DesktopPage} title="Laptop Info" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}}/>         

            <Scene key="ac_brands" component={AcBrand} title="Select Ac Brand" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}} duration={0}/>   
            <Scene key="ac_products" component={AcList} title="Select Ac" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}} duration={0}/>   
            <Scene key="ac_page" component={AcPage} title="Ac Info" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}}/> 

             <Scene key="not_working" component={NotWorking} title="Device Report" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86',shadowOffset: {
            width: 3,
            height: 2
        },}} titleStyle={{color:'white',fontSize:18}}/>   

         <Scene key="mobile_ques_1" component={MobileQues1} title="Mobile Estimate" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86',shadowOffset: {
            width: 3,
            height: 2
        }}} titleStyle={{color:'white',fontSize:18}}/> 
        <Scene key="mobile_ques_2" component={MobileQues2} title="Mobile Estimate" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86',shadowOffset: {
            width: 3,
            height: 2
        }}} titleStyle={{color:'white',fontSize:18}}/>   
        <Scene key="mobile_ques_3" component={MobileQues3} title="Mobile Estimate" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86',shadowOffset: {
            width: 3,
            height: 2
        }}} titleStyle={{color:'white',fontSize:18}}/>    
        <Scene key="mobile_ques_4" component={MobileQues4} title="Mobile Estimate" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86',shadowOffset: {
            width: 3,
            height: 2
        }}} titleStyle={{color:'white',fontSize:18}}/> 
         <Scene key="mobile_ques_5" component={MobileQues5} title="Mobile Estimate" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86',shadowOffset: {
            width: 3,
            height: 2
        }}} titleStyle={{color:'white',fontSize:18}}/>     
        <Scene key="mobile_ques_6" component={MobileQues6} title="Mobile Estimate" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86',shadowOffset: {
            width: 3,
            height: 2
        }}} titleStyle={{color:'white',fontSize:18}}/>   
        <Scene key="mobile_report" component={MobileReport} title="Mobile Report" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86',shadowOffset: {
            width: 3,
            height: 2
        }}} titleStyle={{color:'white',fontSize:18}}/>     
        
        <Scene key="product_category" component={ProductCategory} title="Select Item Category" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false}  navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}}/>
         <Scene key="user_profile" component={UserProfile} title="User Profile" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false}  navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}}/>
        <Scene key="electronic_products" component={ElectronicProducts} title="Electronics We Buy" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false}  navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}}/>
        <Scene key="dry_products" component={DryProducts} title="Dry Items We Buy" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false}  navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}}/>
        <Scene key="home_page" component={HomePage}  hideNavBar={true} />
        <Scene key="pickup_booked" component={PickupBooked} title="Confirmation" leftButtonIconStyle={{ tintColor: 'white' }} hideNavBar={false} navigationBarStyle={{backgroundColor:'#22aa86'}} titleStyle={{color:'white',fontSize:18}} rightTitle={<FontAwesome  style={{color:'white',fontSize:25}}>{Icons.home}</FontAwesome>} onRight={
        ()=>{
            Actions.home_page({
                type:'reset'
            })
            
        }
        }
        />
        
    </Router>
    )
}
export default connect(null,{clear})(RouterComponent);