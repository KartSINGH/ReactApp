import {
    MOBILE_BRAND_SELECTED,
    MOBILE_SELECTED,
    MOBILE_WORKING_SELECTED,
    MOBILE_AGE_SELECTED,
    MOBILE_SCREEN_SELECTED,
    BATTERY_FAULTY_SELECTED,
    SPEAKER_FAULTY_SELECTED,
    VOLUME_FAULTY_SELECTED,
    POWER_FAULTY_SELECTED,
    CAMERA_FAULTY_SELECTED,
    CHARGER_FAULTY_SELECTED,
    CHARGER_AVAILABLE_SELECTED,
    EARPHONES_AVAILABLE_SELECTED,
    BILL_AVAILABLE_SELECTED,
    WARRANTY_AVAILABLE_SELECTED,
    BOX_AVAILABLE_SELECTED,
    BATTERY_AVAILABLE_SELECTED,
    MOBILE_CONDITION_SELECTED,
    SAVE_DEVICE_NAME,
    SAVE_DEVICE_PRICE,
    SAVE_MOBILE_REPORT_ID,
    CLEAR
} from '../Actions/types.js';
const INITIAL_STATE = {
    selected_brand:'',
    mobile_id:'',
    mobileWorkingStatus:false,
    mobile_age:'',
    mobile_screen_status:'',
    isBatteryFaulty:false,
    isSpeakerFaulty:false,
    isVolumeFaulty:false,
    isPowerFaulty:false,
    isCameraFaulty:false,
    isChargerFaulty:false,
    charger:false,
    earphones:false,
    bill:false,
    warranty:false,
    box:false,
    battery:false,
    mobile_condition:'',
    device_name:'',
    device_price:'',
    report_id:''
}
export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case MOBILE_BRAND_SELECTED:
            return{ ...state, selected_brand:action.payload }
        case MOBILE_SELECTED:
            return{ ...state, mobile_id:action.payload };
        case MOBILE_WORKING_SELECTED:
            return{ ...state, mobileWorkingStatus:true };
        case MOBILE_AGE_SELECTED:
            return{ ...state,mobile_age:action.payload}
        case MOBILE_SCREEN_SELECTED:  
            return{ ...state,mobile_screen_status:action.payload}
        case BATTERY_FAULTY_SELECTED:   
            return{ ...state,isBatteryFaulty:!state.isBatteryFaulty}
        case SPEAKER_FAULTY_SELECTED:
            return{ ...state,isSpeakerFaulty:!state.isSpeakerFaulty}
        case VOLUME_FAULTY_SELECTED:
            return{ ...state,isVolumeFaulty:!state.isVolumeFaulty}
        case POWER_FAULTY_SELECTED:
      
            return{ ...state,isPowerFaulty:!state.isPowerFaulty}
        case CAMERA_FAULTY_SELECTED:
            return{ ...state,isCameraFaulty:!state.isCameraFaulty}
        case CHARGER_FAULTY_SELECTED:
            return{ ...state,isChargerFaulty:!state.isChargerFaulty}
        case CHARGER_AVAILABLE_SELECTED:
            return{ ...state,charger:!state.charger}
        case EARPHONES_AVAILABLE_SELECTED:
            return{ ...state,earphones:!state.earphones}
        case BILL_AVAILABLE_SELECTED:
            return{ ...state,bill:!state.bill}
        case WARRANTY_AVAILABLE_SELECTED:
            return{ ...state,warranty:!state.warranty}
        case BOX_AVAILABLE_SELECTED:
            return{ ...state,box:!state.box}
        case BATTERY_AVAILABLE_SELECTED:
            return{ ...state,battery:!state.battery}
        case MOBILE_CONDITION_SELECTED:

            return{ ...state,mobile_condition:action.payload}
        case SAVE_DEVICE_NAME:
            
            return{ ...state,device_name:action.payload}
         case SAVE_DEVICE_PRICE:
          
            return{ ...state,device_price:action.payload}
         case CLEAR:
          console.log("mobile predic data cleared")
            return INITIAL_STATE;
        case SAVE_MOBILE_REPORT_ID:
           
            return{...state,report_id:action.payload}
        default:
            return state;
    }
};