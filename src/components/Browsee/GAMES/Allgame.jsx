import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Gamecard from './Gamecard'

function Allgame() {
  return (
    <div>
        <Row>
            <Col>
            <Gamecard/>
            </Col>
        </Row>
    </div>
  )
}

export default Allgame