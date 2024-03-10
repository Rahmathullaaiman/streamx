// ChatBar.js

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { getallUsersAPI } from '../../services/allapi';

const ChatBar = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [existinguser,setExistingUser] = useState([])  
  const [token, setToken] = useState("")
  const [allusers, setallusers] = useState([])
  const [currentUser,setCurrentUser] = useState([])

  const getusers = async () => {
    const result = await getallUsersAPI()
    setallusers(result.data)
  }
  const searchid = existinguser.id

  useEffect(() => {
    const fetchData = async () => {
      await getusers(); // Fetch all users
      const igotuser = allusers.find((user) => user.id === searchid);
      if (igotuser) {
        setCurrentUser(igotuser);
      }
    };
  
    fetchData();
  // }, []);
 }, [searchid, allusers]);
    console.log(currentUser);

  const socket = io('http://localhost:3000'); 
  useEffect(() => {
    // Event listener for incoming messages
    socket.on('chat message', (message) => {
      // Update messages state with the new message
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      // Disconnect the socket when the component unmounts
      socket.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    // Emit a message event to the server
    socket.emit('chat message', {
      user: currentUser.username,
      message: newMessage,
    });

    // Clear the input field
    setNewMessage('');
  };

  return (
    <div className="chat-bar">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <span className="username">{msg.user}: </span>
            {msg.message}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBar;
