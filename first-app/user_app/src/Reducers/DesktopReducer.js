import {
    DESKTOP_BRAND_SELECTED,
    DESKTOP_SELECTED
} from '../Actions/types.js';
const INITIAL_STATE = {
    desktop_brand:'',
    desktop_id:''
}
export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case DESKTOP_BRAND_SELECTED:
        console.log("check2 " +action.payload)
            return{ ...state, desktop_brand:action.payload }
        case DESKTOP_SELECTED:
            console.log(action.payload)
            return{ ...state, desktop_id:action.payload };
        default:
            return state;
    }
};