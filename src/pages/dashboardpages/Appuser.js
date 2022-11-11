import React from "react";
import { LANDING_PAGE_URL } from "../../constants/URLS";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import AppUserTable from "../../components/DataTable/AppUserTable";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { API_URL } from "../../constants/Database";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Appuser() {
  const nevigate = useNavigate();

  const [countries, setCountries] = useState([]);
  const [active, setActive] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function myFunction() {
    document.getElementById("sidebar").classList.toggle("show");
  }

  const getdatabase = async () => {
    const query = `SELECT * FROM App_User where isactive = 0 ;`;
    let data = { crossDomain: true, crossOrigin: true, query: query };

    try {
      axios
        .post(API_URL, data)
        .then((res) => {
          console.log("all data: ", res.data);
          // this.setState({ allData: res.data });
          setCountries(res.data);
        })
        .catch((err) => {
          console.log("all data error: ", err);
        });
    } catch (error) {
      console.log(error);
    }
  };


  // const datainsert=async()=>{
  //   const query = `UPDATE App_User SET isactive = ${active} WHERE user_email = '${email}' ;`;
  //   let data = { crossDomain: true, crossOrigin: true, query: query };

  //   try{
  //    axios
  //     .post(API_URL, data)
  //     .then((res) => {
  //       console.log("Inserted data: ", res.data);
  //       // this.setState({ allData: res.data });
  //       // window.location.reload(false);
  //     })
  //     .catch((err) => {
  //       console.log("Inserted data error: ", err);
  //     });
  //   }catch(error){
  //     console.log(error);
  //   }
  // } ; 

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
      name: "Balance",
      selector: (row) => row.balance,
      sortable: true,
      id: "column",
    },
    {
      name: "Options",
      id: "column",
      cell: (row) => <button className="btn bi-pencil-square" onClick={handleShow} style={{zIndex:1000}} ></button>,
    },
  ];
  useEffect(() => {
    getdatabase();
    // datainsert();
  }, []);

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
      ></link>
      <Navbar />
      {/* <!-- End Header --> */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
      ></link>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      {/* <!-- ======= Sidebar ======= --> */}
      <Sidebar />

      <main id="main" className="main">
        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-7">
              <div className="row">
                <div className="col-xxl-4 col-xl-12">
                  <div className="card info-card sales-card">
                    <div className="card-body">
                      <h5 className="card-title">APP Users</h5>
                      <AppUserTable />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"> App User Request</h5>
                  <DataTable
                    columns={columns}
                    data={countries}
                    pagination
                    highlightOnHover
                    subHeader
                    

                  ></DataTable>
                </div>
              </div>
            </div>
          </div>
          <div>
        {/* <Modal
          size=""
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Update Activation </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email ID"
                  autoFocus
                  value={email}
                  onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
                />
              </Form.Group> */}
              {/* <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Finance Location</Form.Label>
                <Form.Control type="text" placeholder="Finance Location"
                // value={address}
                //   onChange={(e)=>{
                //     setAddress(e.target.value)
                //   }} 
                />
              </Form.Group> */}

              
                {/* <Row>
                  <Col xs={8} md={6}>
                    <Form.Group
                      className="mb-1"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Activate or deactivate</Form.Label>
                      <Form.Control type="number" 
                      min="0" max="1"  maxlength="1"
                      value={active}
                  onChange={(e)=>{
                    setActive(e.target.value)
                  }}
                  />
                    </Form.Group>
                  </Col> */}
                  {/* <Col xs={8} md={6}>
                    <Form.Group
                      className="mb-1"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Upload Date</Form.Label>
                      <Form.Control type="date"
                  //     value={uploaddate}
                  // onChange={(e)=>{
                  //   setUploaddate(e.target.value)
                  // }}
                   />
                    </Form.Group>
                  </Col> */}
                {/* </Row>
         
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary"
             onClick={datainsert}
             >
              Save
            </Button>
          </Modal.Footer>
        </Modal> */}
      </div>
        </section>
      </main>
    </div>
  );
}

export default Appuser;
