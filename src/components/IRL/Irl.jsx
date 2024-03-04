import React, { useState } from 'react'
import Navbar from '../Navbar'
import Categories from '../Categories'
import Allirl from './Allirl';


function Irl() {
 
  return (
    <div>
   
  <Navbar/>
   <main style={{backgroundColor:'black'}}>
        <section id="one">
          <div className="browse-container">
            <div className="categories mt-2">
            <h1 style={{marginLeft:"5%",fontSize:'80px'}}>EXPLORE</h1>

            <h1 style={{marginLeft:"5%"}}>IRL</h1>
              <Categories />
              <Allirl/>
            </div>
          </div>
        </section>
      </main>
   
  </div>
  )
}

export default Irl