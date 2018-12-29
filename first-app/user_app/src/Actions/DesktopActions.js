import { DESKTOP_BRAND_SELECTED,DESKTOP_SELECTED} from './types.js';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
export const desktopBrandSelected=(desktop_brand)=>{
    Actions.desktop_products();
    return{
        type:'desktop_brand_selected',
        payload:desktop_brand
    } 
}
export const desktopSelected=(desktop_id)=>{
    Actions.desktop_page();
    return{
        type:'desktop_selected',
        payload:desktop_id
    } 
}