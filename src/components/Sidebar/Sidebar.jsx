// src/components/Sidebar.js
import React from "react";
import profile from "../../assets/images/profile.jpg";
import SidebarNav from "./SidebarNav";
import ButtonLink from "../ButtonLink";

const Sidebar = ({ isOpen }) => {
  return (
    <nav
      id="mySidebar"
      className={`bg-white p-2 pt-4 pb-5 sidebar shadow-lg ${
        isOpen ? "sidebar-open" : "sidebar-closed"
      }`}
      style={{
        transition: "left 0.3s",
        left: isOpen ? "0" : "-288px",
        overflow: "scroll",
      }}
    >
      {/* Profile Sidebar */}
      <div className="profile-preview d-flex gap-2 px-3 pb-3 align-items-center border-bottom border-light-subtle">
        <img
          src={profile}
          alt="profile-picture"
          className="profile-picture rounded-5 border"
          style={{ width: "50px", height: "50px" }}
        />
        <div>
          <p className="text-body-tertiary mb-1">Welcome, Yovan Fikri</p>
          <p className="fw-bold profile-role text-body-secondary mb-0">
            Administrator
          </p>
        </div>
      </div>

      {/* Menu Sidebar */}
      <div className="px-2 py-3 d-grid">
        {/* <a
          href="/"
          className="d-flex align-items-center py-2 fw-bold btn btn-primary mb-2"
        >
          <i className="fs-4 bi bi-house-fill"></i>
          <span className="ms-3"> Dashboard </span>
        </a> */}
        <SidebarNav url="/" icon="bi-house-fill" label="Dashboard" />
        {/* Menu Karyawan */}
        <div className="mt-4">
          <p className="ms-4 text-uppercase fw-bold text-black-50">
            Menu Karyawan
          </p>
          <SidebarNav
            url="/data-karyawan"
            icon="bi-people-fill"
            label="Karyawan"
          />
          <SidebarNav
            url="/data-jabatan"
            icon="bi-person-plus-fill"
            label="Jabatan"
          />
          <SidebarNav
            url="/data-divisi"
            icon="bi-person-plus-fill"
            label="Divisi"
          />
        </div>

        {/* Menu Absensi */}
        <div className="mt-4">
          <p className="ms-4 text-uppercase fw-bold text-black-50">
            Menu Absensi
          </p>
          <SidebarNav
            url="/data-absensi"
            icon="bi-calendar-check-fill"
            label="Absensi"
          />
          <SidebarNav
            url="/data-izin"
            icon="bi-calendar-plus-fill"
            label="Izin"
          />
          <SidebarNav
            url="/data-lembur"
            icon="bi-calendar-plus-fill"
            label="Lembur"
          />
        </div>

        {/* Menu Penggajian */}
        <div className="mt-4">
          <p className="ms-4 text-uppercase fw-bold text-black-50">
            Menu Penggajian
          </p>
          <SidebarNav url="/data-slip-gaji" icon="bi-cash" label="Slip Gaji" />
          <SidebarNav
            url="/cetak-slip-gaji"
            icon="bi-file-earmark-break"
            label="Cetak Slip Gaji"
          />
        </div>

        {/* Menu Laporan */}
        <div className="mt-4">
          <p className="ms-4 text-uppercase fw-bold text-black-50">
            Menu Laporan
          </p>
          <SidebarNav
            url="/cetak-laporan"
            icon="bi-file-earmark-text-fill"
            label="Cetak Laporan"
          />
        </div>

        {/* Menu Admin */}
        <div className="mt-4">
          <p className="ms-4 text-uppercase fw-bold text-black-50">
            Menu Admin
          </p>
          <SidebarNav
            url="/data-pengguna"
            icon="bi-person-fill-gear"
            label="Pengguna"
          />
        </div>

        {/* Logout */}
        <div className="my-5">
          <ButtonLink icon="bi-box-arrow-right">Logout</ButtonLink>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
