import { useState } from "react";
import data from "../data.json";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function setUsernameHandler(event) {
    setUsername(event.target.value);
  }

  function setPasswordHandler(event) {
    setPassword(event.target.value);
  }

  function validUser(username, password) {
    data.map((user) => {
      if (user.username === username && user.password === password) {
        document.location.href = "library";
        return true;
      } else {
        window.alert("Usuario o contraseña incorrecta");
        return false;
      }
    });
  }

  return (
    <section className="Login">
      <form action="" method="get">
        <label htmlFor="user">User</label>
        <div>
          <input
            type="text"
            name=""
            id="user"
            className="user-input"
            maxLength="7"
            value={username}
            onChange={setUsernameHandler}
          />
        </div>
        <label htmlFor="password">Password</label>
        <div>
          <input
            type="password"
            name=""
            id="password"
            className="password-input"
            value={password}
            onChange={setPasswordHandler}
          />
        </div>
        <button type="button" onClick={() => validUser(username, password)}>
          Enter
        </button>
      </form>
    </section>
  );
}

export default Login;
