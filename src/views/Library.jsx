import Header from "../components/Header";
import Books from "../components/Books";
import books from '../books.json';
import "../App.css";

function Library() {
  const bookList = books.map(book => {
    return <Books key={book.id} {...book}/>;
  });
  return (
    <div>
      <Header />
      <section>{bookList}</section>
    </div>
  );
}

export default Library;