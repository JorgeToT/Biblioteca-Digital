import Header from "../components/Header";
import "../App.css";
import ReadPDF from "../components/ReadPDF";

function ViewRead() {
  const id = {"id": window.location.href[window.location.href.length - 1]};
  return (
    <div>
      <Header />
      <section className="pdf-viz">
        <a href="library" className="back-to-books">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-book"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
            <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
            <line x1="3" y1="6" x2="3" y2="19" />
            <line x1="12" y1="6" x2="12" y2="19" />
            <line x1="21" y1="6" x2="21" y2="19" />
          </svg>
          Volver a la librería
        </a>
        <ReadPDF {... id}/>
      </section>
    </div>
  );
}

export default ViewRead;
