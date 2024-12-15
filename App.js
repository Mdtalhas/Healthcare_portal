import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Admin from './pages/Admin';
import Doctor from './pages/Doctor';
import Appointment from './pages/Appointment';
import Patient from './pages/Patient';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/patient" element={<Patient />} />
        </Routes>
    </Router>
  );
}

export default App;
