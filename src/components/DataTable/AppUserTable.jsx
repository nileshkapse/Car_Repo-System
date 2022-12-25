import React from "react";
import axios from "axios";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
import { API_URL } from "../../constants/Database";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AppUserTable = ({ handleperopen, setEmail, setName, setMobno }) => {
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState([]);

  const [filtercountries, setfiltercontries] = useState([]);

  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleopen = () => setShow(true);

  // const handleShowopen = () => {
  //   setTogglebox2(true);
  // };
  // const handleShowclose = () => {
  //   setTogglebox2(false);
  // };

  const [deactiveemail, setDeactiveemail] = useState("");

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

  const deleteuser = async () => {
    const query = `delete from App_User WHERE user_email = '${deactiveemail}' ;`;
    let data = { crossDomain: true, crossOrigin: true, query: query };

     const query10 = `INSERT INTO log (	logmessage,logdate ) VALUES ('${deactiveemail} User Is deleted',curdate());`;
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
    // handleShowclose();
    window.location.reload(true);
  };

  const columns = [
    {
      name: "Email ID (User ID)",
      selector: (row) => row.user_email,
      sortable: true,
      id: "column",
      width: "180px",
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
      width:"auto"
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
              handleperopen();
              setEmail(row.user_email);
              setName(row.user_name);
              setMobno(row.mobno);
            }}
          ></button>
          <button
            className="btn btn-danger m-2 bi-trash"
            id="delete"
            onClick={()=>{
            handleopen();
            setDeactiveemail(row.user_email);
            }}
            
          ></button>
        </div>
      ),
      width: "150px",
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
    <>
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
    </>
  );
};

export default AppUserTable;
