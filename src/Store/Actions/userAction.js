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



const LogInRequest = payload => ({
    type:types.USER_LOG_IN_REQUEST,
    payload
})

const LogInSuccess = payload =>({
    type:types.USER_LOG_IN_SUCCESS ,
    payload
})

const LogInFail = payload => ({
    type:types.USER_LOG_IN_FAIL,
    payload
})


export const userLogOut = payload => ({
    type:types.USER_LOG_OUT,
    payload
})

export const autoLogIn = payload => ({
    type:types.AUTO_LOG_IN,
    payload
})

 
export const url ="https://film-api-go.herokuapp.com"


export const SignUp = payload => async dispatch => {
    	try {
    		dispatch(SignUpRequest());
			
    		const data = await axios({
    			method: "POST",
    			url: `${url}/auth`,
    			data: payload
			});
			dispatch(SignUpSuccess( data ));
		} catch  ( error ) {

			dispatch(SignUpFail( error ))
		} 	
	};
	






export const LogIn = payload => async dispatch => {
	try {
		dispatch(LogInRequest());
	
		const data = await axios({
			method: "POST",
			url: `${url}/login`,
			data: payload
		});
		localStorage.setItem("JwtToken", data.data.token);
		const login = JSON.parse(data.config.data.split(",")[0].split(":")[1])
		localStorage.setItem( "login", login)
		dispatch(LogInSuccess( login ))
	} catch  ( error ) {
		dispatch(LogInFail( error ))
	} 	
};