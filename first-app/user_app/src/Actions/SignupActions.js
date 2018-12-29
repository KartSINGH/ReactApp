import { S_EMAIL_CHANGED, S_NAME_CHANGED,S_CONFIRM_CHANGED,S_PASSWORD_CHANGED,S_PHONE_CHANGED,SIGNUP,SIGNUP_FAIL,SIGNUP_SUCCESS,SAVE_RECIEVED_OTP,SAVE_SUBMIT_OTP,SUBMIT_OTP_SUCCESS} from './types.js';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

export const s_emailChanged=(text)=>{
    return{
        type:'s_email_changed',
        payload:text
    }
}
export const s_nameChanged=(text)=>{
    return{
        type:'s_name_changed',
        payload:text
    }
}
export const s_phoneChanged=(text)=>{
    return{
        type:'s_phone_changed',
        payload:text
    }
}
export const otp_changed=(text)=>{
    return{
        type:'save_submit_otp',
        payload:text
    }
}
export const submit_otp_success=()=>{
    return{
        type:'submit_otp_success',
    }
}
export const getMyOtp=(s_phone)=>{
 

  console.log("my mobile no is " + s_phone);
    return(dispatch)=>{
        dispatch({
            type:"none"
        })
    axios({
         method: 'POST',
            url: 'https://sendotp.msg91.com/api/generateOTP',
            headers: {
                "application-Key": "w7gEzSbCuU7xnHloQyf1Cq8SFtbEBOq0aShp5EVo2iJ6-IleyhL7ZVCIIGasO2_EfcDk-4YgwahdGaTQf9nRSD3KIflNgjB0QKyqAEGgUlhfQPwSHp4HqzlabTtSiYydAZafinYK8GsUudgYOkQeXw=="
            },
            data: {
                countryCode: '91',
                mobileNumber: s_phone,
                getGeneratedOTP: true
            }
    })
    .then(function(response){
        console.log(response.data.response.oneTimePassword);
        dispatch({
            type:'save_recieved_otp',
            payload:response.data.response.oneTimePassword
        })
        Actions.front_image_4();
    
    })
    .catch(function(error){
        alert("Error Occurred")
    })
    }
}
export const s_passwordChanged=(text)=>{
    return{
        type:'s_password_changed',
        payload:text
    }
}
export const s_confirmChanged=(text)=>{
    return{
        type:'s_confirm_changed',
        payload:text
    }
}

export const signup=({s_email, s_password,s_confirm,s_name,s_phone}) =>{
    return(dispatch)=>{
        dispatch({
            type:'signup'
        });
       axios({
            method: 'post',
            url : 'https://api.shuttlescrap.com/register/submit_user',
            data : {
                user_email : s_email,
                phone_number : s_phone,
                user_name:s_name,
                user_password:s_password,
                user_totalcredits:"10"
            }
         })
        .then(function(response){
            if(response.data!="Email id exists.Please login" ||response.status!=200){
                dispatch({
                    type:"signup_success"
                })
                Actions.home_page({type:'reset'})
            }else{
                 dispatch({
                     type:"signup_fail"
                 })
                alert("User email already Exists. Please Login");
                
            }
                
        })
        .catch(function(error){
            dispatch({
                type:"signup_fail"
            })
        })
        
    }
}
