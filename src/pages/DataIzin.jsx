import React from "react";
import TableWrapper from "../components/TableWrapper";

function DataIzin() {
  const dataAbsensi = [
    {
      nama: "Yovan Fikri",
      izin: "Pulang Lebih Awal",
      tanggal: "2023-05-10",
      jam: "16:21:14",
      keterangan: "Sakit",
      status: "Menunggu Konfirmasi",
    },
    {
      nama: "Yovan Fikri",
      izin: "Datang Terlambat",
      tanggal: "2023-05-10",
      jam: "16:21:14",
      keterangan: "Macet",
      status: "Menunggu Konfirmasi",
    },
    {
      nama: "Yovan Fikri",
      izin: "Datang Terlambat",
      tanggal: "2023-05-10",
      jam: "16:21:14",
      keterangan: "Macet",
      status: "Menunggu Konfirmasi",
    },
    {
      nama: "Yovan Fikri",
      izin: "Datang Terlambat",
      tanggal: "2023-05-10",
      jam: "16:21:14",
      keterangan: "Macet",
      status: "Menunggu Konfirmasi",
    },
    {
      nama: "Yovan Fikri",
      izin: "Datang Terlambat",
      tanggal: "2023-05-10",
      jam: "16:21:14",
      keterangan: "Macet",
      status: "Menunggu Konfirmasi",
    },
    {
      nama: "Renate Nindya",
      izin: "Datang Terlambat",
      tanggal: "2023-05-10",
      jam: "16:21:14",
      keterangan: "Sakit",
      status: "Disetujui",
    },
  ];

  return (
    <div>
      <div style={{ marginBottom: "-30px" }} className="hero">
        <div className="container px-5 pt-5 pb-4"></div>
      </div>
      <TableWrapper
        title="Daftar Hadir Karyawan"
        btnLabel="Ubah Status"
        isBtnStatus={true}
        tHead={["No", "Nama", "Izin", "Tanggal", "Jam", "Keterangan", "Status"]}
      >
        {dataAbsensi.map((data, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{data.nama}</td>
              <td>{data.izin}</td>
              <td>{data.tanggal}</td>
              <td>{data.jam}</td>
              <td>{data.keterangan}</td>
              <td>{data.status}</td>
            </tr>
          );
        })}
      </TableWrapper>
    </div>
  );
}

export default DataIzin;
