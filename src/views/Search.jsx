import Books from "../components/Books";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { getDatabase, ref, get, child } from "firebase/database";

function Search() {
  const [search, setSearch] = useState("");
  const [booksList, setBooksList] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, "Libros/")).then((snapshot) => {
      setBooks(snapshot.val());
    });
  }, []);

  function setSearchHandler(event) {
    setSearch(event.target.value);
  }

  function searchBook(prop) {
    const bookList = [];
    Object.keys(books).map((key, index) => {
      console.log(Object.values(books[key]).includes(prop));
      if (Object.values(books[key]).includes(prop)) {
        bookList.push(<Books key={key} {...books[key]} />);
      }
    });
    setBooksList(bookList);
  }

  return (
    <section>
      <Header />
      <section className="search">
        <h1>Buscar por título, autor o tema:</h1>
        <input type="text" onChange={setSearchHandler} value={search} />
        <button onClick={() => searchBook(search)}>Buscar</button>
        <a href="library" className="button-green">
          <span>Toda la Biblioteca</span>
        </a>
      </section>
      <section>{booksList}</section>
      <Footer />
    </section>
  );
}

export default Search;
