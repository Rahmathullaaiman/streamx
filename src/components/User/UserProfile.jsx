import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Link, useParams } from 'react-router-dom'
import './userprofile.css'
import { Card } from 'react-bootstrap'
import { followUserAPI, getP2PCHATAPI, getallUsersAPI, likeStreamAPI, sendP2PCHATAPI } from '../../services/allapi'
import { BASE_URL } from '../../services/baseurl'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserProfile() {
  const { showuserid } = useParams();
    const[preview,setpreview]=useState("")
    const [token, setToken] = useState("")
    const [existinguser,setexistinguser] = useState({})
    const [allusers, setallusers] = useState([])
    const [currentUser,setCurrentUser] = useState([])
    const [Existing_username, setExisting_username] = useState("")
    const [livechat,setLivechat] = useState([])
    const rightAlignedMessageClass = 'right-aligned-message';
      const [takemessage,setTakeMessage] = useState({
        message:""
      })
    const userid = showuserid
    useEffect(()=>{
      if(sessionStorage.getItem('existinguser')){
        setexistinguser(JSON.parse(sessionStorage.getItem('existinguser')))
       }
    },[])  

    useEffect(() => {
      if (existinguser.access) {
        setToken(existinguser.access);
        setExisting_username(existinguser.username);
      }
    }, [existinguser]);
console.log(token);
    const getusers = async () => {
      const result = await getallUsersAPI()
      setallusers(result.data)
    }

    useEffect(() => {
      getusers();
    }, []);

    useEffect(() => {
      // Find the user with the specified userid
      const user = allusers.find((user) => user.id == userid);
 
      setCurrentUser(user || {}); 
    }, [allusers, userid]); 
    
 // console.log(currentUser);

 
// follow
  const handlefollow = async()=>{
  
    if(token) { 
    const reqHeader = {
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
  
    const result = await followUserAPI(userid,reqHeader)
    if(result.status == 201){
      toast.success('following')
    }
    else if(result.status == 200){
      toast.warning('unfollowed')
    }
    else{
      toast.error('something went wrong')
    }
  }
    else {
      console.error('Session timed out ,please login');
    }
  }

  // chat

// send 
const handlesend = async()=>{
const {message} = takemessage

if(!message){
  toast.warning(`Nothing to Send`)
}
else{
  const reqBody = new FormData()
  reqBody.append("message",message)
  
  if(token){
    const reqHeader = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
  };
  const result = await sendP2PCHATAPI(userid,reqBody,reqHeader)
   if(result.status==201){
    toast.success(`success`)
    
   }
   else{
    toast.error(`failed`)
   }
  }
  else{
    toast.error(`Session timed out,Please Login`)
  }
}
}

useEffect(() => {
  const fetchChat = async () => {
    if (token) {

      const reqHeader = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      };
      const result = await getP2PCHATAPI(userid, reqHeader);
      if(result.status==200){
        
        const chatbox = document.querySelector(".chatbox");
        chatbox.scrollTop = chatbox.scrollHeight;
      }
      setLivechat(result.data || []);
    }
    else{
     
    }
  };
  fetchChat();
}, [handlesend]);
  return (
    <>
   <Navbar/>
    <div className='userpage'>
        <div className='dashboard'>
            <div className='dashtitle hr'>
                <h3>DASHBOARD</h3>
                <hr />
            </div>
 
          
            <div className='userprofile'>
              
                   




<ul  class="nav nav-pills">
		
			<li><a href="#1b" data-toggle="tab">Streams</a>
			</li>
			<li><a href="#2b" data-toggle="tab">Chats</a>
			</li>
  	
		</ul>

			<div class="tab-content clearfix ">
			  <div class="tab-pane active tab-1" id="1b">
         
        <Card className="card2">
        <Card.Img variant="top" className='cardimg2' src="https://img.freepik.com/free-photo/rise-humanoids-with-advanced-headgear-generative-ai_8829-2877.jpg?t=st=1709407456~exp=1709411056~hmac=7adbaa5090b05e42b4ca18526547a43004d31360ed6393dd5c64f86fd8832268&w=740" alt='ERROR 404'/>
        <Card.Body className='cardbody2'>
        <h5>live uSBSEFIHBRGB</h5>
        <div className='d-flex' >
           <h6>FPS</h6>
           <h6>Shooter</h6>   
        </div>    
        </Card.Body>
      </Card>

				</div>
			
        <div class="tab-pane tab-2" id="2b">
   <div className='chatbosx'>
          
      <div className='chatbox'>
      {livechat.map((message, index) => (
  <div key={index} className={`messages ${message.sender_username === Existing_username ? rightAlignedMessageClass : ''}`}>
    <div className='messages-content'>
      <h5 className='sender'>{message.sender_username === Existing_username ? 'me' : message.sender_username}:</h5>
      <h6>{message.message}</h6>
    </div>
  </div>
))}
           
      </div>
          <div className="message-box">
            <textarea type="text"
             className="message-input"
              placeholder="Type message..."
              value={takemessage.message}
              onChange={(e)=>setTakeMessage({...takemessage,message:e.target.value})}
              ></textarea>
            <button type="submit" className="message-submit" onClick={handlesend}>Send</button>
          </div>
   </div>
      </div>
				</div>
  
	

	
          
                    <div className='startlive'>
 
 
                    </div>
            </div>  
        </div>

        <div>
        <div className='profile'>

                <div className='profileimg'> 
<div class="profileaddimage">
<img src={`${BASE_URL}/${currentUser.profile_picture}`} alt=""/>

</div>
                  
                </div>
                <div className='mt-5'>
                  <h2>{currentUser.username}</h2>
                  <div className='d-flex'>
                      <h6>{currentUser.first_name}</h6>
                      
                      <h6>{currentUser.last_name}</h6>
                  </div>
                  <h6>{currentUser.bio}</h6>
                </div>

          
                <div> <button className='m-1 followbtn' onClick={handlefollow}>follow</button>
             <Link to={`/payment/${userid}`}><button className='m-1 subbtn'>suscribe</button></Link></div>
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
  )
}

export default UserProfile