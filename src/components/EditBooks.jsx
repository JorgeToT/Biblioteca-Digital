import { useState } from "react";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCO9B3Xi5EuE8rfzxMYdELM_49v6MkeloI",
  authDomain: "biblioteca-digital-1dd03.firebaseapp.com",
  databaseURL: "https://biblioteca-digital-1dd03-default-rtdb.firebaseio.com",
  projectId: "biblioteca-digital-1dd03",
  storageBucket: "biblioteca-digital-1dd03.appspot.com",
  messagingSenderId: "494704082607",
  appId: "1:494704082607:web:43e9f86a5c8907dac51e5a",
  measurementId: "G-TCQKGRQHKL",
};

const app = initializeApp(firebaseConfig);

import { getDatabase, ref, set, get, child, remove } from "firebase/database";

function EditBooks() {
  const [edit, setEdit] = useState({
    id: "",
    title: "",
    img: "",
    materia: "",
    autor: "",
    download: "",
  });

  function InsertData(param) {
    const db = getDatabase();
    set(ref(db, "Libros/" + param.id), {
      id: param.id,
      title: param.title,
      img: param.img,
      materia: param.materia,
      autor: param.autor,
      download: param.download,
    })
      .then(() => {
        alert("Libro agregado");
      })
      .catch((error) => {
        alert(error);
      });
  }

  function SelectData(param) {
    const dbRef = ref(getDatabase());
    get(child(dbRef, "Libros/" + param.id)).then((snapshot) => {
      setEdit({
        id: snapshot.val().id,
        title: snapshot.val().title,
        img: snapshot.val().img,
        materia: snapshot.val().materia,
        autor: snapshot.val().autor,
        download: snapshot.val().download,
      });
    });
  }

  function DeleteData() {
    const db = getDatabase();
    remove(ref(db, "Libros/" + edit.id))
      .then(() => {
        alert("Libro eliminado");
      })
      .catch((error) => {
        alert(error);
      });
  }

  function setEditHandler(event) {
    return setEdit({
      ...edit,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <section>
      <div className="edit--listBook">
        Id:
        <input
          type="text"
          value={edit.id}
          onChange={setEditHandler}
          name="id"
        />
        Título:
        <input
          type="text"
          value={edit.title}
          onChange={setEditHandler}
          name="title"
        />
        Link de portada:
        <input
          type="text"
          value={edit.img}
          onChange={setEditHandler}
          name="img"
        />
        Materia o género:
        <input
          type="text"
          value={edit.materia}
          onChange={setEditHandler}
          name="materia"
        />
        Autor:
        <input
          type="text"
          value={edit.autor}
          onChange={setEditHandler}
          name="autor"
        />
        Link de descarga:
        <input
          type="text"
          value={edit.download}
          onChange={setEditHandler}
          name="download"
        />
        <div className="edit--buttons">
          <button
            onClick={() => {
              InsertData(edit);
            }}
          >
            Guardar
          </button>
          <button onClick={() => SelectData(edit)}>Seleccionar</button>
          <button onClick={() => DeleteData(edit)}>Borra Registro</button>
          <button
            onClick={() =>
              setEdit({
                id: "",
                title: "",
                img: "",
                materia: "",
                autor: "",
                download: "",
              })
            }
          >
            Limpiar Casillas
          </button>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default EditBooks;
