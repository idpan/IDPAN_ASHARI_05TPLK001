// src/components/Header.js
import React from "react";

import logo from "../assets/images/unpam-logotype.png";
import profile from "../assets/images/profile.jpg";

const Header = ({ toggleSidebar }) => {
  return (
    <header
      style={{ height: "70px" }}
      className="d-flex justify-content-between align-items-center bg-primary pe-4 "
    >
      <div className="d-flex align-items-center justify-content-between gap-5 px-4 h-100 bg-info bg-opacity-25">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="logo-unpam" style={{ height: "50px" }} />
        </a>
        <button className="navbar-toggler" onClick={toggleSidebar}>
          <i
            className=" bi bi-list"
            style={{ fontSize: "2.5rem", color: "white" }}
          ></i>
        </button>
      </div>

      <div>
        <img
          src={profile}
          alt="profile-picture"
          className="profile-picture rounded-5 border"
          style={{ width: "50px", height: "50px" }}
        />
      </div>
    </header>
  );
};

export default Header;
