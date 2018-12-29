import { LAPTOP_BRAND_SELECTED,LAPTOP_SELECTED} from './types.js';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
export const laptopBrandSelected=(laptop_brand)=>{
    Actions.laptop_products();
    return{
        type:'laptop_brand_selected',
        payload:laptop_brand
    } 
}
export const laptopSelected=(laptop_id)=>{
    Actions.laptop_page();
    return{
        type:'laptop_selected',
        payload:laptop_id
    } 
}