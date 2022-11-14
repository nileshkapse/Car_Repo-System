import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
import { API_URL } from "../../constants/Database";
import moment from "moment";

function CustomTable({ uid }) {

  const nevigate = useNavigate();

  const [countries, setCountries] = useState([]);

  const [branch, setBranch] = useState([]);

  console.log("uid data",uid );

  const getdatabase = async () => {
    const query = `SELECT * FROM Finance where UID = ${uid};`;
    let data = { crossDomain: true, crossOrigin: true, query: query };

    try {
      axios
        .post(API_URL, data)
        .then((res) => {
          setCountries([...res.data]);
        })
        .catch((err) => {
          console.log("all data error: ", err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getbranchdatabase = async () => {
    const query = `SELECT * FROM Branches where FUID = ${uid} ;`;
    let data = { crossDomain: true, crossOrigin: true, query: query };

    try {
      axios
        .post(API_URL, data)
        .then((res) => {
          console.log("all data Branches: ", res.data);
          setBranch([...res.data]);
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
    getbranchdatabase();
  });

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
        <div className="col-lg-4">
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
      <div>
        <h6 className="card-title-sm">Branches Detail</h6>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Branch Name</th>
              <th scope="col">Upload Date</th>
              <th scope="col">Record Count</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>
                {" "}
                {branch.map((comp) => (
                  <div key={comp.branch_name}>
                    <label>{comp.branch_name}</label>
                  </div>
                ))}
              </td>
              <td>
                {" "}
                {branch.map((comp) => (
                  <div key={moment.utc(comp.Upload_Date).format("DD-MM-YYYY")}>
                    <label>{moment.utc(comp.Upload_Date).format("DD-MM-YYYY")}</label>
                  </div>
                ))}
              </td>
            </tr> */}
            {branch.map((comp) => (
              <tr>
                <td>
                  <div key={comp.branch_name}>
                    <label>{comp.branch_name}</label>
                  </div>
                </td>
                <td>
                  <div key={moment.utc(comp.Upload_Date).format("DD-MM-YYYY")}>
                    <label>
                      {moment.utc(comp.Upload_Date).format("DD-MM-YYYY")}
                    </label>
                  </div>
                </td>
                <td>
                  <div key={comp.Total_Records}>
                    <label>
                      {comp.Total_Records}
                    </label>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomTable;
