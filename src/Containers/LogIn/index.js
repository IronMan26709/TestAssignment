import React from 'react';
import LogInForm  from '../../Components/Forms/LogIn';
import { connect } from 'react-redux'; 
import { LogIn } from '../../Store/Actions/userAction';
import { Redirect } from 'react-router-dom';
 

const Authorization = props =>{
    const LogInSubmit = values =>{ 
     props.LogIn( values) 
    }
    const {logInError,logInSucc} = props 
    if(!logInError && logInSucc) return <Redirect to="/" />

    return(
        <div className="log_in"> 
            <LogInForm  onSubmit={ e => LogInSubmit(e)}/>
            { logInError && <span>This user not found</span>}
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    LogIn : event => dispatch(LogIn(event))
})

const mapStateToProps = state =>({
    logInSucc : state.userReducer.logInSucc,
    logInError : state.userReducer.logInError
})

export default connect (mapStateToProps, mapDispatchToProps)(Authorization)