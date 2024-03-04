import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../../Navbar/Navbar'
import Categories from '../Categories'
import Allesport from './Allesport';


function Esports() {
  const [sidebarWidth, setSidebarWidth] = useState(70);
  const chatbarHeaderRef = useRef(null);
  const sidebarRef = useRef(null);
  
  useEffect(() => {
    const chatbarHeader = chatbarHeaderRef.current;
    const sidebar = sidebarRef.current;
  
    const handleChatbarHeaderClick = () => {
      const newWidth = sidebarWidth === 200 ? 70 : 200;
      setSidebarWidth(newWidth);
    };
  
    chatbarHeader.addEventListener('click', handleChatbarHeaderClick);
  
    return () => {
      chatbarHeader.removeEventListener('click', handleChatbarHeaderClick);
    };
  }, [sidebarWidth]);

  return (
    <div>
    <Navbar/>
    <div className='column-1'>
 <div className="sidebar" ref={sidebarRef} style={{ width: `${sidebarWidth}px` }}>
          <div>
          <div className="chatbar-header text-center" ref={chatbarHeaderRef}>
                 <p >
                {sidebarWidth == 200 ? <i className="fas fa-chevron-left text-light ms-3 fs-4"></i>
                   :
                   <i className="fas fa-chevron-right text-light ms-1 fs-4"></i>}
                 </p>
               </div>
          </div>
           <div className="sidebar-content">
             <div className={`user-info`}>
               
           
                 <>
                   <img
                     src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                     alt="User"
                     className="user-image"
                   />
              {sidebarWidth ==200 &&  <div className="user-details">
                <p style={{fontSize:"20px"}} className="user-name fw-bolder">Abhijith</p>
                <p className="user-game">Playing: Pubg</p>
                <p className="user-viewers">Watching 1.2k<span className="live-dot"></span></p>
              </div>}
                 </>
               
             </div>
           
              
             
           </div>
         </div>
 </div>
      
           <div className="browse-box2 column-2" style={{ paddingLeft:`${sidebarWidth}px`,width: `calc(100% - ${sidebarWidth}px)` }}>
             <div className="categories mt-2">
             <h1 style={{marginLeft:"5%",fontSize:'80px',color:'white'}}>EXPLORE</h1>
 
 <h1 style={{marginLeft:"5%",color:'white'}}>Esports</h1>
 
               <Categories />
               <Allesport/>
             </div>
           </div>
      
  
   </div>
 
  )
}

export default Esports