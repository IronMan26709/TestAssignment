import React from 'react';
import  NewMovieForm  from '../../Components/Forms/NewMovieForm';
import { AddNewMovie }  from '../../Store/Actions/moviesActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
 

const NewMovie = props =>{
    const Submit = event =>{
        const { name, year, Comedy, Horror, Drama } = event
        const genres = []
        const yearNumb = Number( year )
        if( Comedy && Comedy === true ) genres.push( 1 ) 
        if( Horror && Horror === true ) genres.push( 2 )
        if( Drama && Drama === true  ) genres.push( 3 ) 
        const result ={
            "name" : name,
            "year": yearNumb,
            "genres": genres
        } 
        props.AddNewMovie( result )
    }
    const{ closeNewMovieComponent } = props
    if (closeNewMovieComponent === true ) return <Redirect to="/"/>
    return(
        <div className="new_movie_wrap">
                <NewMovieForm onSubmit={ e => Submit(e)}/>
        </div>
    )   
}
const mapDispatchStateToProps = dispatch =>({
    AddNewMovie: e => dispatch( AddNewMovie( e ))
})
const mapStateToProps = state =>({
    closeNewMovieComponent : state.moviesReducer.closeNewMovieComponent
})
 
export default connect ( mapStateToProps, mapDispatchStateToProps )( NewMovie ) 