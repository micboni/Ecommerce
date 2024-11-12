import { useParams, useNavigate } from "react-router-dom";

const productData = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Smartphone", price: 699 },
  { id: 3, name: "Tablet", price: 499 },
];

export default function ProductDetail() {
  const { id } = useParams(); // Ottiene l'ID del prodotto dall'URL
  const navigate = useNavigate(); // Per navigare indietro alla lista
  const product = productData.find((p) => p.id === parseInt(id)); // Trova il prodotto corrispondente all'ID

  if (!product) {
    return <div>Prodotto non trovato</div>; // Mostra questo messaggio se l'ID non corrisponde a nessun prodotto
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Prezzo: ${product.price}</p>
      <button onClick={() => navigate("/products")}>Torna alla lista</button>
    </div>
  );
}
