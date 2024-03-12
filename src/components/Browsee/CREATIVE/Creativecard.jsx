import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './allcreative.css'
import { getCategoryAPI } from '../../../services/allapi';

function Creativecard() {
   const[creative,setCreative] = useState([])


   const Getcategory =async()=>{
   const id = "14";
      const result = await getCategoryAPI(id)
      if(result.status==200){
          // console.log(result);
         setCreative(result.data)
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
    <Row>
   {creative.map((item, index) => (
          <Col>
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
                <h5 style={{fontSize:"15px"}}>430K  <span className='ms-1' style={{fontSize:"15px"}}>Views</span></h5>
                <div className='d-flex title mt-1' >
     <h6>FPS</h6>
     <h6>Shooter</h6>   
  </div>    
               
        
              </Card.Body>
            </Card>
          </Col>
        ))}
   </Row>
</div>

    )
}

export default Creativecard