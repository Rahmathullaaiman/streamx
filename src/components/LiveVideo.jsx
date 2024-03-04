import React from 'react'
import './livevideo.css'
import demovideo from '../Assest/sample2.mp4'
import Chatbar from './Chatbar';
function LiveVideo() {
  return (
    <>
   <div className='livediv' >
          <div className='videolivediv'>
            
          <div className='video-div'>
          <video autoPlay loop>
            <source src={demovideo } type="video/mp4"/>  
          </video>
          </div>
            <div className='carousal-userr'>
      <div className='carousal-userimg'>
          <img
                    src="https://yt3.googleusercontent.com/ytc/AIdro_lHI-F3J_SZzMPkmm2mCexlk42guAnijVPUykJ_jw=s900-c-k-c0x00ffffff-no-rj"
                    alt="User"
                    className="user-imagee ms-1 me-2"
                    height={'80px'}
                    width={'80px'}
                  />
                  <h5 className='live-tagein-img'>Live</h5>
          </div>
          <div className='carousal-userdetails'>
          <div >
              <h4>kaztrooo @ 1:30 live</h4>
              <h6>adfvaf|| o7tfouh @b 34t51345</h6>
            <div className='d-flex align-items-center justify-content-center'>  
             <a href="" style={{textDecoration:'none'}} className='text-light'> <h6>pubggg_afena</h6>  </a>   
            <div className='d-flex ms-5' >
           <h6 className='fpsshooter'>FPS</h6>
           <h6 className='fpsshooter'>Shooter</h6>   
        </div>    
             </div>
          </div>
          <div className='d-flex flex-column'>
           <div>
              <button className='m-1 followbtn'>follow</button>
              <button className='m-1 subbtn'>suscribe</button>
           </div>
           <div className='viewersdiv'>
            <h5><i class="fa-solid fa-user"></i> 568</h5>
            <h6>1:10:20</h6>
           </div>
          </div>
          </div> 
            
    </div>
          </div>
      <div><Chatbar/></div>
       </div>
    </>
  )
}

export default LiveVideo