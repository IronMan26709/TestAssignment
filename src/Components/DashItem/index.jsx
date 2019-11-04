import React from 'react';
// import { connect } from 'react-redux';
import './DashItem.css'




export const DashItem = props =>{
    const  { name, id, year, genres, func} =  props

    return(
        <div onClick={ () => func ( id) } className="dashItem">
             <div className="movieName">
                 {/* <span>Name :</span> */}
                 <span id={id}>{name}</span>
            </div>
             {/* <div className="movieAge"> 
                <span>Year :</span>
                <span> {year}</span>
            </div>
             <div className="movieGenre">
                  <span>Genre :</span>
                  <span> { genres && genres.map( elem => (<span key={elem.id}>{elem.name} </span> ))  }</span>
            </div>        */}
        </div>
    )
}

