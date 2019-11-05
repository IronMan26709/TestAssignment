import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store/store';
import { autoLogIn } from './Store/Actions/userAction';


  

if(localStorage.JwtToken) {
    store.dispatch(autoLogIn(localStorage.login))
}  
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>


    , document.getElementById('root'));
serviceWorker.unregister();
