import React from "react";
import TableWrapper from "../components/TableWrapper";

function DataAbsensi() {
  const dataAbsensi = [
    {
      nama: "Achmad Febry",
      tanggal: "2023-05-10",
      lokasi: "Kampus Kimia",
      in: "16:21:14",
      out: "18:09:22",
    },
    {
      nama: "Yovan Fikri",
      tanggal: "2023-05-10",
      lokasi: "Unpam Viktor",
      in: "16:21:14",
      out: "18:09:22",
    },
    {
      nama: "Yovan Fikri",
      tanggal: "2023-05-10",
      lokasi: "Unpam Viktor",
      in: "16:21:14",
      out: "18:09:22",
    },
    {
      nama: "Yovan Fikri",
      tanggal: "2023-05-10",
      lokasi: "Kampus Kimia",
      in: "16:21:14",
      out: "18:09:22",
    },
    {
      nama: "Yovan Fikri",
      tanggal: "2023-05-10",
      lokasi: "Unpam Viktor",
      in: "16:21:14",
      out: "18:09:22",
    },
    {
      nama: "Renate Nindya",
      tanggal: "2023-05-10",
      lokasi: "Kampus Kimia",
      in: "16:21:14",
      out: "18:09:22",
    },
  ];

  return (
    <div>
      <div style={{ marginBottom: "-30px" }} className="hero">
        <div className="container px-5 pt-5 pb-4"></div>
      </div>
      <TableWrapper
        title="Daftar Hadir Karyawan"
        tHead={[
          "No",
          "Nama Karyawan",
          "Tanggal",
          "Lokasi Absen",
          "Jam Masuk",
          "Jam Keluar",
          "Aksi",
        ]}
      >
        {dataAbsensi.map((data, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{data.nama}</td>
              <td>{data.tanggal}</td>
              <td>{data.lokasi}</td>
              <td>{data.in}</td>
              <td>{data.out}</td>

              <td style={{ minWidth: "100px" }}>
                <div className="row ">
                  <div className="col ">
                    <i className="text-primary bi bi-eye"></i>
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

export default DataAbsensi;
