import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import ButtonExample from "../_themeUseExample/buttonExample";
import PatientDash from "../Features/Patient/Pages/PatientDash";
import DoctorDash from "../Features/Doctor/Pages/DoctorDash";
// import PatientDetail from "../Features/Doctor/Pages/PatientDetail";
import Patients from "../Features/Doctor/Pages/Patients";

// Import global routing here
function App() {
  // Temporary: Set a mock token for testing
  // TODO: Replace this with proper login flow
  useEffect(() => {
    // Check if token already exists
    const existingToken = localStorage.getItem("token");
    if (!existingToken) {
      // Set a temporary token for testing
      // You'll need to replace this with a real token from your backend
      console.log(
        "⚠️  No token found. Please log in or add a valid token to localStorage."
      );
      console.log("You can manually set a token in the browser console:");
      console.log('localStorage.setItem("token", "YOUR_BACKEND_TOKEN_HERE")');
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<DoctorDash />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/patient/:id" element={<PatientDetail />} />
    </Routes>
  );
}

export default App;
