import React from "react";
import Card from "../../components/Card";
import "./css/Home.css";
import products from "../data/prodotti";

export default function Home() {
  return (
    <div className="container-home">
      {products.map((product) => (
        <Card
          key={product.id}
          imageURL={product.imageURL}
          title={product.title}
          description={product.description}
        />
      ))}
    </div>
  );
}
