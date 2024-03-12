import React, { useEffect, useState } from 'react'
import { Col,Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import './allirl.css'
import { getCategoryAPI } from '../../../services/allapi';



function Irlcard() {
   const[irl,setirl] = useState([])


   const Getcategory =async()=>{
   const id = "11";
      const result = await getCategoryAPI(id)
      if(result.status==200){
          // console.log(result);
         setirl(result.data)
      }
      else{
         console.log(result);
      }
   }
   useEffect(()=>{
      Getcategory()
   },[])
  return (
<div className='card-holder2'>

   {irl.map((item, index) => (
        
            <Card key={index} className='card2' style={{ width: '180px' }}>
              <Card.Img
                variant='top'
                className='cardimg2'
                src={item.tumbnile} 
                alt='no image'
                height={'140px'}
                width={'300px'}
              />
              <Card.Body className='cardbody2'>
                <h5>{item.title}</h5>
                <h5 style={{ fontSize: '15px' }}>
                 500
                  <span className='ms-1' style={{ fontSize: '15px' }}>
                    Views
                  </span>
                </h5>
                <div className='d-flex title mt-1' >
     <h6>FPS</h6>
     <h6>Shooter</h6>   
  </div>    
               
        
              </Card.Body>
            </Card>
       
        ))}
        
  
</div>
  )
}

export default Irlcard