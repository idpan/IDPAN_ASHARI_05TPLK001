import React from "react";
import { NavLink } from "react-router-dom";

function SidebarNav({ icon, label, url }) {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        `d-flex align-items-center fw-bold btn mb-2 ${
          isActive
            ? "btn btn-primary bg-primary py-1 text-white"
            : "text-body-tertiary"
        }`
      }
    >
      <i className={`fs-4 bi ${icon}`}></i>
      <span className="ms-3 text-capitalize">{label}</span>
    </NavLink>
  );
}

export default SidebarNav;
