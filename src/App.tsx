import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/Header";
import { Control } from "./pages/control";
import { Settings } from "./pages/settings";
import {History} from "./pages/history"
// import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Control/>}
          />
          <Route path="/control" element={<Control/>} />
          <Route path="/history" element={<History/>} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
