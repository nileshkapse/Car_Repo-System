import React from "react";
import axios from "axios";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
import { API_URL } from "../../constants/Database";

const AppUserTable = () => {
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState([]);

  const [filtercountries, setfiltercontries] = useState([]);

  const getdatabase = async () => {
    const query = `SELECT * FROM App_User where isactive = 1 ;`;
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
      name: "Email ID (User ID)",
      selector: (row) => row.user_email,
      sortable: true,
      id: "column",
      width: "200px",
      heightMatch: "auto",
    },
    {
      name: "Active",
      selector: (row) => row.isactive,
      sortable: true,
      id: "column",
      width: "auto",
    },
    {
      name: "Admin",
      selector: (row) => row.isadmin,
      sortable: true,
      id: "column",
      width: "auto",
    },
    {
      name: "Balance",
      selector: (row) => row.balance,
      sortable: true,
      id: "column",
    },
    {
      name: "Options",
      id: "column",
      cell: (row) => (
        <div>
          <button
            className="btn btn-primary bi-eye"
            id="view"
            onClick={() => {}}
          ></button>
          <button className="btn btn-secondary m-1  bi-pen" id="edit"></button>
          <button
            className="btn btn-danger bi-trash"
            id="delete"
            onClick={() => {}}
          ></button>
        </div>
      ),
      width: "200px",
    },
  ];

  useEffect(() => {
    getdatabase();
  }, []);

  useEffect(() => {
    const result = countries.filter((country) => {
      var email = country.user_email
        .toString()
        .toLowerCase()
        .match(search.toLowerCase());
      var bal = country.balance
        .toString()
        .toLowerCase()
        .match(search.toLowerCase());

      return email || bal;
    });
    setfiltercontries(result);
  }, [search]);

  return (
    <DataTable
      columns={columns}
      data={filtercountries}
      pagination
      highlightOnHover
      subHeader
      subHeaderAlign="left"
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
  );
};

export default AppUserTable;
