import {useNavigate} from "react-router-dom"
import React from 'react'
// import {APP_USER_URL} from "../constants/URLS"
import Navbar from "../components/navbar/Navbar"
import Sidebar from "../components/sidebar/Sidebar"

function LandingPage() {
    const nevigate=useNavigate()
  return (
    <div className="App">
     <Navbar/>
     <Sidebar/>
    {/* <!-- End Sidebar--> */}
    <main id="main" className="main">

        <div className="pagetitle">
            <h1>Dashboard</h1>
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active">Dashboard</li>
                </ol>
            </nav>
        </div>
        {/* <!-- End Page Title --> */}
        <section className="section dashboard">
            <div className="row">

                {/* <!-- Left side columns --> */}
                <div className="col-lg-8">
                    <div className="row">

                        {/* <!-- Sales Card --> */}
                        <div className="col-xxl-4 col-xl-12">
                            <div className="card info-card sales-card">

                                <div className="card-body">
                                    <h5 className="card-title">Record And Finance</h5>

                                    <div className="d-flex align-items-center">
                                        <div
                                            className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i className="bg-info"></i>
                                        </div>
                                        <div className="ps-3">
                                            <h6>1000000</h6>
                                            <span className="text-success center pt-4 fw-bold">Record</span>

                                        </div>
                                        <div className="ps-5">
                                            <h6>5000</h6>
                                            <span className="text-success center pt-1 fw-bold">Finance</span>

                                        </div>
                                        <div className="ps-5">
                                            <h6>500</h6>
                                            <span className="text-success center pt-1 fw-bolder">Branches</span>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* <!-- End Record AND Finance Card -->
                        <!-- App User Card --> */}
                        <div className="col-xxl-4 col-xl-12">
                            <div className="card info-card sales-card">

                                <div className="card-body">
                                    <h5 className="card-title">App Users</h5>

                                    <div className="d-flex align-items-center">
                                        <div
                                            className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i className="bg-info"></i>
                                        </div>
                                        <div className="ps-3">
                                            <h6>1000000</h6>
                                            <span className="text-success center pt-4 fw-bold">A</span>

                                        </div>
                                        <div className="ps-5">
                                            <h6>5000</h6>
                                            <span className="text-success center pt-1 fw-bold">Active</span>

                                        </div>
                                        <div className="ps-5">
                                            <h6>500</h6>
                                            <span className="text-success center pt-1 fw-bolder">Admin</span>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* <!-- End App user Card --> */}
                    </div>
                </div>
                <div className="col-lg-4">


                    {/* <!-- Recent Activity --> */}
                    <div className="card">


                        <div className="card-body">
                            <h5 className="card-title">Recent Activity </h5>

                            <div className="activity">

                                <div className="activity-item d-flex">
                                    <div className="activite-label">32 min</div>
                                    <i className="bi bi-circle-fill activity-badge text-success align-self-start"></i>
                                    <div className="activity-content">
                                        Finance Brance Added
                                    </div>
                                </div>
                                {/* <!-- End activity item--> */}

                                <div className="activity-item d-flex">
                                    <div className="activite-label">56 min</div>
                                    <i className="bi bi-circle-fill activity-badge text-danger align-self-start"></i>
                                    <div className="activity-content">
                                        Website dashboard d-none
                                    </div>
                                </div>
                                {/* <!-- End activity item--> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </div>
  )
}

export default LandingPage