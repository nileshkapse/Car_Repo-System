import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
import { API_URL } from "../../constants/Database";
import moment from "moment";
import Modal from "react-bootstrap/Modal";

function CustomTable({ uid }) {

  const nevigate = useNavigate();

  const [countries, setCountries] = useState([]);

  const [branch, setBranch] = useState([]);

  const [del,setDel]= useState("");

  const [updatet ,setUpdatet] =useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  console.log("Fuid data",del );

  const getdatabase = async () => {
    const query = `SELECT * FROM Finance where UID = ${uid};`;
    let data = { crossDomain: true, crossOrigin: true, query: query };

    try {
      axios
        .post(API_URL, data)
        .then((res) => {
          setCountries([...res.data]);
        })
        .catch((err) => {
          console.log("all data error: ", err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getbranchdatabase = async () => {
    const query = `SELECT * FROM Branches where FUID = ${uid} ;`;
    let data = { crossDomain: true, crossOrigin: true, query: query };

    try {
      axios
        .post(API_URL, data)
        .then((res) => {
          console.log("all data Branches: ", res.data);
          setBranch([...res.data]);
        })
        .catch((err) => {
          console.log("all data error: ", err);
        });
    } catch (error) {
      console.log(error);
    }
  };


  const datadelete = async () => {
   
    const query1 = `delete FROM Branches where branchcode=${del};`;
    let data1 = { crossDomain: true, crossOrigin: true, query: query1 };

     const query10 = `INSERT INTO log (	logmessage,logdate ) VALUES ('${del} Branch Is Deleted',curdate());`;
    let data10 = { crossDomain: true, crossOrigin: true, query: query10 };

     try {
      axios
        .post(API_URL, data10)
        .then((res) => {
          // console.log("Inserted data: ", res.data);
          // this.setState({ allData: res.data });
          // window.location.reload(false);
        })
        .catch((err) => {
          console.log("Inserted data error: ", err);
        });
    } catch (error) {
      console.log(error);
    }


    try {
      axios
        .post(API_URL, data1)
        .then((res) => {

          
        }
        
        )
        .catch((err) => {
          console.log("delete error: ", err);
        });
    } catch (error) {
      console.log(error);
    }

    const query2 = `Update Finance set total_branches= total_branches-1 where UID=${updatet};`;
    let data2 = { crossDomain: true, crossOrigin: true, query: query2 };


    


    try {
      axios
        .post(API_URL, data2)
        .then((res) => {})
        .catch((err) => {
          console.log("delete error: ", err);
        });
    } catch (error) {
      console.log(error);
    }
    handleClose();
  };

  useEffect(() => {
    getdatabase();
    getbranchdatabase();
  });


  const columns = [
    {
      name: "Branch Name",
      selector: (row) => row.branch_name,
      sortable: true,
      id: "column",
      width: "150px",
    },
    {
      name: "Date",
      selector: (row) => moment.utc(row.upload_date).format("DD-MM-YYYY"),
      sortable: true,
      id: "column",
      width: "120px",
    },
    {
      name: "Record",
      selector: (row) => row.Total_Records,
      sortable: true,
      id: "column",
      width: "98px",
    },

    {
      name: "Options",
      id: "column",
      cell: (row) => (
        <div>
          {/* <button
            className="btn btn-primary bi-eye"
            id="view"
            onClick={() => {
              // handledetailscardopen();
              // setUid(row.UID);
              // console.log("uid is", setUid);
            }}
          ></button> */}
          <button className="btn btn-secondary m-1  bi-pen" id="edit"></button>
          <button
            className="btn btn-danger bi-trash"
            id="delete"
            onClick={() => {
              handleShow();
              setDel(row.branchcode);
              setUpdatet(row.FUID);
            }}
          ></button>
        </div>
      ),
      width: "200px",
    },
  ];

  return (
    <div>
      <div className="row">
        <div className="col-lg-4">Finance Name :</div>

        <div className="col-lg ">
          {countries.map((comp) => (
            <div key={comp.finance_name}>
              <label>{comp.finance_name}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">UID :</div>
        <div className="col-lg-2">
          {countries.map((comp) => (
            <div key={comp.UID}>
              <label>{comp.UID}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">Address :</div>
        <div className="col-lg-4">
          {countries.map((comp) => (
            <div key={comp.address}>
              <label>{comp.address}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 ">Total Branches :</div>
        <div className="col-lg-2">
          {countries.map((comp) => (
            <div key={comp.total_branches}>
              <label>{comp.total_branches}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">Update Date :</div>
        <div className="col-lg-2">
          {countries.map((comp) => (
            <div key={comp.upload_date}>
              <label>{moment.utc(comp.upload_date).format("DD/MM/YYYY")}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Ended */}
      {/* <br></br> */}
      <br></br>
      <></>
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
            onClick={handleClose}
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={datadelete}
          >
            Delete
          </button>
        </Modal.Footer>
      </Modal>
      <div>
        <DataTable
        columns={columns}
        data={branch}
        pagination
        />
      </div>
    </div>
  );
}

export default CustomTable;
