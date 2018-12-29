import { LEFT_SIDEBAR_OPEN,TIME_SELECTED,DATE_SELECTED,ADDRESS_CHANGED,ADDRESS_CHANGED1,ADDRESS_CHANGED2,BOOK_PICKUP,BOOK_PICKUP_SUCCESS,PAYMENT_METHOD_SELECTED,ACCOUNT_CHANGED,IFSC_CHANGED,SCRAP_AMOUNT_CHANGED,PAYTM_SELECTED } from './types.js';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';

export const leftSidebarOpen=()=>{
    return{
        type:'left_sidebar_open',
        payload:true
    }
}
export const timeSelected=(time)=>{
    return{
        type:'time_selected',
        payload:time
    }
}
export const dateSelected=(date)=>{
    return{
        type:'date_selected',
        payload:date
    }
}
export const paytm_input=(number)=>{
    return{
        type:'paytm_selected',
        payload:number
    }
}
export const addressChanged=(text)=>{
    return{
        type:'address_changed',
        payload:text
    }
}
export const addressChanged1=(text)=>{
    return{
        type:'address_changed1',
        payload:text
    }
}
export const addressChanged2=(text)=>{
    return{
        type:'address_changed2',
        payload:text
    }
}
export const paymentMethodSelect=(text)=>{
    return{
        type:'payment_method_selected',
        payload:text
    }
}
export const accountChanged=(text)=>{
    return{
        type:'account_changed',
        payload:text
    }
}
export const ifscChanged=(text)=>{
    return{
        type:'ifsc_changed',
        payload:text
    }
}
export const scrapAmountChanged=(text)=>{
    return{
        type:'scrap_amount_changed',
        payload:text
    }
}
export const pickupBook=({email,name,date,time,address,address1,address2,payment_method,account_number,ifsc_code,scrap_amount,booking_credits,booking_status,device_name,report_id,paytm_number}) =>{
  
    return(dispatch)=>{
        dispatch({
            type:'book_pickup'
        });
        axios({
            method: 'post',
            url : 'https://api.shuttlescrap.com/register/submit_pickup',
            data : {
                user_email: email,
                user_name: name,
                res_address: address+" "+address1+" "+address2,
                scrap_amount: scrap_amount,
                time: time,
                booking_credits: booking_credits,
                payment_method:payment_method,
                bankaccount_details: account_number,
                ifsc_details: ifsc_code,
                booking_status: booking_status,
                paytm_number:paytm_number,
                device_details:device_name,
                report_id:report_id
            }
            
        })
        .then(function(response){
           
            dispatch({
                type:'book_pickup_success',
                payload:response.data.booking_id
            })
          Actions.pickup_booked({type:'reset'});
        })
        .catch(function(error){
            alert(error)
        })
        
    }
}
