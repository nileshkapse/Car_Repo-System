import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../../components/sidebar/Sidebar";
function ProfilePage() {
  const nevigate = useNavigate();
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
      ></link>
      <Sidebar />
      <Navbar />
      <main id="main" className="main">
        <section className="section profile"/>
          <div className="row">
            <div className="col-xl-4">
              <div className="card">
                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                  <img
                    src={process.env.PUBLIC_URL + "/static/profile-img.jpg"}
                    alt="Profile"
                    className="rounded-circle"
                  />
                  <h2>Rushikesh Koli </h2>
                  <h3>CEO 5TECHG</h3>
                </div>
              </div>
            </div>

            <div className="col-xl-8">
              <div className="card">
                <div className="card-body pt-3">
                  {/* <!-- Bordered Tabs --> */}
                  <ul className="nav nav-tabs nav-tabs-bordered">
                    <li className="nav-item">
                      <button
                        className="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-overview"
                      >
                        Overview
                      </button>
                    </li>

                    <li className="nav-item">
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-edit"
                      >
                        Edit Profile
                      </button>
                    </li>

                    <li className="nav-item">
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-settings"
                      >
                        Settings
                      </button>
                    </li>

                    <li className="nav-item">
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-change-password"
                      >
                        Change Password
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content pt-2">
                    <div
                      className="tab-pane fade show active profile-overview"
                      id="profile-overview">
                      <h5 className="card-title">About</h5>
                      <p className="small fst-italic">
                        CEO OF 5TECHG
                      </p>

                      <h5 className="card-title">Profile Details</h5>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label ">Full Name</div>
                        <div className="col-lg-9 col-md-8">Rushikesh Koli</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Company</div>
                        <div className="col-lg-9 col-md-8">
                          5TechG
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Job</div>
                        <div className="col-lg-9 col-md-8">CEO</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Country</div>
                        <div className="col-lg-9 col-md-8">India</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Address</div>
                        <div className="col-lg-9 col-md-8">
                         Pune
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Phone</div>
                        <div className="col-lg-9 col-md-8">
                          123456789
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Email</div>
                        <div className="col-lg-9 col-md-8">
                          contact5Techg@gmail.com
                        </div>
                      </div>
                    </div>
<div className="tab-pane fade pt-3" id="profile-settings">

                  {/* <!-- Settings Form --> */}
                  <form>

                    <div className="row mb-3">
                      <label for="fullName" className="col-md-4 col-lg-3 col-form-label">Email Notifications</label>
                      <div className="col-md-8 col-lg-9">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="changesMade" checked/>
                          <label className="form-check-label" for="changesMade">
                            Changes made to your account
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="newProducts" checked/>
                          <label className="form-check-label" for="newProducts">
                            Information on new products and services
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="proOffers"/>
                          <label className="form-check-label" for="proOffers">
                            Marketing and promo offers
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="securityNotify" checked disabled/>
                          <label className="form-check-label" for="securityNotify">
                            Security alerts
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">Save Changes</button>
                    </div>
                    
                  </form>
                  

                </div>

                
                <div className="tab-pane fade pt-3" id="profile-change-password">
                  {/* <!-- Change Password Form --> */}
                  <form>

                    <div className="row mb-3">
                      <label for="currentPassword" className="col-md-4 col-lg-3 col-form-label">Current Password</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="password" type="password" className="form-control" id="currentPassword"/>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="newPassword" className="col-md-4 col-lg-3 col-form-label">New Password</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="newpassword" type="password" className="form-control" id="newPassword"/>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="renewPassword" className="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="renewpassword" type="password" className="form-control" id="renewPassword"/>
                      </div>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">Change Password</button>
                    </div>
                  </form>
                  {/* <!-- End Change Password Form --> */}

                </div>

                 <div className="tab-pane fade profile-edit pt-3" id="profile-edit">

                  {/* <!-- Profile Edit Form --> */}
                  <form>
                    <div className="row mb-3">
                      <label for="profileImage" className="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                      <div className="col-md-8 col-lg-9">
                        <img src={process.env.PUBLIC_URL + "/static/profile-img.jpg"} alt="Profile"/>
                        <div className="pt-2">
                          <Row>
                            <Col>
                            <div>
                            <a href="#" className="btn btn-primary btn-sm " title="Upload new profile image"><input classnName="" type="file" /></a>
                            </div>
                            </Col>
                            
                        <Col> <a href="#" className="btn btn-danger btn-sm" title="Remove my profile image"><i className="bi bi-trash"></i></a></Col>
                                          
                          </Row>
                           
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="fullName" className="col-md-4 col-lg-3 col-form-label">Full Name</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="fullName" type="text" className="form-control" id="fullName" value="Rushikesh Koli"/>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="about" className="col-md-4 col-lg-3 col-form-label">About</label>
                      <div className="col-md-8 col-lg-9">
                        <textarea name="about" className="form-control" id="about">CEO of 5TECHG</textarea>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="company" className="col-md-4 col-lg-3 col-form-label">Company</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="company" type="text" className="form-control" id="company" value="5TechG"/>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="Job" className="col-md-4 col-lg-3 col-form-label">Job</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="job" type="text" className="form-control" id="Job" value="CEO"/>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="Country" className="col-md-4 col-lg-3 col-form-label">Country</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="country" type="text" className="form-control" id="Country" value="India"/>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="Address" className="col-md-4 col-lg-3 col-form-label">Address</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="address" type="text" className="form-control" id="Address" value="Pune"/>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="Phone" className="col-md-4 col-lg-3 col-form-label">Phone</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="phone" type="text" className="form-control" id="Phone" value="123456778"/>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="email" type="email" className="form-control" id="Email" value="cotact5tech@gmail.com"/>
                      </div>
                    </div><div className="text-center">
                      <button type="submit" className="btn btn-primary">Save Changes</button>
                    </div>
                    </form></div>
</div></div></div>
</div>
</div>
      </main>
    </div>
  );
}

export default ProfilePage;
