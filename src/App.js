import React from 'react';
import { Switch, Route } from "react-router-dom"; 
import './App.css';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header className="header"/>
      <Switch >
        {/* <Route path="/" component={}/> */}
        <Route path="/login" />
        <Route path="/auth" />
        {/* <Route path="/" component={}/> */}
      </Switch>
      <Footer className="Footer"/>
    </div>
  );
}

export default App;
