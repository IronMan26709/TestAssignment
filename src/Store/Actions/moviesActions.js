import * as types from '../ActionTypes';
import axios from 'axios';
import { url } from './userAction';



const getMoviesRequest = payload => ({
    type:types.GET_MOVIES_REQUEST,
    payload
})

const getMoviesSuccess = payload => ({
    type:types.GET_MOVIES_SUCCESS ,
    payload
})

const getMoviessFail = payload => ({
    type:types.GET_MOVIES_FAIL,
    payload
})

const addNewMovieRequest = payload => ({
    type:types.ADD_NEW_MOVIE_REQUEST,
    payload
})

const addNewMovieSuccess = payload => ({
    type:types.ADD_NEW_MOVIE_SUCCESS ,
    payload
})

const addNewMovieFail = payload => ({
    type:types.ADD_NEW_MOVIE_FAIL,
    payload
})


export const fullInfo = payload => ({
    type:types.FULL_MOVIE_INFO,
    payload
})

export const ClosefullInfo = payload => ({
    type:types.CLOSE_FULL_MOVIE_INFO,
    payload
})


export const GetAllMovies = () => async dispatch =>{
    try{
        dispatch(getMoviesRequest());
        const data = await axios({
            methos: "GET",
            headers: {
	            Authorization: `Bearer ${localStorage.JwtToken}`
            },
            url : `${url}/api/v1/film?`
        });
        dispatch(getMoviesSuccess(data.data.result))
    }
    catch( error ) {
        dispatch(getMoviessFail(error)) 
    }
};


export const AddNewMovie = payload => async dispatch => {
    try{ 
        dispatch(addNewMovieRequest());
        const data = await axios ({
            method : "POST",
            headers: {
	            Authorization: `Bearer ${localStorage.JwtToken}`
            },
            url : `${url}/api/v1/film`,
            data: payload

    }); 
        dispatch(addNewMovieSuccess(data))
        dispatch(GetAllMovies()) 
}   
    catch( error ) {
        dispatch(addNewMovieFail(error))
    }
};