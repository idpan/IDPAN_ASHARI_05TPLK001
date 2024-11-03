import React from "react";
import { Link } from "react-router-dom";

function TambahDataKaryawan() {
  return (
    <div className="container pb-5 pt-3">
      <strong className="fs-5 text-body-secondary">Forms</strong>
      <nav className="d-inline-block ms-4" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <i className="bi bi-house-door"></i>
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/data-karyawan">Karyawan</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Tambah Data Karyawan
          </li>
        </ol>
      </nav>
      <div className="container-fluid mt-3 p-3 pb-5 shadow">
        <h1 className="fs-4 text-secondary border-bottom mb-4 pb-2">
          Tambah Data Karyawan
        </h1>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nama Lengkap
            </label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Jenis Kelamin
            </label>
            <select
              id="gender"
              className="form-select"
              aria-label="Default select example"
            >
              <option>--</option>
              <option value="male">Laki - laki</option>
              <option value="female">Perempuan</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Nomor HP
            </label>
            <input type="text" className="form-control" id="phoneNumber" />
          </div>
          <div className="mb-3">
            <label htmlFor="address">Alamat</label>
            <textarea
              className="form-control"
              id="address"
              style={{ height: "150px" }}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" />
          </div>

          <div className="mb-3">
            <label htmlFor="jabatan" className="form-label">
              Jabatan
            </label>
            <select
              id="jabatan"
              className="form-select"
              aria-label="Default select example"
            >
              <option>--</option>
              <option value="JAB001">Kepala Bagian</option>
              <option value="JAB002">Kepala Sub Bagian</option>
              <option value="JAB003">Staff</option>
              <option value="JAB004">Warek I</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="divisi" className="form-label">
              Divisi
            </label>
            <select
              id="divisi"
              className="form-select"
              aria-label="Default select example"
            >
              <option>--</option>
              <option value="DIV001">Umum</option>
              <option value="DIV002">BAUK</option>
              <option value="DIV003">BAA</option>
              <option value="DIV004">IT</option>
              <option value="DIV005">Cleaning Service</option>
              <option value="DIV006">OB</option>
            </select>
          </div>

          <button type="submit" className="btn btn-success">
            <i className="bi bi-floppy-fill"></i>
            <span className="ms-2">Simpan</span>
          </button>
          <button type="submit" className="ms-3 btn btn-danger">
            <i className="bi bi-arrow-counterclockwise"></i>
            <span className="ms-2">Batal</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default TambahDataKaryawan;
