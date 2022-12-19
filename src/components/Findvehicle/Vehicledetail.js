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
       <h5 className="card-title text-danger">  &#x25C9;  Financer </h5>
      <div className="row">
        <div className="col-lg-4 border border-primary border-bottom-0">Customer Name :</div>

        <div className="col-lg border border-primary border-bottom-0 border-left-0 ">
          {vehicle.map((comp) => (
            <div>
              <label className='text-info'>{comp.customer_name}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="row ">
        <div className="col-lg-4 border border-primary border-bottom-0">Vehicle Rc No :</div>
        <div className="col-lg border border-primary border-bottom-0 border-left-0">
          {vehicle.map((comp) => (
            <div >
              <label className='text-info'>{comp.rc_number}</label>
            </div>
          ))}
        </div>
      </div>
       <div className="row">
        <div className="col-lg-4 border border-primary border-bottom-0 border-left-0">Contract No. :</div>
        <div className="col-lg border border-primary border-bottom-0 border-left-0">
          {vehicle.map((comp) => (
            <div >
              <label className='text-info'>{comp.contract_no}</label>
            </div>
          ))}
        </div>
      </div> <div className="row">
        <div className="col-lg-4 border border-primary border-bottom-0 border-left-0 ">Chassis No. :</div>
        <div className="col-lg border border-primary border-bottom-0 border-left-0">
          {vehicle.map((comp) => (
            <div >
              <label>{comp.Chassis_no}</label>
            </div>
          ))}
        </div>
      </div> <div className="row">
        <div className="col-lg-4  border border-primary border-bottom-0 border-left-0">Vechical Model :</div>
        <div className="col-lg  border border-primary border-bottom-0 border-left-0">
          {vehicle.map((comp) => (
            <div >
              <label className='text-info'>{comp.vehicle_model}</label>
            </div>
          ))}
        </div>
      </div> <div className="row">
        <div className="col-lg-4 border border-primary border-bottom-0 border-left-0">Engine No. :</div>
        <div className="col-lg border border-primary border-bottom-0 border-left-0">
          {vehicle.map((comp) => (
            <div >
              {/* <label>{comp.Engine_No}</label> */}
            </div>
          ))}
        </div>
      </div> <div className="row">
        <div className="col-lg-4 border border-primary border-bottom-0 border-left-0">OD Amount :</div>
        <div className="col-lg border border-primary border-bottom-0 border-left-0">
          {vehicle.map((comp) => (
            <div >
              <label>{comp.OD_Amount}</label>
            </div>
          ))}
        </div>
      </div>
       <div className="row">
        <div className="col-lg-4 border border-primary border-bottom-0 border-left-0">Zone :</div>
        <div className="col-lg border border-primary border-bottom-0 border-left-0">
          {vehicle.map((comp) => (
            <div >
              <label>{comp.zone}</label>
            </div>
          ))}
        </div>
      </div> 
      
 <div className="row">
        <div className="col-lg-4 border border-primary border-bottom-0 border-left-0">Region:</div>
        <div className="col-lg border border-primary border-bottom-0 border-left-0">
          {vehicle.map((comp) => (
            <div >
              <label>{comp.Branch_code}</label>
            </div>
          ))}
        </div>
    
      </div> <div className="row">
        <div className="col-lg-4 border border-primary border-bottom-0 border-left-0">Area :</div>
        <div className="col-lg border border-primary border-bottom-0 border-left-0">
          {vehicle.map((comp) => (
            <div >
              <label>{comp.Branch_code}</label>
            </div>
          ))}
        </div>
    
      </div> <div className="row">
        <div className="col-lg-4 border border-primary border-bottom-0 border-left-0">Cos Address :</div>
        <div className="col-lg border border-primary border-bottom-0 border-left-0">
          {vehicle.map((comp) => (
            <div >
              <label>{comp.Branch_code}</label>
            </div>
          ))}
        </div>
    
      </div> <div className="row">
        <div className="col-lg-4 border border-primary border-bottom-0 border-left-0">Cos Mobile No:</div>
        <div className="col-lg border border-primary border-bottom-0 border-left-0">
          {vehicle.map((comp) => (
            <div >
              <label>{comp.Branch_code}</label>
            </div>
          ))}
        </div>
    
      </div> <div className="row">
        <div className="col-lg-4 border border-primary border-bottom-0 border-left-0">BKT :</div>
        <div className="col-lg border border-primary border-bottom-0 border-left-0">
          {vehicle.map((comp) => (
            <div >
              <label>{comp.Branch_code}</label>
            </div>
          ))}
        </div>
    
      </div> <div className="row">
        <div className="col-lg-4 border border-primary border-bottom-0 border-left-0">DPD :</div>
        <div className="col-lg border border-primary border-bottom-0 border-left-0">
          {vehicle.map((comp) => (
            <div >
              <label>{comp.Branch_code}</label>
            </div>
          ))}
        </div>
    
      </div> <div className="row">
        <div className="col-lg-4 border border-primary border-bottom-0 border-left-0">POS :</div>
        <div className="col-lg border border-primary border-bottom-0 border-left-0">
          {vehicle.map((comp) => (
            <div >
              <label>{comp.Branch_code}</label>
            </div>
          ))}
        </div>
      </div>
     <div className="row">
        <div className="col-lg-4 border border-primary border-bottom-0 border-left-0">GV :</div>
        <div className="col-lg border border-primary border-bottom-0 border-left-0">
          {vehicle.map((comp) => (
            <div >
              <label>{comp.Branch_code}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 border border-primary border-bottom-0 border-left-0">Sec9 :</div>
        <div className="col-lg border border-primary border-bottom-0 border-left-0">
          {vehicle.map((comp) => (
            <div >
              <label>{comp.Branch_code}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 border border-primary border-bottom-0 border-left-0">Sec 17 :</div>
        <div className="col-lg border border-primary border-bottom-0 border-left-0">
          {vehicle.map((comp) => (
            <div >
              <label>{comp.Branch_code}</label>
            </div>
          ))}
        </div>
      </div>
<div className="row">
        <div className="col-lg-4 border border-primary border-bottom-0 border-left-0">TBR :</div>
        <div className="col-lg border border-primary border-bottom-0 border-left-0">
          {vehicle.map((comp) => (
            <div >
              <label>{comp.Branch_code}</label>
            </div>
          ))}
        </div>
      </div><div className="row">
        <div className="col-lg-4 border border-primary ">SEASONING:</div>
        <div className="col-lg border border-primary ">
          {vehicle.map((comp) => (
            <div >
              <label>{comp.Branch_code}</label>
            </div>
          ))}
        </div>
      </div>
      <h5 className="card-title text-danger"> &#x25C9; Branch </h5>
      <div className="row">
        <div className="col-lg-4 border border-primary border-bottom-0 border-left-0">Branch </div>
        <div className="col-lg border border-primary border-bottom-0 border-left-0">
          {vehicle.map((comp) => (
            <div >
              <label className='text-info'>{comp.financier}</label>
            </div>
          ))}
        </div>
      </div> 
      <div className="row">
        <div className="col-lg-4 border border-primary border-bottom-0 border-left-0">Branch Code:</div>
        <div className="col-lg border border-primary border-bottom-0 border-left-0">
          {vehicle.map((comp) => (
            <div >
              <label>{comp.Branch_code}</label>
            </div>
          ))}
        </div>
    </div>
    <div>
      </div>
      <div className="row">
        <div className="col-lg-4 border border-primary border-bottom-0 border-left-0">LEVEL 1 CONTACT:</div>
        <div className="col-lg border border-primary border-bottom-0 border-left-0">
          {vehicle.map((comp) => (
            <div >
              <label>{comp.Branch_code}</label>
            </div>
          ))}
        </div>
      </div><div className="row">
        <div className="col-lg-4 border border-primary border-bottom-0 border-left-0">LEVEL 2 CONTACT :</div>
        <div className="col-lg border border-primary border-bottom-0 border-left-0">
          {vehicle.map((comp) => (
            <div >
              <label>{comp.Branch_code}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 border border-primary border-bottom-0 border-left-0">LEVEL 3 CONTACT :</div>
        <div className="col-lg border border-primary border-bottom-0 border-left-0">
          {vehicle.map((comp) => (
            <div >
              <label>{comp.Branch_code}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 border border-primary ">LEVEL 4 CONTACT :</div>
        <div className="col-lg border border-primary ">
          {vehicle.map((comp) => (
            <div >
              <label>{comp.Branch_code}</label>
            </div>
          ))}
        </div>
      </div>
      <h5 className="card-title text-danger"> &#x25C9; Finance Head Office</h5>
      <div className="row">
        <div className="col-lg-4 border border-primary border-bottom-0 border-left-0">Finance Name :</div>
        <div className="col-lg border border-primary border-bottom-0 border-left-0">
          {vehicle.map((comp) => (
            <div >
              <label>{comp.Branch_code}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 border border-primary border-bottom-0 border-left-0">Finance Address :</div>
        <div className="col-lg border border-primary border-bottom-0 border-left-0 ">
          {vehicle.map((comp) => (
            <div >
              <label>{comp.Branch_code}</label>
            </div>
          ))}
        </div>
      </div>
       <div className="row">
        <div className="col-lg-4 border border-primary border-bottom-0 border-left-0">Finance Contact 1 </div>
        <div className="col-lg border border-primary border-bottom-0 border-left-0 ">
          {vehicle.map((comp) => (
            <div >
              <label>{comp.Branch_code}</label>
            </div>
          ))}
        </div>
      </div>
       <div className="row">
        <div className="col-lg-4 border border-primary">Finance Contact 2 </div>
        <div className="col-lg border border-primary ">
          {vehicle.map((comp) => (
            <div >
              <label>{comp.Branch_code}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Vehicledetail;

// Financer..

// SEASONING 
// LEVEL1
// LEVEL1 CONTACT
// LEVEL2
// LEVEL2 CONTACT
// LEVEL3
// LEVEL3 CONTACT
// LEVEL 4
// LEVEL 4CONTACT 

// CREAT FINNACE

// FINANCE HED OFFICE

// FINANCE NAME
// FINANCE ADDRESS 
// CONTACT 1
// CONTACT 2
// CONTACT 3