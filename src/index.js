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
  return <Route key={book.id} path={"/" + book.id} element={<ReadPDF />} />;
});
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/library" element={<Library />} />
      {bookViews}
    </Routes>
  </BrowserRouter>
);
