import * as types from '../ActionTypes';



const initialState = {
    isFetching : false
}

export default ( state = initialState,{type, payload} ) =>{
    switch( type ) {
        case types.USER_SIGN_UP : {
            return { ...state }
        };
        default: {
            return state;
        }
    }
}
