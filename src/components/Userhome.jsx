import React, { useEffect, useState } from 'react';
import './userhome.css'
import demovideo from '../Assest/sample2.mp4'
import VideoCarousal from './VideoCarousal';
import Homecards from './Homecards';
import LiveVideo from './LiveVideo';
import { useNavigate } from 'react-router-dom';

const Userhome = ({ sidebarWidth }) => {
const [islive,setislive] = useState(true)
const [isexpanded,setisexpanded] = useState(false)
const [existinguser,setexistinguser] = useState({})
const navigate= useNavigate()
   
useEffect(()=>{
  if(sidebarWidth){
    setisexpanded(true)
  }
  else{
    setisexpanded(false)
  }
})
useEffect(()=>{
  if(sessionStorage.getItem('existinguser')){
    setexistinguser(JSON.parse(sessionStorage.getItem('existinguser')))
  }
},[])
console.log(existinguser);
  return (
 <>
     
     
      
     {!islive? 
      <main style={{width: `calc(100% - ${sidebarWidth}px)`,backgroundColor:'black'}}>
      <section id="onebyone">
                <div className="inner-content">
                  <LiveVideo />
                </div>
               
              </section>
             
          </main>
     :<main style={{ marginLeft: `50px`, width: `calc(100% - ${sidebarWidth}px)` }} >
<section id='one'>
<div className='inner-content' style={{margin:`${sidebarWidth}?50px:10px`}}><VideoCarousal/></div>
<div style={{margin:'-280px 0px 50px 0px'}}><Homecards/></div>

</section>

        
        </main>

     }
     

     
 </>
  );
};

export default Userhome;
