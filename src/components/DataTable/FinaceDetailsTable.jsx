import React from "react";
import axios from "axios";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
import { API_URL } from "../../constants/Database";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const FinaceDetailsTable = ({ handledetailscardopen, setUid }) => {
  const [countries, setCountries] = useState([]);

  const [uid, setDel] = React.useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  const datadelete = async () => {
    const query = `delete FROM Finance where UID=${uid};`;
    let data = { crossDomain: true, crossOrigin: true, query: query };

    const query1 = `delete FROM Branches where FUID=${uid};`;
    let data1 = { crossDomain: true, crossOrigin: true, query: query1 };

    try {
      axios
        .post(API_URL, data)
        .then((res) => {})
        .catch((err) => {
          console.log("delete error: ", err);
        });
    } catch (error) {
      console.log(error);
    }

    try {
      axios
        .post(API_URL, data1)
        .then((res) => {})
        .catch((err) => {
          console.log("delete error: ", err);
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
            onClick={() => {
              handledetailscardopen();
              setUid(row.UID);
              console.log("uid is", setUid);
            }}
          ></button>
          <button className="btn btn-secondary m-1  bi-pen" id="edit"></button>
          <button
            className="btn btn-danger bi-trash"
            id="delete"
            onClick={() => {
              handleShow();
              setDel(row.UID);
              console.log("uid is", setDel);
            }}
          ></button>
        </div>
      ),
      width: "200px",
    },
  ];

  console.log("Delete Uid", uid);

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
      <Modal
        size=""
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <h5 className="alert alert-danger" role="alert">
            Are You Sure to Delete ?
          </h5>
        </Modal.Header>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-secondary"
            data-mdb-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={datadelete}
          >
            Delete
          </button>
        </Modal.Footer>
      </Modal>
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
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
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

export default FinaceDetailsTable;
