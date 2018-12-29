import{
    LEFT_SIDEBAR_OPEN,
    TIME_SELECTED,
    DATE_SELECTED,
    ADDRESS_CHANGED,
    ADDRESS_CHANGED1,
    ADDRESS_CHANGED2,
    BOOK_PICKUP,
    BOOK_PICKUP_SUCCESS,
    PAYMENT_METHOD_SELECTED,
    ACCOUNT_CHANGED,
    IFSC_CHANGED,
    SCRAP_AMOUNT_CHANGED,
    PAYTM_SELECTED,
    LOGOUT,
    CLEAR
} from '../Actions/types.js';
const INITIAL_STATE={
    sidebar:false,
    time:'',
    date:'',
    address:'',
    address1:'',
    address2:'',
    payment_method:'cash',
    is_paymentMethod_selected:'false',
    pickup_start:false,
    is_time_selected:false,
    is_date_selected:false,
    account_number:'',
    ifsc_code:'',
    scrap_amount:'',
    booking_status:'initiated',
    booking_credits:'10',
    paytm_number:'',
    order_id:''
}

export default (state=INITIAL_STATE,action)=>{
    console.log("sidebar reducer called")
    switch(action.type){
        case LEFT_SIDEBAR_OPEN:
           
            return{...state, sidebar:action.payload};

        case TIME_SELECTED:
           
            return {...state,time:action.payload,is_time_selected:true}

        case DATE_SELECTED:

            return {...state,date:action.payload,is_date_selected:true}

        case ADDRESS_CHANGED:
          
            return {...state,address:action.payload}
        case ADDRESS_CHANGED1:
          console.log("1");
            return {...state,address1:action.payload}
        case ADDRESS_CHANGED2:
          console.log("2");
            return {...state,address2:action.payload}

        case PAYMENT_METHOD_SELECTED:
            
            return{...state,payment_method:action.payload.value}

        case ACCOUNT_CHANGED:
            
            return{...state,account_number:action.payload}

        case IFSC_CHANGED:
            
            return{...state,ifsc_code:action.payload}

        case BOOK_PICKUP:
           
            return {...state,pickup_start:true}

        case SCRAP_AMOUNT_CHANGED:

            return{...state,scrap_amount:action.payload}

        case PAYTM_SELECTED:

            return{...state,paytm_number:action.payload}
            
        case BOOK_PICKUP_SUCCESS:
            alert("Your order Id is " + action.payload)
            return {...state,pickup_start:false,order_id:action.payload}
            
        case CLEAR:
            console.log("clear reducer called")
           return INITIAL_STATE;
        case LOGOUT:
            return INITIAL_STATE;
        default:
            return state;
    }
};