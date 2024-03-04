import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css'
function Navbar() {
const [existinguser,setexistinguser] = useState({})

useEffect(()=>{
  if(sessionStorage.getItem('existinguser')){
    setexistinguser(JSON.parse(sessionStorage.getItem('existinguser')))
  }
},[])
  return (
    <nav className="navbar" style={{ position: 'fixed', width: '100%', zIndex: '100',backgroundColor:'#00050' }}>
      <div className="navbar-links-left d-flex ms-2">
      <div>  <Link to="/" className="navbar-link"><i className="fa-brands fa-twitch fa-2x "></i></Link></div>
       
      <div>  <Link to="/browse" className="navbar-link fw-bolder ms-5">Browse</Link></div>
      </div>
      <div className="navbar-center mb-3">
        <div className="navbar-search">
          <input type="text" placeholder="Search" className="navbar-search-input" />
          <i className="fa-solid fa-search navbar-magnifier fs-5 me-2"></i>
        </div>
      </div>
      <div className="navbar-profile">
      <Link to={'/authentication'}><button className="btn me-2">sign in</button></Link>
        <div className="navbar-profile-image">
       {existinguser?
       <Link to="/dashboard" className="navbar-link fw-bolder">
       <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User Profile" className="navbar-profile-image" />
       </Link>
       :<Link to="/authentication" className="navbar-link fw-bolder">
        <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User Profile" className="navbar-profile-image" />
        </Link>}
         
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
