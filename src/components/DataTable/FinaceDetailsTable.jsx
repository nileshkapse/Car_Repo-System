import React from 'react'
import axios from "axios";
import { useState } from 'react'
import DataTable from 'react-data-table-component'
import { useEffect } from 'react';
import { API_URL } from '../../constants/Database';
import moment from 'moment';

const FinaceDetailsTable = ({


  handledetailscardopen}) => {
    
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState([]);

  const [filtercountries, setfiltercontries] = useState([]);

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
          setfiltercontries(res.data);
        })
        .catch((err) => {
          console.log("all data error: ", err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const columns = [
    {
      name: "Finance Name",
      selector: (row) => row.finance_name,
      sortable: true,
      id: "column",
      width: "200px",
    },
    {
      name: "Location ",
      selector: (row) => row.address,
      sortable: true,
      id: "column",
      width: "150px",
    },
    {
      name: "Total Branches",
      selector: (row) => row.total_branches,
      sortable: true,
      id: "column",
      width: "100px",
    },
    // {
    //   name: "Upload Date",
    //   selector: (row) => moment.utc(row.upload_date).format("DD/MM/YYYY"),
    //   sortable: true,
    //   id: "column",
    //   // width:'auto'
    //   // width: "200px",
    // },
    {
      name: "Options",
      id: "column",
      cell: (row) => (
        <button
          className="btn btn-primary bi-pencil-square"
          id="view"
          onClick={handledetailscardopen}
        >
          View All
        </button>
      ),
      width: "200px",
    },
  ];

  useEffect(() => {
    getdatabase();
  }, []);

  useEffect(() => {
    const result = countries.filter((country) => {
      return country.finance_name.toLowerCase().match(search.toLowerCase());
    });
    setfiltercontries(result);
  }, [search]);

  return (
    <div>
      <DataTable
        columns={columns}
        data={filtercountries}
        pagination
        highlightOnHover
        subHeader
        subHeaderAlign="left"
        subHeaderWrap
        subHeaderComponent={
          <label><h6>Search :</h6>
            <input
              type="text"
              placeholder="Search Here"
              className="from-control form-control-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <br></br>
          </label>
          
        }
      />
    </div>
  );
};

export default FinaceDetailsTable 