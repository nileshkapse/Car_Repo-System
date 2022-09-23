import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

function UploadDetails() {
  const nevigate = useNavigate();
  return (
    <div>
      <main id="main" className="main">
        <div class="file-upload">
          <button class="file-upload-btn" type="button">
            Add Files
          </button>
          <div class="image-upload-wrap">
            <input class="file-upload-input" type="file" />
            <div class="drag-text">
              <h3>Drag and drop a file or select CSV</h3>
            </div>
          </div>
        </div>
      </main>
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default UploadDetails;
