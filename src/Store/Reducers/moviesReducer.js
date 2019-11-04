import * as types from '../ActionTypes';

const initialState = {
    movies : null,
}


export default ( state = initialState , { type, payload } ) =>{
    switch( type ) {
        case types.GET_MOVIES_SUCCESS : {
            return { ...state, movies : payload }
        };
        default : {
            return state;
        };
    }

}