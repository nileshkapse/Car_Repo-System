import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

function FindVehicle() {
  const nevigate = useNavigate();
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main id="main" className="main">
        <div class="search-bar center">
          <form
            class="search-form d-flex align-items-center"
            method="post"
            action="#"
          >
            <input
              type="text"
              name="query"
              placeholder="Search Vehicle No"
              title="Enter search keyword"
            />
            <button type="submit" title="Search">
              <i class="bi bi-search"></i>
            </button>
          </form>
        </div>
        <br />
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
      </main>
    </div>
  );
}

export default FindVehicle;
