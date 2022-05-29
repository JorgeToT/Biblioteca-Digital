import Header from "../components/Header";
import Books from "../components/Books";
import Footer from "../components/Footer";
import "../App.css";
import { useState, useEffect } from "react";
import { getDatabase, ref, get, child } from "firebase/database";

function Library() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, "Libros/")).then((snapshot) => {
      setBooks(snapshot.val());
    });
  }, []);

  const bookList = Object.keys(books).map((key, index) => {
    return <Books key={key} {...books[key]} />;
  });
  
  return (
    <div>
      <Header />
      <a href="search" className="button-green">
        <span>Ir al buscador</span>
      </a>
      <section>{bookList}</section>
      <Footer />
    </div>
  );
}

export default Library;
