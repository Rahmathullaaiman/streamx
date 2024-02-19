import React, { useState, useEffect } from 'react';
import './sidebar.css';

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header" onClick={toggleCollapse}>
        <i className={`fas fa-chevron-${collapsed ? 'right' : 'left'}`}></i>
        <span></span> 
      </div>
      <div className="sidebar-content">
        
          <div  className={`user-info ${collapsed ? 'collapsed' : ''}`}>
            <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
            <div className="user-details">
              <p style={{fontSize:"20px"}} className="user-name fw-bolder">Abhijith</p>
              <p className="user-game">Playing: Pubg</p>
              <p className="user-viewers">Watching 1.2k<span className="live-dot"></span></p>
            </div>
          </div>
          <div  className={`user-info ${collapsed ? 'collapsed' : ''}`}>
            <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
            <div className="user-details">
              <p style={{fontSize:"20px"}} className="user-name fw-bolder">vhjvhj</p>
              <p className="user-game">Playing: pubg</p>
              <p className="user-viewers">Watching 1.2k<span className="live-dot"></span></p>
            </div>
          </div>
          <div  className={`user-info ${collapsed ? 'collapsed' : ''}`}>
            <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
            <div className="user-details">
              <p style={{fontSize:"20px"}} className="user-name fw-bolder">vhjvhj</p>
              <p className="user-game">Playing: pubg</p>
              <p className="user-viewers">Watching 1.2k<span className="live-dot"></span></p>
            </div>
          </div>
          <div  className={`user-info ${collapsed ? 'collapsed' : ''}`}>
            <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
            <div className="user-details">
              <p style={{fontSize:"20px"}} className="user-name fw-bolder">vhjvhj</p>
              <p className="user-game">Playing: pubg</p>
              <p className="user-viewers">Watching 1.2k<span className="live-dot"></span></p>
            </div>
          </div>
          <div  className={`user-info ${collapsed ? 'collapsed' : ''}`}>
            <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
            <div className="user-details">
              <p style={{fontSize:"20px"}} className="user-name fw-bolder">vhjvhj</p>
              <p className="user-game">Playing: pubg</p>
              <p className="user-viewers">Watching 1.2k<span className="live-dot"></span></p>
            </div>
          </div>
          <div  className={`user-info ${collapsed ? 'collapsed' : ''}`}>
            <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
            <div className="user-details">
              <p style={{fontSize:"20px"}} className="user-name fw-bolder">vhjvhj</p>
              <p className="user-game">Playing: pubg</p>
              <p className="user-viewers">Watching 1.2k<span className="live-dot"></span></p>
            </div>
          </div>
          <div  className={`user-info ${collapsed ? 'collapsed' : ''}`}>
            <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
            <div className="user-details">
              <p style={{fontSize:"20px"}} className="user-name fw-bolder">vhjvhj</p>
              <p className="user-game">Playing: pubg</p>
              <p className="user-viewers">Watching 1.2k<span className="live-dot"></span></p>
            </div>
          </div>
          <div  className={`user-info ${collapsed ? 'collapsed' : ''}`}>
            <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
            <div className="user-details">
              <p style={{fontSize:"20px"}} className="user-name fw-bolder">vhjvhj</p>
              <p className="user-game">Playing: pubg</p>
              <p className="user-viewers">Watching 1.2k<span className="live-dot"></span></p>
            </div>
          </div>
          <div  className={`user-info ${collapsed ? 'collapsed' : ''}`}>
            <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
            <div className="user-details">
              <p style={{fontSize:"20px"}} className="user-name fw-bolder">vhjvhj</p>
              <p className="user-game">Playing: pubg</p>
              <p className="user-viewers">Watching 1.2k<span className="live-dot"></span></p>
            </div>
          </div>
            <div  className={`user-info ${collapsed ? 'collapsed' : ''}`}>
            <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User" className="user-image" />
            <div className="user-details">
              <p style={{fontSize:"20px"}} className="user-name fw-bolder">vhjvhj</p>
              <p className="user-game">Playing: pubg</p>
              <p className="user-viewers">Watching 1.2k<span className="live-dot"></span></p>
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default Sidebar;
