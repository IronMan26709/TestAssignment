import React from 'react';
import './header.css';





export const Header = props =>{
    const user = 0
    return(
        <div className="header_component">
            <div className="logo" > Logo</div>
            <div className="nav" >Navigation</div>
            <div className="user" >
                { user === true ? <span>Log Out</span> : <span>Log In</span> }
                { user === true ? <span>UserName</span> : <span>Sign Up</span>}
            </div>
        </div>
    )
} 
