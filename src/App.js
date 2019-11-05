import React from 'react';
import { Switch, Route } from "react-router-dom"; 
import './App.css';


import  Header  from './Components/Header';
import { Footer } from './Components/Footer';
import  Registration   from './Containers/SignUp';
import Authorization from './Containers/LogIn';
import  Dashboard  from './Containers/Dashboard';
import DetailInfo from './Containers/DetailInfo';



const App = ( ) => {
  return (
    <div className="App">
      <Header />
      <Switch >
        <Route path="/" exact/>
        <Route path="/login" component={Authorization} />
        <Route path="/auth" component={Registration}/>
        <Route path="/dashboard" component={Dashboard}/>
        {/* <Route path="/newMovie" component={}/> */}
        <Route path="/fullinfo" component={DetailInfo}/>
        
      </Switch>
      <Footer/>
    </div>
  );
}

export default App
