import React from "react";
import stick from "../../Assest/stick.png";
import mic from "../../Assest/mic.png";
import headphones from "../../Assest/headphones.png";
import trophy from "../../Assest/trophy.png";
import palette from "../../Assest/palette.png";

import { Link } from "react-router-dom";

function Categories() {
  return (
    <div>
           <div className="maindiv">
  <div className="div1 ">
     <Link  className="link" to={'/game'}>
          <div className="div2 ">
            <p className="text1">Games</p>
          </div>
          <div className='div3'   style={{
            position:'absolute',
                    width:'4.2rem',
                    height:'3rem',
                 
                  
                    marginRight:'-100px'
    
                   }}>
          <img className="icon" src={stick} alt=""
                 style={{
                  position:'absolute',
                          width:'4.2rem',
                          height:'3rem',
                          top:'-3.5rem',
                                               transform: 'rotate(-20deg)',
                          marginLeft:'130px'
          
                         }}/>
          </div>
      </Link>
      </div>
     
      <div className="div1 ">
     <Link className="link" to={'/irl'}>
        <div className="div2 ">
          <p className="text1">IRL</p>
        </div>
        <div className='div3'   style={{
          position:'absolute',
                  width:'4.2rem',
                  height:'3rem',
                  top:'0rem',
                 
                  marginRight:'-100px'
  
                 }}>
        <img className="icon" src={mic} alt=""
               style={{
                position:'absolute',
                        width:'3rem',
                        height:'5rem',
                        transform: 'rotate(-5deg)',
                        marginLeft:'130px',
                        top:'-1.5rem'
                       }}/>
        </div>
      </Link>
    </div>
   
    <div className="div1 ">
   <Link className="link" to={'/music'}>
        <div className="div2 ">
          <p className="text1">Music</p>
        </div>
        <div className='div3'   style={{
          position:'absolute',
                  width:'4.2rem',
                  height:'3rem',
                  top:'0rem',
                 
                  marginRight:'-100px'
  
                 }}>
        <img className="icon" src={headphones} alt=""
               style={{
                position:'absolute',
                        width:'4.5rem',
                        height:'4rem',
                        transform: 'rotate(15deg)',
                        marginLeft:'120px',
                        top:'-1rem'
                       }}/>
        </div>
    </Link>
    </div>
   
    <div className="div1 ">
    <Link className="link" to={'/esports'}>
        <div className="div2 ">
          <p className="text1">Esports</p>
        </div>
        <div className='div3'   style={{
          position:'absolute',
                  width:'4.2rem',
                  height:'3rem',
                  top:'0rem',
                 
                  marginRight:'-100px'
  
                 }}>
        <img className="icon" src={trophy} alt=""
               style={{
                position:'absolute',
                        width:'3rem',
                        height:'4.5rem',
                        transform: 'rotate(0deg)',
                        marginLeft:'130px',
                        top:'-1.4rem'
                       }}/>
        </div>
     </Link>
    </div>
   
    <div className="div1 ">
   <Link className="link" to={'/creative'}>
        <div className="div2 ">
          <p className="text1">Creative</p>
        </div>
        <div className='div3'   style={{
          position:'absolute',
                  width:'4.2rem',
                  height:'3rem',
                  top:'0rem',
                 
                  marginRight:'-100px'
  
                 }}>
        <img className="icon" src={palette} alt=""
               style={{
                position:'absolute',
                        width:'4rem',
                        height:'4.5rem',
                        transform: 'rotate(0deg)',
                        marginLeft:'140px',
                        top:'-1.4rem'
                       }}/>
        </div>
    </Link>
    </div>
</div>

    </div>
  )
}

export default Categories