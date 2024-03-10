import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../../Navbar/Navbar'
import Categories from '../Categories'
import Allesport from './Allesport';
import { getallUsersAPI } from '../../../services/allapi';
import { BASE_URL } from '../../../services/baseurl';
import { Link } from 'react-router-dom';


function Esports() {
  const [sidebarWidth, setSidebarWidth] = useState(70);
  const chatbarHeaderRef = useRef(null);
  const sidebarRef = useRef(null);
  const [existinguser, setexistinguser] = useState([])
  const [allusers, setallusers] = useState([])
  const [existingUserFollowing, setexistingUserFollowing] = useState([])
 
  useEffect(() => {
    if (sessionStorage.getItem('existinguser')) {
      setexistinguser(JSON.parse(sessionStorage.getItem('existinguser')))
    }
  }, [])

  const getusers = async () => {
    const result = await getallUsersAPI()
    setallusers(result.data)
  }
  useEffect(() => {
    getusers()
    console.log(allusers);
  })
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
    <div>
    <Navbar/>
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
              {allusers.map((user) => (
                  <div key={user.id} className={`user-info`}>
                    <img
                      src={user.profile_picture?`${BASE_URL}/${user.profile_picture}`:`https://thumbs.dreamstime.com/b/profile-placeholder-image-gray-silhouette-no-photo-person-avatar-default-pic-used-web-design-176391111.jpg`} 
                      alt='ERROR 404' 
                      className="user-image"
                    />
                    {sidebarWidth === 200 && (
                      <div className="user-details">

                     <Link to={`/userprofile/${user.id}`} style={{textDecoration:'none'}}><p style={{ fontSize: "15px" }} className="user-name fw-bolder">{user.username}</p></Link>
                      </div>
                    )}
    </div>
                ))}


              </div> 
               <div className="sidebar-content">
              {allusers.map((user) => (
                  <div key={user.id} className={`user-info`}>
                    <img
                      src={user.profile_picture?`${BASE_URL}/${user.profile_picture}`:`https://thumbs.dreamstime.com/b/profile-placeholder-image-gray-silhouette-no-photo-person-avatar-default-pic-used-web-design-176391111.jpg`} 
                      alt='ERROR 404' 
                      className="user-image"
                    />
                    {sidebarWidth === 200 && (
                      <div className="user-details">

                     <Link to={`/userprofile/${user.id}`} style={{textDecoration:'none'}}><p style={{ fontSize: "15px" }} className="user-name fw-bolder">{user.username}</p></Link>
                      </div>
                    )}
    </div>
                ))}


              </div>
         </div>
 </div>
      
           <div className="browse-box2 column-2" style={{ paddingLeft:`${sidebarWidth}px`,width: `calc(100% - ${sidebarWidth}px)` }}>
             <div className="categories mt-2">
             <h1 style={{marginLeft:"5%",fontSize:'80px',color:'white'}}>EXPLORE</h1>
 
 <h1 style={{marginLeft:"5%",color:'white'}}>Esports</h1>
 
               <Categories />
               <Allesport/>
             </div>
           </div>
      
  
   </div>
 
  )
}

export default Esports