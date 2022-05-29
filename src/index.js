import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./views/Login";
import Library from "./views/Library";
import Search from "./views/Search";
import AdminView from "./views/AdminView";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login  />} />
      <Route path="library" element={<Library />} />
      <Route path="search" element={<Search />} />
      <Route path="admin" element={<AdminView />} />
    </Routes>
  </BrowserRouter>
);
