import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopMenu extends Component {
    
    render() {
        return (
       <nav className="navbar navbar-light bg-light static-top">
        <div className="container">
          <Link to="/" className="navbar-brand">Home</Link>
          <Link to="/start" className="navbar-brand">Start Bootstrap</Link>
          <Link to="/signin" className="btn btn-primary" >Sign In</Link>
        </div>
      </nav>
        );
    }
}

export default TopMenu;