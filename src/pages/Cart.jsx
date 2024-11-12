import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./css/Cart.css";
import { deleteFromCard } from "../store/cartSlice";

export default function Cart() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const cartItems = useSelector((state) => state.cart.items);
  const totalSum = useSelector((state) => state.cart.total);

  const dispatch = useDispatch();

  function eliminaElemento({ id }) {
    console.log("oggetto eliminato", id);
    dispatch(deleteFromCard({ id }));
  }

  if (!isAuthenticated) {
    return (
      <div className="cart-container">
        <div>Non sei loggato, per vedere il carrello devi loggarti!</div>
        <div>
          <Link to={"/login"}>Login</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="cart-container">
        <h3>Il tuo carrello</h3>
        <div className="cart-items">
          {cartItems.length > 0 ? (
            cartItems.map((product) => (
              <div key={product.id} className="prova">
                <p>{product.title}</p>
                <p>${product.description}</p>
                <button onClick={() => eliminaElemento({ id: product.id })}>
                  Rimuovi elemento
                </button>
              </div>
            ))
          ) : (
            <p>Il carrello è vuoto.</p>
          )}
        </div>
      </div>
      <div className="cart-container">
        <div className="resoconto">
          <p>
            <h3>Quantità</h3>
            {cartItems.length}
          </p>
          <p>
            <h3>Totale</h3>${(totalSum < 0 ? 0 : totalSum).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
