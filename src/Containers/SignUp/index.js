import React from 'react';
import SignUpForm  from '../../Components/Forms/SignUpForm';
import { connect } from 'react-redux'; 
import { SignUp } from '../../Store/Actions/userAction';


const Registration = props =>{
    const regSubmit = values =>{
    props.SignUp( values) 
    }
    return(
        <>
            <SignUpForm  onSubmit={ e => regSubmit(e)}/>
        </>
    )
}
export default connect (null, {SignUp})(Registration)