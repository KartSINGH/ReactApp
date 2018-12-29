import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS
} from '../actions/types.js';
const INITIAL_STATE = {
name:'',
phone:'',
shift:''
};
export default (state=INITIAL_STATE, action) =>{
    switch(action.type) {
        case EMPLOYEE_UPDATE:
            return { ...state,[action.payload.prop]:action.payload.value}
        case EMPLOYEE_CREATE:
            return INITIAL_STATE;
        case EMPLOYEE_FETCH_SUCCESS:
            return {...state,}
        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE
        default:
            return state;
    }
}