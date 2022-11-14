import React from 'react'
import axios from "axios";
import { useState } from 'react'
import DataTable from 'react-data-table-component'
import { useEffect } from 'react';
import { API_URL } from '../../constants/Database';

const FinaceDetailsTable = ({
  handledetailscardopen,setUid}) => {
    
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

          setCountries([...res.data]);
          setfiltercontries([...res.data]);
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
      name: "Total Branches",
      selector: (row) => row.total_branches,
      sortable: true,
      id: "column",
      width: "100px",
    },

    {
      name: "Options",
      id: "column",
      cell: (row) => (
        <div>
          <button
            className="btn btn-primary bi-eye"
            id="view"
            onClick={() =>{ handledetailscardopen();
               setUid(row.UID);
               console.log("handleuid data", row.UID);
              }}
               
          ></button>
          <button
            className="btn btn-secondary m-1  bi-pen"
            id="edit"
            onClick={handledetailscardopen}
          ></button>
          <button
            className="btn btn-danger bi-trash"
            id="delete"
            onClick={handledetailscardopen}
          ></button>
        </div>
      ),
      width: "200px",
    },
  ];

  useEffect(() => {
    getdatabase();
  });

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
          <div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">
                  Serach
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Search Here"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default FinaceDetailsTable 