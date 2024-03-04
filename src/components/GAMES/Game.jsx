import React, { useState } from 'react'
import Navbar from '../Navbar'
import Categories from '../Categories'
import Allgame from './Allgame';

function Game() {
  const [isSideExpanded, setIsSideExpanded] = useState(false);
  const [isSideHovered, setIsSideHovered] = useState(false);

  const toggleSide = () => {
    setIsSideExpanded(prev => !prev);
  };

  const handleMouseOver = () => {
    if (!isSideExpanded) {
      setIsSideHovered(true);
    }
  };

  const handleMouseOut = () => {
    if (!isSideExpanded) {
      setIsSideHovered(false);
    }
  };

  return (
    <div>
    <div className={`App ${isSideExpanded ? 'side-expanded' : ''} `}>
      <Navbar />
      <div
        className={`sidebar ${isSideHovered ? 'sidebar-hovered' : ''} ${
          isSideExpanded ? '' : 'collapsed'
        }`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="d-flex justify-content-end">
          <button className="toggler" onClick={toggleSide}>
            <i class="fa-solid fa-arrow-left"></i>
          </button>
        </div>
        <div className="sidebar-content">
          <div className={`user-info ${isSideExpanded ? '' : 'collapsed'}`}>
            <img
              src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
              alt="User"
              className="user-image"
            />
            <div className="user-details">
              <p style={{ fontSize: '20px' }} className="user-name fw-bolder">
                Abhijith
              </p>
              <p className="user-game">Playing: Pubg</p>
              <p className="user-viewers">
                Watching 1.2k<span className="live-dot"></span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <main>
        <section id="one">
          <div className="browse-container">
            <div className="categories mt-2">
              <h1 style={{marginLeft:"5%"}}>Games</h1>
              <Categories />
              <Allgame/>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
  )
}

export default Game