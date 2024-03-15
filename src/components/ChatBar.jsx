// ChatBar.js
import React, { useEffect, useState } from 'react';
import { AddchatAPI, GetchatAPI, getallUsersAPI } from '../services/allapi';
import './chat.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ChatBar = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [existinguser,setExistingUser] = useState([])  
  const [token, setToken] = useState("")
  const [userid, setUserid] = useState("")
  const [allusers, setallusers] = useState([])
  const [currentUser,setCurrentUser] = useState([])
  const [livechat,setLivechat] = useState([])
  const[addchat,setAddChat] = useState({
    message:""
  })
  const getusers = async () => {
    const result = await getallUsersAPI()
    setallusers(result.data)
  }

  //console.log(addchat);
useEffect(()=>{
  if(sessionStorage.getItem('existinguser')){
    setExistingUser(JSON.parse(sessionStorage.getItem('existinguser')))
    setToken(existinguser.access)
    setUserid(existinguser.id)
   }
},[addchat])
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
   }, []);
  // }, [allusers]);
   // console.log(token);

const handlesendchat =async()=>{
const {message}  = addchat

const Streamid = 1

console.log(message,Streamid,userid);
if(!message){
  alert(`please fill the  comment`)
}
else{
 
if (token) {
  const reqBody = new FormData()
  reqBody.append("message",message)
  reqBody.append("user",userid)

  const reqHeader = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
  };

  const result = AddchatAPI(Streamid,reqBody,reqHeader)
//   if(result.status == 201){
//     toast.success(`comment added`)
//   }
//   else{
//     toast.error(`Failed to add Comment`)
//   }
// }
// else{
//   alert(`session timed out, please login`)
}
}
}

useEffect(()=>{
  const fetchChat = async () => {
  const  Streamid = 1
   const result =  await GetchatAPI(Streamid); // Fetch all chat
   if(result.status==200){
    
    const chatbox = document.querySelector(".messages-area");
    chatbox.scrollTop = chatbox.scrollHeight;
   }
setLivechat(result.data);
  };
  fetchChat();
},[handlesendchat])


  return (
   <>
      <div className="container">
      <div className="nav-bar">
        <a>Chat</a>
        <div className="close">
          <div className="line one"></div>
          <div className="line two"></div>
        </div>
      </div>
      <div className="messages-area">
      
      {livechat.map((message, index) => (
            <div key={index} className='message one'>
              <h5>{message.username}</h5>
              <h6>{message.message}</h6>
            </div>
          ))}
       
  
  </div>
  
      <div className="sender-area">
        <div className="input-place">
        
            <input
              placeholder="Send a message."
              className="send-input"
              type="text"
              onChange={(e)=>setAddChat({...addchat,message:e.target.value})}
            />
    
          <div className="send" onClick={handlesendchat}>
            <svg
           
              className="send-icon"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style={{ enableBackground: 'new 0 0 512 512' }}
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <path
                    fill="#6B6C7B"
                    d="M481.508,210.336L68.414,38.926c-17.403-7.222-37.064-4.045-51.309,8.287C2.86,59.547-3.098,78.551,1.558,96.808 L38.327,241h180.026c8.284,0,15.001,6.716,15.001,15.001c0,8.284-6.716,15.001-15.001,15.001H38.327L1.558,415.193 c-4.656,18.258,1.301,37.262,15.547,49.595c14.274,12.357,33.937,15.495,51.31,8.287l413.094-171.409 C500.317,293.862,512,276.364,512,256.001C512,235.638,500.317,218.139,481.508,210.336z"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <ToastContainer
position="top-center"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
   </>
  );
};

export default ChatBar;
