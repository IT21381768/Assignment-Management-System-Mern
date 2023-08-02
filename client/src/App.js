// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Login from './components/Login';
// import Register from './components/Register';
// import Landing from './components/Landing';
// import Profile from './components/Profile';

// class App  extends Component{
//   render(){
//   return (
//     <Router>
//       <div className='App'>
//         <Navbar />
//         <Route exact path="/" component={Landing} />
//         <div className="container">
//           <Route exact path="/register" component={Register} />
//           <Route exact path="/profile" component={Profile} />
//           <Route exact path="/login" component={Login} />
//         </div>
//       </div>
//     </Router>
//   )}
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Landing from './components/Landing';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/login" render={(props) => <Login {...props} />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
