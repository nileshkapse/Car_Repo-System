import React from 'react'
import {useNavigate} from "react-router-dom"
import Navbar from '../../components/navbar/Navbar'
import DataTable from "react-data-table-component";
import Sidebar from '../../components/sidebar/Sidebar'
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { API_URL } from "../../constants/Database";
import moment from "moment";


function DetailsView() {

    const [log,setLog] =useState([]);


    const getbranchdatabase = async () => {
    const query = `SELECT * FROM log order by lognumber desc ;`;
    let data = { crossDomain: true, crossOrigin: true, query: query };

    try {
      axios
        .post(API_URL, data)
        .then((res) => {
          console.log("all data Branches: ", res.data);
          setLog([...res.data]);
        })
        .catch((err) => {
          console.log("all data error: ", err);
        });
    } catch (error) {
      console.log(error);
    }
  };

   useEffect(() => {
    getbranchdatabase();
  });

  const columns = [
    {
      name: "Sr.Number",
      selector: (row) => row.lognumber,
      sortable: true,
      id: "column",
      width: "150px",
    },
    {
      name: "Date",
      selector: (row) => moment.utc(row.logdate).format("DD-MM-YYYY"),
      sortable: true,
      id: "column",
      width: "220px",
    },
    {
      name: "Log Message",
      selector: (row) => row.logmessage,
      sortable: true,
      id: "column",
      // width: "350px",
    },]


  return (
    <div><main id="main" className="main">
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link> 
        <div className="col-lg-12">

          <div className="card">
            <div className="card-body ">
              <h1 className="card-title">Detail View</h1>
               <div>
        <DataTable
        columns={columns}
        data={log}
        pagination
        />
      </div>

            </div>
          </div></div></main>
        <Sidebar/><Navbar/>
    </div>
  )
}

export default DetailsView