import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import { LANDING_PAGE_URL,APP_USER_URL, FINACE_DETAILS_URLS, FIND_VEHICLE_URLS, DETAILS_VIEW_URLS, UPLOAD_DETAILS_URLS,PROFILE_PAGES_URLS} from "./constants/URLS"
import './App.css';
import LandingPage from "./pages/LandingPage";
import Appuser from "./pages/dashboardpages/Appuser";
import Finacedetails from "./pages/dashboardpages/Finacedetails";
import FindVehicle from "./pages/dashboardpages/FindVehicle";
import DetailsView from "./pages/dashboardpages/DetailsView";
import UploadDetails from "./pages/dashboardpages/UploadDetails";
import ProfilePage from "./pages/dashboardpages/ProfilePage";

function App() {
  return (
    <BrowserRouter>
          <Routes>
            {/* Landing Page */}
            <Route path={LANDING_PAGE_URL} element={<LandingPage/>} />
            <Route
              path={APP_USER_URL}
              element={<Appuser/>}
            />
            <Route 
              path={FINACE_DETAILS_URLS}
              element={<Finacedetails/>}
            />
           <Route 
              path={FIND_VEHICLE_URLS}
              element={<FindVehicle/>}
            /> 
            <Route
              path={DETAILS_VIEW_URLS}
              element={<DetailsView/>}
            />
            <Route
              path={UPLOAD_DETAILS_URLS}
              element={<UploadDetails/>}
            />
            <Route
              path={PROFILE_PAGES_URLS}
              element={<ProfilePage/>}
            />
            <Route path="*" element={<Navigate to={LANDING_PAGE_URL} />} />
          </Routes>
        </BrowserRouter>  
  );
}

export default App;
