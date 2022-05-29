import { useState } from "react";
import books from "../books.json";
import Books from "../components/Books";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Search() {
  const [search, setSearch] = useState("");
  const [booksList, setBooksList] = useState(null);

  function setSearchHandler(event) {
    setSearch(event.target.value);
  }

  function searchBook(prop) {
    const bookList = [];
    books.map((book) => {
        console.log(book);
      if (Object.values(book).includes(prop)) {
        bookList.push(<Books key={book.id} {...book} />);
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
