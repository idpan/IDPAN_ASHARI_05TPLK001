import React from "react";
import { Link } from "react-router-dom";

function ButtonLink({ url, icon, children }) {
  return (
    <Link
      to={url}
      className="d-flex align-items-center justify-content-center fw-bold btn btn-primary"
    >
      <i className={`fs-4 bi ` + icon}></i>
      <span className="ms-3 text-capitalize">{children}</span>
    </Link>
  );
}

export default ButtonLink;
