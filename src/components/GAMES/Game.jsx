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
  
<Navbar/>
  <main style={{backgroundColor:'black'}}>
        <section id="one">
          <div className="browse-container">
            <div className="categories mt-2">
            <h1 style={{marginLeft:"5%",fontSize:'80px'}}>EXPLORE</h1>

              <h1 style={{marginLeft:"5%"}}>Games</h1>
              <Categories />
              <Allgame/>
            </div>
          </div>
        </section>
      </main>
    
  </div>
  )
}

export default Game