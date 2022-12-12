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


  const getdatabase = async () => {
    const query = `SELECT * FROM Vehicle2 where rc_number = '${rcn}';`;
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
            <div>
              <label className='text-info'>{comp.customer_name}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">RC No. :</div>
        <div className="col-lg-2">
          {vehicle.map((comp) => (
            <div >
              <label className='text-info'>{comp.rc_number}</label>
            </div>
          ))}
        </div>
      </div>
       <div className="row">
        <div className="col-lg-4">Contract No. :</div>
        <div className="col-lg-2">
          {vehicle.map((comp) => (
            <div >
              <label className='text-info'>{comp.contract_no}</label>
            </div>
          ))}
        </div>
      </div> <div className="row">
        <div className="col-lg-4">Chassis No. :</div>
        <div className="col-lg-2">
          {vehicle.map((comp) => (
            <div >
              <label>{comp.Chassis_no}</label>
            </div>
          ))}
        </div>
      </div> <div className="row">
        <div className="col-lg-4">Vechical Model :</div>
        <div className="col-lg-2">
          {vehicle.map((comp) => (
            <div >
              <label className='text-info'>{comp.vehicle_model}</label>
            </div>
          ))}
        </div>
      </div> <div className="row">
        <div className="col-lg-4">Engine No. :</div>
        <div className="col-lg-2">
          {vehicle.map((comp) => (
            <div >
              {/* <label>{comp.Engine_No}</label> */}
            </div>
          ))}
        </div>
      </div> <div className="row">
        <div className="col-lg-4">OD Amount :</div>
        <div className="col-lg-2">
          {vehicle.map((comp) => (
            <div >
              <label>{comp.OD_Amount}</label>
            </div>
          ))}
        </div>
      </div>
       <div className="row">
        <div className="col-lg-4">Zone :</div>
        <div className="col-lg-2">
          {vehicle.map((comp) => (
            <div >
              <label>{comp.zone}</label>
            </div>
          ))}
        </div>
      </div> <div className="row">
        <div className="col-lg-4">Financier</div>
        <div className="col-lg-2">
          {vehicle.map((comp) => (
            <div >
              <label className='text-info'>{comp.financier}</label>
            </div>
          ))}
        </div>
      </div> <div className="row">
        <div className="col-lg-4">Finance :</div>
        <div className="col-lg-2">
          {vehicle.map((comp) => (
            <div >
              <label>{comp.FUID}</label>
            </div>
          ))}
        </div>
      </div> <div className="row">
        <div className="col-lg-4">Branch Code :</div>
        <div className="col-lg-2">
          {vehicle.map((comp) => (
            <div >
              <label>{comp.Branch_code}</label>
            </div>
          ))}
        </div>
      {/* </div> <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-2">
          {vehicle.map((comp) => (
            <div >
              <label>{comp.rc_number}</label>
            </div>
          ))}
        </div> */}
      </div>
      </div>
  )
}

export default Vehicledetail;