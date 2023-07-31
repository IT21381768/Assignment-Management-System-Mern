import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        {/* <Route exact path="/" component={Landing} />
        <div className="container">
          <Route exact path="/about" component={About} />
        </div> */}
      </div>
    </Router>
  )
}

export default App;