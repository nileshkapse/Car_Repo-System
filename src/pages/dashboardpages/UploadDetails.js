import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
import { API_URL } from "../../constants/Database";

function UploadDetails() {
  const nevigate = useNavigate();

  const [countries, setCountries] = useState([]);

  const [branch,setBranch]=useState([]);

  const getdatabase = async () => {
    const query = `SELECT * FROM Finance ;`;
    let data = { crossDomain: true, crossOrigin: true, query: query };

    try {
      axios
        .post(API_URL, data)
        .then((res) => {
          console.log("all data: ", res.data);
          // this.setState({ allData: res.data });

          setCountries(res.data);
        })
        .catch((err) => {
          console.log("all data error: ", err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getbranch = async () => {
    const query = `SELECT * FROM Branches ;`;
    let data = { crossDomain: true, crossOrigin: true, query: query };

    try {
      axios
        .post(API_URL, data)
        .then((res) => {
          console.log("all data: ", res.data);
          // this.setState({ allData: res.data });

          setBranch(res.data);
        })
        .catch((err) => {
          console.log("all data error: ", err);
        });
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getdatabase();
    getbranch();
  }, []);

  
  return (
    <div>
      <main id="main" className="main">
        <Navbar />
        <Sidebar />
        <div class="input-group mb-3">
          <h6 className="form-label">Finance Name : </h6>
          <select
            className="form-select"
            placeholder="Choose one thing"
            id="finance"
            
          >
            {/* <option>Choose Finance Name </option> */}
            {countries.map((comp) => (
              <option>{comp.finance_name}</option>
            ))}
          </select>
         
        </div>
        <div class="input-group ">
          <h6 className="form-label">Branch Name : </h6>
          <select
            class="form-select"
            placeholder="Choose one thing"
            id="branch"
          >
            {/* <option>Choose Finance Name </option> */}
            {branch.map((comp) => (
              <option>{comp.branch_name} <label className="secondary">address : </label>{comp.address}</option>
              
            ))}
          </select>
        {/* <select
            class="form-select"
            placeholder="Choose one thing"
            id="branch"
          >
            {branch.map((comp) => (
              <option>{comp.address}</option>
              
            ))}
          </select>  */}
        </div>
        {/* File upload */}
        <div class="file-upload">
          <div class="image-upload-wrap">
            <input class="file-upload-input" type="file" />
            <div class="drag-text">
              <h3>Drag and drop a file or select CSV</h3>
            </div>
          </div>
          <br />
          <button class="btn btn-success centre" type="button">
            Add Files
          </button>
        </div>
        {/* File Uploade end */}
      </main>
    </div>
  );
}

export default UploadDetails;
