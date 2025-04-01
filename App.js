import React, { useState } from "react";
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

const App = () => {
  const [user, setUser] = useState(null); // State to manage user login

  return (
    <Router>
      <div>
        <Header user={user} /> {/* Pass user state to Header for dynamic updates */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/SecondPage" element={<SecondPage />} />
         <Route path="/Services" element={<Services />} />
          <Route path="/apartment" element={<Apartments />} />
         <Route path="/Lands" element={<Lands />} />
         <Route path="/villa" element={<Villa />} />
          <Route path="/Login" element={<Login setUser={setUser} />} />
          <Route path="/PropertyListing" element={<PropertyListing/>}/>
          <Route path="/CallDetails" element={<CallDetails />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/HomeLoan" element={<HomeLoan />} />
          <Route path="/drop/:category" element={<Drop />} />
          <Route path="/HelpPage" element={<HelpPage />} />
          <Route path="/Lands" element={<Lands />} />
          <Route path="/Villa" element={<Villa />} />
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
