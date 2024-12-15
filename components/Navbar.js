import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>HealthCare Portal</h2>
      </div>
      <div className="navbar-links">
        <Link to="/admin">Admin</Link>
        <Link to="/doctor">Doctor</Link>
        <Link to="/appointment">Appointment</Link>
        <Link to="/patient">Patient</Link>
      </div>
    </nav>
  );
};

export default Navbar;
