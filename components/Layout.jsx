import "../src/pages/css/Home.css";
import { Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();

  function about() {
    return navigate("/about");
  }

  function products() {
    return navigate("/products");
  }

  function login() {
    return navigate("/login");
  }

  function home() {
    return navigate("/");
  }

  function cart() {
    return navigate("/cart");
  }

  //outlet permette che i tutti i componenti figli di layout vengano renderizzati
  return (
    <div>
      <div className="header">
        <div className="sez1">
          <button onClick={about}>About</button>
          <button onClick={products}>Prodotti</button>
          <button onClick={cart}>Cart</button>
          <button onClick={home}>Home</button>
        </div>
        <div className="sez2">
          <button onClick={login}>Login</button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
