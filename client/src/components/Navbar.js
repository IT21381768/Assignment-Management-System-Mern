// import React, { Component } from 'react';
// import { Link , withRouter} from 'react-router-dom';

// class Navbar extends Component {

//     logout(e) {
//         e.preventDefault();
//         localStorage.removeItem('usertoken');
//         this.props.history.push('/');
//     }

//     render() {
//         const loginRegLink = (
//             <ul className="nav nav-tabs">
//                 <li className="nav-item">
//                     <Link to="/login" className="nav-link"><h1>Login</h1></Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link to="/register" className="nav-link"><h1>Register</h1></Link>
//                 </li>
//             </ul>
//         )
//         const userLink = (
//             <ul className="nav nav-tabs">
//                 <li className="nav-item">
//                     <Link to="/profile" className="nav-link">User</Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link to="/uploads" className="nav-link">Assignment Submissions</Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link to="/assignments" className="nav-link">Assignment List</Link>
//                 </li>
//                 <li className="nav-item">
//                     <a href="" onClick={this.logout.bind(this)} className="nav-link">Logout</a>
//                 </li>
//             </ul>
//         )
//         return (
//             <nav className="navbar navbar-expand-lg navbar-light rounded">
//                 <button
//                     className="navbar-toggler"
//                     type="button"
//                     data-toggle="collapse"
//                     data-target="#navbar1"
//                     aria-controls="navbar1"
//                     aria-expanded="false"
//                     aria-label="Toggle navigation"
//                 >
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div
//                     className="collapse navbar-collapse justify-content-md-center" id="navbar1">
//                     <ul className="nav nav-tabs">
//                         <li className="nav-item">
//                             <Link to="/" className="nav-link">
//                                 <h1>Home</h1>
//                             </Link>
//                         </li>
//                     </ul>
//                     {localStorage.usertoken ? userLink : loginRegLink}
//                 </div>
//             </nav>
//         )
//     }
// }

// export default withRouter(Navbar);

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('usertoken');
    window.location.href = '/'; // Navigate programmatically without useHistory
  };

  const loginRegLink = (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          <h1>Login</h1>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          <h1>Register</h1>
        </Link>
      </li>
    </ul>
  );

  const userLink = (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/profile" className="nav-link">
          User
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/uploads" className="nav-link">
          Assignment Submissions
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/assignments" className="nav-link">
          Assignment List
        </Link>
      </li>
      <li className="nav-item">
        <a href="/" onClick={logout} className="nav-link">
          Logout
        </a>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light rounded">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar1"
        aria-controls="navbar1"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <h1>Home</h1>
            </Link>
          </li>
        </ul>
        {localStorage.usertoken ? userLink : loginRegLink}
      </div>
    </nav>
  );
}

export default Navbar;
