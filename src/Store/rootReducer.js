import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './Reducers/userReducer';
import moviesReducer from './Reducers/moviesReducer';


export const rootReducer = combineReducers({
    form: formReducer,
    userReducer,
    moviesReducer
})