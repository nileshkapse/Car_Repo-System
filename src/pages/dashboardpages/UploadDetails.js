import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
import { API_URL } from "../../constants/Database";
import { forEach } from "jszip";
// import csvtojson from "csvtojson"
// import mysql from "mysql2"
import { useCSVReader } from "react-papaparse";
import Modal from "react-bootstrap/Modal";

function UploadDetails() {
  const nevigate = useNavigate();

  const [branch, setBranch] = useState([]);

  const [file, setFile] = useState();
  const [array, setArray] = useState([]);

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const csvFileToArray = (string) => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const headerstring = "";
    csvHeader.map((item, index) => {
      if (index !== 0) {
        headerstring += ",";
      }

      headerstring += item;
    });
    console.log("header string ", headerstring);
    csvRows.map((item) => {
      const query = `INSERT INTO student(`;
    });

    const array = csvRows.map((i) => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });

    setArray(array);
    //     array.map((item) => {
    //       // for (const key in item) {
    //       //   console.log("key array data", `${key}: ${item[key]}`);
    //       // }
    //        const query = `INSERT INTO student(name,age) VALUES('${item['Name']}',${item['"Age "']}) `;
    // let data = { crossDomain: true, crossOrigin: true, query: query };
    //     try {
    //       axios
    //         .post(API_URL, data)
    //         .then((res) => {})
    //         .catch((err) => {
    //           console.log("Inserted data error: ", err);
    //         });
    //     } catch (error) {
    //       console.log(error);
    //     }

    // });

    console.log("csv array", array);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
      console.log("file con", file);
    }
  };

  const headerKeys = Object.keys(Object.assign({}, ...array));

  const getbranch = async () => {
    const query = `SELECT * FROM Branches ;`;
    let data = { crossDomain: true, crossOrigin: true, query: query };

    try {
      axios
        .post(API_URL, data)
        .then((res) => {
          console.log("all data: ", res.data);
          // this.setState({ allData: res.data });

          setBranch(res.data);
        })
        .catch((err) => {
          console.log("all data error: ", err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // getdatabase();
    getbranch();
  }, []);

  // Upload

  const styles = {
    csvReader: {
      display: "flex",
      flexDirection: "row",
      flexGrow: 2,
      marginBottom: 10,
    },
    browseFile: {
      width: "20%",
    },
    acceptedFile: {
      border: "1px solid #ccc",
      height: 45,
      lineHeight: 2.5,
      paddingLeft: 10,
      width: "80%",
    },
    remove: {
      borderRadius: 0,
      padding: "0 20px",
    },
    progressBarBackgroundColor: {
      backgroundColor: "red",
    },
  };

  const { CSVReader } = useCSVReader();

  // States
  const [selected, setSelected] = React.useState("");

  // Main States
  const [data, setData] = React.useState(undefined);
  const [remainingHeaders, setRemainingHeaders] = React.useState([]);
  const [headersMapping, setHeadersMapping] = React.useState({});
  const [csvHeaders, setCsvHeaders] = React.useState([]);
  const [dbHeaders, setDbHeaders] = React.useState([]);
  // useEffect
  React.useEffect(() => {
    console.log("Mappings Modified: ", headersMapping);
    const headers = [];
    Object.entries(headersMapping).forEach((entry) => {
      const [key, value] = entry;
      console.log(`${key}: ${value}`);
      headers.push(value);
    });

    const remHeaders = dbHeaders.filter(function (item) {
      return headers.indexOf(item) === -1;
    });
    setRemainingHeaders(remHeaders);
  }, [headersMapping]);

  React.useEffect(() => {
    console.log("Used Headers: ", remainingHeaders);
  }, [remainingHeaders]);
  const uploadData = (e) => {
    e.preventDefault();

    var db_query = `INSERT INTO Vehicle(`;
    var header_str = ``;

    // Getting headers string

    for (let i = 0; i < csvHeaders.length; i++) {
      if (i != 0) {
        header_str += `,`;
      }
      console.log(csvHeaders[i]);

      const val = headersMapping[csvHeaders[i]];
      if (val === "select") {
        console.log("Invalid Mapping!!!");
        return;
      }
      header_str += val;
    }

    db_query += header_str + `) values(`;
    console.log(db_query);

    const user_data = data.data;

    // Loop through users_data except header row
    for (let i = 1; i < user_data.length; i++) {
      var local_db_query = db_query;

      if (user_data[i].length !== csvHeaders.length) {
        continue;
      }
      console.log(user_data[i]);

      // Creating users_data fields string
      var fields_str = ``;
      user_data[i].map((item, index) => {
        if (index !== 0) {
          fields_str += `,`;
        }

        fields_str += `"${item}"`;
      });

      local_db_query += fields_str + `)`;

      console.log("Query: ", local_db_query);

      let data2 = {
        crossDomain: true,
        crossOrigin: true,
        query: local_db_query,
      };

      try {
        axios
          .post(API_URL, data2)
          .then((res) => {
            console.log("Data Inserted", res);
          })

          .catch((err) => {
            console.log("Inserted data error: ", err);
            <div class="alert alert-success" role="alert">
              Data is Not uploaded
            </div>;
          });
      } catch (error) {
        console.log(error);
      }
    }
    handleShow();
    console.log("Data Done sucessfully");
  };


   const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Insertion

    const query1 = `SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = N'Vehicle';`;
    let data1 = { crossDomain: true, crossOrigin: true, query: query1 };

    try {
      axios
        .post(API_URL, data1)
        .then((res) => {
          console.log("get columnn", res);
          const local_db_headers = [];
          res.data.map((item, index) => {
            local_db_headers.push(item.COLUMN_NAME);
          });
          setDbHeaders([...local_db_headers]);
          setRemainingHeaders([...local_db_headers]);
        })
        .catch((err) => {
          console.log("Inserted data error: ", err);
        });
    } catch (error) {
      console.log(error);
    }

    const user_data = data.data;
    const headers = user_data[0];

    setCsvHeaders(headers);
  };

  return (
    <div>
      <Modal
        size=""
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="alert alert-success"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <h5 className="alert alert-success" role="alert">
           Data Uploaded !!!
          </h5>
        </Modal.Header>
        <Modal.Footer></Modal.Footer>
        </Modal>
      <main id="main" className="main">
        <Navbar />
        <Sidebar />
        <div className="input-group ">
          <div className="text-center">
            <div className="input-group mb-3">
              <span className="input-group-text " id="basic-addon1 ">
                Branch Name
              </span>
              <select
                className="form-select"
                placeholder="Choose one thing"
                id="branch"
              >
                {/* <option>Choose Finance Name </option> */}
                {branch.map((comp) => (
                  <option>
                    {comp.branch_name} <label className="secondary"> , </label>
                    {comp.address}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* File upload */}

        <CSVReader
          onUploadAccepted={(results) => {
            console.log("---------------------------");
            console.log(results);
            setData(results);
            console.log("---------------------------");
          }}
        >
          {({ getRootProps, acceptedFile }) => (
            <>
              <div className="text-center ">
                <button
                  className="btn btn-success centre glow-on-hover"
                  type="button"
                  {...getRootProps()}
                  style={styles.browseFile}
                >
                  Browse file
                </button>
              </div>
              <br></br>
              <div className="text-center ">
                <h5>Selected File : {acceptedFile && acceptedFile.name}</h5>
              </div>
              <br></br>
            </>
          )}
        </CSVReader>

        {data !== undefined ? (
          <form onSubmit={handleFormSubmit}>
            <div className="text-center">
              <button className="btn btn-success centre" type="submit">
                Mapping
              </button>
            </div>
            <br></br>
          </form>
        ) : null}

        {csvHeaders.length > 0 ? (
          <div>
            {csvHeaders.map((item, index) => (
              <div style={{ display: "flex" }}>
                <table>
                  <td>
                    <tr>
                      <th4 style={{ flexGrow: 3, flex: 3 }} key={index}>
                        {item}
                      </th4>
                    </tr>
                  </td>

                  <td>
                    <select
                      className="form-select h4"
                      aria-label="Default select example"
                      value={headersMapping[item]}
                      onChange={(e) => {
                        console.log(e.target.value);
                        const global_mapping = headersMapping;
                        global_mapping[item] = e.target.value;
                        setHeadersMapping({ ...global_mapping });
                      }}
                    >
                      {headersMapping.hasOwnProperty(item) ? (
                        <option value={headersMapping[item]} key="-1">
                          {headersMapping[item]}
                        </option>
                      ) : (
                        <option value="select" key="-1">
                          select
                        </option>
                      )}
                      {remainingHeaders.map(
                        (db_header_item, db_header_index) => (
                          <option value={db_header_item} key={db_header_index}>
                            {db_header_item}
                          </option>
                        )
                      )}
                    </select>
                  </td>
                </table>
              </div>
            ))}
          </div>
        ) : null}

        {data !== undefined ? (
          <form onSubmit={uploadData}>
            <br></br>
            <div className="text-center ">
              <button
                className="btn btn-success centre glow-on-hover"
                type="submit"
              >
                Upload To DB
              </button>
            </div>
          </form>
        ) : null}

        {/* <table>
          <thead>
            <tr key={"header"}>
              {headerKeys.map((key) => (
                <th>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {array.map((item) => (
              <tr key={item.id}>
                {Object.values(item).map((val) => (
                  <td>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table> */}
        {/* File Uploade end */}
      </main>
    </div>
  );
}

export default UploadDetails;
