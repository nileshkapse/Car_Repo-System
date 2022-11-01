import React from 'react'
import axios from "axios";
import { useState } from 'react'
import DataTable from 'react-data-table-component'
import { useEffect } from 'react';

const FinaceDetailsTable = () => {

  const [countries,setCountries] =useState([]);

  const [search,setSearch] =useState([]);

  const [filtercountries,setfiltercontries] =useState([]);

  const getCountries =async()=>{
    try{
      const response =await axios.get("https://restcountries.com/v2/all");
      setCountries(response.data);
      setfiltercontries(response.data);
    }catch(error){
      console.log(error);
    }
  }

  const columns = [
      {
         name:"Finance Name",
         selector:(row) =>row.name,
         sortable: true,
        id: "column",
      },
      {
         name:"Location ",
         selector:(row) =>row.nativeName,
         sortable:true,
          id: "column",
      },
      {
         name:"Total Branches",
         selector:(row) =>row.capital,
         sortable:true,
          id: "column",
      },
      { 
         name:"Upload Date",
         selector:(row) =>row.name,
         sortable:true,
          id: "column",
      },
      {
        name:"Options",
         id: "column",
        cell :(row)=><button className='btn btn-primary bi-pencil-square'> View All </button>
      }
    ];

    useEffect(()=>{
      getCountries();
    },[]);

    useEffect(()=>{
      const result= countries.filter(country => {
        return country.name.toLowerCase().match(search.toLowerCase()) && country.capital.toLowerCase().match(search.toLowerCase());
      });
      setfiltercontries(result);
    },[search]);

  return( 
    <DataTable columns={columns} data={filtercountries} 
    pagination 
    highlightOnHover
    subHeader
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