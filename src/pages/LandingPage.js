import { useNavigate } from "react-router-dom";
import React from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import PieChart from "../components/chart/PieChart";
import LineChart from "../components/chart/LineChart";
import DoughnutChart from "../components/chart/DoughnutChart";
import axios from "axios";
import { useState } from "react";
// import DataTable from 'react-data-table-component'
import { useEffect } from "react";
import { API_URL } from "../constants/Database";
import { render } from "@testing-library/react";

function LandingPage() {

  const [recordlen, setCount] = useState([]);

  const [financelen,setFinancelen] = useState([]);

  const [appuserlen, setAppcount] = useState([]);

  const [branchlen,setBranchlen] = useState([]);

  const [isactive,setIsactive] = useState([]);

  const [isadmin,setIsadmin] = useState([]);

  const getfinanceuser = async () => {
    const query = `SELECT COUNT(*) as rl FROM Vehicle;`;
    let data = { crossDomain: true, crossOrigin: true, query: query };

    const query1 = `SELECT COUNT(*) as brl From Branches;`;
    let data1 = { crossDomain: true, crossOrigin: true, query: query1 };

    const query2 = `SELECT COUNT(*) as frl from Finance;`;
    let data2 = { crossDomain: true, crossOrigin: true, query: query2 };

    try {
      axios
        .post(API_URL, data)
        .then((res) => {
          // this.setState({ rlen : res.data.length });
          var rlength = res.data[0].rl;
          setCount(rlength);
          // setCountries(res.data);
          // setfiltercontries(res.data);
        })
        .catch((err) => {
          console.log("all data error: ", err);
        });
    } catch (error) {
      console.log(error);
    }
     try {
      axios
        .post(API_URL, data1)
        .then((res) => {
        
          // this.setState({ rlen : res.data.length });
          var rlength = res.data[0].brl;
          setBranchlen(rlength);
          // setCountries(res.data);
          // setfiltercontries(res.data);
        })
        .catch((err) => {
          console.log("all data error: ", err);
        });
    } catch (error) {
      console.log(error);
    }
    try {
      axios
        .post(API_URL, data2)
        .then((res) => {
          // this.setState({ rlen : res.data.length });
          var rlength = res.data[0].frl;
          setFinancelen(rlength);
          // setCountries(res.data);
          // setfiltercontries(res.data);
        })
        .catch((err) => {
          console.log("all data error: ", err);
        });
    } catch (error) {
      console.log(error);
    }
  };


  // App user counts 

  const getappuser = async () => {

    const query = `SELECT COUNT(*) as arl from App_User;`;
    let data = { crossDomain: true, crossOrigin: true, query: query };

    const query1 = `select COUNT(*) as aarl from App_User where isactive = 1 ;` ;
    let data1 = { crossDomain: true, crossOrigin: true, query: query1 };

    const query2 = `select COUNT(*) as acarl from App_User where isadmin = 1 ;` ;
    let data2 = { crossDomain: true, crossOrigin: true, query: query2 };

    try {
      axios
        .post(API_URL, data)
        .then((res) => {
         
          // this.setState({ rlen : res.data.length });
          var rlength = res.data[0].arl;
          setAppcount(rlength);
          // setCountries(res.data);
          // setfiltercontries(res.data);
        })
        .catch((err) => {
          console.log("all data error: ", err);
        });
    } catch (error) {
      console.log(error);
    }

    try {
      axios
        .post(API_URL, data1)
        .then((res) => {
         
          // this.setState({ rlen : res.data.length });
          var rlength = res.data[0].aarl;
          setIsactive(rlength);
          // setCountries(res.data);
          // setfiltercontries(res.data);
        })
        .catch((err) => {
          console.log("all data error: ", err);
        });
    } catch (error) {
      console.log(error);
    }

    try {
      axios
        .post(API_URL, data2)
        .then((res) => {
          // this.setState({ rlen : res.data.length });
          var rlength = res.data[0].acarl;
          setIsadmin(rlength);
          // setCountries(res.data);
          // setfiltercontries(res.data);
        })
        .catch((err) => {
          console.log("all data error: ", err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getfinanceuser();
    getappuser();
  }, []);
  
  return (
    <div className="App">
      <script
        type="text/javascript"
        src="http://www.chartjs.org/assets/Chart.js"
      >
        <script src="path/to/chartjs/dist/chart.js"></script>
      </script>
      <Navbar />
      <Sidebar />
      {/* <!-- End Sidebar--> */}
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
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
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-files"></i>
                        </div>
                        <div className="ps-3">
                          <h6>{recordlen}</h6>
                          <span className="text-success center pt-4 fw-bold">
                            Total Record
                          </span>
                        </div>
                        <div className="ps-5">
                          <h6>{financelen}</h6>
                          <span className="text-success center pt-1 fw-bold">
                            Total Finance
                          </span>
                        </div>
                        <div className="ps-5">
                          <h6>{branchlen}</h6>
                          <span className="text-success center pt-1 fw-bolder">
                            Branches
                          </span>
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
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-people"></i>
                        </div>
                        <div className="ps-3">
                          <h6>{appuserlen}</h6>
                          <span className="text-success center pt-4 fw-bold">
                            App User
                          </span>
                        </div>
                        <div className="ps-5">
                          <h6>{isactive}</h6>
                          <span className="text-success center pt-1 fw-bold">
                            Active
                          </span>
                        </div>
                        <div className="ps-5">
                          <h6>{isadmin}</h6>
                          <span className="text-success center pt-1 fw-bolder">
                            Admin
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End App user Card --> */}
              </div>
              <LineChart />
              <DoughnutChart />
            </div>
            <div className="col-lg-4">
              {/* Pie Chart */}
              <PieChart />
              {/* Pie chart end */}
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"> Recent activity</h5>
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
                        Website dashboard done
                      </div>
                    </div>

                    <div className="activity-item d-flex">
                      <div className="activite-label">20 min</div>
                      <i className="bi bi-circle-fill activity-badge text-success align-self-start"></i>
                      <div className="activity-content">ALl Pages done</div>
                    </div>
                    {/* <!-- End activity item--> */}
                  </div>
                  <br />
                  Mobile App Development
                  <br />
                  <br />
                  Startign from Android to latest React, we can develop all
                  single platform appliation for Android or iOS as well as all
                  hybrid application with React or Flutter, also recently we
                  have get armed with Kotlin as well to keep ourself flexible
                  and dynamic with development tools to fulfill all your need
                  exactly as you wanted
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LandingPage;
