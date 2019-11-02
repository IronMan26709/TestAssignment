import * as types from '../ActionTypes';
import axios from 'axios';


    


 const SignUpRequest = payload => ({
    type:types.USER_SIGN_UP_REQUEST,
    payload
})

const SignUpSuccess = payload => ({
    type:types.USER_SIGN_UP_SUCCESS ,
    payload
})

const SignUpFail = payload => ({
    type:types.USER_SIGN_UP_FAIL,
    payload
})

const url ="https://film-api-go.herokuapp.com"
export const SignUp = payload => {
		console.log(`${url}/auth`)
    	return dispatch => {
    		dispatch(SignUpRequest());
    
    		axios({
    			method: "POST",
    			url: `${url}/auth`,
    			data: payload
    		})
    			.then(res => dispatch(SignUpSuccess(res), console.log("REsponse",res)))
    			.catch(err => dispatch(SignUpFail(err)));
    	};
    };