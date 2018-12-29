import { AC_BRAND_SELECTED,AC_SELECTED} from './types.js';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
export const acBrandSelected=(ac_brand)=>{
    Actions.ac_products();
    return{
        type:'ac_brand_selected',
        payload:ac_brand
    } 
}
export const acSelected=(ac_id)=>{
    Actions.ac_page();
    return{
        type:'ac_selected',
        payload:ac_id
    } 
}