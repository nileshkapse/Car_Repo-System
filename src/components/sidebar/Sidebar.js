import {useNavigate} from "react-router-dom"
import React from 'react'
import {APP_USER_URL,LANDING_PAGE_URL,FINACE_DETAILS_URLS,FIND_VEHICLE_URLS,DETAILS_VIEW_URLS,UPLOAD_DETAILS_URLS,PROFILE_PAGES_URLS} from "../../constants/URLS"
function Sidebar() {
    const nevigate=useNavigate()
  return (
    <div>  <aside id="sidebar" className="sidebar">

        <ul className="sidebar-nav" id="sidebar-nav">

            <li className="nav-item">
                <a className="nav-link " onClick={()=>{nevigate(LANDING_PAGE_URL)}}>
                    <i className="bi bi-grid"></i>
                    <span>Dashboard</span>
                </a>
            </li>
            {/* <!-- End Dashboard Nav --> */}


            <li className="nav-item">
                <a className="nav-link" onClick={()=>nevigate(FINACE_DETAILS_URLS)}>
                    <i className="bi bi-grid"></i><span data-feather="file"></span>
                    Finance
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={()=>{nevigate(APP_USER_URL)}}>
                    <i className="bi bi-grid"></i><span data-feather="shopping-cart"></span>
                    User
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={()=>{nevigate(FIND_VEHICLE_URLS)}}>
                    <i className="bi bi-grid"></i><span data-feather="users"></span>
                    Find Vehicle
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={()=>{nevigate(UPLOAD_DETAILS_URLS)}}>
                    <i className="bi bi-grid"></i><span data-feather="file-text"></span>
                    Upload Data
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={()=>{nevigate(DETAILS_VIEW_URLS)}}>
                    
                    <i className="bi bi-grid"></i><span data-feather="file-text"></span>
                    Detail View
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={()=>{nevigate(PROFILE_PAGES_URLS)}}>
                    <i className="bi bi-grid"></i><span data-feather="file-text"></span>
                    Profile
                </a>
            </li>
        </ul>

    </aside></div>
  )
}

export default Sidebar