import React from "react";
import TableWrapper from "../components/TableWrapper";

function DataLembur() {
  const dataAbsensi = [
    {
      nama: "Yovan Fikri",
      tanggal: "2023-05-10",
      jam: "16:21:14 | 17:00:00",
      keterangan: "Lagi Rajin Aja",
      status: "Menunggu Konfirmasi",
    },
    {
      nama: "Yovan Fikri",
      tanggal: "2023-05-10",
      jam: "16:21:14 | 17:00:00",
      keterangan: "Lagi Rajin Aja",
      status: "Disetujui",
    },
    {
      nama: "Yovan Fikri",
      tanggal: "2023-05-10",
      jam: "16:21:14 | 17:00:00",
      keterangan: "Lagi Rajin Aja",
      status: "Disetujui",
    },
    {
      nama: "Yovan Fikri",
      tanggal: "2023-05-10",
      jam: "16:21:14 | 17:00:00",
      keterangan: "Lagi Rajin Aja",
      status: "Disetujui",
    },
    {
      nama: "Yovan Fikri",
      tanggal: "2023-05-10",
      jam: "16:21:14 | 17:00:00",
      keterangan: "Lagi Rajin Aja",
      status: "Menunggu Konfirmasi",
    },
    {
      nama: "Yovan Fikri",
      tanggal: "2023-05-10",
      jam: "16:21:14 | 17:00:00",
      keterangan: "Lagi Rajin Aja",
      status: "Menunggu Konfirmasi",
    },
    {
      nama: "Yovan Fikri",
      tanggal: "2023-05-10",
      jam: "16:21:14 | 17:00:00",
      keterangan: "Lagi Rajin Aja",
      status: "Menunggu Konfirmasi",
    },
    {
      nama: "Yovan Fikri",
      tanggal: "2023-05-10",
      jam: "16:21:14 | 17:00:00",
      keterangan: "Lagi Rajin Aja",
      status: "Menunggu Konfirmasi",
    },
    {
      nama: "Yovan Fikri",
      tanggal: "2023-05-10",
      jam: "16:21:14 | 17:00:00",
      keterangan: "Lagi Rajin Aja",
      status: "Menunggu Konfirmasi",
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

export default DataLembur;
