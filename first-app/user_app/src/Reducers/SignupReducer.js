import{
    S_EMAIL_CHANGED,
    S_NAME_CHANGED,
    S_CONFIRM_CHANGED,
    S_PASSWORD_CHANGED,
    S_PHONE_CHANGED,
    SIGNUP,
    SIGNUP_FAIL,
    SIGNUP_SUCCESS,
    SAVE_RECIEVED_OTP,
    SAVE_SUBMIT_OTP,
    SUBMIT_OTP_SUCCESS,
     LOGOUT
} from '../Actions/types.js';
const INITIAL_STATE={
    s_email:'',
    s_name:'',
    s_password:'',
    s_phone:'',
    s_confirm:'',
    s_loading:false,
    s_error:'',
    recieved_otp:'',
    submit_otp:''
}

export default (state=INITIAL_STATE,action)=>{
    
    switch(action.type){
        case S_EMAIL_CHANGED:
            return { ...state,s_email:action.payload}
        case S_NAME_CHANGED:
            return { ...state,s_name:action.payload}
        case S_PHONE_CHANGED:
            console.log(action.payload)
            return { ...state,s_phone:action.payload}
        case S_PASSWORD_CHANGED:
            return { ...state,s_password:action.payload}
        case S_CONFIRM_CHANGED:
            return{...state,s_confirm:action.payload}
        case SAVE_RECIEVED_OTP:
            console.log("otp saved is " + action.payload);
            return{...state,recieved_otp:action.payload}
        case SAVE_SUBMIT_OTP:
            return{...state,submit_otp:action.payload}
        case SIGNUP:
            return{...state,s_loading:true,s_error:''}
        case SIGNUP_SUCCESS:
            return INITIAL_STATE;
        case SIGNUP_FAIL:
            return{...state,s_loading:false,s_error:'SIGN UP HAS FAILED'}
        case SUBMIT_OTP_SUCCESS:
            return{...state,submit_otp:''}
         case LOGOUT:
            return INITIAL_STATE;     
        default:
           
            return state;
    }
}