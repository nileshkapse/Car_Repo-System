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

    const array = csvRows.map((i) => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });

    setArray(array);
    console.log("csv data",csvRows);
  };


  const datainsert = async () => {
   
    console.log("Header key data ",);
    
    const query = `INSERT INTO student(${headerKeys[0].toString().toLowerCase()},${headerKeys[1].toString().toLowerCase()}) VALUES ('mi',40);`;
    let data = { crossDomain: true, crossOrigin: true, query: query };
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
    
  };


  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
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
    datainsert ();
  }, []);

  return (
    <div>
      <main id="main" className="main">
        <Navbar />
        <Sidebar />
        <div className="input-group ">
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1 ">
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

        
        {/* File upload */}
        <div className="file-upload">
          <input
            type={"file"}
            id={"csvFileInput"}
            accept={".csv"}
            onChange={handleOnChange}
          />
          <h3>Drag and drop a file or select CSV</h3>

          <br />
          <button
            className="btn btn-success centre"
            type="button"
            onClick={(e) => {
              handleOnSubmit(e);
              datainsert();
            }}
          >
            Add Files
          </button>
        </div>

        <table>
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
        </table>
        {/* File Uploade end */}
      </main>
    </div>
  );
}

export default UploadDetails;
