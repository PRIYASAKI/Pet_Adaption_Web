// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Update to use Routes instead of Switch
import Home from "./pages/Home";
import PetList from "./pages/PetList";
import PetProfile from "./pages/PetProfile";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import PetCareTips from "./pages/PetCareTips";
import Application from "./pages/Application";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PetAll from "./pages/PetAll";



function App() {
  return (
    <Router>
      {/* Only render the Navbar on Home page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/petscare" element={<PetCareTips />} />
        <Route path="/application" element={<Application />} />
        <Route path="/pets" element={<PetList />} />
        <Route path="/pet-profile/:petType" element={<PetProfile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/petall" element={<PetAll />} />

      </Routes>
    </Router>
  );
}

export default App;
