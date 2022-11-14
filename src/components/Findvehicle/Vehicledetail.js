import React from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
import { API_URL } from "../../constants/Database";
import moment from "moment";

function Vehicledetail({rcn}) {
  
  const nevigate = useNavigate();

  const[vehicle,setVehicle] = useState([]);

  console.log("handleuid data",rcn );

  const getdatabase = async () => {
    const query = `SELECT * FROM Vehicle where rc_number = '${rcn}';`;
    let data = { crossDomain: true, crossOrigin: true, query: query };

    try {
      axios
        .post(API_URL, data)
        .then((res) => {
          setVehicle(res.data);
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
  });

  return (
    <div>
      <div className="row">
        <div className="col-lg-4">Customer Name :</div>

        <div className="col-lg ">
          {vehicle.map((comp) => (
            <div key={comp.customer_name}>
              <label>{comp.customer_name}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">RC No. :</div>
        <div className="col-lg-2">
          {vehicle.map((comp) => (
            <div key={comp.rc_number}>
              <label>{comp.rc_number}</label>
            </div>
          ))}
        </div>
      </div>
      </div>
  )
}

export default Vehicledetail