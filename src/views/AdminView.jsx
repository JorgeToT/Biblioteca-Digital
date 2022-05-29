import Header from "../components/Header";
import Footer from "../components/Footer";
import EditBooks from "../components/EditBooks";
import Books from "../components/Books";
import "../App.css";
import { useState, useEffect } from "react";
import { getDatabase, ref, get, child } from "firebase/database";

function AdminView() {

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
    <section>
      <Header />
      <h1 className="textAdmin">Admin</h1>
      <EditBooks />
      <section>{bookList}</section>
      <Footer />
    </section>
  );
}

export default AdminView;
