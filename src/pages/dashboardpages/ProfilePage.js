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
        <section class="section profile"/>
          <div class="row">
            <div class="col-xl-4">
              <div class="card">
                <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
                  <img
                    src={process.env.PUBLIC_URL + "/static/profile-img.jpg"}
                    alt="Profile"
                    class="rounded-circle"
                  />
                  <h2>Rushikesh Koli </h2>
                  <h3>CEO 5TECHG</h3>
                </div>
              </div>
            </div>

            <div class="col-xl-8">
              <div class="card">
                <div class="card-body pt-3">
                  {/* <!-- Bordered Tabs --> */}
                  <ul class="nav nav-tabs nav-tabs-bordered">
                    <li class="nav-item">
                      <button
                        class="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-overview"
                      >
                        Overview
                      </button>
                    </li>

                    <li class="nav-item">
                      <button
                        class="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-edit"
                      >
                        Edit Profile
                      </button>
                    </li>

                    <li class="nav-item">
                      <button
                        class="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-settings"
                      >
                        Settings
                      </button>
                    </li>

                    <li class="nav-item">
                      <button
                        class="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-change-password"
                      >
                        Change Password
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content pt-2">
                    <div
                      class="tab-pane fade show active profile-overview"
                      id="profile-overview">
                      <h5 class="card-title">About</h5>
                      <p class="small fst-italic">
                        CEO OF 5TECHG
                      </p>

                      <h5 class="card-title">Profile Details</h5>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label ">Full Name</div>
                        <div class="col-lg-9 col-md-8">Rushikesh Koli</div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">Company</div>
                        <div class="col-lg-9 col-md-8">
                          5TechG
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">Job</div>
                        <div class="col-lg-9 col-md-8">CEO</div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">Country</div>
                        <div class="col-lg-9 col-md-8">India</div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">Address</div>
                        <div class="col-lg-9 col-md-8">
                         Pune
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">Phone</div>
                        <div class="col-lg-9 col-md-8">
                          123456789
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">Email</div>
                        <div class="col-lg-9 col-md-8">
                          contact5Techg@gmail.com
                        </div>
                      </div>
                    </div>
<div class="tab-pane fade pt-3" id="profile-settings">

                  {/* <!-- Settings Form --> */}
                  <form>

                    <div class="row mb-3">
                      <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Email Notifications</label>
                      <div class="col-md-8 col-lg-9">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="changesMade" checked/>
                          <label class="form-check-label" for="changesMade">
                            Changes made to your account
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="newProducts" checked/>
                          <label class="form-check-label" for="newProducts">
                            Information on new products and services
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="proOffers"/>
                          <label class="form-check-label" for="proOffers">
                            Marketing and promo offers
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="securityNotify" checked disabled/>
                          <label class="form-check-label" for="securityNotify">
                            Security alerts
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="text-center">
                      <button type="submit" class="btn btn-primary">Save Changes</button>
                    </div>
                    
                  </form>
                  

                </div>

                
                <div class="tab-pane fade pt-3" id="profile-change-password">
                  {/* <!-- Change Password Form --> */}
                  <form>

                    <div class="row mb-3">
                      <label for="currentPassword" class="col-md-4 col-lg-3 col-form-label">Current Password</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="password" type="password" class="form-control" id="currentPassword"/>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="newPassword" class="col-md-4 col-lg-3 col-form-label">New Password</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="newpassword" type="password" class="form-control" id="newPassword"/>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="renewPassword" class="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="renewpassword" type="password" class="form-control" id="renewPassword"/>
                      </div>
                    </div>

                    <div class="text-center">
                      <button type="submit" class="btn btn-primary">Change Password</button>
                    </div>
                  </form>
                  {/* <!-- End Change Password Form --> */}

                </div>

                 <div class="tab-pane fade profile-edit pt-3" id="profile-edit">

                  {/* <!-- Profile Edit Form --> */}
                  <form>
                    <div class="row mb-3">
                      <label for="profileImage" class="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                      <div class="col-md-8 col-lg-9">
                        <img src={process.env.PUBLIC_URL + "/static/profile-img.jpg"} alt="Profile"/>
                        <div class="pt-2">
                          <Row>
                            <Col>
                            <div>
                            <a href="#" class="btn btn-primary btn-sm " title="Upload new profile image"><input classnName="" type="file" /></a>
                            </div>
                            </Col>
                            
                        <Col> <a href="#" class="btn btn-danger btn-sm" title="Remove my profile image"><i class="bi bi-trash"></i></a></Col>
                                          
                          </Row>
                           
                        </div>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Full Name</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="fullName" type="text" class="form-control" id="fullName" value="Rushikesh Koli"/>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="about" class="col-md-4 col-lg-3 col-form-label">About</label>
                      <div class="col-md-8 col-lg-9">
                        <textarea name="about" class="form-control" id="about">CEO of 5TECHG</textarea>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="company" class="col-md-4 col-lg-3 col-form-label">Company</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="company" type="text" class="form-control" id="company" value="5TechG"/>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="Job" class="col-md-4 col-lg-3 col-form-label">Job</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="job" type="text" class="form-control" id="Job" value="CEO"/>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="Country" class="col-md-4 col-lg-3 col-form-label">Country</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="country" type="text" class="form-control" id="Country" value="India"/>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="Address" class="col-md-4 col-lg-3 col-form-label">Address</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="address" type="text" class="form-control" id="Address" value="Pune"/>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="Phone" class="col-md-4 col-lg-3 col-form-label">Phone</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="phone" type="text" class="form-control" id="Phone" value="123456778"/>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="Email" class="col-md-4 col-lg-3 col-form-label">Email</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="email" type="email" class="form-control" id="Email" value="cotact5tech@gmail.com"/>
                      </div>
                    </div><div class="text-center">
                      <button type="submit" class="btn btn-primary">Save Changes</button>
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
