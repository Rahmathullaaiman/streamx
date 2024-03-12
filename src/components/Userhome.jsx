import React, { useEffect, useRef, useState } from 'react';
import './CSS/userhome.css'
import './CSS/sidebar.css'
import VideoCarousal from './VideoCarousal';
import Homecards from './Homecards';
import { getallUsersAPI } from '../services/allapi';
import { BASE_URL } from '../services/baseurl';
import { Link } from 'react-router-dom';
import Allcard from './Browsee/Browse/Allcard';
import Allbrowse from './Browsee/Browse/Allbrowse';

const Userhome = () => {
  
  const [existinguser, setexistinguser] = useState([])
  const [allusers, setallusers] = useState([])
  const [existingUserFollowing, setexistingUserFollowing] = useState([])
  const [sidebarWidth, setSidebarWidth] = useState(70);
  const chatbarHeaderRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (sessionStorage.getItem('existinguser')) {
      setexistinguser(JSON.parse(sessionStorage.getItem('existinguser')))
    }
  }, [])

  //console.log(existinguser);
  useEffect(() => {
    const chatbarHeader = chatbarHeaderRef.current;
    const sidebar = sidebarRef.current;

    // sidebar toggle
    const handleChatbarHeaderClick = () => {
      const newWidth = sidebarWidth === 200 ? 70 : 200;
      setSidebarWidth(newWidth);
    };

    chatbarHeader.addEventListener('click', handleChatbarHeaderClick);

    return () => {
      chatbarHeader.removeEventListener('click', handleChatbarHeaderClick);
    };
  }, [sidebarWidth]);


  const getusers = async () => {
    const result = await getallUsersAPI()
    setallusers(result.data)
  }
  useEffect(() => {
    getusers()
    console.log(allusers);
  })

  
  return (
    <>





      <main>
        <section id='one'>
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
            </div>
          </div>
          <div className='usercolumn-2' style={{ paddingLeft: `${sidebarWidth}px`, width: `calc(100% - ${sidebarWidth}px)` }}>
            <div className='inner-content'>
              <VideoCarousal />
           <Homecards/>
            </div>

          </div>
        </section>


      </main>





    </>
  );
};

export default Userhome;
