import { useState } from 'react'
import './App.css'

import Sidebar from './component/sidebar'
import Header from './component/Header'
import Bottom from './component/bottom'
import Details from './component/Details'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
    
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <div className="second-side px-3">
      <Header/>
      <Bottom/>
      <Details/>
      </div>
    </div>
    // <>
    //  <Header/>
    //  <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    // </>
  )
}

export default App