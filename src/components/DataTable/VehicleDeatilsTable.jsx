import React from "react";
import axios from "axios";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
import { API_URL } from "../../constants/Database";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";

const VehicleDeatilsTable = ({ handledetailscardopen, setRcn }) => {
  const [countries, setCountries] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState([]);

  // const [filtercountries, setfiltercontries] = useState([]);

  const [searchrc, setSearchrc] = useState("");

  const [recentsearch, setRecentsearch] = useState([]);

  // const [storedata ,setStoredata] =useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleopen = () => setShow(true);

  const [rcnum, setRcnum] = useState("");

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
          // setfiltercontries([...res.data]);
          setRecentsearch(res.data);
          // setStoredata(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log("all data error: ", err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteuser = async () => {
    const query = `delete from Vehicle WHERE rc_number = '${rcnum}' ;`;
    let data = { crossDomain: true, crossOrigin: true, query: query };

    const query1 = `delete from Vehicle2 WHERE rc_number = '${rcnum}' ;`;
    let data1= { crossDomain: true, crossOrigin: true, query: query1 };

    try {
      axios
        .post(API_URL, data)
        .then((res) => {
          console.log("Updated Data", res.data);
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
           console.log("Updated Data", res.data1);
         })
         .catch((err) => {
           console.log("Inserted data error: ", err);
         });
     } catch (error) {
       console.log(error);
     }
    // handleShowclose();
    window.location.reload(true);
  };

  const getdatabase1 = async () => {
    if (searchrc.length === 4) {
      const query = `SELECT * FROM Vehicle where rc_number like '%${searchrc}' ;`;
      let data = { crossDomain: true, crossOrigin: true, query: query };
      console.log("query for search : ", query);
      try {
        axios
          .post(API_URL, data)
          .then((res) => {
            // console.log("all data: ", res.data);
            // this.setState({ allData: res.data });
            setRecentsearch(res.data);
            // setfiltercontries(res.data);
            console.log("Founded data", res.data);
            setLoading(false);
          })
          .catch((err) => {
            console.log("all data error: ", err);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      getdatabase();
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
          {/* <button
            className="btn btn-secondary m-1  bi-pen"
            id="edit"
            onClick={handledetailscardopen}
          ></button> */}
          <button
            className="btn btn-danger m-2 bi-trash"
            id="delete"
            onClick={() => {
              handleopen();
              setRcnum(row.rc_number);
            }}
          ></button>
        </div>
      ),
      width: "180px",
    },
  ];

  useEffect(() => {
    if (searchrc.length < 4) getdatabase();
  }, [searchrc]);

  console.log("Updated filter :", recentsearch);
  return (
    <div>
      {/* <CustomTable uid={uid} /> */}
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
             <button type="button" className="btn btn-danger" onClick={deleteuser}>
            Delete
          </button>
        </Modal.Footer>
      </Modal>
      <DataTable
        columns={columns}
        data={recentsearch}
        pagination
        highlightOnHover
        subHeader
        progressPending={loading}
        progressComponent={<Spinner animation="border" variant="success" />}
        subHeaderAlign="left"
        subHeaderComponent={
          <div>
            <div className="input-group mb-3">
              {/* <div className="input-group-prepend">
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
              /> */}
              <span className="input-group-text" id="inputGroup-sizing-default">
                Enter RC NO
              </span>
              <div className="">
                <input
                  type="text"
                  id="form1"
                  class="form-control"
                  onChange={(e) => {
                    setSearchrc(e.target.value);
                  }}
                />
              </div>
              <div className=" m-2"></div>
              <button
                type="button"
                class="btn btn-primary"
                for="form1"
                onClick={getdatabase1}
              >
                Search
              </button>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default VehicleDeatilsTable;
