// src/components/MainContent.js
import React from "react";

const MainContent = () => {
  return (
    <main className="content">
      <div className="hero">
        <div className="container px-5 pt-5 text-white pb-5">
          <h1 className="text-capitalize mb-4">
            Sistem Informasi Manajemen Karyawan
          </h1>
          <h2 className="fs-4 text-capitalize text-white-50 mb-3">
            Admin Dashboard
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="row" style={{ marginTop: "-30px" }}>
          {/* Card Data Pegawai */}
          <div className="col-lg-3">
            <div className="bg-white d-flex gap-3 py-4 px-3 align-items-center py-3 rounded-2">
              <div className="bg-primary bg-opacity-75 px-4 py-3 rounded-2">
                <i className="fs-1 text-white bi bi-people-fill"></i>
              </div>
              <div>
                <h5 className="m-0 fs-5 text-body-tertiary">Data Pegawai</h5>
                <p className="m-0 fs-3 text-body-secondary">13</p>
              </div>
            </div>
          </div>

          {/* Card Absensi Hari Ini */}
          <div className="col-lg-3">
            <div className="bg-white d-flex gap-3 py-4 px-3 align-items-center py-3 rounded-2">
              <div className="bg-success px-4 py-3 rounded-2">
                <i className="fs-1 text-white bi bi-calendar-check-fill"></i>
              </div>
              <div>
                <h5 className="m-0 fs-5 text-body-tertiary">
                  Absensi Hari Ini
                </h5>
                <h5 className="m-0 fs-5 text-body-tertiary">11 May 2023</h5>
                <p className="m-0 fs-3 text-body-secondary">0</p>
              </div>
            </div>
          </div>

          {/* Card Izin Menunggu Konfirmasi */}
          <div className="col-lg-3">
            <div className="bg-white d-flex gap-3 py-4 px-3 align-items-center py-3 rounded-2">
              <div className="bg-primary px-4 py-3 rounded-2">
                <i className="fs-1 text-white bi bi-check-circle"></i>
              </div>
              <div>
                <h5 className="m-0 fs-5 text-body-tertiary">
                  Izin Menunggu Konfirmasi
                </h5>
                <p className="m-0 fs-3 text-body-secondary">2</p>
              </div>
            </div>
          </div>

          {/* Card Lembur Menunggu Konfirmasi */}
          <div className="col-lg-3">
            <div className="bg-white d-flex gap-3 py-4 px-3 align-items-center py-3 rounded-2">
              <div className="bg-primary px-4 py-3 rounded-2">
                <i className="fs-1 text-white bi bi-check-circle"></i>
              </div>
              <div>
                <h5 className="m-0 fs-5 text-body-tertiary">
                  Lembur Menunggu Konfirmasi
                </h5>
                <p className="m-0 fs-3 text-body-secondary">1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
