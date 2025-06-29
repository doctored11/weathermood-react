import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/Header";
import { ControlPage } from "./pages/controlPage";
import { Settings } from "./pages/settings";
import { History } from "./pages/history";
// import './index.css';

export default function App() {
  return (
    <BrowserRouter>
    
      <Header />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<ControlPage />} />
          <Route path="/control" element={<ControlPage />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
