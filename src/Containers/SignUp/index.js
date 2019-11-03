import React from 'react';
import SignUpForm  from '../../Components/Forms/SignUpForm';
import { connect } from 'react-redux'; 
import { SignUp } from '../../Store/Actions/userAction';
import { Redirect } from 'react-router-dom'


const Registration = props =>{
    const regSubmit = values =>{
    const { age, username, password, login, telephone } = values
    const formValues = { 
        "age" : Number(age),
        "username" : username,
        "password" : password,
        "login" : login,
        "telephone" : telephone
    }
    props.SignUp( formValues) 
    }
    const {SignUpError,SignUpSucc} = props 
    if(!SignUpError && SignUpSucc) return <Redirect to="/" />
    return(
        <div className="sign_up"> 
            <SignUpForm  onSubmit={ e => regSubmit(e)}/>
            { SignUpError && <span>This user already registered</span>}
        </div>
    )
}
const mapStateToProps = state =>({
    SignUpError: state.userReducer.SignUpError,
    SignUpSucc: state.userReducer.SignUpSucc
})

const mapDispatchToProps = dispatch =>({
    SignUp : event => dispatch(SignUp(event))
})
export default connect (mapStateToProps, mapDispatchToProps)(Registration)