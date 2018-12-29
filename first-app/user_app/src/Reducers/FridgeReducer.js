import {
    FRIDGE_BRAND_SELECTED,
    FRIDGE_SELECTED
} from '../Actions/types.js';
const INITIAL_STATE = {
    fridge_brand:'',
    fridge_id:''
}
export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case FRIDGE_BRAND_SELECTED:
        console.log("check2 " +action.payload)
            return{ ...state, fridge_brand:action.payload }
        case FRIDGE_SELECTED:
            console.log(action.payload)
            return{ ...state, fridge_id:action.payload };
        default:
            return state;
    }
};