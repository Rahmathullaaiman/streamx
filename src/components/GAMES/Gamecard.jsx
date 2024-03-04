import React from 'react'
import { Row,Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import './allgame.css'


function Gamecard() {
  return (
    <div className='gamepad'>
        <Row>
            <Col md={2}>
            <Card className="card2">
      <Card.Img variant="top" className='cardimg2' src="https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg" alt='no image'/>
      <Card.Body className='cardbody2'>
      <h5>Game</h5>
      <h5 style={{fontSize:"15px"}}>430K  <span className='ms-1' style={{fontSize:"15px"}}>Views</span></h5>
      <div className='d-flex title mt-1' >
         <h6>FPS</h6>
         <h6>Shooter</h6>   
         
      </div>    
      </Card.Body>
    </Card>
            </Col>
            <Col md={2}>
            <Card className="card2">
      <Card.Img variant="top" className='cardimg2' src="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-188x250.jpg" alt='no image'/>
      <Card.Body className='cardbody2'>
      <h5>Game</h5>
      <h5 style={{fontSize:"15px"}}>430K  <span className='ms-1' style={{fontSize:"15px"}}>Views</span></h5>
      <div className='d-flex title mt-1' >
         <h6>FPS</h6>
         <h6>Shooter</h6>   
         
      </div>    
      </Card.Body>
    </Card>
            </Col>  <Col md={2}>
            <Card className="card2">
      <Card.Img variant="top" className='cardimg2' src="https://static-cdn.jtvnw.net/ttv-boxart/29595-188x250.jpg" alt='no image'/>
      <Card.Body className='cardbody2'>
      <h5>Game</h5>
      <h5 style={{fontSize:"15px"}}>430K  <span className='ms-1' style={{fontSize:"15px"}}>Views</span></h5>
      <div className='d-flex title mt-1' >
         <h6>FPS</h6>
         <h6>Shooter</h6>   
         
      </div>    
      </Card.Body>
    </Card>
            </Col>  <Col md={2}>
            <Card className="card2">
      <Card.Img variant="top" className='cardimg2' src="https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg" alt='no image'/>
      <Card.Body className='cardbody2'>
      <h5>Game</h5>
      <h5 style={{fontSize:"15px"}}>430K  <span className='ms-1' style={{fontSize:"15px"}}>Views</span></h5>
      <div className='d-flex title mt-1' >
         <h6>FPS</h6>
         <h6>Shooter</h6>   
         
      </div>    
      </Card.Body>
    </Card>
            </Col>  <Col md={2}>
            <Card className="card2">
      <Card.Img variant="top" className='cardimg2' src="https://static-cdn.jtvnw.net/ttv-boxart/32399-188x250.jpg" alt='no image'/>
      <Card.Body className='cardbody2'>
      <h5>Game</h5>
      <h5 style={{fontSize:"15px"}}>430K  <span className='ms-1' style={{fontSize:"15px"}}>Views</span></h5>
      <div className='d-flex title mt-1' >
         <h6>FPS</h6>
         <h6>Shooter</h6>   
         
      </div>    
      </Card.Body>
    </Card>
            </Col>  <Col md={2}>
            <Card className="card2">
      <Card.Img variant="top" className='cardimg2' src="https://static-cdn.jtvnw.net/ttv-boxart/33214-188x250.jpg" alt='no image'/>
      <Card.Body className='cardbody2'>
      <h5>Game</h5>
      <h5 style={{fontSize:"15px"}}>430K  <span className='ms-1' style={{fontSize:"15px"}}>Views</span></h5>
      <div className='d-flex title mt-1' >
         <h6>FPS</h6>
         <h6>Shooter</h6>   
         
      </div>    
      </Card.Body>
    </Card>
            </Col>  
        </Row>
    </div>
  )
}

export default Gamecard