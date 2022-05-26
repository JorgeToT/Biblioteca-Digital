function Books(props) {
  return (
    <div className="booksData">
      <a href={props.id}>
        <img src={props.img} alt="" />
      </a>
      <div>
        <h2>{props.title}</h2>
        <p>- {props.author}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Books;
