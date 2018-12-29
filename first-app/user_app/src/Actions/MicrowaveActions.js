import { MICROWAVE_BRAND_SELECTED,MICROWAVE_SELECTED} from './types.js';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
export const microwaveBrandSelected=(microwave_brand)=>{
    Actions.microwave_products();
    return{
        type:'microwave_brand_selected',
        payload:microwave_brand
    } 
}
export const microwaveSelected=(microwave_id)=>{
    Actions.microwave_page();
    return{
        type:'microwave_selected',
        payload:microwave_id
    } 
}