import React  from 'react';
import { reduxForm, Field } from 'redux-form';
import './LogInStyles.css';
import { connect } from 'react-redux';


 
 let LogInForm = props =>{
    const { handleSubmit, isFatching } = props
    return(
        <div className="log_in__form">
            <form className="formSignIn" onSubmit={handleSubmit}>
                <Field 
                    name="login" 
                    type="text"
                    component="input"
                    placeholder="Login"
                    required= {true} />
                <Field 
                    name="password"
                    type="password" 
                    component="input"
                    placeholder="Password"
                    required= {true}/> 
                <button>{ isFatching ? "Loading..." : "Log in" }</button>
            </form>
        </div>
    );
};

LogInForm = reduxForm({ form:"LogIn" })(LogInForm)

const mapStateToProps = state =>({
    isFetching: state.userReducer.isFetching
})

export default connect( mapStateToProps)(LogInForm)



