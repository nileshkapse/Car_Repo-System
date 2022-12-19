import React from "react";
import { useNavigate } from "react-router-dom";
import { LANDING_PAGE_URL } from "../../constants/URLS";
import Box from "@mui/material/Box";
import { green,pink,red } from "@mui/material/colors";
import Icon from "@mui/material/Icon";

function LoginPage() {
  const nevigate = useNavigate();
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      <link
        href="assets/vendor/bootstrap/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
        rel="stylesheet"
      />
      <link
        href="assets/vendor/boxicons/css/boxicons.min.css"
        rel="stylesheet"
      />
      <link href="assets/vendor/quill/quill.snow.css" rel="stylesheet" />
      <link href="assets/vendor/quill/quill.bubble.css" rel="stylesheet" />
      <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
      <link href="assets/vendor/simple-datatables/style.css" rel="stylesheet" />
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <a className="logo d-flex align-items-center w-auto">
                    <img
                      src={process.env.PUBLIC_URL + "/static/5techg.png"}
                      alt="5TechG"
                    />
                  </a>
                </div>
                {/* <!-- End Logo --> */}

                <div className="card mb-6">
                  <div className="card-body">
                    <div className="pt-2 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">
                        Login to Your Account
                      </h5>
                      <br />
                    </div>

                    <form className="row g-3 needs-validation" novalidate>
                      <div className="col-12">
                        <label for="yourUsername" className="form-label">
                          Username
                        </label>
                        <div className="input-group has-validation">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend"
                          >
                            @
                          </span>
                          <input
                            type="text"
                            name="username"
                            className="form-control"
                            id="yourUsername"
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter your username.
                          </div>
                          <Icon sx={{ color: green[500],m:1}}>done</Icon>
                          <Icon sx={{ color: red[500],m:1}}>clear</Icon>
                        </div>
                        {/* <Bo
                          sx={{
                            "& > :not(style)": {
                              m: 2,
                            },
                          }}
                        > */}
                          
                        {/* </Box> */}
                      </div>

                      <div className="col-12">
                        <label for="yourPassword" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="yourPassword"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your password!
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="remember"
                            value="true"
                            id="rememberMe"
                          />
                          <label className="form-check-label" for="rememberMe">
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-primary w-100 nav-link"
                          type="submit"
                          onClick={() => {
                            nevigate(LANDING_PAGE_URL);
                          }}
                        >
                          Login
                        </button>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">
                          Don't have account?{" "}
                          <a href="pages-register.html">Create an account</a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LoginPage;
