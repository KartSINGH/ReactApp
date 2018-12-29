import{
    SHOW_PREVIOUS_PICKUPS,
    SHOW_PREVIOUS_PICKUPS_SUCCESS,
    SHOW_UPDATE_PASSWORD,
    PASSWORD_MATCHED,
    PASSWORD_NOT_MATCHED,
    CHANGE_USER_PASSWORD,
    CHANGE_USER_PASSWORD_SUCCESS,
    LOGOUT
} from '../Actions/types.js';
const INITIAL_STATE={
    isUpdatePasswordVisibile:'true',
    isShowPreviousPickupsVisible:'false',
    passwordMatch:false,
    passwordNotMatch:true,
    updateLoading:false,
    data:[1,2,3,4]
}

export default (state=INITIAL_STATE,action)=>{
   
    switch(action.type){
        case SHOW_PREVIOUS_PICKUPS:
            return { ...state,isShowPreviousPickupsVisible:true,isUpdatePasswordVisibile:false}
        case SHOW_PREVIOUS_PICKUPS_SUCCESS:
            console.log("reducer proper called");
            return { ...state,data:action.payload}
        case SHOW_UPDATE_PASSWORD:
            return { ...state,isUpdatePasswordVisibile:true,isShowPreviousPickupsVisible:false}
        case PASSWORD_MATCHED:
            
            return{ ...state,passwordMatch:true,passwordNotMatch:false}
        case PASSWORD_NOT_MATCHED:
             
              return{ ...state,passwordMatch:false,passwordNotMatch:true}
        case CHANGE_USER_PASSWORD:
               
                return{...state,updateLoading:true}
        case CHANGE_USER_PASSWORD_SUCCESS:
                
                return{...state,updateLoading:false}
        case LOGOUT:
            return INITIAL_STATE;
        default:
            
            return state;
    }
}