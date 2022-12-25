import { Divider } from "@material-ui/core";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { API_URL } from "../../constants/Database";

import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

function FinanceAdd() {
  const nevigate = useNavigate();
  const [show, setShow] = useState(false);
  const [financename, setFinancename] = useState("");
  const [address, setAddress] = useState("");
  const [totalbranch, settotalbranch] = useState("");
  const [uploaddate, setUploaddate] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const datainsert = async () => {
    const query = `INSERT INTO Finance (finance_name, address, upload_date, total_branches ) VALUES ('${financename}', '${address}',curdate(),'${totalbranch}');`;
    let data = { crossDomain: true, crossOrigin: true, query: query };

    const query10 = `INSERT INTO log (	logmessage,logdate ) VALUES ('${financename} Finance Is Added',curdate());`;
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

    console.log("Finance name", financename);
    try {
      axios
        .post(API_URL, data)
        .then((res) => {
          console.log("Inserted data: ", res.data);
          // this.setState({ allData: res.data });
          // window.location.reload(false);
        })
        .catch((err) => {
          console.log("Inserted data error: ", err);
        });
    } catch (error) {
      console.log(error);
    }
    
    setFinancename('');
    setAddress('');
    handleClose();
    
  };

  return (
    <div>
      {/* Button Onclick */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
        integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <a
        href="#"
        className="float rounded-5"
        onClick={handleShow}
        style={{ zIndex: 1000 }}
      >
        <i className="btn rounded-5 btn-warning bi-plus-lg"></i>
      </a>

      {/* Button End */}

      <div>
        <Modal
          size=""
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Finance </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Finance Name</Form.Label>
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
                <Form.Label>Finance Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Finance Location"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </Form.Group>

              {/* <Form.Group
                      className="mb-1"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Upload Date</Form.Label>
                      <Form.Control type="date"
                      value={uploaddate}
                  onChange={(e)=>{
                    setUploaddate(e.target.value)
                  }} />
                    </Form.Group> */}
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
  );
}

export default FinanceAdd;
