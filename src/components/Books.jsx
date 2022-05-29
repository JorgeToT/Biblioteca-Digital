function Books(props) {
  return (
    <div className="booksData">
      <a href={props.download}>
        <img src={props.img} alt="" />
      </a>
      <div>
        <h2>{props.title}</h2>
        <p>- {props.author}</p>
        <p>Género/Materia: {props.materia}</p>
        <p>Id: {props.id}</p>
        <p>Click a la imagen para descargar</p>
      </div>
    </div>
  );
}

export default Books;
