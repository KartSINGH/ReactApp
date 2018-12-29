import {
    TV_BRAND_SELECTED,
    TV_SELECTED
} from '../Actions/types.js';
const INITIAL_STATE = {
    tv_brand:'',
    tv_id:''
}
export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case TV_BRAND_SELECTED:
        console.log("check2 " +action.payload)
            return{ ...state, tv_brand:action.payload }
        case TV_SELECTED:
            console.log(action.payload)
            return{ ...state, tv_id:action.payload };
        default:
            return state;
    }
};