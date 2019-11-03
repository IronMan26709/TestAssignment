import React from 'react';
import './header.css';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';





const Header = props =>{
    const { login } = props
    return(
        <div className="header_component">
            <div className="logo" > Logo</div>
            <div className="nav" >Navigation</div>
            <div className="user" >
                { login ? <span >Log Out</span> : <Link to="/login"> <span >Log In</span></Link> }
                { login ? <span>{login}</span> : <Link to="/auth"><span>Sign Up</span></Link>}
            </div>
        </div>
    )
} 
const mapStateToProps = state =>({
    login : state.userReducer.login
})
export default connect(mapStateToProps)(Header)
