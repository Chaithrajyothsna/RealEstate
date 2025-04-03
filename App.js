// App.js
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import Services from "./Services";
import Drop from "./Drop";
import PropertyListing from "./PropertyListing";
import SecondPage from "./SecondPage";
import HomeLoan from "./HomeLoan";
import Lands from "./Lands";
import Villa from "./Villa";
import CallDetails from "./CallDetails";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import VisitForm from "./VisitForm";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import HelpPage from "./HelpPage";
import Contact from "./Contact";
import VisitDetails from "./VisitDetails";
import EMICalculator from "./EMICalculator";

// Define the Apartments component (if it doesn't already exist)
import Apartment from "./Apartment"; // Ensure this file exists
import { EqualApproximately } from "lucide-react";

const App = () => {
  const [user, setUser] = useState(null);

  // Check localStorage for user data on initial load
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser)); // Set user state with saved data
    }
  }, []);

  return (
    <Router>
      <div>
        <Header user={user} setUser={setUser} /> {/* Pass user state to Header for dynamic updates */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Signup" element={<Signup setUser={setUser} />} />
          <Route path="/SecondPage" element={<SecondPage />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/apartment" element={<Apartment />} /> {/* Add Apartments Route */}
          <Route path="/Lands" element={<Lands />} />
          <Route path="/villa" element={<Villa />} />
          <Route path="/Login" element={<Login setUser={setUser} />} />
          <Route path="/PropertyListing" element={<PropertyListing />} />
          <Route path="/CallDetails" element={<CallDetails />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/HomeLoan" element={<HomeLoan />} />
          <Route path="/drop/:category" element={<Drop />} />
          <Route path="/HelpPage" element={<HelpPage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/VisitForm" element={<VisitForm />} />
          <Route path="/VisitDetails" element={<VisitDetails />} />
          <Route path="/EMICalculator" element={<EMICalculator />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
