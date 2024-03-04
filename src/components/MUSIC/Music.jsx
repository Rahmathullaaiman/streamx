import React, { useState } from 'react'
import Navbar from '../Navbar'
import Categories from '../Categories'
import Allmusic from './Allmusic';


function Music() {

  return (
    <div>
<Navbar/>
<main style={{backgroundColor:'black'}}>
        <section id="one">
          <div className="browse-container">
            <div className="categories mt-2">
            <h1 style={{marginLeft:"5%",fontSize:'80px'}}>EXPLORE</h1>

            <h1 style={{marginLeft:"5%"}}>Music</h1>
              <Categories />
              <Allmusic/>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Music