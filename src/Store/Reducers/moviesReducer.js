import * as types from '../ActionTypes';

const initialState = {
    movies : null,
    selected : null,
    closeNewMovieComponent : false
}


export default ( state = initialState , { type, payload } ) =>{
    switch( type ) {
        case types.GET_MOVIES_SUCCESS : {
            return { ...state, movies : payload }
        };
        case types.FULL_MOVIE_INFO : {
            return { ...state, selected : payload }
        };

        case types.CLOSE_FULL_MOVIE_INFO : {
            return { ...state, selected : null }
        };

        case types.ADD_NEW_MOVIE_REQUEST : {
            return { ...state, closeNewMovieComponent : false }
        };

        case types.ADD_NEW_MOVIE_SUCCESS : {
            return { ...state, closeNewMovieComponent : true }
        };        
        default : {
            return state;
        };
    }

}