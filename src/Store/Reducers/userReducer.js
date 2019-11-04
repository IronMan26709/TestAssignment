import * as types from '../ActionTypes';

const initialState = {
    isFetching : false,
    SignUpError : false,
    SignUpSucc : false,
    logInError : false,
    logInSucc : false,
    login: null
}

export default ( state = initialState,{type, payload} ) =>{
    switch( type ) {
        case types.USER_SIGN_UP_REQUEST : {
            return { ...state, SignUpError : false , isFetching : true , SignUpSucc: false }
        };
        case types.USER_SIGN_UP_SUCCESS : {
            return { ...state, SignUpSucc: true , isFetching : false }
        };
        case types.USER_SIGN_UP_FAIL : {
            return { ...state, SignUpError : true  , isFetching : false  }
        };


        case types.USER_LOG_IN_REQUEST : {
            return { ...state, logInError : false , isFetching : true , logInSucc: false }
        };
        case types.USER_LOG_IN_SUCCESS : {
            return { ...state, logInSucc: true , isFetching : false, login : payload }
        };
        case types.USER_LOG_IN_FAIL : {
            return { ...state, logInError : true  , isFetching : false  }
        };
        case types.USER_LOG_OUT:
            localStorage.removeItem("JwtToken");
            localStorage.removeItem("login");
            return { ...state, login : null } 
        default: {  
            return state;
        }
    }
}
