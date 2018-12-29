import {
    AC_BRAND_SELECTED,
    AC_SELECTED
} from '../Actions/types.js';
const INITIAL_STATE = {
    ac_brand:'',
    ac_id:''
}
export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case AC_BRAND_SELECTED:
       
            return{ ...state, ac_brand:action.payload }
        case AC_SELECTED:
            
            return{ ...state, ac_id:action.payload };
        default:
            return state;
    }
};