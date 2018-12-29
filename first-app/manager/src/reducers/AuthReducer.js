import{
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types.js';
const INITIAL_STATE= {
    email: '',
    password:'',
    user:null,
    loading:'false'
};
export default (state=INITIAL_STATE,action) => {
    console.log("reducer called");
    console.log(action);
    switch(action.type){
        case EMAIL_CHANGED:
            console.log('new state');
            return{ ...state, email: action.payload };
        case PASSWORD_CHANGED:
            console.log("new password state");
            return { ...state, password: action.payload };
        case LOGIN_USER_SUCCESS:
            return{ ...state, user:action.payload, error:'', loading:'false',email:'', password:''}
        case LOGIN_USER_FAIL:
            return{ ...state, error: 'Authentication Failed.' , password: '' , loading:'false' };
        case LOGIN_USER:
            return { ...state, loading:'true',error:''}
        default:
            console.log("old state")
            return state;
    }
};