import React from "react";
import TableWrapper from "../components/TableWrapper";

function DataJabatan() {
  const dataJabatan = [
    {
      kode: "JAB001",
      jabatan: "Kepala Bagian",
    },
    {
      kode: "JAB002",
      jabatan: "Kepala Sub Bagian",
    },
    {
      kode: "JAB003",
      jabatan: "Staff",
    },
    {
      kode: "JAB004",
      jabatan: "Warek I",
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
        title="Data Karyawan"
        btnLabel="Tambah Karyawan"
        tHead={["No", "Kode Jabatan", "Jabatan", "Aksi"]}
      >
        {dataJabatan.map((data, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{data.kode}</td>
              <td>{data.jabatan}</td>

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

export default DataJabatan;
