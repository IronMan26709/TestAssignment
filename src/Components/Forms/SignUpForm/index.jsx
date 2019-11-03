import React  from 'react';
import { reduxForm, Field } from 'redux-form';
import './SignUpStyles.css';


 
 let SignUpForm = props =>{
    const { handleSubmit } = props
    return(
        <div className="sign_up_form">
            <form onSubmit={handleSubmit}>
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
                <Field 
                    name="username"
                    type="text" 
                    component="input"
                    placeholder="Name"
                    required= {true}/>
                <Field 
                    name="age"
                    type="number" 
                    component="input"
                    placeholder="Age"
                    required= {true}/>
                <Field 
                    name="telephone"
                    type="text" 
                    component="input"
                    placeholder="Telephone"
                    required= {true}/>                
                <button>Sign Up</button>
            </form>
        </div>
    );
};

SignUpForm = reduxForm({ form:"SignUp" })(SignUpForm)

export default (SignUpForm)
