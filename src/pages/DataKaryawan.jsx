import React from "react";
import { Link } from "react-router-dom";
import TableWrapper from "../components/TableWrapper";

function DataKaryawan() {
  const dataKaryawan = [
    {
      kode: "K001",
      nama: "Yovan Fikri",
      email: "yf@gmail.com",
      alamat: "Jl. Percetakan Negara No.45, Gang J, Rt 001/Rw 09 Cempaka Putih",
      jabatan: "Staff",
    },
    {
      kode: "K002",
      nama: "Renate Nindya",
      email: "renatenindya@gmail.com",
      alamat: "Solo",
      jabatan: "Kepala Bagian",
    },
    {
      kode: "K003",
      nama: "Nurachman",
      email: "nurachman@gmail.com",
      alamat: "Parung",
      jabatan: "",
    },
    {
      kode: "K004",
      nama: "Tatang",
      email: "tatang@gmail.com",
      alamat: "Jalan kimia, Parung",
      jabatan: "Staff",
    },
    {
      kode: "K005",
      nama: "Ucup",
      email: "ucup@gmail.com",
      alamat: "Depok",
      jabatan: "Kepala Bagian",
    },
    {
      kode: "K006",
      nama: "Bagus",
      email: "bagus@gmail.com",
      alamat: "Bogor",
      jabatan: "Staff",
    },
    {
      kode: "K007",
      nama: "Ineke",
      email: "ineke@gmail.com",
      alamat: "Jl. Percetakan Negara No.45, Gang J, Rt 001/Rw 09 Cempaka Putih",
      jabatan: "Staff",
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
        tHead={["No", "Kode", "Nama", "Email", "Alamat", "Jabatan", "Aksi"]}
      >
        {dataKaryawan.map((data, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{data.kode}</td>
              <td>{data.nama}</td>
              <td>{data.email}</td>
              <td>{data.alamat}</td>
              <td>{data.jabatan}</td>
              <td style={{ width: "100px" }}>
                <div className="row ">
                  <div className="col ">
                    <i className=" text-primary bi bi-eye me-4"></i>
                    <i className="text-primary bi bi-check2-square"></i>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <i className="text-primary bi bi-cash me-4"></i>
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

export default DataKaryawan;
