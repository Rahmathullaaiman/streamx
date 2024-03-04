import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import './landingpage.css';
import Browse from '../components/Browse';

function Browsepage() {
    const [sidebarWidth, setSidebarWidth] = useState(150);
    const [col1width,setcol1width] = useState(12)
    const [col2width,setcol2width] = useState(98)
    const onToggle = () => {
      setSidebarWidth(sidebarWidth === 80 ? 150 : 80);
      setcol1width(sidebarWidth === 80 ? 12 : 2)
      setcol2width(sidebarWidth === 80 ? 88 : 98)
    };
  return (
    <>
   <Navbar/>
       <div className='home'>
       <div className="col1" style={{width:`${col1width}vw`}}>
           <Sidebar onToggle={onToggle} />
         </div>
         <div className="col2"  style={{width:`${col2width}vw`}}>
           <Browse sidebarWidth={sidebarWidth} />
         </div>
       </div>
     </>
  )
}

export default Browsepage