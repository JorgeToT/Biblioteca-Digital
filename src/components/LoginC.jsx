import { useState } from "react";
import data from "../data.json";

function LoginC() {
  const [nombre, setNombre] = useState("");
  const [cuenta, setCuenta] = useState("");
  const [carrera, setCarrera] = useState("");
  const [semestre, setSemestre] = useState("");

  function setNombreHandler(event) {
    setNombre(event.target.value);
  }

  function setCuentaHandler(event) {
    setCuenta(event.target.value);
  }

  function setCarreraHandler(event) {
    setCarrera(event.target.value);
  }

  function setSemestreHandler(event) {
    setSemestre(event.target.value);
  }

  function validUser(nombre, cuenta, carrera, semestre) {
    data.map((user) => {
      if (
        user.nombre === nombre &&
        user.cuenta === cuenta &&
        user.carrera === carrera &&
        user.semestre === semestre
      ) {
        document.location.href = user.vista;
        return true;
      }
    });
  }

  return (
    <section className="Login">
      <form action="" method="get">
        <label htmlFor="nombre">Nombre Completo:</label>
        <div>
          <input
            type="text"
            name=""
            id="nombre"
            value={nombre}
            onChange={setNombreHandler}
          />
        </div>
        <label htmlFor="password">Número de cuenta:</label>
        <div>
          <input
            type="text"
            name=""
            id="cuenta"
            maxLength="7"
            value={cuenta}
            onChange={setCuentaHandler}
          />
        </div>
        <label htmlFor="nombre">Carrera:</label>
        <div>
          <select
            id="carrera"
            name="carrera"
            value={carrera}
            onChange={setCarreraHandler}
          >
            <option value=""></option>
            <option value="A">Actuaría</option>
            <option value="REI">Relaciones Economicas Internacionales</option>
            <option value="NIB">Negocios Internacionales Bilingüe</option>
            <option value="E">Economía</option>
          </select>
        </div>
        <label htmlFor="semestre">Semestre:</label>
        <div>
          <select
            id="semestre"
            name="semestre"
            value={semestre}
            onChange={setSemestreHandler}
          >
            <option value=""></option>
            <option value="1">1°</option>
            <option value="2">2°</option>
            <option value="3">3°</option>
            <option value="4">4°</option>
            <option value="5">5°</option>
            <option value="6">6°</option>
            <option value="7">7°</option>
            <option value="8">8°</option>
            <option value="9">9°</option>
            <option value="10">10°</option>
          </select>
        </div>
        <button
          type="button"
          onClick={() => validUser(nombre, cuenta, carrera, semestre)}
        >
          Iniciar Sesión
        </button>
      </form>
    </section>
  );
}

export default LoginC;
