import React from "react";
import { Link } from "react-router-dom";

function TableWrapper({ title, btnLabel, tHead, children, isBtnStatus }) {
  return (
    <div className="container px-4">
      <div className="bg-white rounded-2 pt-3 px-3 shadow">
        <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
          <h3 className="text-secondary fs-4">{title}</h3>
          {btnLabel && (
            <Link
              to="/tambah-data-karyawan"
              className=" px-4 py-1 d-flex align-items-center justify-content-center fw-bold btn btn-primary rounded-5"
            >
              {isBtnStatus ? (
                <i className="fs-3 bi bi-check "></i>
              ) : (
                <i className="fs-3 bi bi-plus "></i>
              )}
              <span className="text-capitalize">{btnLabel}</span>
            </Link>
          )}
        </div>
        <div className="d-flex justify-content-between align-items-center text-secondary pb-5">
          <label
            htmlFor="pagination"
            className="d-flex align-items-center gap-2"
          >
            Show
            <select
              id="pagination"
              className="form-select"
              aria-label="Default select example"
            >
              {/* <option selected>10</option> */}
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
            entries
          </label>
          <div className="d-flex align-items-center gap-2">
            <label htmlFor="search" className=" form-label">
              search :
            </label>
            <input
              type="text"
              id="search"
              className="form-control"
              style={{ width: "200px" }}
            />
          </div>
        </div>

        <div className="table-container">
          <table className="table table-striped">
            <thead>
              <tr>
                {tHead.map((tHeadItem, index) => {
                  return (
                    <th key={index} scope="col">
                      {tHeadItem}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>{children}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TableWrapper;
