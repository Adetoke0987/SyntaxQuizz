import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="logo-container">
                <Link to="/">
                    <img src="../../src/assets/syntax.png" alt="logo" className="logo" />
                </Link>
            </div>
            <div className='search'>
                <input type="text" placeholder='search' />
            </div>
            <div className="links-container">
                <Link to="/" className="nav-link" style={{ color: '#0040ff' }}>
                    Home
                </Link>
                <Link to="/connect" className="nav-link">
                    Connect
                </Link>
                <Link to="/pricing" className="nav-link">
                    Pricing
                </Link>
                <Link to="/help" className="nav-link">
                    Help
                </Link>
                <Link to="/login" className="nav-link">
                    Login
                </Link>
                <Link to="/signup" className="nav-link">
                    Sign up
                </Link>
                <i className="fa fa-search search-icon"></i>
                <Link to="/signup" className="create-button">
                    Create Quiz
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
