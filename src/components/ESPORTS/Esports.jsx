import React, { useState } from 'react'
import Navbar from '../Navbar'
import Categories from '../Categories'
import Allesport from './Allesport';


function Esports() {
  
  return (
    <div>
 
 
 <Navbar/>
 <main style={{backgroundColor:'black'}}>   <section id="one">
          <div className="browse-container">
            <div className="categories mt-2">
            <h1 style={{marginLeft:"5%",fontSize:'80px'}}>EXPLORE</h1>

            <h1 style={{marginLeft:"5%"}}>Esports</h1>

              <Categories />
              <Allesport/>
            </div>
          </div>
        </section>
      </main>
    </div>
 
  )
}

export default Esports