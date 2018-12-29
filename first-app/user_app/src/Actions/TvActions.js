import { TV_BRAND_SELECTED,TV_SELECTED} from './types.js';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
export const tvBrandSelected=(tv_brand)=>{
    Actions.tv_products();
    return{
        type:'tv_brand_selected',
        payload:tv_brand
    } 
}
export const tvSelected=(tv_id)=>{
    Actions.tv_page();
    return{
        type:'tv_selected',
        payload:tv_id
    } 
}