import React from 'react';
import './DashItem.css'




export const DashItem = props =>{
    const  { name, id, func} =  props

    return(
        <div onClick={ () => func ( id) } className="dashItem">
             <div className="movieName">
                 <span id={id}>{name}</span>
            </div>
        </div>
    )
}

