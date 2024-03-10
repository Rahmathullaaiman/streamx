import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Userhome from '../../components/Userhome';
import './landingpage.css';

function LandingPage() {


  return (
    <>
      <Navbar />
      <div className='landingpagehome'>
          <Userhome/>
      </div>
    </>
  );
}

export default LandingPage;
