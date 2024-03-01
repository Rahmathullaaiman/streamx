import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import './browse.css';

function Browse() {
  return (
    <div>
      <Sidebar /> 
      <Navbar />
      <div className="browse-container">
       
        <div className="categories">
        <h1>Browse</h1>
          <div>
            <ul className="categories-list">
              <li ><button className='fw-bold'>Games</button></li>
              <li><button  className='fw-bold'>IRL</button></li>
              <li><button  className='fw-bold'>Music</button></li>
              <li><button  className='fw-bold'>Esports</button></li>
              <li><button  className='fw-bold'>Creative</button></li>
              {/* You can add more buttons as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Browse;
