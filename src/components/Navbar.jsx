import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar" style={{ backgroundColor: 'black', position: 'fixed', width: '100%', zIndex: '100' }}>
      <div className="navbar-links-left">
        <Link to="" className="navbar-link"><i className="fa-brands fa-twitch fa-2x ms-4"></i></Link>
        <Link to="" className="navbar-link ms-5 mt-5 fw-bolder">Following</Link>
        <Link to="/browse" className="navbar-link ms-5 mt-5 fw-bolder">Browse</Link>
      </div>
      <div className="navbar-center">
        <div className="navbar-search">
          <input type="text" placeholder="Search" className="navbar-search-input" />
          <i className="fa-solid fa-search navbar-magnifier"></i>
        </div>
      </div>
      <div className="navbar-profile">
        <button className="btn btn-primary me-3">Login</button>
        <div className="navbar-profile-image">
          <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User Profile" className="navbar-profile-image" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
