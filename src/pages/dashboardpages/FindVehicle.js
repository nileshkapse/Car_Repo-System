import React from "react";
import { useNavigate } from "react-router-dom";
import VehicleDeatilsTable from "../../components/DataTable/VehicleDeatilsTable";
import Vehicledetail from "../../components/Findvehicle/Vehicledetail";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

function FindVehicle() {
  const nevigate = useNavigate();

  const [togglebox, setTogglebox] = React.useState(false);

  const [rcn, setRcn] = React.useState("");

  const handledetailscardopen = () => {
    setTogglebox(true);
  };

  const handledetailscardclose = () => {
    setTogglebox(false);
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
      ></link>

      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <Navbar />
      <Sidebar />
      <main id="main" className="main">
        <div className="col-lg-12">
          <div className="pagetitle">
            <h5>Find Vechical</h5>
          </div>

          <div className="row">
            <div className={togglebox === true ? "col-lg-6" : "col-lg-6"}>
              <div className="card">
                <div className="card-body ">
                  {/* <h1 className="card-title">Finace Details</h1> */}

                  <VehicleDeatilsTable
                    handledetailscardopen={handledetailscardopen}
                    handledetailscardclose={handledetailscardclose}
                    setRcn={setRcn}
                  />
                  {/* <FinanceAdd /> */}
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
                    <h5 className="card-title">Vehicle Details </h5>
                    {/* <CustomTable></CustomTable> */}
                    <Vehicledetail rcn={rcn}/>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          {/* <!-- Table with stripped rows --> */}
        </div>
      </main>
    </div>
  );
}

export default FindVehicle;
