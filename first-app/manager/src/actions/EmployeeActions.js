import React from 'react';
import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS
} from './types.js';
import firebase from 'firebase';
export const employeeUpdate = ({prop, value}) => {
    return{
        type: EMPLOYEE_UPDATE,
        payload : {prop, value}
    }
};
export const employeeCreate = ({name,phone,shift})=>{
    const { currentUser } = firebase.auth();
    console.log(name + " " + phone + " " + shift);
    return(dispatch)=>{
    firebase.database().ref(`/users/${currentUser.uid}/employess`)
    .push({
        name,
        phone,
        shift
    })
    .then(()=>{
        dispatch({
            type:EMPLOYEE_CREATE
        })
        Actions.employeeList({type: 'reset'})
    })
    };
};

export const employeesFetch = () => {
    const {currentUser} = firebase.auth();
    return (dispatch)=>{
        firebase.database().ref(`/users/${currentUser.uid}/employess`)
        .on('value', snapshot =>{
            dispatch({
                type:EMPLOYEES_FETCH_SUCCESS,
                payload : snapshot.val()
            })
        })
    };
};