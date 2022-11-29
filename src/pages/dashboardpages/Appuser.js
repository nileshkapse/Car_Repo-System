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
import { useRef } from "react";


function Appuser() {
  const nevigate = useNavigate();

  const [countries, setCountries] = useState([]);

  const [email, setEmail] = useState("");

  const [name, setName] = useState("");
const [mobno, setMobno] = useState("");
  const [togglebox, setTogglebox] = React.useState(false);

  const [togglebox1, setTogglebox1] = React.useState(false);

  const handlereqopen = () => {
    setTogglebox(true);
  };

  const handlereqclose = () => {
    setTogglebox(false);
  };

  const handleperopen = () => {
    setTogglebox1(true);
  };

  const handleperclose = () => {
    setTogglebox1(false);
  };

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
      cell: (row) => (
        <button
          className="btn bi-pencil-square"
          // onClick={handleShow}
          style={{ zIndex: 1000 }}
        ></button>
      ),
    },
  ];
  useEffect(() => {
    getdatabase();
    // datainsert();
  }, []);

  const inputRef = useRef(null);

  const handleClick = () => {
    // 👇️ open file input box on click of other element
    inputRef.current.click();
  };
  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    console.log("fileObj is", fileObj);

    // 👇️ reset file input
    event.target.value = null;
  };

  
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
            <div>
              <button
                className="toggle-closebtn btn rounded-5 btn-info bi-list flex-xl-fill"
                id="view"
                onClick={handlereqopen}
              >
                <span className="m-1">Menu</span>
              </button>
            </div>
          </div>
           {togglebox1 === true ? ( 
            <div className="card p-5">
              <button
                className="card-closebtn btn btn-danger rounded-5 bi-x"
                id="view"
                onClick={handleperclose}
              ></button>
              <button
                className="card-addbtn btn rounded-5 btn-warning bi-pen"
                id="view"
              ></button>
              <br />

              <h5 className="card-title">Personal Details</h5>

              <table class="table table-bordered">
                <thead></thead>
                <tbody>
                  <tr>
                    <th>Sezur Finance </th>
                    <th colSpan={2}>Payment Confirmation : </th>
                  </tr>
                  <tr>
                    <td colSpan={1} rowSpan={6}>
                      <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                        <img
                          src={
                            process.env.PUBLIC_URL + "/static/profile-img.jpg"
                          }
                          alt="Profile"
                          className="rounded-circle"
                        />
                      </div>
                    </td>
                    <th scope="row">Sezur Name</th>
                    <td> {name}</td>
                  </tr>
                  <tr>
                    <th scope="row">Email ID</th>
                    <td>{email}</td>
                  </tr>
                  <tr>
                    <th scope="row">Mobile</th>
                    <td>{mobno}</td>
                  </tr>

                  <tr>
                    <th scope="row">DRA CERTIFICATE</th>
                    <td>
                      <a
                        href=""
                        target="_blank"
                        download
                        className="btn btn-success m-2"
                      >
                        Download
                      </a>
                      <input
                        style={{ display: "none" }}
                        ref={inputRef}
                        type="file"
                        onChange={handleFileChange}
                      />
                      <Button className="btn btn-info" onClick={handleClick}>
                        Upload File
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">KYC Upload</th>
                    <td>
                      <Button href="" className="btn btn-success m-2">
                        Download
                      </Button>
                      <input
                        style={{ display: "none" }}
                        ref={inputRef}
                        type="file"
                        onChange={handleFileChange}
                      />
                      <Button className="btn btn-info" onClick={handleClick}>
                        Upload File
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Current Location</th>
                    <td>
                      <Button href="" className="btn btn-info">
                        View
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <h5 className="">Operations</h5>
                  </tr>
                  <tr>
                    <th>
                      <label>Shift</label>
                      <br></br>
                      <div class="form-check">
                        <br></br>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          disabled
                          checked
                        />
                        <label
                          class="form-check-label "
                          for="flexRadioDefault1"
                        >
                          Morning Shift
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          disabled
                        />
                        <label
                          class="form-check-label "
                          for="flexRadioDefault2"
                        >
                          Night Shift
                        </label>
                      </div>
                    </th>
                    <td colSpan={2} rowSpan={2}>
                      <th>
                        <label>Permisson</label>
                      </th>
                      <input
                        type="radio"
                        class="btn-check"
                        name="btnradio"
                        id="btnradio1"
                        autocomplete="off"
                        disabled
                        checked
                      />
                      <label
                        class="btn btn-outline-success m-3"
                        for="btnradio1"
                      >
                        Activate
                      </label>

                      <input
                        type="radio"
                        class="btn-check m-3"
                        name="btnradio"
                        id="btnradio2"
                        autocomplete="off"
                        disabled
                      />
                      <label class="btn btn-outline-danger m-3" for="btnradio2">
                        Deactive
                      </label>

                      <input
                        type="radio"
                        class="btn-check"
                        name="btnradio"
                        id="btnradio3"
                        autocomplete="off"
                        disabled
                      />
                      <label class="btn btn-outline-danger m-3" for="btnradio3">
                        BlackListed
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
             ) : null}
          <div className="row">
            <div className="col-lg-7">
              <div className="row">
                <div className="col-xxl-4 col-xl-12">
                  <div className="card info-card sales-card">
                    <div className="card-body">
                      <h5 className="card-title">APP Users</h5>
                      <AppUserTable
                        handleperopen={handleperopen}
                        handleperclose={handleperclose}
                        setEmail={setEmail}
                        setMobno={setMobno}
                        setName={setName}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {togglebox === true ? (
              <div className="col-lg-5">
                <div className="card">
                  <button
                    className="card-closebtn btn btn-danger rounded-5 bi-x"
                    id="view"
                    onClick={handlereqclose}
                  ></button>
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
            ) : null}
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
              </Form.Group> 
            <Form.Group
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
              </Form.Group> 

             <Row>
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
                  </Col> 
             <Col xs={8} md={6}>
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
                  </Col> 
            </Row>
         
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
