import React from "react";
import { LANDING_PAGE_URL } from "../../constants/URLS";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

function Appuser() {
  const nevigate = useNavigate();
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
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body ">
              <h1 className="card-title text-info">App Users</h1>

              {/* <!-- Table with stripped rows --> */}
              <form
                className=" search-form d-flex align-items-center"
                method="post"
                action="#"
              >
                <input
                  type="text"
                  name="query"
                  placeholder="Search"
                  title="Enter search keyword"
                />

                <a
                  className="nav-link nav-icon search-bar-toggle "
                  href=""
                  onClick={() => {}}
                >
                  <i className="bi bi-search"></i>
                </a>
              </form>
              <br/>
               
              {/* <!-- Primary Color Bordered Table --> */}
              <table className="table ">
                <thead>
                  <tr>
                    <th scope="col" className="text-primary">Sr.No</th>
                    <th scope="col" className="text-primary">Name</th>
                    <th scope="col" className="text-primary">IsActive</th>
                    <th scope="col" className="text-primary">IsAdmin</th>
                    <th scope="col" className="text-primary">Balance Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Brandon Jacob</td>
                    <td><input type="checkbox" id="scales" 
             /></td>
                   <td><input type="checkbox" id="scales" 
             /></td>
                    <td>$899</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Bridie Kessler</td>
                    <td><input type="checkbox" id="scales" 
             /></td>
                   <td><input type="checkbox" id="scales" 
             /></td>
                    <td>$899</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Ashleigh Langosh</td>
                     <td><input type="checkbox" id="scales" 
             /></td>
                   <td><input type="checkbox" id="scales" 
             /></td>
                    <td>$899</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Angus Grady</td>
                     <td><input type="checkbox" id="scales" 
             /></td>
                   <td><input type="checkbox" id="scales" 
             /></td>
                    <td>$899</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Raheem Lehner</td>
                     <td><input type="checkbox" id="scales" 
             /></td>
                   <td><input type="checkbox" id="scales" 
             /></td>
                    <td>$899</td>
                  </tr>
                </tbody>
              </table>
              {/* <!-- End Primary Color Bordered Table --> */}
             
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}

export default Appuser;
