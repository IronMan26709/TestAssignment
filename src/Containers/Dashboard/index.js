import React from 'react';
import { DashItem }  from '../../Components/DashItem';
import { connect } from 'react-redux';
import {  GetAllMovies, AddNewMovie } from '../../Store/Actions/moviesActions';
import './Dashboard.css'
 
const Dashboard = props =>{
    const { movies } = props 
    const getInfo = event =>{
        // props.GetFullInfoAboutMovie(event)   
        console.log( event)
    }  
    
    return(
        <>
            <div className="dashboard_wrap">
                <div className="dashbord_header">
                    <div>List of movies </div>
                </div>
                <div className="content_wrap">
                    <ul className="dashbord_content">
                             { movies && movies.map( item => (<DashItem  func={ e =>getInfo(e)} key={item.id} {...item}/>) )}  
                    </ul>
                </div>
            </div>
        </>
    )
}
const mapDispatchToProps = dispatch => ({
    GetAllMovies : () => dispatch( GetAllMovies ()),
    AddNewMovie : e => dispatch( AddNewMovie ( e ))
})

const mapStateToProps = state =>({
    movies : state.moviesReducer.movies
    
    
})
export default connect (mapStateToProps, mapDispatchToProps)(Dashboard)