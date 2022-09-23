import React from 'react'

function Navbar() {
  return (
    <div><header id="header" class="header fixed-top d-flex align-items-center">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
        <div class="d-flex align-items-center justify-content-between">
            <a href="index.html" class="logo d-flex align-items-center">
                <img src={process.env.PUBLIC_URL+"/static/5techg.png"} alt=""/>
                <span class="d-none d-lg-block">5TechG</span>
            </a>
            <i class="bi bi-list toggle-sidebar-btn"></i>
        </div>
    

        <div class="search-bar">
            <form class="search-form d-flex align-items-center" method="post" action="#">
                <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
                <button type="submit" title="Search"><i class="bi bi-search"></i></button>
            </form>
        </div>
        {/* <!-- End Search Bar --> */}

        <nav class="header-nav ms-auto">
            <ul class="d-flex align-items-center">

                <li class="nav-item d-block d-lg-none">
                    <a class="nav-link nav-icon search-bar-toggle " href="#">
                        <i class="bi bi-search"></i>
                    </a>
                </li>
                {/* <!-- End Search Icon--> */}
                

                <li class="nav-item dropdown pe-3">

                    <a class="nav-link nav-profile d-flex align-items-center pe-0" data-bs-toggle="dropdown">
                        <img src="./static/profilelogo.jpeg" alt="profile" class="rounded-circle"/>
                        <span class="d-none d-md-block dropdown-toggle ps-2">Rushikesh Sir</span>
                    </a>

                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                        <li class="dropdown-header">
                            <h6>Rushikesh Sir</h6>
                            <span>CEO</span>
                        </li>

                        <li>
                            <a class="dropdown-item d-flex align-items-center">
                                <i class="bi bi-person"></i>
                                <span>My Profile</span>
                            </a>
                        </li>
                        <li>
                            <hr class="dropdown-divider"/>
                        </li>

                        <li>
                            <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                                <i class="bi bi-gear"></i>
                                <span>Account Settings</span>
                            </a>
                        </li>
                        <li>
                            <hr class="dropdown-divider"/>
                        </li>

                        <li>
                            <a class="dropdown-item d-flex align-items-center" href="pages-faq.html">
                                <i class="bi bi-question-circle"></i>
                                <span>Need Help?</span>
                            </a>
                        </li>
                        <li>
                            <hr class="dropdown-divider"/>
                        </li>

                        <li>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <i class="bi bi-box-arrow-right"></i>
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

    </header></div>
  )
}

export default Navbar