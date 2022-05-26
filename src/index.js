import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Library from "./views/Library";
import ReadPDF from "./views/ViewRead";
import books from "../src/books.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
const bookViews = books.map((book) => {
  return <Route key={book.id} path={"/Biblioteca-Digital/" + book.id} element={<ReadPDF />} />;
});
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/Biblioteca-Digital" element={<App />} />
      <Route path="/Biblioteca-Digital/library" element={<Library />} />
      {bookViews}
    </Routes>
  </BrowserRouter>
);
