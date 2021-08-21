import logo from './logo.svg';
import './App.css';
import React from 'react';
import Auth from './components/Auth/Auth';
import { BrowserRouter, Route, Router } from 'react-router-dom';
function App() {
 
  
  
    return (
    <div className="App">
      <BrowserRouter>
      <Auth />
      <Route path="/restore_pass" render={()=> <Auth />} />
      </BrowserRouter>
      
      </div>
     
    );

}

export default App;
