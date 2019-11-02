import React from 'react';
import { Switch, Route } from "react-router-dom"; 
import './App.css';


import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import  Registration   from './Containers/SignUp';




const App = ( ) => {
  return (
    <div className="App">
      <Header />
      <Switch >
        <Route path="/" exact/>
        <Route path="/login" />
        <Route path="/auth" component={Registration}/>
        {/* <Route path="/" component={}/> */}
      </Switch>
      <Footer/>
    </div>
  );
}

export default App
