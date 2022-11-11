import React from 'react';
import axios from "axios";
import { useState } from 'react'
import DataTable from 'react-data-table-component'
import { useEffect } from 'react';
import { API_URL } from '../../constants/Database';

const VehicleDeatilsTable = ({


  handledetailscardopen}) => {
  
    const [countries,setCountries] =useState([]);

  const [search,setSearch] =useState([]);

  const [filtercountries,setfiltercontries] =useState([]);

  const getdatabase =async()=>{
    const query = `SELECT * FROM Vehicle ;`;
    let data = { crossDomain: true, crossOrigin: true, query: query };
    
    try{
     axios
      .post(API_URL, data)
      .then((res) => {
        console.log("all data: ", res.data);
        // this.setState({ allData: res.data });
        setCountries(res.data);
        setfiltercontries(res.data);
      })
      .catch((err) => {
        console.log("all data error: ", err);
      });
    }catch(error){
      console.log(error);
    }
  }
  const columns = [
      {
         name:"Contract Number",
         selector:(row) =>row.contract_no,
         sortable: true,
        id: "column",
      },
      {
         name:"Customer Name ",
         selector:(row) =>row.customer_name,
         sortable:true,
          id: "column",
      },
      {
         name:"RC Number",
         selector:(row) =>row.rc_number,
         sortable:true,
          id: "column",
      },
      { 
         name:"Zone",
         selector:(row) =>row.zone,
         sortable:true,
          id: "column",
      },
      {
        name:"Options",
         id: "column",
        cell :(row)=> 
        <button
          className="btn btn-primary bi-pencil-square"
          id="view"
          onClick={handledetailscardopen}
        >
          View All
        </button>,
       width: "200px",
      }
    ];

    
    useEffect(()=>{
      getdatabase();
    },[]);

    useEffect(()=>{
      const result= countries.filter(country => {

        var contra =country.contract_no.toString().toLowerCase().match(search.toLowerCase());
        var name =country.customer_name.toString().toLowerCase().match(search.toLowerCase());
        var rc =country.rc_number.toString().toLowerCase().match(search.toLowerCase());
        var zo =country.zone.toString().toLowerCase().match(search.toLowerCase());
        
        return contra || name || rc || zo;
      });
      setfiltercontries(result);
    },[search]);

    

  return (
    <DataTable columns={columns} data={filtercountries} 
    pagination 
    highlightOnHover
    subHeader
    subHeaderAlign='left'
    subHeaderComponent={
      <input 
      type="text"
      placeholder='Search Here'
      className='w-24 from-control'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
    }
    /> 
  )  
};

export default VehicleDeatilsTable