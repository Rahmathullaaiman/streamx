import React from 'react';
import './user.css';

function User() {
  return (
    <div className="user-container">
      <div className="user-infos">
        <img
          src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
          alt="User Avatar"
          className="user-avatar"
        />
        <div className="user-details">
          <h3 className="user-name">User Name</h3>
          <div className="button-container">
            <button className="follow-btn">Follow</button>
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;