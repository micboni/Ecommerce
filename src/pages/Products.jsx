import { Link } from "react-router-dom";

const productData = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Smartphone", price: 699 },
  { id: 3, name: "Tablet", price: 499 },
];

export default function Products() {
  return (
    <div>
      <h1>lista prodotti</h1>
      <ul>
        {productData.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
