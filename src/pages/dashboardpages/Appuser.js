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

  const [finance, setfinance] = useState([]);

  const [email, setEmail] = useState("");

  const [status, setstatus] = useState("");
  const [show, setShow] = useState(false);
  

  const [deactiveemail, setDeactiveemail] = useState("");

  const [name, setName] = useState("");
  const [mobno, setMobno] = useState("");

  const [togglebox, setTogglebox] = React.useState(false);

  const [togglebox1, setTogglebox1] = React.useState(false);
  const [togglebox2, setTogglebox2] = React.useState(false);

  const [togglebox3, setTogglebox3] = React.useState(false);


  // User function 

  const [sezurname, setSezur] = useState("");
  const [emailid, setEmailid] = useState("");
  const [mobileno , setMobileno] =useState("");
  const [userstatus, setUserstatus] = useState("");
  const [accountbal, setAccountbal] = useState("");
  const [fromdate , setFromdate] =useState("");
  const [todate , setTodate] =useState("");


  const handleClose = () => setShow(false);
  const handleopen = () => setShow(true);

  const handlereqopen = () => {
    setTogglebox(true);
  };

  const handlereqclose = () => {
    setTogglebox(false);
  };

  const handleperopen = () => {
    setTogglebox1(true);
    getFinance();
  };

  const handleperclose = () => {
    setTogglebox1(false);
  };
  const handleShowopen = () => {
    setTogglebox2(true);
  };
  const handleShowclose = () => {
    setTogglebox2(false);
  };

  const creatshow = () => {
    setTogglebox3(true);
  };

  const creatclose = () => {
    setTogglebox3(false);
  };

  const buttonRef = useRef();

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

  // Database Query for Creating New User

  const createuser = async () => {
    const query = `insert into App_User (user_email,isactive,balance,user_name,mobno) values ('${emailid}',${userstatus},${accountbal},'${sezurname}',${mobileno});`;
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
    window.location.reload(true);
  };

  const getFinance = async () => {
    const query = `SELECT * from Branches where Branches.FUID in (select FUID from assign where assign.mail='${email}')`;
    let data = { crossDomain: true, crossOrigin: true, query: query };

    try {
      axios
        .post(API_URL, data)
        .then((res) => {
          console.log("Finance data: ", res.data);
          // this.setState({ allData: res.data });
          setfinance(res.data);
        })
        .catch((err) => {
          console.log("all data error: ", err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const dataUpdate = async () => {
    const query = `UPDATE App_User SET isactive = ${status} WHERE user_email = '${deactiveemail}' ;`;
    let data = { crossDomain: true, crossOrigin: true, query: query };

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
    handleShowclose();
    window.location.reload(true);
  };

  const deleteuser = async () => {
    const query = `delete from App_User WHERE user_email = '${deactiveemail}' ;`;
    let data = { crossDomain: true, crossOrigin: true, query: query };

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
    handleShowclose();
    window.location.reload(true);
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
          className="btn bi-pencil-square btn-primary"
          onClick={() => {
            handleShowopen();
            setDeactiveemail(row.user_email);
          }}
          style={{ zIndex: 1000 }}
        ></button>
      ),
    },
  ];

  const financecol = [
    {
      name: "Finance Name",
      selector: (row) => row.branch_name,
      sortable: true,
      id: "column",
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
      id: "column",
    },
    {
      name: "Contact No",
      selector: (row) => row.contact_no,
      sortable: true,
      id: "column",
    },
    {
      name: "Total Records",
      selector: (row) => row.Total_Records,
      sortable: true,
      id: "column",
    },
  ];

  useEffect(() => {
    getdatabase();
    // dataUpdate();
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

  console.log(status);
  console.log(email);
  const enableButton = () => {
    buttonRef.current.disabled = false; // this disables the button
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
                className="btn rounded-5 btn-info bi-plus flex-xl-fill"
                id="view"
                onClick={creatshow}
              >
                <span className="m-2">Create User</span>
              </button>
            </div>
          </div>
          <br></br>
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
                onClick={enableButton}
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
                      <br></br>

                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="0"
                          onChange={(e) => {
                            setstatus(e.target.value);
                          }}
                        />
                        <label class="form-check-label" for="inlineRadio1">
                          Morning
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="1"
                          onChange={(e) => {
                            setstatus(e.target.value);
                          }}
                        />
                        <label class="form-check-label" for="inlineRadio2">
                          Night
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="2"
                          onChange={(e) => {
                            setstatus(e.target.value);
                          }}
                        />
                        <label class="form-check-label" for="inlineRadio2">
                          Both Shift
                        </label>
                      </div>
                    </th>
                    <td colSpan={2} rowSpan={1}>
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
                  <tr>
                    {/* <h5>Finance Link</h5> */}
                    <td colSpan={5} rowSpan={1}>
                      <DataTable
                        columns={financecol}
                        data={finance}
                        pagination
                        highlightOnHover
                        subHeader
                      ></DataTable>
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
            {/* {togglebox === true ? ( */}
            <div className="col-lg-5">
              <div className="card">
                {/* <button
                  className="card-closebtn btn btn-danger rounded-5 bi-x"
                  id="view"
                  // onClick={handlereqclose}
                ></button> */}
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
            {/* ) : null} */}
          </div>
          <div>
            <Modal
              size=""
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={togglebox2}
              onHide={handleShowclose}
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
                      value={deactiveemail}
                      onChange={(e) => {
                        setDeactiveemail(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Row>
                    <Col xs={8} md={6}>
                      <Form.Group
                        className="mb-1"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Activate or deactivate</Form.Label>

                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="1"
                            onChange={(e) => {
                              setstatus(e.target.value);
                            }}
                          />
                          <label class="form-check-label" for="inlineRadio1">
                            Activate
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="0"
                            onChange={(e) => {
                              setstatus(e.target.value);
                            }}
                          />
                          <label class="form-check-label" for="inlineRadio2">
                            deactivate
                          </label>
                        </div>
                      </Form.Group>
                      <br></br>
                      <div class="form-check form-check-inline">
                        <Button
                          className="center btn btn-danger center"
                          onClick={handleopen}
                        >
                          Delete Request
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleShowclose}>
                  Close
                </Button>
                <Button variant="primary" onClick={dataUpdate}>
                  Save
                </Button>
              </Modal.Footer>
            </Modal>

            {/* Delete user sure */}
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
                  onClick={deleteuser}
                >
                  Delete
                </button>
              </Modal.Footer>
            </Modal>

            {/* Create User */}

            <Modal
              size=""
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={togglebox3}
              onHide={creatclose}
            >
              <Modal.Header closeButton>
                <Modal.Title>Create User </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Sezur Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      autoFocus
                      value={sezurname}
                      onChange={(e) => {
                        setSezur(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email ID</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Email ID"
                      autoFocus
                      value={emailid}
                      onChange={(e) => {
                        setEmailid(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Mobile No</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Mobile no"
                      autoFocus
                      value={mobileno}
                      onChange={(e) => {
                        setMobileno(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Row>
                    <Col xs={8} md={6}>
                      <Form.Group
                        className="mb-1"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Activate or deactivate</Form.Label>

                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="1"
                            onChange={(e) => {
                              setUserstatus(e.target.value);
                            }}
                          />
                          <label class="form-check-label" for="inlineRadio1">
                            Activate
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="0"
                            onChange={(e) => {
                              setUserstatus(e.target.value);
                            }}
                          />
                          <label class="form-check-label" for="inlineRadio2">
                            deactivate
                          </label>
                        </div>
                      </Form.Group>
                    </Col>
                  </Row>
                  <br></br>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>$ Account Balance $</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Balance"
                      autoFocus
                      value={accountbal}
                      onChange={(e) => {
                        setAccountbal(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Row>
                    <Form.Group className="mb-1">
                      <Form.Label>SubScription :</Form.Label>
                      <Col xs={4} md={2}>
                        <div class="">
                          <label class="form-check-label ">From </label>
                          <input
                            type="date"
                            // name="inlineRadioOptions"
                            // id="inlineRadio2"
                            value={fromdate}
                            onChange={(e) => {
                              setFromdate(e.target.value);
                            }}
                          />
                        </div>

                        <div class="">
                          <label class="form-check-label">To </label>
                          <input
                            type="date"
                            // name="inlineRadioOptions"
                            // id="inlineRadio2"
                            value={todate}
                            onChange={(e) => {
                              setTodate(e.target.value);
                            }}
                          />
                        </div>
                      </Col>
                    </Form.Group>
                  </Row>
                  <br></br>
                  <Row>
                    <br></br>
                    <Form.Group
                      className="mb-1"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Upload Details : </Form.Label>
                      <br></br>
                      <input
                        style={{ display: "none" }}
                        ref={inputRef}
                        type="file"
                        onChange={handleFileChange}
                      />
                      <Button className="btn btn-info" onClick={handleClick}>
                        Upload KYC
                      </Button>
                    </Form.Group>
                  </Row>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleShowclose}>
                  Close
                </Button>
                <Button variant="primary" onClick={createuser}>
                  Create User
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Appuser;
