import React from 'react'
import Card from 'react-bootstrap/Card';
import './all.css';
import { Row,Col } from 'react-bootstrap';
import Allcreative from '../CREATIVE/Allcreative'
import Allesport from '../ESPORTS/Allesport'
import Allgame from '../GAMES/Allgame'
import Allirl from '../IRL/Allirl'
import Allmusic from '../MUSIC/Allmusic'


function Allbrowse() {
  return (
    <>



<div>
  <Allcreative/>   
    </div>
<div>
  <Allesport/>
</div>
<div>
  <Allgame/>
</div>
<div>
<Allirl/>
</div>
<div>
<Allmusic/>
</div>
    </>
  )
}

export default Allbrowse