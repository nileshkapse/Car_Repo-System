import React from "react";
import axios from "axios";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
import { API_URL } from "../../constants/Database";
import Spinner from "react-bootstrap/Spinner";
import ReactSpinnerTimer from "react-spinner-timer";

const VehicleDeatilsTable = ({ handledetailscardopen, setRcn }) => {
  const [countries, setCountries] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState([]);

  const [filtercountries, setfiltercontries] = useState([]);

  const getdatabase = async () => {
    const query = `SELECT * FROM Vehicle2 ;`;
    let data = { crossDomain: true, crossOrigin: true, query: query };

    try {
      axios
        .post(API_URL, data)
        .then((res) => {
          // console.log("all data: ", res.data);
          // this.setState({ allData: res.data });
          setCountries([...res.data]);
          setfiltercontries([...res.data]);
          setLoading(false);
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
      name: "RC Number",
      selector: (row) => row.rc_number,
      sortable: true,
      id: "column",
      width: "130px",
    },
    {
      name: "Customer Name ",
      selector: (row) => row.customer_name,
      sortable: true,
      id: "column",
      width: "200px",
    },
    {
      name: "Options",
      id: "column",
      cell: (row) => (
        <div>
          <button
            className="btn btn-primary bi-eye"
            id="view"
            onClick={() => {
              handledetailscardopen();
              setRcn(row.rc_number);
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
      width: "180px",
    },
  ];

  useEffect(() => {
    getdatabase();
  }, []);

  useEffect(() => {
    const result = countries.filter((country) => {
      // var contra =country.contract_no.toString().toLowerCase().match(search.toLowerCase());
      var name = country.customer_name
        .toString()
        .toLowerCase()
        .match(search.toLowerCase());
      var rc = country.rc_number
        .toString()
        .toLowerCase()
        .match(search.toLowerCase());
      // var zo =country.zone.toString().toLowerCase().match(search.toLowerCase());

      // return contra || name || rc || zo;

      return name || rc;
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
      progressPending={loading}
      progressComponent={<Spinner animation="border" variant="success" />}
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

export default VehicleDeatilsTable;
