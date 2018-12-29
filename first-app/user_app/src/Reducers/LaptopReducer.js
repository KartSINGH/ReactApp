import {
    LAPTOP_BRAND_SELECTED,
    LAPTOP_SELECTED
} from '../Actions/types.js';
const INITIAL_STATE = {
    laptop_brand:'',
    laptop_id:''
}
export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case LAPTOP_BRAND_SELECTED:
        console.log("check2 " +action.payload)
            return{ ...state, laptop_brand:action.payload }
        case LAPTOP_SELECTED:
            console.log(action.payload)
            return{ ...state, laptop_id:action.payload };
        default:
            return state;
    }
};