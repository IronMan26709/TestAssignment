import React from 'react';
import { ClosefullInfo }  from '../../Store/Actions/moviesActions';
import { connect } from 'react-redux';
import  FullInfo from '../../Components/FullInfo';
import { Redirect } from 'react-router-dom';
import './DetaiInfo.css'
 
const DetailInfo = props =>{ 
    const Close = () =>{
        props.ClosefullInfo()   
    }  
    if ( props.selected === null ) return <Redirect to="/dashboard" />
    return(
        <>
            <div className="details_wrap">
                <FullInfo/>
                <button onClick={Close}>Close</button>
            </div>
        </>
    )
}
const mapDispatchToProps = dispatch => ({
    ClosefullInfo : e => dispatch( ClosefullInfo(e))
})
const mapStateToProps = state => ({
    selected: state.moviesReducer.selected
})

export default connect (mapStateToProps, mapDispatchToProps)(DetailInfo)