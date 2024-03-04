import React, { useState } from 'react';
import './userhome.css';
import './sidebar.css';

function Sidebar({ onToggle }) {
  const [sidebarWidth, setSidebarWidth] = useState(200);

  const toggleSidebar = () => {
    setSidebarWidth(sidebarWidth === 80 ? 200 : 80);
  };

  return (
    <>
    
    <div className="sidebar" style={{ width: `${sidebarWidth}px` }}>
       <div onClick={toggleSidebar} >
            <div className="chatbar-header text-center"  onClick={onToggle}>
              <p >
               {sidebarWidth !== 80 && <span className="text-light fs-3">For You </span>}
                {sidebarWidth === 80? <i className="fas fa-chevron-right text-light ms-3 fs-4"></i>
                :
                <i className="fas fa-chevron-left text-light ms-1 fs-4"></i>}
              </p>
            </div>
       </div>
        <div className="sidebar-content">
          <div className={`user-info`}>
            {sidebarWidth === 80 && (
              <img
                src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                alt="User"
                className="user-image"
              />
            )}
            {sidebarWidth !== 80 && (
              <>
                <img
                  src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                  alt="User"
                  className="user-image"
                />
             <div className="user-details">
             <p style={{fontSize:"20px"}} className="user-name fw-bolder">Abhijith</p>
             <p className="user-game">Playing: Pubg</p>
             <p className="user-viewers">Watching 1.2k<span className="live-dot"></span></p>
           </div>
              </>
            )}
          </div>
          <div className={`user-info`}>
            {sidebarWidth === 80 && (
              <img
                src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                alt="User"
                className="user-image"
              />
            )}
            {sidebarWidth !== 80 && (
              <>
                <img
                  src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                  alt="User"
                  className="user-image"
                />
             <div className="user-details">
             <p style={{fontSize:"20px"}} className="user-name fw-bolder">Abhijith</p>
             <p className="user-game">Playing: Pubg</p>
             <p className="user-viewers">Watching 1.2k<span className="live-dot"></span></p>
           </div>
              </>
            )}
          </div>
          <div className={`user-info`}>
            {sidebarWidth === 80 && (
              <img
                src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                alt="User"
                className="user-image"
              />
            )}
            {sidebarWidth !== 80 && (
              <>
                <img
                  src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                  alt="User"
                  className="user-image"
                />
             <div className="user-details">
             <p style={{fontSize:"20px"}} className="user-name fw-bolder">Abhijith</p>
             <p className="user-game">Playing: Pubg</p>
             <p className="user-viewers">Watching 1.2k<span className="live-dot"></span></p>
           </div>
              </>
            )}
          </div>
          <div className={`user-info`}>
            {sidebarWidth === 80 && (
              <img
                src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                alt="User"
                className="user-image"
              />
            )}
            {sidebarWidth !== 80 && (
              <>
                <img
                  src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                  alt="User"
                  className="user-image"
                />
             <div className="user-details">
             <p style={{fontSize:"20px"}} className="user-name fw-bolder">Abhijith</p>
             <p className="user-game">Playing: Pubg</p>
             <p className="user-viewers">Watching 1.2k<span className="live-dot"></span></p>
           </div>
              </>
            )}
          </div>
          <div className={`user-info`}>
            {sidebarWidth === 80 && (
              <img
                src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                alt="User"
                className="user-image"
              />
            )}
            {sidebarWidth !== 80 && (
              <>
                <img
                  src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                  alt="User"
                  className="user-image"
                />
             <div className="user-details">
             <p style={{fontSize:"20px"}} className="user-name fw-bolder">Abhijith</p>
             <p className="user-game">Playing: Pubg</p>
             <p className="user-viewers">Watching 1.2k<span className="live-dot"></span></p>
           </div>
              </>
            )}
          </div>
          <div className={`user-info`}>
            {sidebarWidth === 80 && (
              <img
                src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                alt="User"
                className="user-image"
              />
            )}
            {sidebarWidth !== 80 && (
              <>
                <img
                  src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                  alt="User"
                  className="user-image"
                />
             <div className="user-details">
             <p style={{fontSize:"20px"}} className="user-name fw-bolder">Abhijith</p>
             <p className="user-game">Playing: Pubg</p>
             <p className="user-viewers">Watching 1.2k<span className="live-dot"></span></p>
           </div>
              </>
            )}
          </div>
          <div className={`user-info`}>
            {sidebarWidth === 80 && (
              <img
                src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                alt="User"
                className="user-image"
              />
            )}
            {sidebarWidth !== 80 && (
              <>
                <img
                  src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                  alt="User"
                  className="user-image"
                />
             <div className="user-details">
             <p style={{fontSize:"20px"}} className="user-name fw-bolder">Abhijith</p>
             <p className="user-game">Playing: Pubg</p>
             <p className="user-viewers">Watching 1.2k<span className="live-dot"></span></p>
           </div>
              </>
            )}
          </div>
          <div className={`user-info`}>
            {sidebarWidth === 80 && (
              <img
                src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                alt="User"
                className="user-image"
              />
            )}
            {sidebarWidth !== 80 && (
              <>
                <img
                  src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                  alt="User"
                  className="user-image"
                />
             <div className="user-details">
             <p style={{fontSize:"20px"}} className="user-name fw-bolder">Abhijith</p>
             <p className="user-game">Playing: Pubg</p>
             <p className="user-viewers">Watching 1.2k<span className="live-dot"></span></p>
           </div>
              </>
            )}
          </div>
          <div className={`user-info`}>
            {sidebarWidth === 80 && (
              <img
                src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                alt="User"
                className="user-image"
              />
            )}
            {sidebarWidth !== 80 && (
              <>
                <img
                  src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                  alt="User"
                  className="user-image"
                />
             <div className="user-details">
             <p style={{fontSize:"20px"}} className="user-name fw-bolder">Abhijith</p>
             <p className="user-game">Playing: Pubg</p>
             <p className="user-viewers">Watching 1.2k<span className="live-dot"></span></p>
           </div>
              </>
            )}
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Sidebar;
