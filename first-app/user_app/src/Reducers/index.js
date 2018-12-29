import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer.js';
import SignupReducer from './SignupReducer.js';
import SidebarReducer from './SidebarReducer.js';
import UserProfileReducer from './UserProfileReducer.js';
import MobileReducer from './MobileReducer.js';
import AcReducer from './AcReducer.js';
import TabletReducer from './TabletReducer.js';
import TvReducer from './TvReducer.js';
import FridgeReducer from './FridgeReducer.js';
import MicorwaveReducer from './MicorwaveReducer.js';
import LaptopReducer from './LaptopReducer.js';
import DesktopReducer from './DesktopReducer.js';
export default combineReducers({
    login:LoginReducer,
    signup:SignupReducer,
    sidebar_status:SidebarReducer,
    userProfile:UserProfileReducer,
    mobile:MobileReducer,
    ac:AcReducer,
    tablet:TabletReducer,
    tv:TvReducer,
    fridge:FridgeReducer,
    microwave:MicorwaveReducer,
    laptop:LaptopReducer,
    desktop:DesktopReducer
})