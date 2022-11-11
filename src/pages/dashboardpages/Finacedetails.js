import React from "react";
import { useNavigate } from "react-router-dom";
import FinanceAdd from "../../components/FinaceDetails/FinanceAdd";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import FinaceDetailsTable from "../../components/DataTable/FinaceDetailsTable";
import { LANDING_PAGE_URL } from "../../constants/URLS";
import CustomTable from "./CustomTable";
// import { useState } from "react";

function Finacedetails() {
  const nevigate = useNavigate();

  const [togglebox, setTogglebox] = React.useState(false);

  const handledetailscardopen = () => {
    setTogglebox(true);
  };

  const handledetailscardclose = () => {
    setTogglebox(false);
  };
  return (
    <div>
      <main id="main" className="main">
        <div class="col-lg-12">
           <div className="pagetitle">
          <h1>Finance Detail</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a onClick={() => {
                nevigate(LANDING_PAGE_URL);
              }}>Home</a>
              </li>
              <li className="breadcrumb-item active">Finance Details</li>
            </ol>
          </nav>
          </div>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
          ></link>
          <div className="row">
            <div className={togglebox===true?"col-lg-6":"col-lg-12"}>
              <div class="card">
                <div class="card-body ">
                  {/* <h1 class="card-title">Finace Details</h1> */}

                  <FinaceDetailsTable
                    handledetailscardopen={handledetailscardopen}
                    handledetailscardclose={handledetailscardclose}
                  />
                  <FinanceAdd />
                </div>
              </div>
            </div>
            {togglebox === true ? (
              <div className="col-lg-6">
                <div className="card">
                   <button
                      className="card-closebtn btn btn-danger bi-x-circle-fill"
                      id="view"
                      onClick={handledetailscardclose}
                    ></button>
                  <div className="card-body">
                   
                    <h5 className="card-title"> Finance All Data </h5>
                    <CustomTable></CustomTable>
                  </div>
                  </div>
                </div>
            
            ) : null}
          </div>
        </div>
      </main>
      <Sidebar />
      <Navbar />
    </div>
  );
}

export default Finacedetails;
