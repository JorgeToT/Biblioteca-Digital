import Header from "../components/Header";
import Books from "../components/Books";
import books from '../books.json';
import Footer from "../components/Footer";
import "../App.css";

function Library() {
  const bookList = books.map(book => {
    return <Books key={book.id} {...book}/>;
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