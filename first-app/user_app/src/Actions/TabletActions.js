import { TABLET_BRAND_SELECTED,TABLET_SELECTED} from './types.js';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
export const tabletBrandSelected=(tablet_brand)=>{
    Actions.tablet_products();
    return{
        type:'tablet_brand_selected',
        payload:tablet_brand
    } 
}
export const tabletSelected=(tablet_id)=>{
    Actions.tablet_page();
    return{
        type:'tablet_selected',
        payload:tablet_id
    } 
}