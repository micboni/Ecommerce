import { useDispatch } from "react-redux";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { login } from "../src/store/authSlice";
import "../src/pages/css/Login.css";

export default function UserLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const location = useLocation();

  const condition = location.pathname === "/login" ? "Login" : "Register";

  const user = { name: "michele", password: "123" };

  function isAuthenticated() {
    if (username == user.name && password == user.password) {
      setError(false);
      console.log("Credenziali corrette");

      dispatch(login({ user })); //invia

      navigate("/private/dashboard");
    } else {
      console.log("Utente o Password errati");
      setPassword("");
      setUsername("");

      setError(true);

      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  }

  function usandpsw(setter, event) {
    const value = event.target.value;
    setter(value);
  }

  return (
    <div className="container-login">
      <h3>{condition}</h3>
      <div className="card-login">
        {condition === "Login" && (
          <div>{error ? <div>Credenziali sbagliate</div> : null}</div>
        )}
        <input
          type="text"
          placeholder="Username"
          className="user"
          value={username}
          onChange={(event) => usandpsw(setUsername, event)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="psw"
          value={password}
          onChange={(event) => usandpsw(setPassword, event)}
        ></input>
        <button className="button-login" onClick={isAuthenticated}>
          {condition}
        </button>
      </div>
      {location.pathname === "/login" && (
        <p>
          Non hai un account? <Link to="/register">Registrati</Link>
        </p>
      )}
    </div>
  );
}
