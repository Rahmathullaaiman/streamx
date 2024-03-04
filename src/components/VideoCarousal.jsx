import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './CSS/videocarosual.css'
import demovideo from '../Assest/background_video.mp4'
import sample2 from '../Assest/sample2.mp4'
import sample3 from '../Assest/sample3.mp4'

function VideoCarousal() {
  return (
    <>
<div className='main-div'>
     <Carousel className='carousal'>
          <Carousel.Item>
          <div className='Carousel-item'>
          <video autoPlay loop style={{
              height:'100%',
              width:'100%'
             
            }}>
    <source src={demovideo } type="video/mp4"/>  
  </video>

  </div>
          </Carousel.Item>

          <Carousel.Item>
          <div className='Carousel-item'>
          <video autoPlay loop style={{
              height:'100%',
              width:'100%'
            
            }}>
    <source src={sample2 } type="video/mp4"/>  
  </video>
  
  </div>
          </Carousel.Item> 

          <Carousel.Item >
         <div className='Carousel-item'>
            <video autoPlay loop style={{
                height:'100%',
                width:'100%'
              
              }}>
      <source src={sample3} type="video/mp4"/>  
    </video>
    {/* <div className='carousal-user'>
      <div>
          <img
                    src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                    alt="User"
                    className="user-image"
                  />
          </div>
          <div>
            <h5>live uSBSEFIHBRGB</h5>
             <h6>BLINDD</h6>
             <h6>pubggg</h6>    
          </div>   
    </div> */}
         </div>
          </Carousel.Item>
        </Carousel>
</div>
    </>
  )
}

export default VideoCarousal