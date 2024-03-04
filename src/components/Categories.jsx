import React from 'react'
import './browse.css';

function Categories() {
  return (
    <div>

<div>
             <ul className="categories-list">
             <li><a href="game"><button style={{fontSize:"20px"}} className='fw-bold'>Games</button></a></li>
             <li><a href="irl"><button style={{fontSize:"20px"}} className='fw-bold'>IRL</button></a></li>
             <li><a href="music"><button style={{fontSize:"20px"}} className='fw-bold'>Music</button></a></li>
             <li><a href="esports"><button style={{fontSize:"20px"}} className='fw-bold'>Esports</button></a></li>
             <li><a href="creative"><button style={{fontSize:"20px"}} className='fw-bold'>Creative</button></a></li>

               {/* You can add more buttons as needed */}
             </ul>
           </div>

    </div>
  )
}

export default Categories