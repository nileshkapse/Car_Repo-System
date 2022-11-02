import React from 'react'
import {useNavigate} from "react-router-dom"
import FinanceAdd from '../../components/FinaceDetails/FinanceAdd'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import FinaceDetailsTable from '../../components/DataTable/FinaceDetailsTable'

function Finacedetails() {
    const nevigate=useNavigate()

    
  return (
    <div><main id="main" className="main"><div class="col-lg-12">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
          <div class="card">
            <div class="card-body ">
              <h1 class="card-title">Finace Details</h1>

              <FinaceDetailsTable />
      <FinanceAdd/>
            </div>
          </div></div></main><Sidebar/>
    <Navbar/></div>
    
  )
}

export default Finacedetails