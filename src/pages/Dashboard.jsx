import React from "react";
import CardInfo from "../components/CardInfo";

function Dashboard() {
  return (
    <>
      <div>
        <div className="hero">
          <div className="container px-5 pt-5 pb-3">
            <h1 className="text-white">Sistem Informasi Manajemen Karyawan</h1>
            <h2 className="mb-5 text-white-50 fs-4 mt-4">Admin Dashboard</h2>
          </div>
        </div>
        <div style={{ marginTop: "-30px" }} className="row px-5 ">
          <div className="col-md-3">
            <CardInfo
              icon="bi-people-fill"
              color="#46AAF8"
              label="Data Pegawai"
              amount={13}
            />
          </div>
          <div className="col-md-3">
            <CardInfo
              icon="bi-calendar-check-fill"
              color="#2FCE3A"
              label="Absensi Hari Ini"
              date="11 May 2023"
              amount={0}
            />
          </div>
          <div className="col-md-3">
            <CardInfo
              icon="bi-check-circle"
              color="#1771E6"
              label="Izin Menunggu Konfirmasi"
              amount={2}
            />
          </div>
          <div className="col-md-3">
            <CardInfo
              icon="bi-check-circle"
              color="#1771E6"
              label="Lembur Menunggu Konfirmasi"
              amount={1}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
