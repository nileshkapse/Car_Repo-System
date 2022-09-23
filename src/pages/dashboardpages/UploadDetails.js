import React from 'react'
import {useNavigate} from "react-router-dom"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

function UploadDetails() {
    const nevigate=useNavigate()
  return (
    <div><main id="main" className='main'>Upload Details Niles kapse </main><Navbar/><Sidebar/></div>
  )
}

export default UploadDetails