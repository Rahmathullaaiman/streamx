import React, { useEffect, useRef, useState } from 'react';
import '../components/CSS/livevideo.css'
import '../components/CSS/sidebar.css'
import '../components/CSS/chat.css'; 
import demovideo from '../Assest/sample2.mp4'
import Navbar from './Navbar/Navbar';


function LiveVideo() {
  const [islive,setislive] = useState(true)
const [existinguser,setexistinguser] = useState({})

const [sidebarWidth, setSidebarWidth] = useState(70);
const chatbarHeaderRef = useRef(null);
const sidebarRef = useRef(null);
const [collapsed, setCollapsed] = useState(false);

const toggleCollapse = () => {
  setCollapsed(!collapsed);
};
useEffect(() => {
  const chatbarHeader = chatbarHeaderRef.current;
  const sidebar = sidebarRef.current;

  const handleChatbarHeaderClick = () => {
    const newWidth = sidebarWidth === 250 ? 70 : 250;
    setSidebarWidth(newWidth);
  };

  chatbarHeader.addEventListener('click', handleChatbarHeaderClick);

  return () => {
    chatbarHeader.removeEventListener('click', handleChatbarHeaderClick);
  };
}, [sidebarWidth]);
  return (
    <>
 <main >
  <Navbar/>
<section id='one'>
<div className='column-1'>
<div className="sidebar" ref={sidebarRef} style={{ width: `${sidebarWidth}px` }}>
         <div>
         <div className="chatbar-header text-center" ref={chatbarHeaderRef}>
                <p >
               {sidebarWidth == 250 ? <i className="fas fa-chevron-left text-light ms-3 fs-4"></i>
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
             {sidebarWidth ==250 &&  <div className="user-details">
               <p style={{fontSize:"20px"}} className="user-name fw-bolder">Abhijith</p>
               <p className="user-game">Playing: Pubg</p>
               <p className="user-viewers">Watching 1.2k<span className="live-dot"></span></p>
             </div>}
                </>
              
            </div>
          
             
            
          </div>
        </div>
</div>
<div className='column-2' >
  
<div className='livediv' >
          <div className='videolivediv'>
            
          <div className='video-div'>
          <video autoPlay loop>
            <source src={demovideo } type="video/mp4"/>  
          </video>
          </div>
            <div className='carousal-userr' style={{ paddingLeft:`${sidebarWidth}px`,width: `calc(100% - ${sidebarWidth}px)` }}>
      <div className='carousal-userimg'>
          <img
                    src="https://yt3.googleusercontent.com/ytc/AIdro_lHI-F3J_SZzMPkmm2mCexlk42guAnijVPUykJ_jw=s900-c-k-c0x00ffffff-no-rj"
                    alt="User"
                    className="user-imagee ms-1 me-2"
                    height={'80px'}
                    width={'80px'}
                  />
                  <h5 className='live-tagein-img'>Live</h5>
          </div>
          <div className='carousal-userdetails' >
          <div >
              <h4>kaztrooo @ 1:30 live</h4>
              <h6>adfvaf|| o7tfouh @b 34t51345</h6>
            <div className='d-flex align-items-center justify-content-center'>  
             <a href="" style={{textDecoration:'none'}} className='text-light'> <h6>pubggg_afena</h6>  </a>   
            <div className='d-flex ms-5' >
           <h6 className='fpsshooter'>FPS</h6>
           <h6 className='fpsshooter'>Shooter</h6>   
        </div>    
             </div>
          </div>
          <div className='followsubdiv'>
           <div>
              <button className='m-1 followbtn'>follow</button>
              <button className='m-1 subbtn'>suscribe</button>
           </div>
           <div className='viewersdiv'>
            <h5><i class="fa-solid fa-user"></i> 568</h5>
            <h6>1:10:20</h6>
           </div>
          </div>
          </div> 
            
    </div>
          </div>
   
       </div>
</div>

<div className='column-2' >

<div className={`chatbar ${collapsed ? 'collapsed' : ''}`}>
      <div className="chatbar-header" onClick={toggleCollapse}>
        {collapsed ? (
          <i className="fas fa-chevron-left"></i>
        ) : (
          <i className="fas fa-chevron-right"></i>
        )}
      </div>
      {!collapsed && (
        <div className="chatbar-content">
          <div className="messages-container">
           
              <div  className="message">
                <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
                <div className="message-content">
                  <p className="user-message">
                    <span className="user-name">Aiman</span>: Hi How are you
                  </p>
                </div>
              </div>
                 <div  className="message">
                <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
                <div className="message-content">
                  <p className="user-message">
                    <span className="user-name">Aiman</span>: Hi How are you
                  </p>
                </div>
              </div> <div  className="message">
                <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
                <div className="message-content">
                  <p className="user-message">
                    <span className="user-name">Aiman</span>: Hi How are you
                  </p>
                </div>
              </div> <div  className="message">
                <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
                <div className="message-content">
                  <p className="user-message">
                    <span className="user-name">Aiman</span>: Hi How are you
                  </p>
                </div>
              </div> <div  className="message">
                <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
                <div className="message-content">
                  <p className="user-message">
                    <span className="user-name">Aiman</span>: Hi How are you
                  </p>
                </div>
              </div> <div  className="message">
                <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
                <div className="message-content">
                  <p className="user-message">
                    <span className="user-name">Aiman</span>: Hi How are you
                  </p>
                </div>
              </div> <div  className="message">
                <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
                <div className="message-content">
                  <p className="user-message">
                    <span className="user-name">Aiman</span>: Hi How are you
                  </p>
                </div>
              </div> <div  className="message">
                <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
                <div className="message-content">
                  <p className="user-message">
                    <span className="user-name">Aiman</span>: Hi How are you
                  </p>
                </div>
              </div> <div  className="message">
                <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
                <div className="message-content">
                  <p className="user-message">
                    <span className="user-name">Aiman</span>: Hi How are you
                  </p>
                </div>
              </div> <div  className="message">
                <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
                <div className="message-content">
                  <p className="user-message">
                    <span className="user-name">Aiman</span>: Hi How are you
                  </p>
                </div>
              </div> <div  className="message">
                <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
                <div className="message-content">
                  <p className="user-message">
                    <span className="user-name">Aiman</span>: Hi How are you
                  </p>
                </div>
              </div> <div  className="message">
                <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
                <div className="message-content">
                  <p className="user-message">
                    <span className="user-name">Aiman</span>: Hi How are you
                  </p>
                </div>
              </div> <div  className="message">
                <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
                <div className="message-content">
                  <p className="user-message">
                    <span className="user-name">Aiman</span>: Hi How are you
                  </p>
                </div>
              </div> <div  className="message">
                <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
                <div className="message-content">
                  <p className="user-message">
                    <span className="user-name">Aiman</span>: Hi How are you
                  </p>
                </div>
              </div> <div  className="message">
                <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
                <div className="message-content">
                  <p className="user-message">
                    <span className="user-name">Aiman</span>: Hi How are you
                  </p>
                </div>
              </div> <div  className="message">
                <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
                <div className="message-content">
                  <p className="user-message">
                    <span className="user-name">Aiman</span>: Hi How are you
                  </p>
                </div>
              </div> <div  className="message">
                <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
                <div className="message-content">
                  <p className="user-message">
                    <span className="user-name">Aiman</span>: Hi How are you
                  </p>
                </div>
              </div> <div  className="message">
                <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
                <div className="message-content">
                  <p className="user-message">
                    <span className="user-name">Aiman</span>: Hi How are you
                  </p>
                </div>
              </div> <div  className="message">
                <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
                <div className="message-content">
                  <p className="user-message">
                    <span className="user-name">Aiman</span>: Hi How are you
                  </p>
                </div>
              </div> <div  className="message">
                <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
                <div className="message-content">
                  <p className="user-message">
                    <span className="user-name">Aiman</span>: Hi How are you
                  </p>
                </div>
              </div>
            
          </div>
          <div className="input-container">
            <input type="text" placeholder="Type your message..." className="chat-input" />
            <button className="send-button">Send</button>
          </div>
        </div>
      )}
    </div>
  </div>
</section>

        
        </main>


 
    </>
  )
}

export default LiveVideo