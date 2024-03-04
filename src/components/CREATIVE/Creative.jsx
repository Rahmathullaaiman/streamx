import React, { useState } from 'react'
import Navbar from '../Navbar'
import Categories from '../Categories'
import Allcreative from './Allcreative';


function Creative() {
 
  return (
    <div>
   <Navbar/>
    
      <main style={{backgroundColor:'black'}}>
        <section id="one">
          <div className="browse-container">
            <div className="categories mt-2">
            <h1 style={{marginLeft:"5%",fontSize:'80px'}}>EXPLORE</h1>

            <h1 style={{marginLeft:"5%"}}>Creative</h1>

              <Categories />
              <Allcreative/>
            </div>
          </div>
        </section>
      </main>
 
  </div>
  )
}

export default Creative