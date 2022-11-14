import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
import { API_URL } from "../../constants/Database";

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
    console.log("csv header",csvHeader[0].toString().toLowerCase());
  };


  const datainsert = async () => {
   
    const query = `select * from student ;`;
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

  // const getdatabase = async () => {
  //   const query = `SELECT * FROM Finance ;`;
  //   let data = { crossDomain: true, crossOrigin: true, query: query };

  //   try {
  //     axios
  //       .post(API_URL, data)
  //       .then((res) => {
  //         console.log("all data: ", res.data);
  //         // this.setState({ allData: res.data });

  //         setCountries(res.data);
  //       })
  //       .catch((err) => {
  //         console.log("all data error: ", err);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
        {/* <div className="input-group mb-3">
          <h6 className="form-label">Finance Name : </h6>
          <select
            className="form-select"
            placeholder="Choose one thing"
            id="finance"
            
          > */}
        {/* <option>Choose Finance Name </option> */}
        {/* {countries.map((comp) => (
              <option>{comp.finance_name}</option>
            ))}
          </select>
         
        </div> */}
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
          {/* <select
            className="form-select"
            placeholder="Choose one thing"
            id="branch"
          >
            {branch.map((comp) => (
              <option>{comp.address}</option>
              
            ))}
          </select>  */}
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
              console.log("DATA",e);
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
