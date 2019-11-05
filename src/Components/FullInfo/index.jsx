import React from 'react';
import { connect } from 'react-redux';
import './FullInfo.css'




const FullInfo = props => {
    const  { movies, selected} =  props
    console.log( movies, selected, props)
    const theMovie =  movies.filter( item => item.id === selected )[0]
    console.log(theMovie)
    return(
        <div className="detailItem">
             <div className="movieName">
                 <span>Name :</span> 
                 <span> {theMovie.name}</span>
            </div>
              <div className="movieAge"> 
                <span>Year :</span>
                {theMovie.year &&  <span> {theMovie.year}</span>}
            </div>
             <div className="movieGenre">
                  <span>Genre :</span>
                  <span> {theMovie.genres && theMovie.genres.map( elem => (<span key={elem.id}>{elem.name} </span> ))  }</span>
            </div>       
        </div>
    )
}
const mapStateToProps = state =>({
    selected: state.moviesReducer.selected,
    movies: state.moviesReducer.movies
})

export default connect (mapStateToProps)( FullInfo )