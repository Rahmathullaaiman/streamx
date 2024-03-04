import React from 'react'
import './dashboard.css'
import Navbar from '../../components/Navbar/Navbar'

function Dashboard() {
  return (
    <>
   <Navbar/>
    <div className='userpage'>
        <div className='dashboard'>
            <div className='dashtitle hr'>
                <h3>DASHBOARD</h3>
                <hr />
            </div>
            <div className='livestream'>
                <div className='livestreamtitle'>
                    <h3>Start Your Live Stream From Here</h3>
                    </div>
                    <div className='startlive'>
                        <h1>+</h1>
                        <span>start live stream</span>
                    </div>
            </div>
        </div>

        <div>
            <div className='profile'>
                <div className='profileimg'> 
                    <img src="https://img.freepik.com/free-photo/rise-humanoids-with-advanced-headgear-generative-ai_8829-2877.jpg?t=st=1709407456~exp=1709411056~hmac=7adbaa5090b05e42b4ca18526547a43004d31360ed6393dd5c64f86fd8832268&w=740" alt='ERROR 404'/>
                </div>
                <div>
                    <h3>sayipp op</h3>
                    <h5>channel</h5>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard