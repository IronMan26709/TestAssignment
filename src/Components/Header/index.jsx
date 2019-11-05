import React from 'react';
import './header.css';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogOut } from '../../Store/Actions/userAction';
import { GetAllMovies } from '../../Store/Actions/moviesActions';




const Header = props =>{
    const { login, userLogOut, GetAllMovies, movies } = props
    const LogOut = () =>{
        userLogOut()
    }
    const getMovies = () =>{
       GetAllMovies()   
    } 
    return(
        <div className="header_component">
            <div className="logo" > </div>
            <div className="nav" >
              { login && <ul>
                    <li><Link onClick={getMovies} to="/dashboard" >List of movies</Link></li>
                    <li><Link  to="/newMovie" > Add new movie</Link></li>
                </ul> }
            </div>
            <div className="user" >
                { login ? <span  onClick={LogOut}>Log Out</span> : <Link to="/login"> <span >Log In</span></Link> }
                { login ? <span>{login}</span> : <Link to="/auth"><span>Sign Up</span></Link>}
            </div>
        </div>
    )
} 
const mapStateToProps = state =>({
    login : state.userReducer.login,
    movies: state.moviesReducer.movies
})
const mapDispachStateToProps = dispatch =>({
    userLogOut: () =>dispatch( userLogOut()),
    GetAllMovies: () => dispatch( GetAllMovies())
})
export default connect( mapStateToProps, mapDispachStateToProps )(Header)
