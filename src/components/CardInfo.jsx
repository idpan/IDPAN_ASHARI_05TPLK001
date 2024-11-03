import React from "react";

function CardInfo({ icon, color, label, amount, date }) {
  return (
    <div className="d-flex gap-3 align-items-center bg-white py-3 px-3  shadow rounded-2">
      <div style={{ backgroundColor: color }} className="py-2 px-3 rounded-2">
        <i className={`fs-3 text-white bi ` + icon}></i>
      </div>
      <div>
        <p className="m-0 fs-5 text-body-tertiary">{label}</p>
        <p className="m-0 fs-5 text-body-tertiary">{date}</p>
        <p className="m-0 fs-3  text-secondary">{amount}</p>
      </div>
    </div>
  );
}

export default CardInfo;
