import {
  BrowserRouter,
  Navigate,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  LANDING_PAGE_URL,
  APP_USER_URL,
  FINACE_DETAILS_URLS,
  FIND_VEHICLE_URLS,
  DETAILS_VIEW_URLS,
  UPLOAD_DETAILS_URLS,
  PROFILE_PAGES_URLS,
  LOGIN_PAGES_URLS,
  CUSTOM_TABLE,
  RECENT_VEHICLE,
} from "./constants/URLS";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Appuser from "./pages/dashboardpages/Appuser";
import Finacedetails from "./pages/dashboardpages/Finacedetails";
import FindVehicle from "./pages/dashboardpages/FindVehicle";
import DetailsView from "./pages/dashboardpages/DetailsView";
import UploadDetails from "./pages/dashboardpages/UploadDetails";
import ProfilePage from "./pages/dashboardpages/ProfilePage";
import LoginPage from "./pages/dashboardpages/LoginPage";

import CustomTable from "./pages/dashboardpages/CustomTable";
import React, { useState } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/dashboardpages/LoginPage";
import Main from "./pages/LandingPage";

const App = () => {
  // const navigate = useNavigate();

  // const location=useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("isLoggedIn") === "true" ? true : false
    );

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // React.useEffect(() => {
  //   console.log("page is loading");
  // }, []);
  React.useEffect(() => {
    console.log("page is loading");
    // if( localStorage.getItem("isLoggedIn") ){
    //   setIsLoggedIn(true);
    //   if(location==="/login"){
    //     navigate("/")
    //   }

    // }
    // else{
    //  if(location!=="/login"){
    //     navigate("/login")
    //   }
    // }
  }, []);

  return (
    <Router>
      <div className="container-fluid m-0 p-0">
        {isLoggedIn && (
          <Routes>
            {/* <Route path="/" exact component={Main} />
            <Route path="/" component={Main} /> */}
            
        {/* <Route path="" exact component={Main} /> */}
        {/* <Route path="/" component={Main} /> */}

        {/* Landing Page */}
        <Route path={LANDING_PAGE_URL} element={<LandingPage />} />
        <Route path={APP_USER_URL} element={<Appuser />} />
        <Route path={FINACE_DETAILS_URLS} element={<Finacedetails />} />
        <Route path={FIND_VEHICLE_URLS} element={<FindVehicle />} />
        <Route path={DETAILS_VIEW_URLS} element={<DetailsView />} />
        <Route path={UPLOAD_DETAILS_URLS} element={<UploadDetails />} />
        <Route path={PROFILE_PAGES_URLS} element={<ProfilePage />} />
        {/* <Route path={LOGIN_PAGES_URLS} element={<LoginPage />} /> */}
        <Route path={CUSTOM_TABLE} element={<CustomTable />} />
        <Route path="*" element={<Navigate to={LANDING_PAGE_URL} />} />
      
          </Routes>
        )}
        {!isLoggedIn && <Login />}
      </div>

    </Router>

    
  );
};

export default App;
