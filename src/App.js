import React from 'react';
import { Switch, Route } from "react-router-dom"; 
import './App.css';


import  Header  from './Components/Header';
import { Footer } from './Components/Footer';
import  Registration   from './Containers/SignUp';
import Authorization from './Containers/LogIn';
import  Dashboard  from './Containers/Dashboard';
import DetailInfo from './Containers/DetailInfo';
import  NewMovie  from './Containers/NewMovie';
import PrivateRoute from './PrivatRouter';



const App = ( ) => {
  return (
    <div className="App">
      <Header />
      <Switch >
        <Route path="/" exact/>
        <Route path="/login" component={Authorization} />
        <Route path="/auth" component={Registration}/>
        <PrivateRoute path="/dashboard" component={Dashboard}/>
        <PrivateRoute path="/fullinfo" component={DetailInfo}/>
        <PrivateRoute path="/newMovie" component={NewMovie} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App
