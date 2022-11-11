import { useNavigate } from "react-router-dom";
import React from "react";
import {
  APP_USER_URL,
  LANDING_PAGE_URL,
  FINACE_DETAILS_URLS,
  FIND_VEHICLE_URLS,
  DETAILS_VIEW_URLS,
  UPLOAD_DETAILS_URLS,
  PROFILE_PAGES_URLS,
} from "../../constants/URLS";

import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const nevigate = useNavigate();

  const [pageName, setPageName] = React.useState("");

  const location = useLocation();
  React.useEffect(() => {
    // if (location.pathname === "/") setPageName("Dashboard");
    // else if (location.pathname === "/") setPageName("Dashboard");
    // else if (location.pathname === "/appuser") setPageName("App User");
    // else if (location.pathname === "/tables") setPageName("Tables");
    // else if (location.pathname === "/profile") setPageName("Profile");
    // else setPageName("")
  setPageName(location.pathname)

});

  return (
    <div>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item" >
            <a className="nav-link nkcolor" style={{background:pageName === "/" ? "#f2e129" : null}} onClick={() => {
                nevigate(LANDING_PAGE_URL);
              }}
            >
              <i className="bi nkcolor bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li>
          {/* <!-- End Dashboard Nav --> */}

          <li className="nav-item ">
            <a
              className="nav-link" style={{background:pageName === "/finacedetails" ? "#f2e129" : null}}
              onClick={() => nevigate(FINACE_DETAILS_URLS)}
            >
              <i className="bi bi-currency-rupee"></i>
              <span data-feather="file"></span>
              Finance
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link" style={{background:pageName === "/appuser" ? "#f2e129" : null}}
              onClick={() => {
                nevigate(APP_USER_URL);
              }}
            >
              <i className="bi bi-person-lines-fill"></i>
              <span data-feather="shopping-cart"></span>
              App User
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link" style={{background:pageName === "/findvehicle" ? "#f2e129" : null}}
              onClick={() => {
                nevigate(FIND_VEHICLE_URLS);
              }}
            >
              <i className="bi bi-search"></i>
              <span data-feather="users"></span>
              Find Vehicle
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link" style={{background:pageName === "/upload_details" ? "#f2e129" : null}}
              onClick={() => {
                nevigate(UPLOAD_DETAILS_URLS);
              }}
            >
              <i className="bi bi-cloud-upload"></i>
              <span data-feather="file-text"></span>
              Upload Data
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link" style={{background:pageName === "/detailsView" ? "#f2e129" : null}}
              onClick={() => {
                nevigate(DETAILS_VIEW_URLS);
              }}
            >
              <i className="bi bi-view-list"></i>
              <span data-feather="file-text"></span>
              Detail View
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link" style={{background:pageName === "/profile_page" ? "#f2e129" : null}}
              onClick={() => {
                nevigate(PROFILE_PAGES_URLS);
              }}
            >
              <i className="bi bi-people"></i>
              <span data-feather="file-text"></span>
              Profile
            </a>
            </li>
        </ul>

      </aside>
      
      
    </div>
  );
}

export default Sidebar;
