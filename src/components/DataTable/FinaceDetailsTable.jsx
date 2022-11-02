import React from 'react'
import axios from "axios";
import { useState } from 'react'
import DataTable from 'react-data-table-component'
import { useEffect } from 'react';
import Viewall from '../advancedetails/Viewall';
import { API_URL } from '../../constants/Database';

const FinaceDetailsTable = () => {

  const [countries,setCountries] =useState([]);

  const [search,setSearch] =useState([]);

  const [filtercountries,setfiltercontries] =useState([]);
  const viewall = () =>{
      <div>
        <Viewall/>
      </div>
      
    }


  
  const getdatabase =async()=>{
    const query = `SELECT * FROM Finance ;`;
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
         name:"Finance Name",
         selector:(row) =>row.finance_name,
         sortable: true,
        id: "column",
      },
      {
         name:"Location ",
         selector:(row) =>row.address,
         sortable:true,
          id: "column",
      },
      {
         name:"Total Branches",
         selector:(row) =>row.total_branches,
         sortable:true,
          id: "column",
      },
      { 
         name:"Upload Date",
         selector:(row) =>row.UID,
         sortable:true,
          id: "column",
      },
      {
        name:"Options",
         id: "column",
        cell :(row)=><button className='btn btn-primary bi-pencil-square' id="view"
         onClick={viewall}> View All </button>
       
      }
    ];

    
    useEffect(()=>{
      getdatabase();
    },[]);

    useEffect(()=>{
      const result= countries.filter(country => {
        return country.finance_name.toLowerCase().match(search.toLowerCase());
      });
      setfiltercontries(result);
    },[search]);

    

  return( 
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
}

export default FinaceDetailsTable 