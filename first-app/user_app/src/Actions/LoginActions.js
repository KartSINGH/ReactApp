import { EMAIL_CHANGED, PASSWORD_CHANGED,LOGIN_USER,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT } from './types.js';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

export const emailChanged=(text)=>{
    return{
        type:'email_changed',
        payload:text
    }
}
export const passwordChanged=(text)=>{
    return{
        type:'password_changed',
        payload:text
    }
}
export const logOut=()=>{
    return(dispatch)=>{
        dispatch({
            type:'logout'
        })
        Actions.login({type:'reset'});
    }
}

export const loginUser=({email, password}) =>{
    return(dispatch)=>{
        dispatch({
            type:LOGIN_USER
        });
        axios({
            method: 'post',
            url : 'https://api.shuttlescrap.com/register/user',
            data : {
                user_email : email
            }
        })
        .then(function(response){
            console.log(response.data)
           if(password == response.data.user_password){
                dispatch({
                    type:LOGIN_SUCCESS,
                    payload:response.data
                });
                Actions.home_page({type:'reset'});
           }else{
            dispatch({
                    type:LOGIN_FAIL
                })
           }
        })
        .catch(function(error){
            alert(error)
        })
        
        
    }
}