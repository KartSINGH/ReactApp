import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT
} from '../Actions/types.js';
const INITIAL_STATE = {
    email:'',
    password:'',
    name:'',
    user:null,
    loading:false,
    error:'',
    credits:'10'
}

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case EMAIL_CHANGED:
            return{ ...state, email:action.payload,error:'' };
        case PASSWORD_CHANGED:
            return{ ...state, password:action.payload,error:'' };
        case LOGIN_USER:
            return{ ...state, loading:true,error:''}
        case LOGIN_SUCCESS:
            return{...state,loading:false,email:action.payload.user_email,name:action.payload.user_name,credits:action.payload.user_totalcredits,error:'',password:''}
        case LOGIN_FAIL:
            return {...state,loading:false,error:'Authentication Error',password:''}
        case LOGOUT:
            return INITIAL_STATE;
        default:
           
            return state;
    }
};