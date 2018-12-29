import { FRIDGE_BRAND_SELECTED,FRIDGE_SELECTED} from './types.js';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
export const fridgeBrandSelected=(fridge_brand)=>{
    Actions.fridge_products();
    return{
        type:'fridge_brand_selected',
        payload:fridge_brand
    } 
}
export const fridgeSelected=(fridge_id)=>{
    Actions.fridge_page();
    return{
        type:'fridge_selected',
        payload:fridge_id
    } 
}