import { useNavigate } from "react-router-dom";
import React from "react";
import {
  LOGIN_PAGES_URLS,
  PROFILE_PAGES_URLS,
  LANDING_PAGE_URL,
} from "../../constants/URLS";

function Navbar() {
  const nevigate = useNavigate();
  const select = (el, all = false) => {
    console.log("select click");
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };
  const on = (type, el, listener, all = false) => {
    console.log("on click");
    if (all) {
      select(el, all).forEach((e) => e.addEventListener(type, listener));
    } else {
      select(el, all).addEventListener(type, listener);
    }
  };

  return (
    <div>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
        ></link>
        <div className="d-flex justify-content-between">
          <a
            href="javascript:void(0)"
            onClick={() => {
              nevigate(LANDING_PAGE_URL);
            }}
            className="logo d-flex align-items-center"
          >
            <img src={process.env.PUBLIC_URL + "/static/5Techg2.png"} alt="" />
            {/* <span className="d-none d-lg-block">5TechG</span> */}
          </a>
        </div>
        <i
          className="bi bi-list toggle-sidebar-btn"
          onClick={() => {
            // if (select(".toggle-sidebar-btn"))
            // {
            //   on("click", ".toggle-sidebar-btn", function (e) {
            //     select("body").classList.toggle("toggle-sidebar");
            //   });
            // }
            const sidebar = document.getElementById("body");

            sidebar.classList.toggle("toggle-sidebar");
          }}
        ></i>

        {/* <div className="search-bar">
          <form
            className="search-form d-flex align-items-center"
            method="post"
            action="#"
          >
            <input
              type="text"
              name="query"
              placeholder="Search"
              title="Enter search keyword"
            />
            <button type="submit" title="Search">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div> */}
        {/* <!-- End Search Bar --> */}

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            {/* <li className="nav-item d-block d-lg-none">
              <a className="nav-link nav-icon search-bar-toggle " href="" onClick={()=>{}}>
                <i className="bi bi-search"></i>
              </a>
            </li> */}
            {/* <!-- End Search Icon--> */}

            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                data-bs-toggle="dropdown"
              >
                <img
                  src="./static/profilelogo.jpeg"
                  alt="profile"
                  className="card-icon rounded-circle d-flex align-items-center justify-content-center"
                />
                <span className="d-none d-md-block dropdown-toggle ps-1">
                  Rushikesh Sir
                </span>
              </a>

              <ul className="dropdown-menu dropdown-menu-end ps-1 profile dropdown-menu-arrow">
                <li className="dropdown-header ps-3">
                  <h6>Rushikesh Sir</h6>
                  <span>CEO</span>
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center nav-link"
                    onClick={() => {
                      nevigate(PROFILE_PAGES_URLS);
                    }}
                  >
                    <i className="bi bi-person"></i>
                    <span>My Profile</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center nav-link"
                    onClick={() => {
                      nevigate(PROFILE_PAGES_URLS);
                    }}
                  >
                    <i className="bi bi-gear"></i>
                    <span>Account Settings</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center nav-link"
                    onClick={() => {
                      nevigate(LOGIN_PAGES_URLS);
                    }}
                  >
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Sign Out</span>
                  </a>
                </li>
              </ul>
              {/* <!-- End Profile Dropdown Items --> */}
            </li>
            {/* <!-- End Profile Nav --> */}
          </ul>
        </nav>
        {/* !-- End Icons Navigation --> */}
      </header>
    </div>
  );
}

export default Navbar;
