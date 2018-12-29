import { SHOW_UPDATE_PASSWORD, SHOW_PREVIOUS_PICKUPS,SHOW_PREVIOUS_PICKUPS_SUCCESS,PASSWORD_MATCHED, PASSWORD_NOT_MATCHED,CHANGE_USER_PASSWORD, CHANGE_USER_PASSWORD_SUCCESS } from './types.js';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

export const showUpdatePassword=()=>{
    return{
        type:'show_update_password',
    }
}
export const showPreviousPickups=({email})=>{
    console.log("Booking History ACTION CALLED");
    return(dispatch)=>{
        dispatch({
            type:"show_previous_pickups"
        });
        axios({
            method: 'post',
            url : 'https://api.shuttlescrap.com/register/booking_history',
            data : {
                user_email : email,
            }
            
        })
        .then(function(response){
          dispatch({
              type:"show_previous_pickups_success",
              payload:response.data
          })
        })
        .catch(function(error){
            alert("ERROR")
        }) 
    }
    
}
export const passwordMatched =()=>{
    return{
        type:'password_matched',
    }
}
export const passwordNotMatched =()=>{
    return{
        type:'password_not_matched',
    }
}
export const setNewPassword=({email,password}) =>{
    return(dispatch)=>{
        dispatch({
            type:"change_user_password"
        });
        axios({
            method: 'post',
            url : 'https://api.shuttlescrap.com/register/change_password',
            data : {
                user_email : email,
                user_password : password
            }
            
        })
        .then(function(response){
           
            dispatch({
            type:"change_user_password_success"
        });
        })
        .catch(function(error){
            alert("ERROR")
        }) 
    }
}