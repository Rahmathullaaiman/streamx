import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Chatbar from '../components/Chatbar'
import Video from '../components/Video'

function Page() {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <Chatbar/>
        <Video/>
    </div>
  )
}

export default Page