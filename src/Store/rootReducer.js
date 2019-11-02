import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReduser from './Reducers/userReduser';


export const rootReducer = combineReducers({
    form: formReducer,
    userReduser
})