import React, { useState } from 'react';
import './chat.css'; // Import your CSS file for Chatbar styles

function Chatbar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  

  return (
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
  );
}

export default Chatbar;
