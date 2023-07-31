import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';

class Navbar extends Component {

    logout(e) {
        e.preventDefault();
        localStorage.removeItem('usertoken');
        this.props.history.push('/');
    }

    render() {
        const loginRegLink = (
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
            </ul>
        )
        const userLink = (
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">User</Link>
                </li>
                <li className="nav-item">
                    <Link to="/uploads" className="nav-link">Assignment Submissions</Link>
                </li>
                <li className="nav-item">
                    <Link to="/assignments" className="nav-link">Assignment List</Link>
                </li>
                <li className="nav-item">
                    <a href="" onClick={this.logout.bind(this)} className="nav-link">Logout</a>
                </li>
            </ul>
        )
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">Assignment Submission Portal</Link>
                <div className="collapse navbar-collapse" id="navbar1">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        )
    }
}

export default Navbar;