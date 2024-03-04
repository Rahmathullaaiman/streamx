import React, { useEffect, useRef, useState } from 'react';
import './CSS/userhome.css'
import './CSS/sidebar.css'
import VideoCarousal from './VideoCarousal';
import Homecards from './Homecards';
import { useNavigate } from 'react-router-dom';

const Userhome = () => {
const [islive,setislive] = useState(true)
const [existinguser,setexistinguser] = useState({})
const navigate= useNavigate()
const [sidebarWidth, setSidebarWidth] = useState(70);
const chatbarHeaderRef = useRef(null);
const sidebarRef = useRef(null);

useEffect(()=>{
  if(sessionStorage.getItem('existinguser')){
    setexistinguser(JSON.parse(sessionStorage.getItem('existinguser')))
  }
},[])


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
 <>
     
     
      
    
      {/* <main style={{backgroundColor:'black',height:"100vh",width:'100%'}}>
      <section id="onebyone">
                <div className="inner-content">
                  <LiveVideo />
                </div>
               
              </section>
             
          </main> */}
     <main >
<section id='one'>
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
<div className='column-2' style={{ paddingLeft:`${sidebarWidth}px`,width: `calc(100% - ${sidebarWidth}px)` }}>
  <div className='inner-content'><VideoCarousal/></div>
<div style={{margin:'-280px 0px 50px 0px'}}><Homecards/></div>
</div>
</section>

        
        </main>

     
     

     
 </>
  );
};

export default Userhome;
