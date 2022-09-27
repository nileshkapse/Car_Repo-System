import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

function FindVehicle() {
  const nevigate = useNavigate();
  return (
    <div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
   
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
      <Navbar />
      <Sidebar />
      <main id="main" className="main">
        <div class="col-lg-12">

          <div class="card">
            <div class="card-body ">
             <h1 class="card-title">Find Vehicle</h1>
 
              {/* <!-- Table with stripped rows --> */}
          <form
          
            className=" search-form d-flex align-items-center"
            method="post"
            action="#"
          >
            <input
              type="text"
              name="query"
              placeholder="Search"
              title="Enter search keyword"
            />
         
            <a className="nav-link nav-icon search-bar-toggle " href="" onClick={()=>{}}>
                <i className="bi bi-search"></i>
              </a>
          </form>
    <br/>
        <section class="section">
          <div class="row">
            <div class="col-lg-8">
              <div class="card">
                <div class="card-body">
                 
                  {/* Vechical Deatils */}
                  <h5 class="card-title fw-bolder ">Vehicle Detail</h5>
                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bg-info"></i>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="ps-3">
                        <h6 className="fw-bold">Vehicle No</h6>
                        <span className="text-success center pt-4 fw-bold"></span>
                      </div>
                      <div className="ps-4">
                        <h6 className="fw-bold">Chessie No</h6>
                        <span className="text-success center pt-4 fw-bold"></span>
                      </div>
                      <div className="ps-4">
                        <h6 className="fw-bold">Model Name</h6>
                        <span className="text-success center pt-4 fw-bold"></span>
                      </div>
                      <div className="ps-4">
                        <h6 className="fw-bold">Engine No</h6>
                        <span className="text-success center pt-4 fw-bold"></span>
                      </div>
                      {/* vehicle details end */}
                    {/* </div> *
                  {/* </div> */}
                  </div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
        </div></div>
      </main>
    </div>
  );
}

export default FindVehicle;
