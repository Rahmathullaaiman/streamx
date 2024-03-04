import React from 'react'
import Musiccard from './Musiccard'
import { Row,Col } from 'react-bootstrap'


function Allmusic() {
  return (
    <div>
        <Row>
            <Col>
            <Musiccard/>
            </Col>
        </Row>
    </div>
  )
}

export default Allmusic