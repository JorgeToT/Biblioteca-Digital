import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

function Test(props) {
  console.log(props);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div className="pdf">
      <div>
        <p>
          Página {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
        <a
          href={require("../components/assets/Libros/" + props.id + ".pdf")}
          download
        >
          Click para descargar
        </a>
      </div>
      <Document
        file={require("../components/assets/Libros/" + props.id + ".pdf")}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
}

export default Test;
