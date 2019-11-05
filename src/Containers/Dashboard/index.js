import React from 'react';
import { DashItem }  from '../../Components/DashItem';
import { connect } from 'react-redux';
import { fullInfo} from '../../Store/Actions/moviesActions';
import { Redirect } from 'react-router-dom';
import './Dashboard.css'
 
const Dashboard = props =>{
    const { movies, selected } = props 
    const getInfo = event =>{
        props.fullInfo(event)   
    }  
    if ( selected !== null ) return <Redirect to="/fullinfo" />
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
    fullInfo : e => dispatch( fullInfo(e))
})
const mapStateToProps = state => ({
    selected: state.moviesReducer.selected,
    movies : state.moviesReducer.movies
})

export default connect (mapStateToProps, mapDispatchToProps)(Dashboard)