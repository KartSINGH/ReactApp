import {
    TABLET_BRAND_SELECTED,
    TABLET_SELECTED
} from '../Actions/types.js';
const INITIAL_STATE = {
    tablet_brand:'',
    tablet_id:''
}
export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case TABLET_BRAND_SELECTED:
        console.log("check2 " +action.payload)
            return{ ...state, tablet_brand:action.payload }
        case TABLET_SELECTED:
            console.log(action.payload)
            return{ ...state, tablet_id:action.payload };
        default:
            return state;
    }
};