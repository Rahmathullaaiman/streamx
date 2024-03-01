import React, { useState } from 'react';
import './userhome.css'
import Navbar from './Navbar';


const Userhome = () => {
  const [isSideExpanded, setIsSideExpanded] = useState(false);
  const [isSideHovered, setIsSideHovered] = useState(false);
  const [isSideHovered2, setIsSideHovered2] = useState(false);
  const [isSideExpanded2, setIsSideExpanded2] = useState(false);
  
  const toggleSide = () => {
    setIsSideExpanded((prev) => !prev);
  };

  const handleMouseOver = () => {
    if (isSideExpanded) {
      // do nothing
    } else {
      setIsSideHovered(true);
    }
  };

  const handleMouseOut = () => {
    if (isSideExpanded) {
      // do nothing
    } else {
      setIsSideHovered(false);
    }
  };

  const toggleSide2 = () => {
    setIsSideExpanded2((prev) => !prev);
  };

  const handleMouseOver2 = () => {
    if (isSideExpanded2) {
      // do nothing
    } else {
      setIsSideHovered2(true);
    }
  };

  const handleMouseOut2 = () => {
    if (isSideExpanded2) {
      // do nothing
    } else {
      setIsSideHovered2(false);
    }
  };

  return (
 <>
      <div className={`App ${isSideExpanded ? 'side-expanded' : ''} `}>
      <Navbar/>
        <div className="sidebar" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <div className='d-flex justify-content-end'>
          <button className='toggler' onClick={toggleSide}><i class="fa-solid fa-arrow-left"></i></button>
          </div>
          <div className="sidebar-content">
          
          <div  className={`user-info ${isSideExpanded ? '' : 'collapsed'}`}>
            <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
            <div className="user-details">
              <p style={{fontSize:"20px"}} className="user-name fw-bolder">Abhijith</p>
              <p className="user-game">Playing: Pubg</p>
              <p className="user-viewers">Watching 1.2k<span className="live-dot"></span></p>
            </div>
          </div>
          </div>
        </div>
        <div className={`App ${isSideExpanded2 ? 'side-expanded2' : ''} `}>
  
  <div className="sidebar2" onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2}>
    <div className='d-flex justify-content-end'>
    <button className='toggler' onClick={toggleSide2}><i class="fa-solid fa-arrow-right"></i></button>
    </div>
    <div className="sidebar-content">
    
    <div  className={`user-info ${isSideExpanded2 ? '' : 'collapsed2'}`}>
      <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
      <div className="user-details">
        <p style={{fontSize:"20px"}} className="user-name fw-bolder">Abhijith</p>
        <p className="user-game">Playing: Pubg</p>
        <p className="user-viewers">Watching 1.2k<span className="live-dot"></span></p>
      </div>
    </div> 
    </div>
  </div>
  </div>
        <main>
          <section id="one">
            <div className="inner-content">
            {/* <video autoPlay loop style={{
              height:'100%',
              width:'100%',
              margin:'10px'
            }}>
    <source src= type="video/mp4"/>  
  </video> */}
            </div>
          </section>
         
        </main>
      
      </div>

     
 </>
  );
};

export default Userhome;
