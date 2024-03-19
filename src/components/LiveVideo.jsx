import React, { useEffect, useRef, useState } from 'react';
import '../components/CSS/livevideo.css'
import '../components/CSS/sidebar.css'
import demovideo from '../Assest/sample2.mp4'
import Navbar from './Navbar/Navbar';
import { GetLivestremDetailsAPI, followUserAPI, getallUsersAPI, likeStreamAPI } from '../services/allapi';
import { Link } from 'react-router-dom';
import ChatBar from './ChatBar';
import LiveVIDEOBOX from './LiveVIDEOBOX';
import { toast } from 'react-toastify';
import { BASE_URL } from '../services/baseurl';


function LiveVideo() {
  const [islive,setislive] = useState(true)
const [existinguser,setexistinguser] = useState({})
const [allusers, setallusers] = useState([])
const [token, setToken] = useState("")
const [streamid,setstreamid] = useState('')
const [sidebarWidth, setSidebarWidth] = useState(230);
const chatbarHeaderRef = useRef(null);
const sidebarRef = useRef(null);
const [collapsed, setCollapsed] = useState(false);
const [liveStreamdetails,setLivestreamDetails] = useState([])

// const toggleCollapse = () => {
//   setCollapsed(!collapsed);
// };
// useEffect(() => {
//   const chatbarHeader = chatbarHeaderRef.current;
//   const sidebar = sidebarRef.current;

//   const handleChatbarHeaderClick = () => {
//     const newWidth = sidebarWidth === 250 ? 70 : 250;
//     setSidebarWidth(newWidth);
//   };

//   chatbarHeader.addEventListener('click', handleChatbarHeaderClick);

//   return () => {
//     chatbarHeader.removeEventListener('click', handleChatbarHeaderClick);
//   };
// }, [sidebarWidth]);

useEffect(() => {
  if (sessionStorage.getItem('existinguser')) {
    setexistinguser(JSON.parse(sessionStorage.getItem('existinguser')))
   // console.log(existinguser);
    setToken(existinguser.access);
  }
}, []);

const handleLike = async()=>{
  const id = liveStreamdetails.id
  if(token) { 
  const reqHeader = {
    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`
  }

  const result = await likeStreamAPI(id,reqHeader)
  if(result.status == 201){
    alert('stream liked')
  }
  else if(result.status == 200){
    alert('stream unliked')
  }
  else{
    alert('something went wrong')
  }
}
  else {
    console.error('Token is empty!');
  }
}

const handlefollow = async()=>{
  const id = existinguser.id
  if(token) { 
  const reqHeader = {
    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`
  }

  const result = await followUserAPI(id,reqHeader)
  if(result.status == 201){
    alert('following')
  }
  else if(result.status == 200){
    alert('unfollowed')
  }
  else{
    alert('something went wrong')
  }
}
  else {
    console.error('Token is empty!');
  }
}

const getliveStreamDetails = async () => {
  if (token) {
    const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };
    const result = await GetLivestremDetailsAPI(reqHeader)
    if(result.status == 200){
      setLivestreamDetails(result.data)
      setstreamid(liveStreamdetails.id)
    }
    else{
      console.log(result);
    }
  }
}
const getusers = async () => {
  const result = await getallUsersAPI()
  setallusers(result.data)
}
useEffect(() => {
  getusers()

  // console.log(allusers);
},[])
useEffect(()=>{
  getliveStreamDetails()
},[getusers])
  return (
    <>
 <main >
  <Navbar/>
<section id='one'>
<div className='column-1'>
<div className="sidebar" ref={sidebarRef} style={{ width: `${sidebarWidth}px`,backgroundColor:'#343541' }}>
         <div>
         <div className="chatbar-header text-center" ref={chatbarHeaderRef}>
          <h3 className='text-light'>FOR YOU</h3>
                {/* <p >
               {sidebarWidth == 250 ? <i className="fas fa-chevron-left text-light ms-3 fs-4"></i>
                  :
                  <i className="fas fa-chevron-left text-light ms-1 fs-4"></i>}
                </p> */}
              </div>
         </div>
         <div className="sidebar-content">
              {allusers.map((user) => (
                  <div key={user.id} className={`user-info`}>
                    <img
                      src={user.profile_picture?`${BASE_URL}/${user.profile_picture}`:`https://thumbs.dreamstime.com/b/profile-placeholder-image-gray-silhouette-no-photo-person-avatar-default-pic-used-web-design-176391111.jpg`} 
                      alt='ERROR 404' 
                      className="user-image"
                    />
                   
                      <div className="user-details">

                     <Link to={`/userprofile/${user.id}`} style={{textDecoration:'none'}}><p style={{ fontSize: "15px" }} className="user-name fw-bolder">{user.username}</p></Link>
                      </div>
                   
    </div>
                ))}


              </div>
        </div>
</div>
<div className='column-2' >
  
<div className='livediv' >
          <div className='videolivediv'>
            
          <div className='video-div'>
      <LiveVIDEOBOX/>
          </div>
            <div className='carousal-userr'>
      <div className='carousal-userimg'>
          <img
                    src={liveStreamdetails.profile_picture}
                    alt="User"
                    className="user-imagee ms-1 me-2"
                    height={'80px'}
                    width={'80px'}
                  />
                  <h5 className='live-tagein-img'>Live</h5>
                  <h5>{liveStreamdetails.username}</h5>
          </div>
          <div className='carousal-userdetails' >
          <div className='livestrdeatils'>
              <h4>{liveStreamdetails.title}</h4>
              <h6>{liveStreamdetails.description}</h6>
            <div className='d-flex align-items-center justify-content-center'>  
             <a href="" style={{textDecoration:'none'}} className='text-light'> <h6>pubggg_afena</h6>  </a>   
            <div className='ms-5' >
           <h6 className='fpsshooter'>FPS</h6>
           <h6 className='fpsshooter'>Shooter</h6>   
        </div>    
             </div>
          </div>
          <div className='followsubdiv'>
           <div className='likefollwdiv'>
            <button className='btn likebtn' onClick={handleLike}><i class="fa-regular fa-heart"></i></button>
           <Link> <button className='m-1 followbtn'  onClick={handlefollow}>follow</button></Link>
             <Link to={'/dashboard'}><button className='m-1 subbtn'>suscribe</button></Link>
           </div>
           
          </div>
          </div> 
            
    </div>
          </div>
   
       </div>
</div>

<div className='column-2' >

<div className={`chatbar ${collapsed ? 'collapsed' : ''}`}>
    
     <ChatBar streamId={streamid}/>
     
    </div>
  </div>
</section>

        
        </main>


 
    </>
  )
}

export default LiveVideo