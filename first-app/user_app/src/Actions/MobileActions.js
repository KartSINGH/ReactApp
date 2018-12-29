import {
    MOBILE_BRAND_SELECTED,
    MOBILE_SELECTED,
    MOBILE_AGE_SELECTED,
    MOBILE_SCREEN_SELECTED,
    BATTERY_FAULTY_SELECTED,
    SPEAKER_FAULTY_SELECTED,
    VOLUME_FAULTY_SELECTED,
    POWER_FAULTY_SELECTED,
    CAMERA_FAULTY_SELECTED,
    CHARGER_FAULTY_SELECTED,
    MOBILE_CONDITION_SELECTED,
    SAVE_DEVICE_NAME,
    SAVE_DEVICE_PRICE,
    CLEAR,
    SAVE_MOBILE_REPORT_ID
} from './types.js';
import {
    Actions
} from 'react-native-router-flux';
import axios from 'axios';

export const mobileBrandSelected = (mobile_brand) => {
    Actions.mobile_products();
    return {
        type: 'mobile_brand_selected',
        payload: mobile_brand
    }
}
export const mobileSelected = (mobile_id) => {
    Actions.mobile_page();
    return {
        type: 'mobile_selected',
        payload: mobile_id
    }
}
export const mobileWorkingSelected = () => {
    Actions.mobile_ques_2();
    return {
        type: 'mobile_working_selected',
    }
}
export const mobileAgeSelected = (age) => {
    Actions.mobile_ques_3();
    return {
        type: 'mobile_age_selected',
        payload: age
    }
}
export const mobileScreenSelected = (screen) => {
    Actions.mobile_ques_4();
    return {
        type: 'mobile_screen_selected',
        payload: screen
    }
}
export const batteryFaultySelected = () => {
    return {
        type: 'battery_faulty_selected'
    }
}
export const speakerFaultySelected = () => {
    return {
        type: 'speaker_faulty_selected'
    }
}
export const volumeFaultySelected = () => {
    return {
        type: 'volume_faulty_selected'
    }
}
export const powerFaultySelected = () => {
    return {
        type: 'power_faulty_selected'
    }
}
export const cameraFaultySelected = () => {
    return {
        type: 'camera_faulty_selected'
    }
}
export const chargerFaultySelected = () => {
    return {
        type: 'charger_faulty_selected'
    }
}
export const chargerAvailableSelected = () => {
    return {
        type: 'charger_available_selected'
    }
}
export const billAvailableSelected = () => {
    return {
        type: 'bill_available_selected'
    }
}
export const earphoneAvailableSelected = () => {
    return {
        type: 'earphones_available_selected'
    }
}
export const warrantyAvailableSelected = () => {
    return {
        type: 'warranty_available_selected'
    }
}
export const boxAvailableSelected = () => {
    return {
        type: 'box_available_selected'
    }
}
export const batteryAvailableSelected = () => {
    return {
        type: 'battery_available_selected'
    }
}
export const deviceName= (device_name) => {
   
    return {
        type: 'save_device_name',
        payload:device_name
    }
}
export const save_device_price= (device_name) => {
  
    return {
        type: 'save_device_price',
        payload:device_name
    }
}
export const mobileConditionSelected = (condition) => {
    return(dispatch)=>{
      
        dispatch({
            type: 'mobile_condition_selected',
            payload: condition
        })
    Actions.mobile_report({
        type: 'reset'
    }); 
    }
   
}
export const saveId = (id) => {
    Actions.l3({
        type: 'reset'
    });
    
    return {
        type: 'save_mobile_report_id',
        payload: id
    }
}
export const clear = () => {
    return(dispatch)=>{
      console.log("clear action called")
        dispatch({
            type: 'clear',
        })
    Actions.home_page({
        type: 'reset'
    }); 
    }
}