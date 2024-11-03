import React from "react";
import TableWrapper from "../components/TableWrapper";

function DataDivisi() {
  const dataJabatan = [
    {
      kode: "DIV001",
      divisi: "Umum",
    },
    {
      kode: "DIV002",
      divisi: "BAUK",
    },
    {
      kode: "DIV003",
      divisi: "BAA",
    },
    {
      kode: "DIV004",
      divisi: "IT",
    },
    {
      kode: "DIV005",
      divisi: "Cleaning Service",
    },
    {
      kode: "DIV006",
      divisi: "OB",
    },
  ];

  return (
    <div>
      <div style={{ marginBottom: "-30px" }} className="hero">
        <div className="container px-5 pt-3 pb-3">
          <h2 className="mb-5 text-white fs-4 mt-4">Dashboard</h2>
        </div>
      </div>
      <TableWrapper
        title="Data Divisi"
        btnLabel="Tambah Divisi"
        tHead={["No", "Kode Divisi", "Nama Divisi", "Aksi"]}
      >
        {dataJabatan.map((data, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{data.kode}</td>
              <td>{data.divisi}</td>

              <td style={{ minWidth: "100px" }}>
                <div className="row ">
                  <div className="col ">
                    <i className="text-primary bi bi-check2-square me-4"></i>
                    <i className="text-danger bi bi-x-lg"></i>
                  </div>
                </div>
              </td>
            </tr>
          );
        })}
      </TableWrapper>
    </div>
  );
}

export default DataDivisi;
