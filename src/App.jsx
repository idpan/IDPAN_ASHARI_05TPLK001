// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
import DataKaryawan from "./pages/DataKaryawan";
import DataJabatan from "./pages/DataJabatan";
import DataDivisi from "./pages/DataDivisi";
import NotAvailable from "./pages/NotAvailable";
import "./App.css";
import DataAbsensi from "./pages/DataAbsensi";
import DataIzin from "./pages/DataIzin";
import DataLembur from "./pages/DataLembur";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="App">
        <Header toggleSidebar={toggleSidebar} />
        <div>
          <Sidebar isOpen={isSidebarOpen} />
          <main className={`content ${isSidebarOpen ? "content-shift" : ""}`}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/data-karyawan" element={<DataKaryawan />} />
              <Route path="/data-jabatan" element={<DataJabatan />} />
              <Route path="/data-divisi" element={<DataDivisi />} />
              <Route path="/data-absensi" element={<DataAbsensi />} />
              <Route path="/data-izin" element={<DataIzin />} />
              <Route path="/data-lembur" element={<DataLembur />} />
              <Route path="*" element={<NotAvailable />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
