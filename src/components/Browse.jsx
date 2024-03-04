import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import './browse.css';
import './userhome.css';
import Categories from './Categories';
import Allcard from './Browse/Allcard';

function Browse({sidebarWidth}) {
  const [isexpanded,setisexpanded] = useState(false)
  useEffect(()=>{
    if(sidebarWidth){
      setisexpanded(true)
    }
    else{
      setisexpanded(false)
    }
  })

  return (
<>
  <Navbar/>
  

<div className="browse-container">
<h1 style={{marginLeft:"-70%",fontSize:'80px',float:'left'}}>EXPLORE</h1>

                <div className="categories">
        
                  <Categories />
                  <Allcard/>
                </div>
                
              </div>

           
        
     
</>
   
  );
}

export default Browse;
