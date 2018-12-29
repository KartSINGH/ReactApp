import {
    MICROWAVE_BRAND_SELECTED,
    MICROWAVE_SELECTED
} from '../Actions/types.js';
const INITIAL_STATE = {
    microwave_brand:'',
    microwave_id:''
}
export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case MICROWAVE_BRAND_SELECTED:
        console.log("check2 " +action.payload)
            return{ ...state, microwave_brand:action.payload }
        case MICROWAVE_SELECTED:
            console.log(action.payload)
            return{ ...state, microwave_id:action.payload };
        default:
            return state;
    }
};