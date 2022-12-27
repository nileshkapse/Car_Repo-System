import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";
import { useCSVReader } from 'react-papaparse';
import axios from "axios";
import '../tables.scss'
import { API_URL } from "../../constants/Database";
import { useEffect } from "react";




function UploadDetails() {
  // csv reader function
  const { CSVReader } = useCSVReader();
  // create all states here
  const [csvArray, setCsvArray] = useState([]);
  const [csvHeaders, setCsvHeaders] = useState([])
  const [csvrow, setCsvRow] = useState([])
  const [branch, setBranch] = useState([])
  const [allCsvRow, setAllCsvRow] = useState([])
  const [formData, setFormData] = useState({})


  // tatal header types in database
  const header = ["Contract No", "Rc Number", "Mek and Model", "Regon", "Area", "Region", "Branch", "Customer Name", "Engine Number", "Chassis Number", "Ex Name", "Level1", "Level2", "Level3", "Level4", "Level1Con", "Level2Con", "Level3Con", "Level4Con", "Bkt", "Od", "Gv", "Ses9", "Ses17", "Tbr", "Poss"]


  // set header function ofter click on map function
  const handleSetHeader = (value, index) => {
    return csvHeaders[index] = {
      value: value,
      color: true
    }
  }

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


  // check a object value with header types
  function checkvalue() {
    const newItem = csvrow.map((item, index) => {

      // all regex code started
      var regex = new RegExp(/^(([A-Za-z]){2,3}(|-)(?:[0-9]){1,2}(|-)(?:[A-Za-z]){2}(|-)([0-9]){1,4})|(([A-Za-z]){2,3}(|-)([0-9]){1,4})$/g);
      let vehicleregex = new RegExp(/[A-HJ-NPR-Z0-9]{17}/i);
      let nameregex = new RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g);
      let mobileregex = new RegExp(/^[6-9]\d{9}$/gi);
      let contractregex = new RegExp(/^[1-5]\d{9}$/gi);
      let Engineregex = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/);
      // all regex code end

      // Rc number checking...
      if (regex.test(item) === true && !csvHeaders.includes("Rc Number")) {
        return handleSetHeader("Rc Number", index);
      } else if (regex.test(item) === true) {
        return handleSetHeader(csvHeaders[index].value, index);
      }

      // Contract number checking...
      if (contractregex.test(item) === true && !csvHeaders.includes("Contract No")) {
        return handleSetHeader("Contract No", index);
      } else if (contractregex.test(item) === true) {
        return handleSetHeader(csvHeaders[index].value, index);
      }

      // Chassis number checking...
      if (vehicleregex.test(item) === true && !csvHeaders.includes("Chassis Number")) {
        return handleSetHeader("Chassis Number", index)
      } else if (vehicleregex.test(item) === true) {
        return handleSetHeader(csvHeaders[index].value, index);
      }

      // Engine number checking...
      if (Engineregex.test(item) && (item.length >= 17 && item.length >= 10) && !csvHeaders.includes("Engine Number")) {
        return handleSetHeader("Engine Number", index)
      } else if (Engineregex.test(item)) {
        return handleSetHeader(csvHeaders[index].value, index);
      }


      // All name type checking...
      if (nameregex.test(item) && item.indexOf(' ') >= 0) {
        if (!csvHeaders.includes("Customer Name")) {
          return handleSetHeader("Customer Name", index)
        } else if (!csvHeaders.includes("Level1")) {
          return handleSetHeader("Level1", index)
        } else if (!csvHeaders.includes("Level2")) {
          return handleSetHeader("Level2", index)
        } else if (!csvHeaders.includes("Level3")) {
          return handleSetHeader("Level3", index)
        } else {
          return handleSetHeader("Level4", index)
        }
      }
      // Branch checking...
      if (item.indexOf(' ') <= 0 && (!csvHeaders.includes("Branch") && nameregex.test(item))) {
        return handleSetHeader("Branch", index)
      }
      // Mobile number checking...
      if (mobileregex.test(item)) {
        if (!csvHeaders.includes("Level1con")) {
          return handleSetHeader("Level1con", index)
        } else if (!csvHeaders.includes("Level2con")) {
          return handleSetHeader("Level2con", index)
        } else if (!csvHeaders.includes("Level3con")) {
          return handleSetHeader("Level3con", index)
        } else {
          return handleSetHeader("Level4con", index)
        }
      } else {
        return (csvHeaders[index])
      }
    })
    setCsvHeaders(newItem)
  }



  const mapSubmit = (e) => {
    e.preventDefault()
    checkvalue()
    setHead()
  }


  // console.log(csvArray);

  // input field set using state
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevProps) => ({
      ...prevProps,
      [name]: value.trim()
    }));
  };


  // Manual correction map function
  const nextMap = () => {
    let formDataKeys = (Object.keys(formData));
    if (formDataKeys.length == 0) {
      return alert("Input field are empty")
    }
    let formDataValue = Object.values(formData)
    const newCsvHeaders = csvHeaders.map((val, index1) => {
      let newData = {}
      for (let i = 0; i < formDataValue.length; i++) {
        if (formDataValue[i] == val.value) {
          newData = csvHeaders[index1] = {
            value: formDataKeys[i],
            color: true
          }
          break
        } else {
          newData = csvHeaders[index1] = val
        }
      }
      // console.log(newData);
      return newData
    })
    setCsvHeaders(newCsvHeaders)
    setHead()
    setFormData({})
  }



  // header function
  function setHead() {
    const newhead = csvHeaders.map((val) => {
      return val.value.toLowerCase().split(" ").join("_")
    })

    // console.log(newhead);
    const newArray = allCsvRow.map(row => {
      const eachObject = newhead.reduce((obj, header, i) => {
        obj[header] = row[i];
        return obj;
      }, {})
      return eachObject;
    })
    return setCsvArray(newArray)
  }




  // upload data to database function
  const uploadDb = async (e) => {
    e.preventDefault();

    // find column name in data
    let database_Column = Object.keys(csvArray[0])
    let oldArray = []; // create an empty array of length n
    for (var i = 0; i < csvArray.length - 1; i++) {
      let newArr = Object.values(csvArray[i])
      oldArray[i] = new Array(newArr); // make each element an array
    }

    // set query values in bracket and convert into string
    let updateArray = oldArray.flatMap((values) => {
      return `(${(values.map((value) => {
        return (value.map((val, index, arr) => {
          return arr[index] = `'${val}'`
        }))
      }))})`
    })

    // set database query with column names and values
    const query = `INSERT INTO vehicle (${database_Column}) VALUES ${updateArray}`
    let data = { crossDomain: true, crossOrigin: true, query: query };

    try {
      axios
        .post(API_URL, data)
        .then((res) => {
          if (res.status == 200) {
            alert("Successfull \nTotal " + res.data.affectedRows + " data inserted in database")
            setCsvArray([])
            setFormData()
          } else {
            alert("Unsuccessfull insert\nTrying inserted large file")
          }
        })
        .catch((err) => {
          alert("Unsuccessfull insert\nTrying inserted large file or server down");
        });
    } catch (error) {
      console.log(error);
    }

  }


  useEffect(() => {
    getbranch();
  });


  return (
    <>
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
                {branch.map((data) => (
                  <option>
                    {data.branchName} <label className="secondary"> </label>
                    {data.address}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <CSVReader
            onUploadAccepted={(results) => {
              // console.log('---------------------------');
              const header = results.data[0].filter((val) => {
                return val.trim()
              })

              const val = header.map((val, index, arr) => {
                return arr[index] = {
                  value: val.trim(),
                  color: false
                }
              })

              // console.log(val);
              setCsvHeaders(val)
              const rows = results.data
              rows.shift()
              setAllCsvRow(rows)
              setCsvRow(rows[0])

              // console.log(csvrow, csvHeaders);

              if (rows[0].length != header.length) {
                return alert("Empty header area or row area")
              }
              const newArray = rows.map(row => {
                const values = row;
                const eachObject = val.reduce((obj, header, i) => {
                  // console.log(header);
                  // console.log(obj);
                  obj[header.value] = values[i];
                  return obj;
                }, {})
                return eachObject;
              })
              setCsvArray(newArray)
              // console.log('---------------------------');
            }}
          >

            {({
              getRootProps,
              acceptedFile,
              ProgressBar,
              getRemoveFileProps,
            }) => (
              <>
                <div className="d-flex">
                  <button type='button' className="btn btn-danger me-3" {...getRootProps()}>
                    Browse file
                  </button>
                  <div>
                    {acceptedFile && acceptedFile.name}
                  </div>
                  <button className="btn btn-primary me-3" {...getRemoveFileProps()}>
                    Remove
                  </button>
                  {
                    csvArray.length > 0 &&
                    <button
                      className="btn btn-success me-3"
                      onClick={mapSubmit}
                    >
                      Mapping
                    </button>
                  }
                  {
                    csvArray.length > 0 &&
                    <button
                      className="btn btn-secondary me"
                      onClick={(e) => {
                        e.preventDefault()
                        nextMap()
                      }}
                    >
                      Next Mapping
                    </button>
                  }
                  {
                    csvArray.length > 0 && <button className="btn btn-info ms-3" onClick={uploadDb}>Upload</button>
                  }
                </div>
                <ProgressBar />
              </>
            )}
          </CSVReader>

          {csvArray.length > 0 ?
            <>
              <div className="transationItem">
                <div className="bottom">
                  <table id="customers">
                    <thead>
                      <tr>
                        {
                          csvHeaders.map((val, index) => (
                            <th key={index} style={val.color ? { background: "green" } : {}}>{val.value}</th>
                          ))
                        }
                      </tr>

                    </thead>
                    <tbody>

                      {
                        csvArray.map((item, index) => (
                          <tr key={index}>
                            {Object.values(item).map((val, index) => (
                              <td key={index}>{val}</td>
                            ))}
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                  <div style={{
                    display: "flex",
                    width: "100%",
                    position: "sticky",
                    bottom: "0",
                    background: "white",
                    overflowX: "scroll"
                  }}>
                    {
                      header.map((val, index) => (
                        <>
                          <form>
                            <div key={index} className="m-2" style={{
                              minWidth: "200px"
                            }}>
                              <span style={{
                                color: "red"
                              }}>{val}</span>
                              <input type="text" className="form-control" autoComplete="off" placeholder={val} name={val} onChange={handleInputChange} value={formData.val}></input>
                              {/* <select className="form-select m-2" aria-label="Default select example" value={formData.val} name={val} onChange={handleInputChange}>
                              <option value="" selected defaultValue="">Select</option>
                              {
                                csvHeaders.map((val) => (
                                  <option value={val}>{val}</option>
                                ))
                              }
                            </select> */}
                            </div>
                          </form>
                        </>
                      ))
                    }
                  </div>
                </div>
              </div>
            </> : null
          }
        </div>
      </main>
    </>
  );
}
export default UploadDetails;
