import React from "react";
import { useNavigate } from "react-router-dom";
import FinanceAdd from "../../components/FinaceDetails/FinanceAdd";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import FinaceDetailsTable from "../../components/DataTable/FinaceDetailsTable";
import { LANDING_PAGE_URL } from "../../constants/URLS";
import CustomTable from "./CustomTable";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { API_URL } from "../../constants/Database";
import { useState } from "react";

function Finacedetails() {
  const nevigate = useNavigate();

  const [togglebox, setTogglebox] = React.useState(false);

  const [show, setShow] = useState(false);
  const [financename, setFinancename] = useState("");
  const [address, setAddress] = useState("");
  const [contact, settotalbranch] = useState("");

  const [uid, setUid] = React.useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handledetailscardopen = () => {
    setTogglebox(true);
  };

  const handledetailscardclose = () => {
    setTogglebox(false);
  };

  const datainsert = async () => {
    const query = `INSERT INTO Branches (FUID,branch_name, address, upload_date, contact_no,Total_records ) VALUES (${uid},'${financename}', '${address}',curdate(),${contact},0);`;
    let data = { crossDomain: true, crossOrigin: true, query: query };

    const query1 = `UPDATE Finance set total_branches=(SELECT COUNT(*) FROM Branches where FUID=${uid}) where UID=${uid};`;
    let data1 = { crossDomain: true, crossOrigin: true, query: query1 };

     const query10 = `INSERT INTO log (	logmessage,logdate ) VALUES ('${financename} Branch Is Added',curdate());`;
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
        .then((res) => {})
        .catch((err) => {
          console.log("Inserted data error: ", err);
        });
    } catch (error) {
      console.log(error);
    }

    try {
      axios
        .post(API_URL, data1)
        .then((res) => {})
        .catch((err) => {
          console.log("Inserted data error: ", err);
        });
    } catch (error) {
      console.log(error);
      
    }

    // 👇️ clear all input values in the form
    setFinancename('');
    setAddress('');
    settotalbranch('');
    handleClose();
  };



  return (
    <div>
      <main id="main" className="main">
        <div className="col-lg-12">
          <div className="pagetitle">
            <h1>Finance Detail</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a onClick={() => { nevigate(LANDING_PAGE_URL); }}>
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active">Finance Details</li>
              </ol>
            </nav>
          </div>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
          ></link>
          <div className="row">
            <div className={togglebox === true ? "col-lg-6" : "col-lg-6"}>
              <div className="card">
                <div className="card-body ">
                  {/* <h1 className="card-title">Finace Details</h1> */}

                  <FinaceDetailsTable
                    handledetailscardopen={handledetailscardopen}
                    handledetailscardclose={handledetailscardclose}
                    setUid={setUid}
                  />
                  <FinanceAdd />
                  <br></br>
                </div>
              </div>
            </div>
            {togglebox === true ? (
              <div className="col-lg-6">
                <div className="card">
                  <button
                    className="card-closebtn rounded-5 btn btn-danger bi-x-circle-fill"
                    id="view"
                    onClick={handledetailscardclose}
                  ></button>
                  <div className="card-body">
                    <h5 className="card-title"> Finance All Data </h5>
                    <CustomTable uid={uid} />
                  </div>
                  <br></br>
                  <button
                    className="card-addbtn btn rounded-5 btn-warning bi-plus-lg"
                    id="view"
                    onClick={handleShow}
                  >
                    {" "}
                    Add Branch{" "}
                  </button>
                </div>
                <div>
                  <Modal
                    size=""
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={show}
                    onHide={handleClose}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Add Branch </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form >
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Branch Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Finance Name ex.Bajaj Finance"
                            autoFocus
                            value={financename}
                            onChange={(e) => {
                              setFinancename(e.target.value);
                            }}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Finance Location"
                            value={address}
                            onChange={(e) => {
                              setAddress(e.target.value);
                            }}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-1"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Level 1 Contact Number</Form.Label>
                          <Form.Control
                            type="number"
                            value={contact}
                            onChange={(e) => {
                              settotalbranch(e.target.value);
                            }}
                          />
                        </Form.Group>
                         <Form.Group
                          className="mb-1"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Level 2 Contact Number</Form.Label>
                          <Form.Control
                            type="number"
                            // value={contact}
                            // onChange={(e) => {
                            //   settotalbranch(e.target.value);
                            // }}
                          />
                        </Form.Group>
                         <Form.Group
                          className="mb-1"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Level 3 Contact Number</Form.Label>
                          <Form.Control
                            type="number"
                            // value={contact}
                            // onChange={(e) => {
                            //   settotalbranch(e.target.value);
                            // }}
                          />
                        </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={datainsert}>
                        Save
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </main>
      <Sidebar />
      <Navbar />
    </div>
  );
}

export default Finacedetails;
