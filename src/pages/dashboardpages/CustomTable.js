import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
import { API_URL } from "../../constants/Database";
import moment from "moment";

function CustomTable() {
  const nevigate = useNavigate();

  const [countries, setCountries] = useState([]);

  const [branch, setBranch] = useState([]);

  const getdatabase = async () => {
    const query = `SELECT * FROM Finance where UID = 1001 ;`;
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

  const getbranchdatabase = async () => {
    const query = `SELECT * FROM Branches where FUID = 1001 ;`;
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

  // const columns = [
  //   {
  //     name: "Finance Name",
  //     selector: (row) => row.UID,
  //     sortable: true,
  //     id: "column",
  //     width: "200px",
  //   },
  // ];

  useEffect(() => {
    getdatabase();
    getbranchdatabase();
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-lg-4">Finance Name :</div>
        <div className="col-lg ">
          {countries.map((comp) => (
            <div key={comp.finance_name}>
              <label>{comp.finance_name}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">UID :</div>
        <div className="col-lg-2">
          {countries.map((comp) => (
            <div key={comp.UID}>
              <label>{comp.UID}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">Address :</div>
        <div className="col-lg-2">
          {countries.map((comp) => (
            <div key={comp.address}>
              <label>{comp.address}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 ">Total Branches :</div>
        <div className="col-lg-2">
          {countries.map((comp) => (
            <div key={comp.total_branches}>
              <label>{comp.total_branches}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">Update Date :</div>
        <div className="col-lg-2">
          {countries.map((comp) => (
            <div key={comp.upload_date}>
              <label>{moment.utc(comp.upload_date).format("DD/MM/YYYY")}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Ended */}
      {/* <br></br> */}
      <div >
      <h6 className="card-title-sm">Branches Detail</h6>
       
      </div>
      <div className="row">
        <div className="col-lg-4 ">Name</div>
        <div className="w-width">
          {branch.map((comp) => (
            <div key={comp.branch_name}>
              <label>{comp.branch_name}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomTable;
