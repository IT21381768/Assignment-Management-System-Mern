import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        {/* <Route exact path="/" component={Landing} />
        <div className="container">
          <Route exact path="/about" component={About} />
        </div> */}
        {/* <Route exact path="/login" component={Login} /> */}
      </div>
    </Router>
  )
}

export default App;