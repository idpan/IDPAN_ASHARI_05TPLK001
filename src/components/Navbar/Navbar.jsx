import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Navbar.css";
import unpamLogotype from "../assets/unpam-logotype.png";
import profilePicture from "../assets/profile.jpg";

function Navbar() {
  return (
    <header className="d-flex justify-content-between align-items-center bg-primary pe-4">
      <div className="d-flex align-items-center justify-content-between gap-5 px-4 h-100 bg-info bg-opacity-25">
        <a href="/" className="navbar-brand">
          <img src={unpamLogotype} alt="unpam-logotype" />
        </a>
        <button className="navbar-toggler" onclick="toggleSidebar()">
          <i className="fs-3 bi bi-list"></i>
        </button>
        {/* style="font-size: 2.5rem; color: white" */}
      </div>
      <div>
        <img
          src={profilePicture}
          alt="profile-picture"
          className="profile-picture rounded-5 border"
        />
      </div>
    </header>
  );
}

export default Navbar;
